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
<tr><td><div id="tag13632" onclick="CopyToClipboard('tag13632');return false;" class="tag-decoration">nightly</div><div id="tag24859" onclick="CopyToClipboard('tag24859');return false;" class="tag-decoration">nightly-d711222</div><div id="tag10036" onclick="CopyToClipboard('tag10036');return false;" class="tag-decoration">nightly-1.6.3-beta.16</div><div id="tag1864" onclick="CopyToClipboard('tag1864');return false;" class="tag-decoration">nightly-v1</div><div id="tag13925" onclick="CopyToClipboard('tag13925');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag10736" onclick="CopyToClipboard('tag10736');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d711222b5a52abe926d1ce176ae9ff00ab186afb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39206686742" target="_blank">2026-10-19 05:51:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30312" onclick="CopyToClipboard('tag30312');return false;" class="tag-decoration">release</div><div id="tag10660" onclick="CopyToClipboard('tag10660');return false;" class="tag-decoration">release-f7f41a4</div><div id="tag15314" onclick="CopyToClipboard('tag15314');return false;" class="tag-decoration">release-1.6.2</div><div id="tag9652" onclick="CopyToClipboard('tag9652');return false;" class="tag-decoration">release-v1</div><div id="tag30787" onclick="CopyToClipboard('tag30787');return false;" class="tag-decoration">release-v1.6</div><div id="tag4600" onclick="CopyToClipboard('tag4600');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f7f41a4ff299207ebb5781efde34d1931751ef36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39479773110" target="_blank">2026-10-20 19:00:49</a></td></tr>
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
