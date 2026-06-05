---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19295" onclick="CopyToClipboard('tag19295');return false;" class="tag-decoration">nightly</div><div id="tag6250" onclick="CopyToClipboard('tag6250');return false;" class="tag-decoration">nightly-92dc797</div><div id="tag26480" onclick="CopyToClipboard('tag26480');return false;" class="tag-decoration">nightly-b9381872f10734651c85d4df3330ef4d29ee5837</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/92dc797af3238747787e335bf591aea75a1fd3e2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26987123720" target="_blank">2026-06-05 00:06:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26190" onclick="CopyToClipboard('tag26190');return false;" class="tag-decoration">release</div><div id="tag14692" onclick="CopyToClipboard('tag14692');return false;" class="tag-decoration">release-e43ab28</div><div id="tag21536" onclick="CopyToClipboard('tag21536');return false;" class="tag-decoration">release-0.31.1</div><div id="tag570" onclick="CopyToClipboard('tag570');return false;" class="tag-decoration">release-v0</div><div id="tag29109" onclick="CopyToClipboard('tag29109');return false;" class="tag-decoration">release-v0.31</div><div id="tag11453" onclick="CopyToClipboard('tag11453');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e43ab28939012b053d0c77c4a48aa5471025d55e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26838580421" target="_blank">2026-06-02 18:03:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
