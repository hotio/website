---
hide:
  - toc
title: hotio/plex
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/plex){ class=header-links }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/plex){ class=header-links }  

[:octicons-link-16: Upstream Project](https://www.plex.tv){ class=header-links }  

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
        --name plex \
        -p 32400:32400 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e PLEX_CLAIM_TOKEN="" \
        -e PLEX_ADVERTISE_URL="" \
        -e PLEX_NO_AUTH_NETWORKS="" \
        -e PLEX_BETA_INSTALL="false" \
        -e PLEX_PURGE_CODECS="false" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/plex
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      plex:
        container_name: plex
        image: ghcr.io/hotio/plex
        ports:
          - "32400:32400"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - PLEX_CLAIM_TOKEN
          - PLEX_ADVERTISE_URL
          - PLEX_NO_AUTH_NETWORKS
          - PLEX_BETA_INSTALL=false
          - PLEX_PURGE_CODECS=false
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Claim your server

When running Plex on a docker `bridge` network, you can't just get to the webui and start configuring it, you'll need to claim it first. Go to [plex.tv/claim](https://www.plex.tv/claim){ target="_blank" rel="noopener" } and login with your account, copy the claim token and add it to the environment variable like this `-e PLEX_CLAIM_TOKEN="claim-xxxxxxxxxxxxxxxxxxxx"`. When starting the new plex server for the first time, the server will be added to your account.

## Plex Beta

If you are a Plex Pass subscriber, you can enable the install of beta builds with `-e PLEX_BETA_INSTALL="true"`. When the container starts, a version check is done for the latest beta and installed if a newer version is found.

## Environment variables PLEX_ADVERTISE_URL and PLEX_NO_AUTH_NETWORKS

The variables correspond to the below plex network settings.

![Plex settings](../img/plex_settings.png)

The variable `PLEX_ADVERTISE_URL` is useful to aid your local clients in discovering your plex server when running in the `bridge` network mode. Most likely you would use something like `http://192.168.0.10:32400`. You could use `PLEX_NO_AUTH_NETWORKS` when you're locked out and need to regain access without providing credentials.

## Hardware Transcoding

All the usual hardware accelerated transcoding is supported.

## Getting a token

The following command will interactively ask for your credentials and give you a token. If you don't use 2FA, just press enter.

```shell
docker run --rm -it --entrypoint="" hotio/plex bash /app/get-token.sh
```

## TOP secret stuff

If you do `-e PLEX_BETA_INSTALL="https://..."`, stuff happens for which no support will be given.

--8<-- "includes/wireguard.md"
