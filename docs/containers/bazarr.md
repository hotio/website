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
<tr><td><div id="tag31952" onclick="CopyToClipboard('tag31952');return false;" class="tag-decoration">nightly</div><div id="tag12499" onclick="CopyToClipboard('tag12499');return false;" class="tag-decoration">nightly-8501394</div><div id="tag535" onclick="CopyToClipboard('tag535');return false;" class="tag-decoration">nightly-1.6.1-beta.21</div><div id="tag25668" onclick="CopyToClipboard('tag25668');return false;" class="tag-decoration">nightly-v1</div><div id="tag19122" onclick="CopyToClipboard('tag19122');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag18606" onclick="CopyToClipboard('tag18606');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/850139420d5e308df0b3b8bbeaacf7a7ff542250" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/31467939972" target="_blank">2026-08-11 07:11:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21407" onclick="CopyToClipboard('tag21407');return false;" class="tag-decoration">release</div><div id="tag23678" onclick="CopyToClipboard('tag23678');return false;" class="tag-decoration">release-7120114</div><div id="tag24996" onclick="CopyToClipboard('tag24996');return false;" class="tag-decoration">release-1.6.0</div><div id="tag27909" onclick="CopyToClipboard('tag27909');return false;" class="tag-decoration">release-v1</div><div id="tag14033" onclick="CopyToClipboard('tag14033');return false;" class="tag-decoration">release-v1.6</div><div id="tag2908" onclick="CopyToClipboard('tag2908');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/71201143906eefebb2e76a51047810d776a4fd03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30379470005" target="_blank">2026-07-28 16:41:56</a></td></tr>
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
