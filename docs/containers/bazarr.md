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
<tr><td><div id="tag18705" onclick="CopyToClipboard('tag18705');return false;" class="tag-decoration">nightly</div><div id="tag11251" onclick="CopyToClipboard('tag11251');return false;" class="tag-decoration">nightly-8dbd14f</div><div id="tag19765" onclick="CopyToClipboard('tag19765');return false;" class="tag-decoration">nightly-1.6.1-beta.35</div><div id="tag1825" onclick="CopyToClipboard('tag1825');return false;" class="tag-decoration">nightly-v1</div><div id="tag3440" onclick="CopyToClipboard('tag3440');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5689" onclick="CopyToClipboard('tag5689');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/8dbd14fadcca66644ed67f4105c665f04b5df379" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33482184050" target="_blank">2026-09-01 07:26:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18502" onclick="CopyToClipboard('tag18502');return false;" class="tag-decoration">release</div><div id="tag11573" onclick="CopyToClipboard('tag11573');return false;" class="tag-decoration">release-a430827</div><div id="tag11852" onclick="CopyToClipboard('tag11852');return false;" class="tag-decoration">release-1.6.0</div><div id="tag17133" onclick="CopyToClipboard('tag17133');return false;" class="tag-decoration">release-v1</div><div id="tag24482" onclick="CopyToClipboard('tag24482');return false;" class="tag-decoration">release-v1.6</div><div id="tag26688" onclick="CopyToClipboard('tag26688');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a43082712d49823e54c3965be2658e04e2c564a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33512136039" target="_blank">2026-09-01 13:13:47</a></td></tr>
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
