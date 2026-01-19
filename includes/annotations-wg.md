1. The environment variable `VPN_LAN_NETWORK` can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the webui or other additional ports (see below). If for example you were to pick `192.168.0.0/24`, every device with an ip in the range `192.168.0.0 - 192.168.0.255` on your LAN is allowed access to the webui. On MacOS set it to `192.168.65.0/24` (Verify with your settings [Resources > Network > Docker subnet]), you might also need to do `-p 127.0.0.1:PORT:PORT` (don't ask me why, Docker on Mac quirks I guess). Do not add the docker bridge networks in this variable!

2. If you need to expose ports on your LAN you can use `VPN_EXPOSE_PORTS_ON_LAN`. For example `VPN_EXPOSE_PORTS_ON_LAN=7878/tcp,9117/tcp`, will block those ports on the vpn interface, so that there's no risk that they might be exposed to the world and allow access to them from your LAN. Most images also have a `WEBUI_PORTS` environment variable that does basically the same thing already pre-filled with the default ports. Use `WEBUI_PORTS` if you need to change those defaults. The variable `VPN_EXPOSE_PORTS_ON_LAN` is mostly for extra ports, likely used when routing additional containers through this container's VPN connection.

3. The variable `WEBUI_PORTS` is mostly used when setting up the firewall rules for the VPN feature. For a few images it's also the best way to change the port on which the app runs.

4. Possible values are `generic`, `proton` and `pia`.  
Affiliate links:  
[Proton VPN](https://go.getproton.me/aff_c?offer_id=26&aff_id=7223){ target="_blank" rel="noopener" }  
[Proton Unlimited](https://go.getproton.me/aff_c?offer_id=42&aff_id=7223&url_id=1194){ target="_blank" rel="noopener" }  
[Private Internet Access](https://www.privateinternetaccess.com/offer/hotio.dev_hsm018qg){ target="_blank" rel="noopener" }

5. There needs to be a file `wg0.conf` (for PIA this is done automatically, see `VPN_PROVIDER` variable) located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to start. If you'd like to execute some of your own bash scripts you can place the scripts alongside your `wg0.conf` file, called `wg0-pre.sh` (before vpn is up), `wg0-post.sh` (after vpn is up) or `wg0-port.sh` (after forwarded port change).

6. Auto retrieve a forwarded port and configure the supported app if set to `true` and `VPN_PROVIDER=proton` or `VPN_PROVIDER=pia`. If you can manually request/set a forwarded port in the VPN provider's web interface, fill in the port number (just the number). If you set it to `true` and you've got `VPN_PROVIDER=generic`, you can manually create and manipulate the file `/config/wireguard/forwarded_port`. Useful website to check for open ports is [portchecker.io](https://portchecker.io){ target="_blank" rel="noopener" } and [ipleak.net](https://ipleak.net){ target="_blank" rel="noopener" } to leak test with a `.torrent` file.

7. By default a random server is used, but if you prefer a certain region you can fill in the region id. A list of available regions can be found in `/config/wireguard` after the first start. If you're seeing an error message `shuf: getrandom: Function not implemented`, you can't let it pick one randomly and are forced to fill in a region id.

8. With `VPN_CONF` you can set the name used for your WireGuard config.

9. By default the prefixes list `eth,enp` is used to determine what the local docker networks are. If your setup uses another prefix, you can override the list with this variable.

10. DANGEROUS! Don't enable unless you know what you are doing!

11. When using `VPN_PROVIDER=pia`, fill in your username and password. A `wg0.conf` will be automatically downloaded.

12. NOT USED

13. Fill in your DIP token here, if you've bought the dedicated ip option.

14. If you'd like to keep using the same forwarded port until it expires, set this to `true`.

15. Adds a redirect from the port before `@` to the port after, with `udp or tcp` after the `/`. Ports in this list are also exposed on the wireguard interface. Values like `32400/tcp` without the `@` will use the port from `VPN_AUTO_PORT_FORWARD` for the redirect or if set to `true` the forwarded port received from pia/proton (In more detail: it'll use the port from `/config/wireguard/forwarded_port` if `VPN_AUTO_PORT_FORWARD` is not set to `false`). Use `3000@3001/tcp,3002@3003/tcp` syntax for static redirects. If you do `6677@6677/tcp` (same port), a redirect won't be added, but it'll just expose the port. A known usecase as of right now is Plex and exposing it on the VPN (if you can't get 32400 from your VPN provider), because it's not possible to run Plex on anything else but 32400.

16. Some of the possible values are for example `wg`, `8.8.8.8` or `1.1.1.1@853#cloudflare-dns.com` seperated by a `,`. The value `wg` will use the nameservers from the `wg0.conf` file. A value in the format `8.8.8.8` is to use a plain old nameserver. A value in the format `1.1.1.1@853#cloudflare-dns.com` will add a `DNS over TLS` nameserver, this will override all other regular nameservers. Leaving the variable empty will allow Unbound to work in recursive mode.

17. NOT USED

18. If you want to use container hostnames to connect to other containers within a bridge network, you'll have to use `--hostname` and use `container-name.internal` or `container-name.vpn`. Currently `.vpn` is a non existing TLD, but that can change in the future. The TLD `.internal` should become the standard for internal networks, so it's the safest choice.

19. This will start Privoxy on the default port 8118 when set to `true`. By default Privoxy is not exposed on the LAN, so if you need that, you'll have to add `VPN_EXPOSE_PORTS_ON_LAN=8118/tcp`.

20. Enabling this will bring down the container if the connectivity tests fail at the end of the Wireguard init process or for an extended period during the container runtime.

21. Enable Unbound by setting to `true` when VPN is not active.

22. Some of the possible values are for example `8.8.8.8` or `1.1.1.1@853#cloudflare-dns.com` seperated by a `,`. A value in the format `8.8.8.8` is to use a plain old nameserver. A value in the format `1.1.1.1@853#cloudflare-dns.com` will add a `DNS over TLS` nameserver, this will override all other regular nameservers. Leaving the variable empty will allow Unbound to work in recursive mode.
