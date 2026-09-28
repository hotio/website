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
<tr><td><div id="tag3387" onclick="CopyToClipboard('tag3387');return false;" class="tag-decoration">nightly</div><div id="tag17451" onclick="CopyToClipboard('tag17451');return false;" class="tag-decoration">nightly-6dcc181</div><div id="tag27949" onclick="CopyToClipboard('tag27949');return false;" class="tag-decoration">nightly-1.6.3-beta.0</div><div id="tag4041" onclick="CopyToClipboard('tag4041');return false;" class="tag-decoration">nightly-v1</div><div id="tag16765" onclick="CopyToClipboard('tag16765');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag14300" onclick="CopyToClipboard('tag14300');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6dcc181bddb2865f63aeba734f1f1ed3af47a1fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36440782669" target="_blank">2026-09-28 15:04:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31392" onclick="CopyToClipboard('tag31392');return false;" class="tag-decoration">release</div><div id="tag4635" onclick="CopyToClipboard('tag4635');return false;" class="tag-decoration">release-2e34cec</div><div id="tag22978" onclick="CopyToClipboard('tag22978');return false;" class="tag-decoration">release-1.6.2</div><div id="tag1669" onclick="CopyToClipboard('tag1669');return false;" class="tag-decoration">release-v1</div><div id="tag9717" onclick="CopyToClipboard('tag9717');return false;" class="tag-decoration">release-v1.6</div><div id="tag11456" onclick="CopyToClipboard('tag11456');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2e34cec9618eb69ff681329f67e045c321d7e811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36226118292" target="_blank">2026-09-26 07:13:18</a></td></tr>
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
