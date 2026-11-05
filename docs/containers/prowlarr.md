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
<tr><td><div id="tag15557" onclick="CopyToClipboard('tag15557');return false;" class="tag-decoration">nightly</div><div id="tag28676" onclick="CopyToClipboard('tag28676');return false;" class="tag-decoration">nightly-a52aee7</div><div id="tag11783" onclick="CopyToClipboard('tag11783');return false;" class="tag-decoration">nightly-3.0.1.5741</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/a52aee7b24f9ff1c6b9655f548182911f78a1f37" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42059803673" target="_blank">2026-11-05 15:54:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11658" onclick="CopyToClipboard('tag11658');return false;" class="tag-decoration">release</div><div id="tag27900" onclick="CopyToClipboard('tag27900');return false;" class="tag-decoration">release-d759c9c</div><div id="tag10016" onclick="CopyToClipboard('tag10016');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d759c9c2dce4d0330703ed6adbaae71ea369da82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42059799497" target="_blank">2026-11-05 15:54:54</a></td></tr>
<tr><td><div id="tag3311" onclick="CopyToClipboard('tag3311');return false;" class="tag-decoration">testing</div><div id="tag28853" onclick="CopyToClipboard('tag28853');return false;" class="tag-decoration">testing-1951c12</div><div id="tag9675" onclick="CopyToClipboard('tag9675');return false;" class="tag-decoration">testing-3.0.0.5737</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/1951c12f0c19aeda67062afdd9169b68f10888d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/41893129921" target="_blank">2026-11-04 19:02:58</a></td></tr>
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
