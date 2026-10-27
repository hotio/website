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
<tr><td><div id="tag20683" onclick="CopyToClipboard('tag20683');return false;" class="tag-decoration">nightly</div><div id="tag31867" onclick="CopyToClipboard('tag31867');return false;" class="tag-decoration">nightly-437c27a</div><div id="tag11482" onclick="CopyToClipboard('tag11482');return false;" class="tag-decoration">nightly-1.6.3-beta.21</div><div id="tag32765" onclick="CopyToClipboard('tag32765');return false;" class="tag-decoration">nightly-v1</div><div id="tag29350" onclick="CopyToClipboard('tag29350');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5026" onclick="CopyToClipboard('tag5026');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/437c27afcf0a2632c6d5a439e83ed8a33a7f35b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40303048118" target="_blank">2026-10-26 09:53:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27829" onclick="CopyToClipboard('tag27829');return false;" class="tag-decoration">release</div><div id="tag16282" onclick="CopyToClipboard('tag16282');return false;" class="tag-decoration">release-500fb54</div><div id="tag2072" onclick="CopyToClipboard('tag2072');return false;" class="tag-decoration">release-1.6.2</div><div id="tag18294" onclick="CopyToClipboard('tag18294');return false;" class="tag-decoration">release-v1</div><div id="tag23" onclick="CopyToClipboard('tag23');return false;" class="tag-decoration">release-v1.6</div><div id="tag19114" onclick="CopyToClipboard('tag19114');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/500fb5425b6a6360ba97f4138498b72605019455" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40518166844" target="_blank">2026-10-27 14:07:44</a></td></tr>
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
