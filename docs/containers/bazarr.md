---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7208" onclick="CopyToClipboard('tag7208');return false;" class="tag-decoration">nightly</div><div id="tag26831" onclick="CopyToClipboard('tag26831');return false;" class="tag-decoration">nightly-2a4fbb9</div><div id="tag29404" onclick="CopyToClipboard('tag29404');return false;" class="tag-decoration">nightly-1.6.1-beta.1</div><div id="tag1196" onclick="CopyToClipboard('tag1196');return false;" class="tag-decoration">nightly-v1</div><div id="tag191" onclick="CopyToClipboard('tag191');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17798" onclick="CopyToClipboard('tag17798');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/2a4fbb9309e066e14910d754f067124fe41e37c2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29308854757" target="_blank">2026-07-14 05:33:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13736" onclick="CopyToClipboard('tag13736');return false;" class="tag-decoration">release</div><div id="tag2325" onclick="CopyToClipboard('tag2325');return false;" class="tag-decoration">release-8261181</div><div id="tag17453" onclick="CopyToClipboard('tag17453');return false;" class="tag-decoration">release-1.6.0</div><div id="tag18787" onclick="CopyToClipboard('tag18787');return false;" class="tag-decoration">release-v1</div><div id="tag30041" onclick="CopyToClipboard('tag30041');return false;" class="tag-decoration">release-v1.6</div><div id="tag4719" onclick="CopyToClipboard('tag4719');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/8261181a8dad99e61c8f40bf26c1074bdbd474f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29317068404" target="_blank">2026-07-14 08:10:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
