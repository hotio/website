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
<tr><td><div id="tag24932" onclick="CopyToClipboard('tag24932');return false;" class="tag-decoration">nightly</div><div id="tag14177" onclick="CopyToClipboard('tag14177');return false;" class="tag-decoration">nightly-aff0a7e</div><div id="tag29531" onclick="CopyToClipboard('tag29531');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/aff0a7e508e4cbcc3ce97e701b7cdaf80463bf2a" target="_blank">Upstream update: noblevpn-7d9e72c => noblevpn-9c33abd</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21090399877" target="_blank">2026-01-17 07:01:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10808" onclick="CopyToClipboard('tag10808');return false;" class="tag-decoration">release</div><div id="tag20169" onclick="CopyToClipboard('tag20169');return false;" class="tag-decoration">release-b674b70</div><div id="tag13542" onclick="CopyToClipboard('tag13542');return false;" class="tag-decoration">release-0.30.1</div><div id="tag11996" onclick="CopyToClipboard('tag11996');return false;" class="tag-decoration">release-v0</div><div id="tag12898" onclick="CopyToClipboard('tag12898');return false;" class="tag-decoration">release-v0.30</div><div id="tag3635" onclick="CopyToClipboard('tag3635');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b674b70a07af77708ff97cf58810fec81ec057f3" target="_blank">Upstream update: noblevpn-7d9e72c => noblevpn-9c33abd</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21090400076" target="_blank">2026-01-17 07:01:55</a></td></tr>
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
