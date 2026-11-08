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
<tr><td><div id="tag14102" onclick="CopyToClipboard('tag14102');return false;" class="tag-decoration">nightly</div><div id="tag28610" onclick="CopyToClipboard('tag28610');return false;" class="tag-decoration">nightly-1b5c812</div><div id="tag10125" onclick="CopyToClipboard('tag10125');return false;" class="tag-decoration">nightly-1.6.3-beta.28</div><div id="tag1936" onclick="CopyToClipboard('tag1936');return false;" class="tag-decoration">nightly-v1</div><div id="tag11897" onclick="CopyToClipboard('tag11897');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag27883" onclick="CopyToClipboard('tag27883');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1b5c8127742c6f539f2864ddec9612b5e4463303" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42456899734" target="_blank">2026-11-08 06:58:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8810" onclick="CopyToClipboard('tag8810');return false;" class="tag-decoration">release</div><div id="tag448" onclick="CopyToClipboard('tag448');return false;" class="tag-decoration">release-d406e6f</div><div id="tag11624" onclick="CopyToClipboard('tag11624');return false;" class="tag-decoration">release-1.6.2</div><div id="tag8320" onclick="CopyToClipboard('tag8320');return false;" class="tag-decoration">release-v1</div><div id="tag11299" onclick="CopyToClipboard('tag11299');return false;" class="tag-decoration">release-v1.6</div><div id="tag30285" onclick="CopyToClipboard('tag30285');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/d406e6fb8221e0691789044e8422ddde39be7677" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42307578104" target="_blank">2026-11-06 22:49:35</a></td></tr>
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
