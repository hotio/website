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
<tr><td><div id="tag1158" onclick="CopyToClipboard('tag1158');return false;" class="tag-decoration">nightly</div><div id="tag32016" onclick="CopyToClipboard('tag32016');return false;" class="tag-decoration">nightly-dcb6442</div><div id="tag2333" onclick="CopyToClipboard('tag2333');return false;" class="tag-decoration">nightly-1.6.1-beta.18</div><div id="tag20788" onclick="CopyToClipboard('tag20788');return false;" class="tag-decoration">nightly-v1</div><div id="tag18180" onclick="CopyToClipboard('tag18180');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag16220" onclick="CopyToClipboard('tag16220');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/dcb644212357559bcaddbcbfbfde97c4f1898312" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/31085823673" target="_blank">2026-08-06 08:39:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29475" onclick="CopyToClipboard('tag29475');return false;" class="tag-decoration">release</div><div id="tag4166" onclick="CopyToClipboard('tag4166');return false;" class="tag-decoration">release-7120114</div><div id="tag18378" onclick="CopyToClipboard('tag18378');return false;" class="tag-decoration">release-1.6.0</div><div id="tag6697" onclick="CopyToClipboard('tag6697');return false;" class="tag-decoration">release-v1</div><div id="tag28550" onclick="CopyToClipboard('tag28550');return false;" class="tag-decoration">release-v1.6</div><div id="tag21470" onclick="CopyToClipboard('tag21470');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/71201143906eefebb2e76a51047810d776a4fd03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30379470005" target="_blank">2026-07-28 16:41:56</a></td></tr>
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
