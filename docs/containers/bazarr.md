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
<tr><td><div id="tag26225" onclick="CopyToClipboard('tag26225');return false;" class="tag-decoration">nightly</div><div id="tag11846" onclick="CopyToClipboard('tag11846');return false;" class="tag-decoration">nightly-93acbe6</div><div id="tag20800" onclick="CopyToClipboard('tag20800');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag27452" onclick="CopyToClipboard('tag27452');return false;" class="tag-decoration">nightly-v1</div><div id="tag29566" onclick="CopyToClipboard('tag29566');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag11320" onclick="CopyToClipboard('tag11320');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/93acbe673b6eb5e6c0399d7947e0f7e6035705eb" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25714895270" target="_blank">2026-05-12 05:14:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16163" onclick="CopyToClipboard('tag16163');return false;" class="tag-decoration">release</div><div id="tag1942" onclick="CopyToClipboard('tag1942');return false;" class="tag-decoration">release-0e7172a</div><div id="tag19668" onclick="CopyToClipboard('tag19668');return false;" class="tag-decoration">release-1.5.6</div><div id="tag26013" onclick="CopyToClipboard('tag26013');return false;" class="tag-decoration">release-v1</div><div id="tag14379" onclick="CopyToClipboard('tag14379');return false;" class="tag-decoration">release-v1.5</div><div id="tag10090" onclick="CopyToClipboard('tag10090');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0e7172a1e4272a9feba318ea2f44e6e46be06c0e" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25714898346" target="_blank">2026-05-12 05:14:54</a></td></tr>
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
