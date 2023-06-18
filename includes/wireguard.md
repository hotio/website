## WireGuard VPN support

There needs to be a file `wg0.conf` located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to start.

The part with `net.ipv6.conf.all.disable_ipv6=0` is optional or you can set it to `1` if there is no need for ipv6 and you want to disable ipv6, no attempt will be made in that case to set ip6tables rules and can prevent an error if the module `ip6table_filter` isn't loaded on the host. The WireGuard configuration should not have any ipv6 related stuff when ipv6 is disabled, otherwise creating the interface will fail. If your vpn provider supports ipv6 and you keep it enabled, you'll have full ipv6 connectivity over the vpn connection (confirmed with Mullvad). If for any reason there's a failure trying to setup ip6tables rules, you'll probably need to do `sudo modprobe ip6table_filter` on the host, this will mostly happen on systems that have ipv6 completely disabled.

The environment variable `VPN_LAN_NETWORK` can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the webui or other additional ports (see below).

If you need to expose additional ports you can use `VPN_ADDITIONAL_PORTS`, for example `VPN_ADDITIONAL_PORTS=7878/tcp,9117/tcp`. Every port in this list will be blocked on the vpn interface, so that there's no risk that they might be exposed to the world via the vpn (mostly there in case your vpn provider screws up and piece of mind). Why would you need this? Wanting to route traffic from other containers over the vpn is probably the most used scenario.

## wg0.conf example

This is an example of how your `wg0.conf` should look like. In case you have no need for ipv6 connectivity, make sure that you've got it disabled with `net.ipv6.conf.all.disable_ipv6=1` and your `wg0.conf` does not contain any ipv6 stuff. Also make sure you remove any `PreUp, PostUp, PreDown, PostDown` stuff that your provider might have added (unless you know what it does). When using Mullvad, this means that you shouldn't enable the Kill Switch option.

```text
[Interface]
PrivateKey = supersecretprivatekey
Address = xx.xx.xxx.xxx/32
DNS = 1.1.1.1

[Peer]
PublicKey = publickey
AllowedIPs = 0.0.0.0/0
Endpoint = xxx.x.xxx.x:51820
```

!!! warning "resolv.conf error message"

    If you are seeing an error message like `mv: cannot move '/etc/resolv.conf.173.openresolv' to '/etc/resolv.conf': Resource busy`. Remove the `DNS = 1.1.1.1` from your `wg0.conf` file and set the dns server using the docker cli argument `--dns 1.1.1.1` or the equivalent for compose.
