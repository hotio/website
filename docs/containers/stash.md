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
<tr><td><div id="tag5395" onclick="CopyToClipboard('tag5395');return false;" class="tag-decoration">nightly</div><div id="tag19144" onclick="CopyToClipboard('tag19144');return false;" class="tag-decoration">nightly-f657d83</div><div id="tag26995" onclick="CopyToClipboard('tag26995');return false;" class="tag-decoration">nightly-b9e98e70ed8dfa7faa353716a2559c8e71c69645</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/f657d83d2775434e48c1ad268c9da50e7d3920ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28120522723" target="_blank">2026-06-24 18:25:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27304" onclick="CopyToClipboard('tag27304');return false;" class="tag-decoration">release</div><div id="tag31347" onclick="CopyToClipboard('tag31347');return false;" class="tag-decoration">release-209d308</div><div id="tag20927" onclick="CopyToClipboard('tag20927');return false;" class="tag-decoration">release-0.31.1</div><div id="tag23032" onclick="CopyToClipboard('tag23032');return false;" class="tag-decoration">release-v0</div><div id="tag29830" onclick="CopyToClipboard('tag29830');return false;" class="tag-decoration">release-v0.31</div><div id="tag5961" onclick="CopyToClipboard('tag5961');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/209d3085559a517bc442a5a802cb30f9bc28d9a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28120529721" target="_blank">2026-06-24 18:26:04</a></td></tr>
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
