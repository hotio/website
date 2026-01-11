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
<tr><td><div id="tag17556" onclick="CopyToClipboard('tag17556');return false;" class="tag-decoration">nightly</div><div id="tag7491" onclick="CopyToClipboard('tag7491');return false;" class="tag-decoration">nightly-cf3489efdc450dc2812367e8c4d61fd1c9bf3051</div><div id="tag5514" onclick="CopyToClipboard('tag5514');return false;" class="tag-decoration">nightly-5d043e7</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/5d043e722543c5fcf31fc093b9f77b90fb237057" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20892091627" target="_blank">2026-01-11 08:20:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29690" onclick="CopyToClipboard('tag29690');return false;" class="tag-decoration">release</div><div id="tag26046" onclick="CopyToClipboard('tag26046');return false;" class="tag-decoration">release-0.30.1</div><div id="tag7399" onclick="CopyToClipboard('tag7399');return false;" class="tag-decoration">release-3d0bbcb</div><div id="tag5760" onclick="CopyToClipboard('tag5760');return false;" class="tag-decoration">release-v0</div><div id="tag29197" onclick="CopyToClipboard('tag29197');return false;" class="tag-decoration">release-v0.30</div><div id="tag10270" onclick="CopyToClipboard('tag10270');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3d0bbcb78b856e47d3187f768745135ddec94a2a" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20892091540" target="_blank">2026-01-11 08:20:05</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
