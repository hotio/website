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
<tr><td><div id="tag27314" onclick="CopyToClipboard('tag27314');return false;" class="tag-decoration">nightly</div><div id="tag6697" onclick="CopyToClipboard('tag6697');return false;" class="tag-decoration">nightly-16c2495</div><div id="tag9525" onclick="CopyToClipboard('tag9525');return false;" class="tag-decoration">nightly-2.6.5.5620</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/16c24954e203e792dba41f7cc37a3efee7a5f269" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34731981959" target="_blank">2026-09-13 02:01:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18300" onclick="CopyToClipboard('tag18300');return false;" class="tag-decoration">release</div><div id="tag17918" onclick="CopyToClipboard('tag17918');return false;" class="tag-decoration">release-5d503f6</div><div id="tag16264" onclick="CopyToClipboard('tag16264');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/5d503f6faaf77d9c5ab780227dbaadc0871bedb0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34476947928" target="_blank">2026-09-10 12:28:45</a></td></tr>
<tr><td><div id="tag32043" onclick="CopyToClipboard('tag32043');return false;" class="tag-decoration">testing</div><div id="tag8935" onclick="CopyToClipboard('tag8935');return false;" class="tag-decoration">testing-fde0b6f</div><div id="tag8784" onclick="CopyToClipboard('tag8784');return false;" class="tag-decoration">testing-2.6.4.5611</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/fde0b6fe31368426ae1880da4952d6f0ce29ffb2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34746015195" target="_blank">2026-09-13 07:45:25</a></td></tr>
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
