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
<tr><td><div id="tag11358" onclick="CopyToClipboard('tag11358');return false;" class="tag-decoration">nightly</div><div id="tag3257" onclick="CopyToClipboard('tag3257');return false;" class="tag-decoration">nightly-4906154</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">nightly-1.6.3-beta.22</div><div id="tag11906" onclick="CopyToClipboard('tag11906');return false;" class="tag-decoration">nightly-v1</div><div id="tag29331" onclick="CopyToClipboard('tag29331');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag16202" onclick="CopyToClipboard('tag16202');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4906154def06a1ceb5e837cff7951e4e64ff0c9d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40677164156" target="_blank">2026-10-28 11:04:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19627" onclick="CopyToClipboard('tag19627');return false;" class="tag-decoration">release</div><div id="tag803" onclick="CopyToClipboard('tag803');return false;" class="tag-decoration">release-c7342a9</div><div id="tag20220" onclick="CopyToClipboard('tag20220');return false;" class="tag-decoration">release-1.6.2</div><div id="tag29750" onclick="CopyToClipboard('tag29750');return false;" class="tag-decoration">release-v1</div><div id="tag25958" onclick="CopyToClipboard('tag25958');return false;" class="tag-decoration">release-v1.6</div><div id="tag21725" onclick="CopyToClipboard('tag21725');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c7342a9011d02f96c6eb95f7316efc02240b1514" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40573264133" target="_blank">2026-10-27 19:54:14</a></td></tr>
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
