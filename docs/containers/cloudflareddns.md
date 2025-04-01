---
hide:
  - toc
---

--8<-- "includes/header-links.md"

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name cloudflareddns \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e INTERVAL=300 \
        -e DETECTION_MODE="dig-whoami.cloudflare" \
        -e LOG_LEVEL=3 \
        -e CF_USER="your.cf.email@example.com" \
        -e CF_APIKEY="your.global.apikey" \
        -e CF_APITOKEN="" \
        -e CF_APITOKEN_ZONE="" \
        -e CF_HOSTS="test.example.com;test.foobar.com;test2.foobar.com" \
        -e CF_ZONES="example.com;foobar.com;foobar.com" \
        -e CF_RECORDTYPES="A;A;AAAA" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/cloudflareddns
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      cloudflareddns:
        container_name: cloudflareddns
        image: ghcr.io/hotio/cloudflareddns
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - INTERVAL=300
          - DETECTION_MODE=dig-whoami.cloudflare
          - LOG_LEVEL=3
          - CF_USER=your.cf.email@example.com
          - CF_APIKEY=your.global.apikey
          - CF_APITOKEN
          - CF_APITOKEN_ZONE
          - CF_HOSTS=test.example.com;test.foobar.com;test2.foobar.com
          - CF_ZONES=example.com;foobar.com;foobar.com
          - CF_RECORDTYPES=A;A;AAAA
        volumes:
          - /<host_folder_config>:/config
    ```

Possible values for `DETECTION_MODE` are `dig-google.com`, `dig-opendns.com`, `dig-whoami.cloudflare`, `curl-icanhazip.com`, `curl-wtfismyip.com`, `curl-showmyip.ca`, `curl-da.gd`, `curl-seeip.org`, `curl-ifconfig.co` and `curl-ipw.cn`. If you want to get the local ip from a network interface, use something like `local:eth0` as `DETECTION_MODE`.

Notice that we give 3 values each time for `CF_HOSTS`, `CF_ZONES` and `CF_RECORDTYPES`. In our example, the domain `test.foobar.com` belonging to the zone `foobar.com` will have its A record updated with an ipv4 ip. If you use `CF_APITOKEN`, you can leave `CF_USER` and `CF_APIKEY` empty.

!!! important

    All the domain names in `CF_HOSTS` should have properly configured DNS records on Cloudflare, they will not be created.

--8<-- "includes/tags.md"

## Zone ID

Instead of the `zone_name`, you can also fill in a `zone_id` in `CF_ZONES`. When using a `zone_id`, you can use a scoped token (`CF_APITOKEN`) that only needs the `Zone - DNS - Edit` permissions. This improves security. The configuration could look like the example below.

```shell
-e CF_APITOKEN="azkqvJ86wEScojvSJC8DyY67TwqNwZCtomEVrHwt"
-e CF_HOSTS="example.com;test.foobar.com"
-e CF_ZONES="zbpsi9ceikrdnnym27s2xnp6s5dvj6ep;dccbe6grakumohwwd4amh4o46yupepn8"
-e CF_RECORDTYPES="A;A"
```

## Seperate API Tokens

If you do not prefer to use a `zone_id`, but prefer some more security, you can use 2 seperate tokens.

`CF_APITOKEN` configured with:

**Permissions**  
`Zone - DNS - Edit`  
**Zone Resources**  
`Include - Specific zone - example.com`  
`Include - Specific zone - foobar.com`

`CF_APITOKEN_ZONE` configured with:

**Permissions**  
`Zone - Zone - Read`  
**Zone Resources**  
`Include - All zones`

Leaving `CF_APITOKEN_ZONE` blank would mean that only `CF_APITOKEN` will be used and thus that token should have all required permissions. Which usually means that the token could edit all zones or not be able to fetch the `zone_id` from the `zone_name`.

## Configuration combination examples

Below are some example configuration combinations, ordered from most secure to least secure.

* We use a `zone_id` so that our token only needs the permissions `Zone - DNS - Edit`.

```shell
-e CF_APITOKEN="azkqvJ86wEScojvSJC8DyY67TwqNwZCtomEVrHwt"
-e CF_HOSTS="vpn.example.com;test.foobar.com"
-e CF_ZONES="zbpsi9ceikrdnnym27s2xnp6s5dvj6ep;axozor886pyja7nmbcvu5kh7dp9557j4"
-e CF_RECORDTYPES="A;A"
```

* We use additionally a `CF_APITOKEN_ZONE` with the permissions `Zone - Zone - Read` to query the zones and getting the `zone_id`.

```shell
-e CF_APITOKEN="azkqvJ86wEScojvSJC8DyY67TwqNwZCtomEVrHwt"
-e CF_APITOKEN_ZONE="8m4TxzWb9QHXEpTwQDMugkKuHRavsxoK8qmJ4P7M"
-e CF_HOSTS="vpn.example.com;test.foobar.com"
-e CF_ZONES="example.com;axozor886pyja7nmbcvu5kh7dp9557j4"
-e CF_RECORDTYPES="A;A"
```

* We use only `CF_APITOKEN`, but with the permissions `Zone - DNS - Edit` and `Zone - Zone - Read`.

```shell
-e CF_APITOKEN="azkqvJ86wEScojvSJC8DyY67TwqNwZCtomEVrHwt"
-e CF_HOSTS="vpn.example.com;test.foobar.com"
-e CF_ZONES="example.com;axozor886pyja7nmbcvu5kh7dp9557j4"
-e CF_RECORDTYPES="A;A"
```

* We use `CF_USER` and `CF_APIKEY`, basically giving full control over our account.

```shell
-e CF_USER="your.cf.email@example.com"
-e CF_APIKEY="your.global.apikey"
-e CF_HOSTS="vpn.example.com;test.foobar.com"
-e CF_ZONES="example.com;axozor886pyja7nmbcvu5kh7dp9557j4"
-e CF_RECORDTYPES="A;A"
```

## Example of the log output

```text
2020-05-17 17:20:54 -    INFO - IPv4 detected by [dig-whoami.cloudflare] is [1.1.1.1].
2020-05-17 17:20:54 -    INFO - [1/1] [A] [vpn.example.com] Reading zone list from Cloudflare.
2020-05-17 17:20:54 -    INFO - [1/1] [A] [vpn.example.com] Retrieved zone list from Cloudflare.
2020-05-17 17:20:54 -    INFO - [1/1] [A] [vpn.example.com] Zone ID [xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx] found for zone [example.com].
2020-05-17 17:20:54 -    INFO - [1/1] [A] [vpn.example.com] Reading DNS record from Cloudflare.
2020-05-17 17:20:55 -    INFO - [1/1] [A] [vpn.example.com] Writing DNS record to cache file [/config/cf-ddns-A-vpn.example.com.cache].
2020-05-17 17:20:55 -    INFO - [1/1] [A] [vpn.example.com] Checking if update is needed.
2020-05-17 17:20:55 -    INFO - [1/1] [A] [vpn.example.com] No update needed.
2020-05-17 17:20:55 -    INFO - Going to sleep for [300] seconds...
```

## Log levels

For `LOG_LEVEL` you can pick `0`, `1`, `2` or `3`.

* `0` will give no log output. It's not recommended to use.

* `1` will give you the following output types. It's the recommended value when all things are configured and running as expected.

```shell
UPDATE, WARNING, ERROR
```

* `2` will give you the following output types. Use this if you always wanna see what's going on, but `3` gives you too much output.

```shell
UPDATE, WARNING, ERROR, INFO
```

* `3` will give you the following output types. This is the default.

```shell
UPDATE, WARNING, ERROR, INFO, DEBUG
```

## JSON log

Every IP update is also logged to `/config/cf-ddns-updates.json`. This can be used with the [Telegraf JSON parser](https://github.com/influxdata/telegraf/tree/master/plugins/parsers/json){: target=_blank rel="noopener" } and the `tail` input, to get your domain updates into InfluxDB. Example output below.

```json
{"domain":"vpn.example.com","recordtype":"A","ip":"1.1.1.1","timestamp":"2020-05-17T20:27:14Z"}
{"domain":"vpn.example.com","recordtype":"A","ip":"1.1.1.1","timestamp":"2020-05-17T20:29:26Z"}
```

## Cached results from Cloudflare

The returned results from Cloudflare are cached. This means minimal api calls to Cloudflare. If you have made any manual changes to the IP on the Cloudflare webinterface, for instance when wanting to test an update, a container restart is needed to clear the cache.

The proxy setting (orange cloud) and TTL is also cached and re-set based on the previous value, so if you made any modifications to these settings, you should restart the container so that the script is aware of the new settings.

## Sending notifications

You can send notifications when a DNS record gets updated with a new IP using [Apprise](https://github.com/caronc/apprise/blob/master/README.md){: target=_blank rel="noopener" }. Use the environment variable `APPRISE` to configure notifications, see below for some examples.

```shell
-e APPRISE="pover://user@token"
-e APPRISE="pover://user@token;discord://webhook_id/webhook_token"
```

--8<-- "includes/wireguard.md"
