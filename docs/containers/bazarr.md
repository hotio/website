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
<tr><td><div id="tag8469" onclick="CopyToClipboard('tag8469');return false;" class="tag-decoration">nightly</div><div id="tag18164" onclick="CopyToClipboard('tag18164');return false;" class="tag-decoration">nightly-9087645</div><div id="tag6470" onclick="CopyToClipboard('tag6470');return false;" class="tag-decoration">nightly-1.6.3-beta.4</div><div id="tag22352" onclick="CopyToClipboard('tag22352');return false;" class="tag-decoration">nightly-v1</div><div id="tag2718" onclick="CopyToClipboard('tag2718');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag30780" onclick="CopyToClipboard('tag30780');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/908764565655fad2f736f9dd61afcf980efdd394" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37197202240" target="_blank">2026-10-04 10:59:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17162" onclick="CopyToClipboard('tag17162');return false;" class="tag-decoration">release</div><div id="tag22087" onclick="CopyToClipboard('tag22087');return false;" class="tag-decoration">release-e5016dd</div><div id="tag14515" onclick="CopyToClipboard('tag14515');return false;" class="tag-decoration">release-1.6.2</div><div id="tag5857" onclick="CopyToClipboard('tag5857');return false;" class="tag-decoration">release-v1</div><div id="tag14542" onclick="CopyToClipboard('tag14542');return false;" class="tag-decoration">release-v1.6</div><div id="tag25876" onclick="CopyToClipboard('tag25876');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e5016dd1a27ea4ec5a06284ff663fdb65505507b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36929977788" target="_blank">2026-10-01 21:38:06</a></td></tr>
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
