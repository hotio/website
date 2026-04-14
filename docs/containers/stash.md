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
<tr><td><div id="tag21689" onclick="CopyToClipboard('tag21689');return false;" class="tag-decoration">nightly</div><div id="tag2114" onclick="CopyToClipboard('tag2114');return false;" class="tag-decoration">nightly-9aeb5b3</div><div id="tag13292" onclick="CopyToClipboard('tag13292');return false;" class="tag-decoration">nightly-26cd867a6a6acfed12c99fcdb14624f4c5661eeb</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9aeb5b3486fbd38fe8b91e76bb29ca1238375001" target="_blank">Version update: 4de2351e7cc990d7ccd7cb6c84c275cd53bf6e55 => 26cd867a6a6acfed12c99fcdb14624f4c5661eeb</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24383309633" target="_blank">2026-04-14 05:52:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12264" onclick="CopyToClipboard('tag12264');return false;" class="tag-decoration">release</div><div id="tag7415" onclick="CopyToClipboard('tag7415');return false;" class="tag-decoration">release-9a764c6</div><div id="tag9035" onclick="CopyToClipboard('tag9035');return false;" class="tag-decoration">release-0.31.1</div><div id="tag8369" onclick="CopyToClipboard('tag8369');return false;" class="tag-decoration">release-v0</div><div id="tag20146" onclick="CopyToClipboard('tag20146');return false;" class="tag-decoration">release-v0.31</div><div id="tag18366" onclick="CopyToClipboard('tag18366');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/9a764c69c4fc6071bcf7a92555a31856fe75924b" target="_blank">Version update: 0.31.0 => 0.31.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24325750118" target="_blank">2026-04-13 04:31:30</a></td></tr>
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
