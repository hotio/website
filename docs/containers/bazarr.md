---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14419" onclick="CopyToClipboard('tag14419');return false;" class="tag-decoration">nightly</div><div id="tag21117" onclick="CopyToClipboard('tag21117');return false;" class="tag-decoration">nightly-278a5b5</div><div id="tag15926" onclick="CopyToClipboard('tag15926');return false;" class="tag-decoration">nightly-1.6.3-beta.20</div><div id="tag5780" onclick="CopyToClipboard('tag5780');return false;" class="tag-decoration">nightly-v1</div><div id="tag11275" onclick="CopyToClipboard('tag11275');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag26777" onclick="CopyToClipboard('tag26777');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/278a5b54c4b484e54a5c517b5b9b53317380f156" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40086217387" target="_blank">2026-10-24 10:30:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4614" onclick="CopyToClipboard('tag4614');return false;" class="tag-decoration">release</div><div id="tag29226" onclick="CopyToClipboard('tag29226');return false;" class="tag-decoration">release-0356cfb</div><div id="tag3244" onclick="CopyToClipboard('tag3244');return false;" class="tag-decoration">release-1.6.2</div><div id="tag10441" onclick="CopyToClipboard('tag10441');return false;" class="tag-decoration">release-v1</div><div id="tag25468" onclick="CopyToClipboard('tag25468');return false;" class="tag-decoration">release-v1.6</div><div id="tag4846" onclick="CopyToClipboard('tag4846');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0356cfb6542fc28cd16149875df3723a433bf25b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39684660669" target="_blank">2026-10-21 22:11:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
