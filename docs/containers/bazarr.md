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
<tr><td><div id="tag27495" onclick="CopyToClipboard('tag27495');return false;" class="tag-decoration">nightly</div><div id="tag31420" onclick="CopyToClipboard('tag31420');return false;" class="tag-decoration">nightly-68d0303</div><div id="tag19347" onclick="CopyToClipboard('tag19347');return false;" class="tag-decoration">nightly-1.5.6-beta.13</div><div id="tag19335" onclick="CopyToClipboard('tag19335');return false;" class="tag-decoration">nightly-v1</div><div id="tag26809" onclick="CopyToClipboard('tag26809');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag22008" onclick="CopyToClipboard('tag22008');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/68d030353206b4465acf59668ed3108a5fbea452" target="_blank">Version update: 1.5.6-beta.12 => 1.5.6-beta.13</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22089129508" target="_blank">2026-02-17 07:05:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6985" onclick="CopyToClipboard('tag6985');return false;" class="tag-decoration">release</div><div id="tag1016" onclick="CopyToClipboard('tag1016');return false;" class="tag-decoration">release-c06938f</div><div id="tag9818" onclick="CopyToClipboard('tag9818');return false;" class="tag-decoration">release-1.5.5</div><div id="tag7674" onclick="CopyToClipboard('tag7674');return false;" class="tag-decoration">release-v1</div><div id="tag3280" onclick="CopyToClipboard('tag3280');return false;" class="tag-decoration">release-v1.5</div><div id="tag1597" onclick="CopyToClipboard('tag1597');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c06938f0ad30d6084ac6d8605513ea7ab7bc40d6" target="_blank">Version update: 1.5.4 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319983" target="_blank">2026-02-01 18:51:09</a></td></tr>
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
