---
hide:
  - toc
---

All images (except `hotio/mergerfs`) come with WireGuard VPN support built-in. The cli/compose examples, are additional to the app configs.

=== "cli"

    ```shell
    docker run --rm \
        -e VPN_ENABLED="true" \
        -e VPN_PROVIDER="generic" \
        -e VPN_LAN_NETWORK="192.168.1.0/24" \
        -e VPN_CONF="wg0" \
        -e VPN_ADDITIONAL_PORTS="" \
        -e PRIVOXY_ENABLED="false" \
        --cap-add=NET_ADMIN \
        --dns 1.1.1.1 \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=1" \
        ...
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      app:
        environment:
          - VPN_ENABLED=true
          - VPN_PROVIDER=generic
          - VPN_LAN_NETWORK=192.168.1.0/24
          - VPN_CONF=wg0
          - VPN_ADDITIONAL_PORTS
          - PRIVOXY_ENABLED=false
        cap_add:
          - NET_ADMIN
        dns:
          - 1.1.1.1
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=1
        ...
    ```

There needs to be a file `wg0.conf` located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to start.

With `net.ipv6.conf.all.disable_ipv6=1` you can enable ipv6 support by setting the value to `0`. Leave ipv6 disabled and remove all references to it in your `wg0.conf` file to keep things simple, but keep in mind that the option is there if you need it.

Those who use ProtonVPN and would like to have port forwarding support, should set the var `VPN_PROVIDER` to `proton`. The forwarded port will be automatically set in the torrent client.

The environment variable `VPN_LAN_NETWORK` can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the webui or other additional ports (see below). If for example you were to pick `192.168.0.0/24`, every device with an ip in the range `192.168.0.0 - 192.168.0.255` on your LAN is allowed access to the webui.

If you need to expose additional ports you can use `VPN_ADDITIONAL_PORTS`, for example `VPN_ADDITIONAL_PORTS=7878/tcp,9117/tcp`. Every port in this list will be blocked on the vpn interface, so that there's no risk that they might be exposed to the world via the vpn (mostly there in case your vpn provider screws up and piece of mind). Why would you need this? Wanting to route traffic from other containers over the vpn is probably the most used scenario.

This is an example of how your `wg0.conf` file should look like. If there's a lot of extra stuff, remove it unless you know what it's there for.

```text
[Interface]
PrivateKey = supersecretprivatekey
Address = xx.xx.xxx.xxx/32

[Peer]
PublicKey = publickey
AllowedIPs = 0.0.0.0/0
Endpoint = xxx.x.xxx.x:51820
```

!!! warning "resolv.conf error message"

    If you are seeing an error message like `mv: cannot move '/etc/resolv.conf.173.openresolv' to '/etc/resolv.conf': Resource busy`. Remove the `DNS = 1.1.1.1` from your `wg0.conf` file and set the dns server using the docker cli argument `--dns 1.1.1.1` or the equivalent for compose. This should be done if you were following past instructions.

## WireGuard Go (Synology and QNAP)

This image includes `wireguard-go`, the Go implementation of WireGuard which runs in userspace. Systems like Synology, Qnap or others with missing kernel modules can make use of this to establish a WireGuard VPN connection.

=== "cli"

    ```shell
    docker run --rm \
        -e VPN_ENABLED="true" \
        -e VPN_PROVIDER="generic" \
        -e VPN_LAN_NETWORK="192.168.1.0/24" \
        -e VPN_CONF="wg0" \
        -e VPN_ADDITIONAL_PORTS="" \
        -e PRIVOXY_ENABLED="false" \
        --cap-add=NET_ADMIN \
        --dns 1.1.1.1 \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=1" \
        --device /dev/net/tun:/dev/net/tun \
        ...
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      app:
        environment:
          - VPN_ENABLED=true
          - VPN_PROVIDER=generic
          - VPN_LAN_NETWORK=192.168.1.0/24
          - VPN_CONF=wg0
          - VPN_ADDITIONAL_PORTS
          - PRIVOXY_ENABLED=false
        cap_add:
          - NET_ADMIN
        dns:
          - 1.1.1.1
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=1
        devices:
          - /dev/net/tun:/dev/net/tun
        ...
    ```

This is an example of how your `wg0.conf` file should look like. If there's a lot of extra stuff, remove it unless you know what it's there for. Don't forget to add `PreUp` and adjust `ÀllowedIPs`.

```text
[Interface]
PrivateKey = supersecretprivatekey
Address = xx.xx.xxx.xxx/32
PreUp = bash /config/wireguard/preup.sh

[Peer]
PublicKey = publickey
AllowedIPs = 0.0.0.0/1,128.0.0.0/1
Endpoint = xxx.x.xxx.x:51820
```

The `preup.sh` script stored in `/config/wireguard/preup.sh`.

```shell
#!/bin/bash
wgserver=$(grep Endpoint "${CONFIG_DIR}/wireguard/${VPN_CONF}.conf" | awk '{print $3}')
gateway=$(ip -o -4 route show to default | awk '{print $3}')

ip -4 route add "${wgserver%:*}" via "${gateway}" dev eth0
```

It's most likely that the device `/dev/net/tun` does not exist, have a read [here](https://memoryleak.dev/post/fix-tun-tap-not-available-on-a-synology-nas/){: target=_blank rel="noopener noreferrer" } for instructions on checking and adding the device.

It basically comes down to these few shell commands (tested with DSM 7.1.1-42962 Update 6):

```shell
sudo mkdir /dev/net
sudo mknod /dev/net/tun c 10 200
sudo chmod 600 /dev/net/tun
```
