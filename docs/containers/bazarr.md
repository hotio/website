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
<tr><td><div id="tag30847" onclick="CopyToClipboard('tag30847');return false;" class="tag-decoration">nightly</div><div id="tag722" onclick="CopyToClipboard('tag722');return false;" class="tag-decoration">nightly-34da398</div><div id="tag18121" onclick="CopyToClipboard('tag18121');return false;" class="tag-decoration">nightly-1.6.3-beta.29</div><div id="tag16729" onclick="CopyToClipboard('tag16729');return false;" class="tag-decoration">nightly-v1</div><div id="tag24086" onclick="CopyToClipboard('tag24086');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag26068" onclick="CopyToClipboard('tag26068');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/34da3985f3b3cf6ca0085fdd78679dd05a6d1f47" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42852300126" target="_blank">2026-11-10 16:13:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12783" onclick="CopyToClipboard('tag12783');return false;" class="tag-decoration">release</div><div id="tag21632" onclick="CopyToClipboard('tag21632');return false;" class="tag-decoration">release-7509114</div><div id="tag19244" onclick="CopyToClipboard('tag19244');return false;" class="tag-decoration">release-1.6.2</div><div id="tag1048" onclick="CopyToClipboard('tag1048');return false;" class="tag-decoration">release-v1</div><div id="tag10740" onclick="CopyToClipboard('tag10740');return false;" class="tag-decoration">release-v1.6</div><div id="tag1770" onclick="CopyToClipboard('tag1770');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/7509114e1bf0832ceda76fb7761a692ae33b117e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42456896803" target="_blank">2026-11-08 06:58:56</a></td></tr>
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
