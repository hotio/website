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
<tr><td><div id="tag17265" onclick="CopyToClipboard('tag17265');return false;" class="tag-decoration">nightly</div><div id="tag6929" onclick="CopyToClipboard('tag6929');return false;" class="tag-decoration">nightly-dfaa52c</div><div id="tag27962" onclick="CopyToClipboard('tag27962');return false;" class="tag-decoration">nightly-1.5.7-beta.61</div><div id="tag26836" onclick="CopyToClipboard('tag26836');return false;" class="tag-decoration">nightly-v1</div><div id="tag25133" onclick="CopyToClipboard('tag25133');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag4285" onclick="CopyToClipboard('tag4285');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/dfaa52c5f1a0260a773940560d82e30e1afce6df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27915487500" target="_blank">2026-06-21 19:46:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4442" onclick="CopyToClipboard('tag4442');return false;" class="tag-decoration">release</div><div id="tag15797" onclick="CopyToClipboard('tag15797');return false;" class="tag-decoration">release-61fbe12</div><div id="tag3020" onclick="CopyToClipboard('tag3020');return false;" class="tag-decoration">release-1.5.6</div><div id="tag12275" onclick="CopyToClipboard('tag12275');return false;" class="tag-decoration">release-v1</div><div id="tag15605" onclick="CopyToClipboard('tag15605');return false;" class="tag-decoration">release-v1.5</div><div id="tag26956" onclick="CopyToClipboard('tag26956');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/61fbe12f4635a8170afed0b031a1aa6f7b2c0f7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27915487932" target="_blank">2026-06-21 19:46:34</a></td></tr>
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
