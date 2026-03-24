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
<tr><td><div id="tag30458" onclick="CopyToClipboard('tag30458');return false;" class="tag-decoration">nightly</div><div id="tag6459" onclick="CopyToClipboard('tag6459');return false;" class="tag-decoration">nightly-f04ef27</div><div id="tag28652" onclick="CopyToClipboard('tag28652');return false;" class="tag-decoration">nightly-fd480c5a3ef60e5b9545d39c70e9f3c301be53d8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/f04ef2792a4e0ec0c5a7c5b9cf8a9c8f20a1fcaf" target="_blank">Version update: 2e48dbfc634b29805e7a784fc095db0c1815a70b => fd480c5a3ef60e5b9545d39c70e9f3c301be53d8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23474104303" target="_blank">2026-03-24 05:07:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17536" onclick="CopyToClipboard('tag17536');return false;" class="tag-decoration">release</div><div id="tag998" onclick="CopyToClipboard('tag998');return false;" class="tag-decoration">release-203417b</div><div id="tag3855" onclick="CopyToClipboard('tag3855');return false;" class="tag-decoration">release-0.30.1</div><div id="tag18014" onclick="CopyToClipboard('tag18014');return false;" class="tag-decoration">release-v0</div><div id="tag5231" onclick="CopyToClipboard('tag5231');return false;" class="tag-decoration">release-v0.30</div><div id="tag32281" onclick="CopyToClipboard('tag32281');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/203417ba2ef146280b5620b2a68e302589ac9364" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23201650964" target="_blank">2026-03-17 15:18:16</a></td></tr>
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
