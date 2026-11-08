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
<tr><td><div id="tag114" onclick="CopyToClipboard('tag114');return false;" class="tag-decoration">nightly</div><div id="tag16694" onclick="CopyToClipboard('tag16694');return false;" class="tag-decoration">nightly-1b5c812</div><div id="tag2996" onclick="CopyToClipboard('tag2996');return false;" class="tag-decoration">nightly-1.6.3-beta.28</div><div id="tag23455" onclick="CopyToClipboard('tag23455');return false;" class="tag-decoration">nightly-v1</div><div id="tag26986" onclick="CopyToClipboard('tag26986');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag27176" onclick="CopyToClipboard('tag27176');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1b5c8127742c6f539f2864ddec9612b5e4463303" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42456899734" target="_blank">2026-11-08 06:58:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6885" onclick="CopyToClipboard('tag6885');return false;" class="tag-decoration">release</div><div id="tag605" onclick="CopyToClipboard('tag605');return false;" class="tag-decoration">release-7509114</div><div id="tag28114" onclick="CopyToClipboard('tag28114');return false;" class="tag-decoration">release-1.6.2</div><div id="tag4986" onclick="CopyToClipboard('tag4986');return false;" class="tag-decoration">release-v1</div><div id="tag25713" onclick="CopyToClipboard('tag25713');return false;" class="tag-decoration">release-v1.6</div><div id="tag14965" onclick="CopyToClipboard('tag14965');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/7509114e1bf0832ceda76fb7761a692ae33b117e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42456896803" target="_blank">2026-11-08 06:58:56</a></td></tr>
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
