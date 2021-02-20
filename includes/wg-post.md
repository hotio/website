There needs to be a file `wg0.conf` located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to start.

The part with `net.ipv6.conf.all.disable_ipv6=0` can be removed or set to `1` if there is no need for ipv6, no attempt will be made in that case to set ip6tables rules and can prevent an error if the module `ip6table_filter` isn't loaded on the host. The WireGuard configuration should not have any ipv6 related stuff when ipv6 is disabled, otherwise creating the interface will fail. If your vpn provider supports ipv6 and you keep it enabled, you'll have full ipv6 connectivity over the vpn connection (confirmed with Mullvad). If for any reason there's a failure trying to setup ip6tables rules, you'll probably need to do `sudo modprobe ip6table_filter` on the host, this will mostly happen on systems that have ipv6 completely disabled.

The environment variable `VPN_LAN_NETWORK`can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the qBittorrent webui.

If you need to expose additional ports you can use `VPN_ADDITIONAL_PORTS`, for example `VPN_ADDITIONAL_PORTS=7878/tcp,9117/tcp`. Every port in this list will be blocked on the vpn interface, so that there's no risk that they might be exposed to the world via the vpn (mostly there in case your vpn provider screws up and piece of mind). Why would you need this? Wanting to route traffic from other containers over the vpn is probably the most used scenario.

## wg0.conf example

This is an example of how your `wg0.conf` could look like.

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

## TorGuard instructions

While Mullvad is pretty straightforward to setup by using the `wg0.conf` example from above, TorGuard is a bit more complex.

Our `wg0.conf` should look something like this:

```text
# TorGuard WireGuard Config
[Interface]
PrivateKey = secretprivatekey
ListenPort = 51820
DNS = 1.1.1.1
Address = xx.xx.xxx.xx/24
PreUp = bash /config/wireguard/torguard.sh

[Peer]
PublicKey = publickey
AllowedIPs = 0.0.0.0/0
Endpoint = xx.xxx.xx.xxx:1443
PersistentKeepalive = 25
```

Pay attention to `PreUp = bash /config/wireguard/torguard.sh` in our config. That command will execute the below script that you should create in `/config/wireguard/torguard.sh`, this script will get executed just before starting WireGuard.

```shell
#!/usr/bin/bash
pubkey=$(grep PrivateKey "${CONFIG_DIR}/wireguard/wg0.conf" | awk '{print $3}' | wg pubkey)
wgserver=$(grep Endpoint "${CONFIG_DIR}/wireguard/wg0.conf" | awk '{print $3}')
curl -ksG -u "${TORGUARD_USER}":"${TORGUARD_PASS}" --data-urlencode "public-key=${pubkey}" "https://${wgserver}/api/v1/setup"
```

You will also have to add the additional environment variables `TORGUARD_USER` and `TORGUARD_PASS` or fill them in into the script directly (see `curl` command). These credentials can be found [here](https://torguard.net/clientarea.php?action=changepw).

My experience with getting TorGuard working wasn't the smoothest journey to say the least. I had to click around quite a bit and finally after generating my 3rd config it worked. On the `Netherlands` server for example I didn't get any internet connectivity and at first I was unable to get port forwarding working on the `Germany` server. All of a sudden after generating the 3rd config and also pasting in the ip found under `My Fixed IPs`, that seems to populate when doing a Port Forward Request, I managed to get port forwarding working. So don't give up too soon, it can all work eventually.
