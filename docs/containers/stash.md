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
<tr><td><div id="tag1863" onclick="CopyToClipboard('tag1863');return false;" class="tag-decoration">nightly</div><div id="tag16091" onclick="CopyToClipboard('tag16091');return false;" class="tag-decoration">nightly-801c122</div><div id="tag4661" onclick="CopyToClipboard('tag4661');return false;" class="tag-decoration">nightly-c1fa78e0b28ac1d5164421f31e2d105dcaa2ea40</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/801c122ea02bcd552087c5663179a4d470d066bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33151122270" target="_blank">2026-08-28 07:20:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20278" onclick="CopyToClipboard('tag20278');return false;" class="tag-decoration">release</div><div id="tag14352" onclick="CopyToClipboard('tag14352');return false;" class="tag-decoration">release-1765be4</div><div id="tag23937" onclick="CopyToClipboard('tag23937');return false;" class="tag-decoration">release-0.31.1</div><div id="tag17700" onclick="CopyToClipboard('tag17700');return false;" class="tag-decoration">release-v0</div><div id="tag6524" onclick="CopyToClipboard('tag6524');return false;" class="tag-decoration">release-v0.31</div><div id="tag27538" onclick="CopyToClipboard('tag27538');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1765be43a1b4a6a7c0957645edbd8101fca1a8f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33421261382" target="_blank">2026-08-31 17:45:04</a></td></tr>
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
