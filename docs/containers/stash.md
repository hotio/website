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
<tr><td><div id="tag31949" onclick="CopyToClipboard('tag31949');return false;" class="tag-decoration">nightly</div><div id="tag25136" onclick="CopyToClipboard('tag25136');return false;" class="tag-decoration">nightly-a6269e4</div><div id="tag6524" onclick="CopyToClipboard('tag6524');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a6269e42fd95818fc55d8c1114e8038b363ff914" target="_blank">Upstream update: noblevpn-2aef811 => noblevpn-83546e7</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21322463175" target="_blank">2026-01-24 22:15:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10209" onclick="CopyToClipboard('tag10209');return false;" class="tag-decoration">release</div><div id="tag8080" onclick="CopyToClipboard('tag8080');return false;" class="tag-decoration">release-000ced7</div><div id="tag9410" onclick="CopyToClipboard('tag9410');return false;" class="tag-decoration">release-0.30.1</div><div id="tag2163" onclick="CopyToClipboard('tag2163');return false;" class="tag-decoration">release-v0</div><div id="tag25946" onclick="CopyToClipboard('tag25946');return false;" class="tag-decoration">release-v0.30</div><div id="tag31522" onclick="CopyToClipboard('tag31522');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/000ced79bc92306dbabc1be61734d1accabb4036" target="_blank">Upstream update: noblevpn-021f848 => noblevpn-2aef811</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21246778724" target="_blank">2026-01-22 11:29:53</a></td></tr>
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
