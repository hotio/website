---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8287" onclick="CopyToClipboard('tag8287');return false;" class="tag-decoration">nightly</div><div id="tag12367" onclick="CopyToClipboard('tag12367');return false;" class="tag-decoration">nightly-f5660c9</div><div id="tag27107" onclick="CopyToClipboard('tag27107');return false;" class="tag-decoration">nightly-2.6.1.5509</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/f5660c949422f322b6c2906d464a6c59244fa5b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/30581249392" target="_blank">2026-07-30 20:55:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24399" onclick="CopyToClipboard('tag24399');return false;" class="tag-decoration">release</div><div id="tag3264" onclick="CopyToClipboard('tag3264');return false;" class="tag-decoration">release-b0b9342</div><div id="tag1045" onclick="CopyToClipboard('tag1045');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/b0b9342dbabc6f972a6f30e6f6978a1104f9bbda" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/30382275991" target="_blank">2026-07-28 17:18:11</a></td></tr>
<tr><td><div id="tag23517" onclick="CopyToClipboard('tag23517');return false;" class="tag-decoration">testing</div><div id="tag8990" onclick="CopyToClipboard('tag8990');return false;" class="tag-decoration">testing-8719b62</div><div id="tag144" onclick="CopyToClipboard('tag144');return false;" class="tag-decoration">testing-2.6.0.5494</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/8719b62977069d4baf63140307fc6daccb2775b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/30382273173" target="_blank">2026-07-28 17:18:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
