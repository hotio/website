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
<tr><td><div id="tag32721" onclick="CopyToClipboard('tag32721');return false;" class="tag-decoration">nightly</div><div id="tag17215" onclick="CopyToClipboard('tag17215');return false;" class="tag-decoration">nightly-c0a1131</div><div id="tag9914" onclick="CopyToClipboard('tag9914');return false;" class="tag-decoration">nightly-058356004300e79079131d2925cd16071fef0d1e</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/c0a1131a60448d5a840c4c993ce6c2900af11c38" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28151774525" target="_blank">2026-06-25 06:37:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27237" onclick="CopyToClipboard('tag27237');return false;" class="tag-decoration">release</div><div id="tag27922" onclick="CopyToClipboard('tag27922');return false;" class="tag-decoration">release-209d308</div><div id="tag18054" onclick="CopyToClipboard('tag18054');return false;" class="tag-decoration">release-0.31.1</div><div id="tag6472" onclick="CopyToClipboard('tag6472');return false;" class="tag-decoration">release-v0</div><div id="tag16356" onclick="CopyToClipboard('tag16356');return false;" class="tag-decoration">release-v0.31</div><div id="tag85" onclick="CopyToClipboard('tag85');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/209d3085559a517bc442a5a802cb30f9bc28d9a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28120529721" target="_blank">2026-06-24 18:26:04</a></td></tr>
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
