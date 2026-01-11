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
<tr><td><div id="tag4111" onclick="CopyToClipboard('tag4111');return false;" class="tag-decoration">nightly</div><div id="tag4011" onclick="CopyToClipboard('tag4011');return false;" class="tag-decoration">nightly-cf3489efdc450dc2812367e8c4d61fd1c9bf3051</div><div id="tag1497" onclick="CopyToClipboard('tag1497');return false;" class="tag-decoration">nightly-71a8583</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/71a858329e4e2f1c10d67ef56fda36f328afd5d1" target="_blank">Version update: 9b709ef61457b9efb38cdb7f6f8401595855947a => cf3489efdc450dc2812367e8c4d61fd1c9bf3051</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20891560894" target="_blank">2026-01-11 07:33:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31988" onclick="CopyToClipboard('tag31988');return false;" class="tag-decoration">release</div><div id="tag13979" onclick="CopyToClipboard('tag13979');return false;" class="tag-decoration">release-0.30.1</div><div id="tag12090" onclick="CopyToClipboard('tag12090');return false;" class="tag-decoration">release-3d0bbcb</div><div id="tag28468" onclick="CopyToClipboard('tag28468');return false;" class="tag-decoration">release-v0</div><div id="tag22843" onclick="CopyToClipboard('tag22843');return false;" class="tag-decoration">release-v0.30</div><div id="tag9038" onclick="CopyToClipboard('tag9038');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3d0bbcb78b856e47d3187f768745135ddec94a2a" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20892091540" target="_blank">2026-01-11 08:20:05</a></td></tr>
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
