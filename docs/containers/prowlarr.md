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
<tr><td><div id="tag14385" onclick="CopyToClipboard('tag14385');return false;" class="tag-decoration">nightly</div><div id="tag27559" onclick="CopyToClipboard('tag27559');return false;" class="tag-decoration">nightly-1fb87ff</div><div id="tag18323" onclick="CopyToClipboard('tag18323');return false;" class="tag-decoration">nightly-3.0.1.5748</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/1fb87ffb7067c195f9af557ca7ea3b4e686cd425" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42300198097" target="_blank">2026-11-06 21:51:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31748" onclick="CopyToClipboard('tag31748');return false;" class="tag-decoration">release</div><div id="tag11150" onclick="CopyToClipboard('tag11150');return false;" class="tag-decoration">release-0d92a48</div><div id="tag14559" onclick="CopyToClipboard('tag14559');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/0d92a4802111cf5652d940679d4a1b66ac74ce10" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42114884567" target="_blank">2026-11-05 21:41:14</a></td></tr>
<tr><td><div id="tag11503" onclick="CopyToClipboard('tag11503');return false;" class="tag-decoration">testing</div><div id="tag5550" onclick="CopyToClipboard('tag5550');return false;" class="tag-decoration">testing-51f0206</div><div id="tag23044" onclick="CopyToClipboard('tag23044');return false;" class="tag-decoration">testing-3.0.0.5737</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/51f0206b46d03d986483c83f86e4d6547036e0ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42114880604" target="_blank">2026-11-05 21:41:12</a></td></tr>
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
