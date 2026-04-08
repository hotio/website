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
<tr><td><div id="tag16858" onclick="CopyToClipboard('tag16858');return false;" class="tag-decoration">nightly</div><div id="tag23368" onclick="CopyToClipboard('tag23368');return false;" class="tag-decoration">nightly-3f85cdc</div><div id="tag2484" onclick="CopyToClipboard('tag2484');return false;" class="tag-decoration">nightly-9b5c0b0e4833674dfbff9ba13d030693fd5a285d</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/3f85cdc42da16a0828e8dfec09fc16bf5036e1fa" target="_blank">Version update: 034ae1a1413206f98061c21a4101c111480107be => 9b5c0b0e4833674dfbff9ba13d030693fd5a285d</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24119135770" target="_blank">2026-04-08 05:17:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12761" onclick="CopyToClipboard('tag12761');return false;" class="tag-decoration">release</div><div id="tag24259" onclick="CopyToClipboard('tag24259');return false;" class="tag-decoration">release-c0e65f4</div><div id="tag2546" onclick="CopyToClipboard('tag2546');return false;" class="tag-decoration">release-0.31.0</div><div id="tag28165" onclick="CopyToClipboard('tag28165');return false;" class="tag-decoration">release-v0</div><div id="tag29125" onclick="CopyToClipboard('tag29125');return false;" class="tag-decoration">release-v0.31</div><div id="tag5665" onclick="CopyToClipboard('tag5665');return false;" class="tag-decoration">release-v0.31.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/c0e65f4af66f0944c3050fd364a8117a0f9bfaf0" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24067337657" target="_blank">2026-04-07 06:16:19</a></td></tr>
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
