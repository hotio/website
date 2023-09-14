
This image includes `wireguard-go`, the Go implementation of WireGuard which runs in userspace. Systems like Synology, Qnap or others with missing kernel modules can make use of this to establish a WireGuard VPN connection.

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
