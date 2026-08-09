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
<tr><td><div id="tag28875" onclick="CopyToClipboard('tag28875');return false;" class="tag-decoration">nightly</div><div id="tag10634" onclick="CopyToClipboard('tag10634');return false;" class="tag-decoration">nightly-5d857f4</div><div id="tag31660" onclick="CopyToClipboard('tag31660');return false;" class="tag-decoration">nightly-c5ce75d150b7ddca4b6b2ecf1240eea553241f93</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/5d857f4f82dae1abd1abc6830e352c7b472310cb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/31341580002" target="_blank">2026-08-09 23:18:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14196" onclick="CopyToClipboard('tag14196');return false;" class="tag-decoration">release</div><div id="tag24915" onclick="CopyToClipboard('tag24915');return false;" class="tag-decoration">release-3f85216</div><div id="tag22187" onclick="CopyToClipboard('tag22187');return false;" class="tag-decoration">release-0.31.1</div><div id="tag24485" onclick="CopyToClipboard('tag24485');return false;" class="tag-decoration">release-v0</div><div id="tag2828" onclick="CopyToClipboard('tag2828');return false;" class="tag-decoration">release-v0.31</div><div id="tag31001" onclick="CopyToClipboard('tag31001');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3f85216485e96b9a320c4c12fb18e6ed6f823f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30888064369" target="_blank">2026-08-04 07:30:05</a></td></tr>
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
