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
<tr><td><div id="tag31437" onclick="CopyToClipboard('tag31437');return false;" class="tag-decoration">nightly</div><div id="tag4041" onclick="CopyToClipboard('tag4041');return false;" class="tag-decoration">nightly-c20b8e5</div><div id="tag11040" onclick="CopyToClipboard('tag11040');return false;" class="tag-decoration">nightly-1.5.7-beta.69</div><div id="tag1623" onclick="CopyToClipboard('tag1623');return false;" class="tag-decoration">nightly-v1</div><div id="tag22187" onclick="CopyToClipboard('tag22187');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag27648" onclick="CopyToClipboard('tag27648');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c20b8e505f0f158f837793432e058b7452c32a93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28657921846" target="_blank">2026-07-03 11:34:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13338" onclick="CopyToClipboard('tag13338');return false;" class="tag-decoration">release</div><div id="tag8716" onclick="CopyToClipboard('tag8716');return false;" class="tag-decoration">release-8cb189c</div><div id="tag10413" onclick="CopyToClipboard('tag10413');return false;" class="tag-decoration">release-1.5.6</div><div id="tag19226" onclick="CopyToClipboard('tag19226');return false;" class="tag-decoration">release-v1</div><div id="tag19198" onclick="CopyToClipboard('tag19198');return false;" class="tag-decoration">release-v1.5</div><div id="tag9258" onclick="CopyToClipboard('tag9258');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/8cb189c4eb29abbd4643448bbf74bd2e6040d877" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28596398585" target="_blank">2026-07-02 14:07:17</a></td></tr>
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
