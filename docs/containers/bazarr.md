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
<tr><td><div id="tag23160" onclick="CopyToClipboard('tag23160');return false;" class="tag-decoration">nightly</div><div id="tag31653" onclick="CopyToClipboard('tag31653');return false;" class="tag-decoration">nightly-9329583</div><div id="tag10338" onclick="CopyToClipboard('tag10338');return false;" class="tag-decoration">nightly-1.6.2-beta.0</div><div id="tag14715" onclick="CopyToClipboard('tag14715');return false;" class="tag-decoration">nightly-v1</div><div id="tag31998" onclick="CopyToClipboard('tag31998');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17775" onclick="CopyToClipboard('tag17775');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9329583d0508ac9f9d7f754b2ac33d5515d276db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35378378914" target="_blank">2026-09-18 18:07:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25166" onclick="CopyToClipboard('tag25166');return false;" class="tag-decoration">release</div><div id="tag11023" onclick="CopyToClipboard('tag11023');return false;" class="tag-decoration">release-be82526</div><div id="tag20017" onclick="CopyToClipboard('tag20017');return false;" class="tag-decoration">release-1.6.1</div><div id="tag10694" onclick="CopyToClipboard('tag10694');return false;" class="tag-decoration">release-v1</div><div id="tag31064" onclick="CopyToClipboard('tag31064');return false;" class="tag-decoration">release-v1.6</div><div id="tag31513" onclick="CopyToClipboard('tag31513');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/be82526ad8702936bfa2c8a09bff8dc8aea50d50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35307189608" target="_blank">2026-09-18 04:29:55</a></td></tr>
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
