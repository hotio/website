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
<tr><td><div id="tag1086" onclick="CopyToClipboard('tag1086');return false;" class="tag-decoration">nightly</div><div id="tag13718" onclick="CopyToClipboard('tag13718');return false;" class="tag-decoration">nightly-42adba6</div><div id="tag20132" onclick="CopyToClipboard('tag20132');return false;" class="tag-decoration">nightly-1.5.5-beta.5</div><div id="tag20518" onclick="CopyToClipboard('tag20518');return false;" class="tag-decoration">nightly-v1</div><div id="tag1551" onclick="CopyToClipboard('tag1551');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag2369" onclick="CopyToClipboard('tag2369');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/42adba699151e93055bad5a533105317c170b304" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21059639735" target="_blank">2026-01-16 07:54:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19027" onclick="CopyToClipboard('tag19027');return false;" class="tag-decoration">release</div><div id="tag30126" onclick="CopyToClipboard('tag30126');return false;" class="tag-decoration">release-cf3e0bc</div><div id="tag28035" onclick="CopyToClipboard('tag28035');return false;" class="tag-decoration">release-1.5.4</div><div id="tag7665" onclick="CopyToClipboard('tag7665');return false;" class="tag-decoration">release-v1</div><div id="tag18550" onclick="CopyToClipboard('tag18550');return false;" class="tag-decoration">release-v1.5</div><div id="tag8758" onclick="CopyToClipboard('tag8758');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/cf3e0bce57a9a4099d77b0a9f3802825ea954a37" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21059640068" target="_blank">2026-01-16 07:54:56</a></td></tr>
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
