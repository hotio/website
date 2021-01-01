[<img src="https://hotio.dev/img/qbittorrent.png" alt="logo" height="130" width="130">](https://github.com/qbittorrent/qbittorrent)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/qbittorrent)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/qbittorrent)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/qbittorrent?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/qbittorrent)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/qbittorrent/qbittorrent)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/qbittorrent)

## Starting the container

Just the basics to get the container running:

```shell hl_lines="4 5 6 7 8 9"
docker run --rm \
    --name qbittorrent \
    -p 8080:8080 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e DEBUG="no" \
    -v /<host_folder_config>:/config \
    hotio/qbittorrent
```

The [highlighted](https://hotio.dev/containers/qbittorrent) variables are all optional, the values you see are the defaults. In most cases you'll need to add an additional volume (`-v`) or more, depending on your own personal preference, to get access to additional files.

## WireGuard VPN support

This is probably not going to work if your OS has no kernel with WireGuard support.

Tested Operating Systems:

* Ubuntu 18.04
* Ubuntu 20.04
* Unraid 6.8.3
* Unraid 6.9 RC1

Just the basics to get the container running:

```shell hl_lines="7 8 9 10 11 12 13 14"
docker run --rm \
    --name qbittorrent \
    --cap-add=NET_ADMIN \
    --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
    --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
    -p 8080:8080 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e DEBUG="no" \
    -e VPN_ENABLED="false" \
    -e VPN_LAN_NETWORK="" \
    -v /<host_folder_config>:/config \
    hotio/qbittorrent
```

There needs to be a file `wg0.conf` located in `/config/wireguard` and you need to set the variable `VPN_ENABLED` to `true` for the VPN to work. The part `--sysctl="net.ipv6.conf.all.disable_ipv6=0"` can be removed if there is no mention of any ipv6 in `wg0.conf`. If your vpn provider supports ipv6, you'll have full ipv6 connectivity over the vpn connection, this has been tested with Mullvad. The environment variable `VPN_LAN_NETWORK`can be set to for example `192.168.1.0/24`, `192.168.1.0/24,192.168.44.0/24` or `192.168.1.33`, so you can get access to the qBittorrent webui.

## Tags

| Tag                | Upstream                | Version | Build |
| -------------------|-------------------------|---------|-------|
| `release` (latest) | Stable                  | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fqbittorrent%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/qbittorrent/build/release?style=flat-square&label=) |
| `testing`          | Unstable                | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fqbittorrent%2Ftesting%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/qbittorrent/build/testing?style=flat-square&label=) |

You can also find tags that reference a commit or version number.

## Configuration location

Your qbittorrent configuration inside the container is stored in `/config/app`, to migrate from another container, you'd probably have to move your files from `/config` to `/config/app`.

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

You will also have to add these additional environment variables `-e TORGUARD_USER="ServiceUsername" -e TORGUARD_PASS="ServicePassword"` or fill them in into the script directly (see `curl` command). These credentials can be found [here](https://torguard.net/clientarea.php?action=changepw).

When doing the whole WireGuard setup on the TorGuard website, pay attention to enable WireGuard from the `My Account` menu next to the `JOIN NOW` button visible while on the [homepage](https://torguard.net). After that you should see a fixed ip on the `Services > My Fixed IPs` page (found in the menu while on the [Account](https://torguard.net/clientarea.php) page). Use this ip on the [config generator page](https://torguard.net/tgconf.php?action=vpn-openvpnconfig) to generate your WireGuard config. This ip should also be used on the Port Forwarding Request page, where **Protocol** should be set to `UDP` and **Port/Auth** to `WireGuard` under **On VPN Server**.

## Executing your own scripts

If you have a need to do additional stuff when the container starts or stops, you can mount your script with `-v /docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `-v /docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

```shell
#!/usr/bin/with-contenv bash

echo "Hello, this is me, your script."
```

## Troubleshooting a problem

By default all output is redirected to `/dev/null`, so you won't see anything from the application when using `docker logs`. Most applications write everything to a log file too. If you do want to see this output with `docker logs`, you can use `-e DEBUG="yes"` to enable this.
