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
<tr><td><div id="tag20734" onclick="CopyToClipboard('tag20734');return false;" class="tag-decoration">nightly</div><div id="tag10686" onclick="CopyToClipboard('tag10686');return false;" class="tag-decoration">nightly-6dbee28</div><div id="tag31059" onclick="CopyToClipboard('tag31059');return false;" class="tag-decoration">nightly-1.5.7-beta.58</div><div id="tag18689" onclick="CopyToClipboard('tag18689');return false;" class="tag-decoration">nightly-v1</div><div id="tag17649" onclick="CopyToClipboard('tag17649');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag279" onclick="CopyToClipboard('tag279');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6dbee283706ffc3817b6e34cd9af9b9f4d607566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27686858872" target="_blank">2026-06-17 11:50:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4646" onclick="CopyToClipboard('tag4646');return false;" class="tag-decoration">release</div><div id="tag31618" onclick="CopyToClipboard('tag31618');return false;" class="tag-decoration">release-2665a5c</div><div id="tag17423" onclick="CopyToClipboard('tag17423');return false;" class="tag-decoration">release-1.5.6</div><div id="tag25066" onclick="CopyToClipboard('tag25066');return false;" class="tag-decoration">release-v1</div><div id="tag1086" onclick="CopyToClipboard('tag1086');return false;" class="tag-decoration">release-v1.5</div><div id="tag28091" onclick="CopyToClipboard('tag28091');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2665a5ca6d05356169a5825268ada7b83dd9e004" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27283242993" target="_blank">2026-06-10 14:25:45</a></td></tr>
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
