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
<tr><td><div id="tag24266" onclick="CopyToClipboard('tag24266');return false;" class="tag-decoration">nightly</div><div id="tag32317" onclick="CopyToClipboard('tag32317');return false;" class="tag-decoration">nightly-e2d370b</div><div id="tag6433" onclick="CopyToClipboard('tag6433');return false;" class="tag-decoration">nightly-1.6.3-beta.18</div><div id="tag25994" onclick="CopyToClipboard('tag25994');return false;" class="tag-decoration">nightly-v1</div><div id="tag20946" onclick="CopyToClipboard('tag20946');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag13663" onclick="CopyToClipboard('tag13663');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/e2d370b8ae492be852d2d848665b02e19ab7c9cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39560594852" target="_blank">2026-10-21 07:14:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10011" onclick="CopyToClipboard('tag10011');return false;" class="tag-decoration">release</div><div id="tag11870" onclick="CopyToClipboard('tag11870');return false;" class="tag-decoration">release-f7f41a4</div><div id="tag14707" onclick="CopyToClipboard('tag14707');return false;" class="tag-decoration">release-1.6.2</div><div id="tag14769" onclick="CopyToClipboard('tag14769');return false;" class="tag-decoration">release-v1</div><div id="tag20912" onclick="CopyToClipboard('tag20912');return false;" class="tag-decoration">release-v1.6</div><div id="tag19730" onclick="CopyToClipboard('tag19730');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f7f41a4ff299207ebb5781efde34d1931751ef36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39479773110" target="_blank">2026-10-20 19:00:49</a></td></tr>
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
