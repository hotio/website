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
<tr><td><div id="tag9736" onclick="CopyToClipboard('tag9736');return false;" class="tag-decoration">nightly</div><div id="tag26449" onclick="CopyToClipboard('tag26449');return false;" class="tag-decoration">nightly-b6aabb0</div><div id="tag8302" onclick="CopyToClipboard('tag8302');return false;" class="tag-decoration">nightly-1.6.1-beta.36</div><div id="tag15626" onclick="CopyToClipboard('tag15626');return false;" class="tag-decoration">nightly-v1</div><div id="tag13636" onclick="CopyToClipboard('tag13636');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag1472" onclick="CopyToClipboard('tag1472');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b6aabb00c1ab4a0a180faa56713cd242d6c1993f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33635329230" target="_blank">2026-09-02 13:22:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19243" onclick="CopyToClipboard('tag19243');return false;" class="tag-decoration">release</div><div id="tag29321" onclick="CopyToClipboard('tag29321');return false;" class="tag-decoration">release-aa57660</div><div id="tag26744" onclick="CopyToClipboard('tag26744');return false;" class="tag-decoration">release-1.6.0</div><div id="tag30376" onclick="CopyToClipboard('tag30376');return false;" class="tag-decoration">release-v1</div><div id="tag32291" onclick="CopyToClipboard('tag32291');return false;" class="tag-decoration">release-v1.6</div><div id="tag22994" onclick="CopyToClipboard('tag22994');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/aa5766041aa5f42788f3b3b4b2694781d256ba69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33609283370" target="_blank">2026-09-02 08:32:44</a></td></tr>
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
