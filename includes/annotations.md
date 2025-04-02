1. The environment variable `VPN_LAN_NETWORK` can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the webui or other additional ports (see below). If for example you were to pick `192.168.0.0/24`, every device with an ip in the range `192.168.0.0 - 192.168.0.255` on your LAN is allowed access to the webui.

2. If you need to expose ports on your LAN you can use `VPN_EXPOSE_PORTS_ON_LAN`. For example `VPN_EXPOSE_PORTS_ON_LAN=7878/tcp,9117/tcp`, will block those ports on the vpn interface, so that there's no risk that they might be exposed to the world and allow access to them from your LAN. Some images also have a `WEBUI_PORTS` environment variable that does basically the same for the vpn part. For those apps that support it, it'll also change the port on which the app runs.

3. With `net.ipv6.conf.all.disable_ipv6=1` all ipv6 support is disabled. Leave ipv6 disabled and remove all references to it in your `wg0.conf` file to keep things simple. If you need any sort of ipv6 support, enable it with `net.ipv6.conf.all.disable_ipv6=0`. A WireGuard ipv6 endpoint is currently not supported.

4. Possible values are `generic`, `proton` and `pia`.  
  
Affiliate links:  
[Proton VPN](https://hotio.dev/protonvpn){: target=_blank rel="noopener" }  
[Proton Mail](https://hotio.dev/protonmail){: target=_blank rel="noopener" }  
[Proton Drive](https://hotio.dev/protondrive){: target=_blank rel="noopener" }  
[Proton Pass](https://hotio.dev/protonpass){: target=_blank rel="noopener" }  
[Private Internet Access](https://hotio.dev/pia){: target=_blank rel="noopener" }

5. There needs to be a file `wg0.conf` located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to start. If you'd like to execute some of your own bash commands you can place two scripts alongside your `wg0.conf`, called `wg0-pre.sh` and `wg0-post.sh`. These will execute right before the check for the existence of a `wg0.conf` file and almost at the end, right before the internet connectivity test.

6. Auto retrieve a forwarded port and configure the supported app if set to `true` or if you can manually request/set a forwarded port in the VPN provider's web interface, fill in the port number (just the number). Useful website to check for open ports is [YouGetSignal](https://www.yougetsignal.com/tools/open-ports){: target=_blank rel="noopener" } and [ipleak.net](https://ipleak.net){: target=_blank rel="noopener" } to leak test with `.torrent` file.

7. By default a random server is used, but if you prefer a certain region you can fill in the region id. A list of available regions can be found in `/config/wireguard` after the first start. If you're seeing an error message `shuf: getrandom: Function not implemented`, you can't let it pick one randomly and are forced to fill in a region id.

8. With `VPN_CONF` you can set the name used for your WireGuard config. This is an example of how your `wg0.conf` file should look like. If there's a lot of extra stuff, remove it unless you know what it's there for. The WireGuard config is automatically modified to use `AllowedIPs = 0.0.0.0/1,128.0.0.0/1` for compatibility with Synology/QNAP/Asustor/WSL2 systems if you append `-fix`, so `VPN_CONF=wg0-fix`. WSL2 users can also compile their own kernel if they don't wanna use this workaround.
```text
[Interface]
PrivateKey = supersecretprivatekey
Address = xx.xx.xxx.xxx/32 # Yes, /32 in most cases
DNS = x.x.x.x # This will be ignored, modify Unbound config if you really need it

[Peer]
PublicKey = publickey
AllowedIPs = 0.0.0.0/0
Endpoint = xxx.x.xxx.x:51820
```

9. If the WireGuard kernel module is missing (most likely on Synology/QNAP/Asustor), you can run WireGuard in userspace thanks to `wireguard-go`. For that you'll need to add the device `/dev/net/tun`. It's most likely that the device `/dev/net/tun` does not exist however, have a read [here](https://memoryleak.dev/post/fix-tun-tap-not-available-on-a-synology-nas/){: target=_blank rel="noopener" } for instructions on checking and adding the device.

10. Setting this to `true` will re-add the default nameserver if it's been overwritten by the `DNS = ...` entry in `wgO.conf`. This should keep container name resolution working. If container name resolution still doesn't work, add `--dns 1.1.1.1`, somehow this can fix it (confirmed on MacOS).

11. When using `VPN_PROVIDER=pia`, fill in your username and password. A `wg0.conf` will be automatically downloaded.

12. Required in most cases, on some systems that don't have `rp_filter` set to strict, it's optional.

13. Fill in your DIP token here, if you've bought the dedicated ip option.

14. If you'd like to keep using the same forwarded port until it expires, set this to `true`.

15. Adds a redirect for the forwarded port from your vpn provider to the internal port on which the app runs, ports in this list are also not blocked on the wireguard interface, so this var is also useful if you want to expose a port on both your LAN and VPN. Values like `32400/tcp` will use the port from `VPN_AUTO_PORT_FORWARD` to create the redirect or if set to `true` the forwarded port from pia/proton. Use `3000@3001/tcp,3002@3003/tcp` syntax for extra static redirects. The only known usecase as of right now is Plex and exposing it on the VPN with a non configurable forwarded port, because it's not possible to run Plex on anything else but 32400. Useful website to check for open ports is [YouGetSignal](https://www.yougetsignal.com/tools/open-ports){: target=_blank rel="noopener" } and [ipleak.net](https://ipleak.net){: target=_blank rel="noopener" } to leak test with `.torrent` file.

16. Unbound can be used when `VPN_ENABLED` is `false`, it will however always be active when `VPN_ENABLED` is `true`. When the Unbound DNS server is active, your requests will use DNS over TLS to Cloudflare (the default config). Except for requests made to `.internal` and `.vpn` TLDs, those are done to the local docker DNS server on 127.0.0.11. So if you want to use container hostnames to connect to other containers within a bridge network, you'll have to use `--hostname` and use `container-name.internal` or `container-name.vpn`. Currently `.vpn` is a non existing TLD, but that can change in the future. The TLD `.internal` should become the standard for internal networks, so it's the safest choice. You can modify the Unbound config to your personal preference by changing the file `/config/unbound/unbound.conf`.

17. Possible values are `auto`, `legacy` or `nftables`. The default is `auto`, this will try to use the most modern method available. If this doesn't work, you can try forcing it to `legacy` or `nftables`.

18. See `UNBOUND_ENABLED` info for more details.
