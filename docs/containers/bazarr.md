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
<tr><td><div id="tag22859" onclick="CopyToClipboard('tag22859');return false;" class="tag-decoration">nightly</div><div id="tag20107" onclick="CopyToClipboard('tag20107');return false;" class="tag-decoration">nightly-6ebd8b2</div><div id="tag14548" onclick="CopyToClipboard('tag14548');return false;" class="tag-decoration">nightly-1.5.7-beta.52</div><div id="tag872" onclick="CopyToClipboard('tag872');return false;" class="tag-decoration">nightly-v1</div><div id="tag27668" onclick="CopyToClipboard('tag27668');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag711" onclick="CopyToClipboard('tag711');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6ebd8b2a8acd028c5c636f2923362866d0bccff9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27088414881" target="_blank">2026-06-07 09:17:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2711" onclick="CopyToClipboard('tag2711');return false;" class="tag-decoration">release</div><div id="tag5403" onclick="CopyToClipboard('tag5403');return false;" class="tag-decoration">release-a2f0a5c</div><div id="tag17885" onclick="CopyToClipboard('tag17885');return false;" class="tag-decoration">release-1.5.6</div><div id="tag6826" onclick="CopyToClipboard('tag6826');return false;" class="tag-decoration">release-v1</div><div id="tag25271" onclick="CopyToClipboard('tag25271');return false;" class="tag-decoration">release-v1.5</div><div id="tag30328" onclick="CopyToClipboard('tag30328');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a2f0a5cfef502abadb1e000e878a3c633b1b2a76" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26710768166" target="_blank">2026-05-31 11:00:33</a></td></tr>
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
