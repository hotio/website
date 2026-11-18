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
<tr><td><div id="tag9033" onclick="CopyToClipboard('tag9033');return false;" class="tag-decoration">nightly</div><div id="tag3450" onclick="CopyToClipboard('tag3450');return false;" class="tag-decoration">nightly-277d9b0</div><div id="tag21228" onclick="CopyToClipboard('tag21228');return false;" class="tag-decoration">nightly-1.6.3-beta.35</div><div id="tag18417" onclick="CopyToClipboard('tag18417');return false;" class="tag-decoration">nightly-v1</div><div id="tag22582" onclick="CopyToClipboard('tag22582');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag11958" onclick="CopyToClipboard('tag11958');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/277d9b0bf48ce10157a669ad3f9804c0a19e8842" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/44306864227" target="_blank">2026-11-18 12:44:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29408" onclick="CopyToClipboard('tag29408');return false;" class="tag-decoration">release</div><div id="tag26405" onclick="CopyToClipboard('tag26405');return false;" class="tag-decoration">release-20e929f</div><div id="tag8479" onclick="CopyToClipboard('tag8479');return false;" class="tag-decoration">release-1.6.2</div><div id="tag8792" onclick="CopyToClipboard('tag8792');return false;" class="tag-decoration">release-v1</div><div id="tag12346" onclick="CopyToClipboard('tag12346');return false;" class="tag-decoration">release-v1.6</div><div id="tag826" onclick="CopyToClipboard('tag826');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/20e929f938d582662e98d270da3cb86872c5c0ea" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/44010492551" target="_blank">2026-11-17 03:28:44</a></td></tr>
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
