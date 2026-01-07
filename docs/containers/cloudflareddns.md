---
hide:
  - toc
title: hotio/cloudflareddns
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/cloudflareddns){ class=header-links }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/cloudflareddns){ class=header-links }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
    </tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-12.js"></script>

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
        -e APPRISE="" \
        -e UPDATE_IPV4="true" \
        -e UPDATE_IPV6="true" \
        -e CF_USER="your.cf.email@example.com" \
        -e CF_APIKEY="your.global.apikey" \
        -e CF_APITOKEN="" \
        -e CF_HOSTS="test.example.com,test.foobar.com,*.foobar.com" \
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
          - APPRISE
          - UPDATE_IPV4=true
          - UPDATE_IPV6=true
          - CF_USER=your.cf.email@example.com
          - CF_APIKEY=your.global.apikey
          - CF_APITOKEN
          - CF_HOSTS=test.example.com,test.foobar.com,*.foobar.com
        volumes:
          - /<host_folder_config>:/config
    ```

Possible values for `DETECTION_MODE` are `dig-google.com`, `dig-opendns.com`, `dig-whoami.cloudflare`, `curl-icanhazip.com`, `curl-wtfismyip.com`, `curl-showmyip.ca`, `curl-da.gd`, `curl-seeip.org`, `curl-ifconfig.co` and `curl-ipw.cn`. If you want to get the local ip from a network interface, use something like `local:eth0` as `DETECTION_MODE`.

If you use `CF_APITOKEN` (Permissions: `Zone.DNS - Edit`), you can leave `CF_USER` and `CF_APIKEY` empty.

!!! important

    All the domains in `CF_HOSTS` should have properly configured DNS records on Cloudflare, they will not be created.

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

Every IP update is also logged to `/config/cf-ddns-updates.json`. This can be used with the [Telegraf JSON parser](https://github.com/influxdata/telegraf/tree/master/plugins/parsers/json){ target="_blank" rel="noopener" } and the `tail` input, to get your domain updates into InfluxDB. Example output below.

```json
{"domain":"vpn.example.com","recordtype":"A","ip":"1.1.1.1","timestamp":"2020-05-17T20:27:14Z"}
{"domain":"vpn.example.com","recordtype":"A","ip":"1.1.1.1","timestamp":"2020-05-17T20:29:26Z"}
```

## Cached results from Cloudflare

The returned results from Cloudflare are cached. This means minimal api calls to Cloudflare. If you have made any manual changes to the IP on the Cloudflare webinterface, for instance when wanting to test an update, a container restart is needed to clear the cache.

The proxy setting (orange cloud) and TTL is also cached and re-set based on the previous value, so if you made any modifications to these settings, you should restart the container so that the script is aware of the new settings.

## Sending notifications

You can send notifications when a DNS record gets updated with a new IP using [Apprise](https://github.com/caronc/apprise/blob/master/README.md){ target="_blank" rel="noopener" }. Use the environment variable `APPRISE` to configure notifications, see below for some examples.

```shell
-e APPRISE="pover://user@token"
-e APPRISE="pover://user@token,discord://webhook_id/webhook_token"
```

--8<-- "includes/wireguard.md"
