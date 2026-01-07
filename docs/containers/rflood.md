---
hide:
  - toc
title: hotio/rflood
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/rflood){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/rflood){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project 1](https://github.com/rakshasa/rtorrent){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project 2](https://github.com/jesec/flood){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6751" onclick="CopyToClipboard('tag6751');return false;" class="tag-decoration">release</div><div id="tag29931" onclick="CopyToClipboard('tag29931');return false;" class="tag-decoration">release-0.16.6--4.11.0</div><div id="tag15321" onclick="CopyToClipboard('tag15321');return false;" class="tag-decoration">release-5025ace</div><div id="tag3988" onclick="CopyToClipboard('tag3988');return false;" class="tag-decoration">release-v0</div><div id="tag27441" onclick="CopyToClipboard('tag27441');return false;" class="tag-decoration">release-v0.16</div><div id="tag32472" onclick="CopyToClipboard('tag32472');return false;" class="tag-decoration">release-v0.16.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/rflood/commit/5025acee1eeca2aae23a92c4655b7e5eac1865b0" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/rflood/actions/runs/20770106852" target="_blank">2026-01-07 03:57:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name rflood \
        -p 3000:3000 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e FLOOD_AUTH="false" \
        -e ARGS="" \
        -e FLOOD_ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/rflood
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      rflood:
        container_name: rflood
        image: ghcr.io/hotio/rflood
        ports:
          - "3000:3000"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - FLOOD_AUTH=false
          - ARGS
          - FLOOD_ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Changing the WebUI port

Under certain circumstances it's required to run the WebUI on a different internal port, you can do that by modifying the environment variable `WEBUI_PORTS` accordingly. It should be in the format `xxxx/tcp`, take a look at the default with `docker logs` (variable is printed at container start) or `docker inspect`.

## XML-RPC / JSON-RPC

On port `5000` runs Nginx exposing the `/RPC2`, `/JSONRPC` and `/RPC` endpoints. Default credentials are shown on first start in the log output, `localhost` doesn't need credentials (xmlrpc tool is included). To reset the password, remove or modify `/config/rpc2/basic_auth_credentials`.

```text
/RPC2    >> header 'Content-Type' forced to 'text/xml'
/JSONRPC >> header 'Content-Type' forced to 'application/json-rpc'
/RPC     >> header 'Content-Type' not modified
```

--8<-- "includes/wireguard.md"
