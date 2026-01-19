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
<tr><td><div id="tag11297" onclick="CopyToClipboard('tag11297');return false;" class="tag-decoration">nightly</div><div id="tag1357" onclick="CopyToClipboard('tag1357');return false;" class="tag-decoration">nightly-3bcb3c0</div><div id="tag86" onclick="CopyToClipboard('tag86');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/3bcb3c05f3a0f4c123551a1f4713d87b628cddfd" target="_blank">Upstream update: noblevpn-a3516fa => noblevpn-130f95b</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21132239075" target="_blank">2026-01-19 09:31:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1633" onclick="CopyToClipboard('tag1633');return false;" class="tag-decoration">release</div><div id="tag21771" onclick="CopyToClipboard('tag21771');return false;" class="tag-decoration">release-6347968</div><div id="tag30093" onclick="CopyToClipboard('tag30093');return false;" class="tag-decoration">release-0.30.1</div><div id="tag15585" onclick="CopyToClipboard('tag15585');return false;" class="tag-decoration">release-v0</div><div id="tag15734" onclick="CopyToClipboard('tag15734');return false;" class="tag-decoration">release-v0.30</div><div id="tag20906" onclick="CopyToClipboard('tag20906');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/63479687f30a424f0f98bcfd07b7fb76052e9d83" target="_blank">Upstream update: noblevpn-db01928 => noblevpn-a3516fa</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21124055371" target="_blank">2026-01-19 03:14:17</a></td></tr>
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
