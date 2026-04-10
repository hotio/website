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
<tr><td><div id="tag18868" onclick="CopyToClipboard('tag18868');return false;" class="tag-decoration">nightly</div><div id="tag9281" onclick="CopyToClipboard('tag9281');return false;" class="tag-decoration">nightly-33cca4c</div><div id="tag14760" onclick="CopyToClipboard('tag14760');return false;" class="tag-decoration">nightly-968a97aa45a71b6807badcdc01bc9006e5fa8adb</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/33cca4cc494e37fc9bcd9d09dff57f4163901655" target="_blank">Version update: f920bd8b8e04d93e8c1970b79bec57ff4eea9898 => 968a97aa45a71b6807badcdc01bc9006e5fa8adb</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24229382708" target="_blank">2026-04-10 06:16:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32072" onclick="CopyToClipboard('tag32072');return false;" class="tag-decoration">release</div><div id="tag27337" onclick="CopyToClipboard('tag27337');return false;" class="tag-decoration">release-c0e65f4</div><div id="tag20216" onclick="CopyToClipboard('tag20216');return false;" class="tag-decoration">release-0.31.0</div><div id="tag23010" onclick="CopyToClipboard('tag23010');return false;" class="tag-decoration">release-v0</div><div id="tag30524" onclick="CopyToClipboard('tag30524');return false;" class="tag-decoration">release-v0.31</div><div id="tag11248" onclick="CopyToClipboard('tag11248');return false;" class="tag-decoration">release-v0.31.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/c0e65f4af66f0944c3050fd364a8117a0f9bfaf0" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24067337657" target="_blank">2026-04-07 06:16:19</a></td></tr>
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
