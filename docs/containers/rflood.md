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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18375" onclick="CopyToClipboard('tag18375');return false;" class="tag-decoration">release</div><div id="tag19429" onclick="CopyToClipboard('tag19429');return false;" class="tag-decoration">release-40c79ec</div><div id="tag20827" onclick="CopyToClipboard('tag20827');return false;" class="tag-decoration">release-0.16.6</div><div id="tag7502" onclick="CopyToClipboard('tag7502');return false;" class="tag-decoration">release-v0</div><div id="tag28149" onclick="CopyToClipboard('tag28149');return false;" class="tag-decoration">release-v0.16</div><div id="tag4170" onclick="CopyToClipboard('tag4170');return false;" class="tag-decoration">release-v0.16.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/rflood/commit/40c79eca352d8c449a549a11b08151e6316aa805" target="_blank">Version update: 0.16.6 => 0.16.6</a></td><td><a href="https://github.com/hotio/rflood/actions/runs/21893473318" target="_blank">2026-02-11 05:07:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="rflood" \
        -p 3000:3000 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="3000/tcp" \ #(3)!
        -e FLOOD_AUTH="false" \
        -e FLOOD_ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/rflood
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=3000/tcp #(3)!
          - FLOOD_AUTH=false
          - FLOOD_ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

## XML-RPC / JSON-RPC

On port `5000` runs Nginx exposing the `/RPC2`, `/JSONRPC` and `/RPC` endpoints. Default credentials are shown on first start in the log output, `localhost` doesn't need credentials (xmlrpc tool is included). To reset the password, remove or modify `/config/rpc2/basic_auth_credentials`.

```text
/RPC2    >> header 'Content-Type' forced to 'text/xml'
/JSONRPC >> header 'Content-Type' forced to 'application/json-rpc'
/RPC     >> header 'Content-Type' not modified
```

--8<-- "includes/wireguard.md"
