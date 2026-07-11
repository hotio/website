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
<tr><td><div id="tag28176" onclick="CopyToClipboard('tag28176');return false;" class="tag-decoration">nightly</div><div id="tag3699" onclick="CopyToClipboard('tag3699');return false;" class="tag-decoration">nightly-86e5eca</div><div id="tag31334" onclick="CopyToClipboard('tag31334');return false;" class="tag-decoration">nightly-2.5.1.5464</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/86e5eca4a410449d74abb50467c5eecd9f808379" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29169165005" target="_blank">2026-07-11 21:39:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22656" onclick="CopyToClipboard('tag22656');return false;" class="tag-decoration">release</div><div id="tag28643" onclick="CopyToClipboard('tag28643');return false;" class="tag-decoration">release-0db9f50</div><div id="tag16049" onclick="CopyToClipboard('tag16049');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/0db9f50b8ee2158ef99a725635cd18b280ba2c04" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28978745498" target="_blank">2026-07-08 22:00:29</a></td></tr>
<tr><td><div id="tag8132" onclick="CopyToClipboard('tag8132');return false;" class="tag-decoration">testing</div><div id="tag3490" onclick="CopyToClipboard('tag3490');return false;" class="tag-decoration">testing-6953353</div><div id="tag6627" onclick="CopyToClipboard('tag6627');return false;" class="tag-decoration">testing-2.5.1.5460</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/695335331bf4e7f20d577a2b8e30dd65d2abe7a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28978739666" target="_blank">2026-07-08 22:00:23</a></td></tr>
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
