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
<tr><td><div id="tag29584" onclick="CopyToClipboard('tag29584');return false;" class="tag-decoration">nightly</div><div id="tag22695" onclick="CopyToClipboard('tag22695');return false;" class="tag-decoration">nightly-c7add10</div><div id="tag690" onclick="CopyToClipboard('tag690');return false;" class="tag-decoration">nightly-1.6.1-beta.37</div><div id="tag22192" onclick="CopyToClipboard('tag22192');return false;" class="tag-decoration">nightly-v1</div><div id="tag3515" onclick="CopyToClipboard('tag3515');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17386" onclick="CopyToClipboard('tag17386');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c7add1080e9a52711fe7ba3e9665448382fbebf2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33969742064" target="_blank">2026-09-05 13:43:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9564" onclick="CopyToClipboard('tag9564');return false;" class="tag-decoration">release</div><div id="tag16366" onclick="CopyToClipboard('tag16366');return false;" class="tag-decoration">release-e318e9e</div><div id="tag26987" onclick="CopyToClipboard('tag26987');return false;" class="tag-decoration">release-1.6.0</div><div id="tag22701" onclick="CopyToClipboard('tag22701');return false;" class="tag-decoration">release-v1</div><div id="tag19126" onclick="CopyToClipboard('tag19126');return false;" class="tag-decoration">release-v1.6</div><div id="tag25794" onclick="CopyToClipboard('tag25794');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e318e9e5ac629322c94481ddb0b5c5b6cf901cfe" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33969746366" target="_blank">2026-09-05 13:43:58</a></td></tr>
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
