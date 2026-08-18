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
<tr><td><div id="tag12815" onclick="CopyToClipboard('tag12815');return false;" class="tag-decoration">nightly</div><div id="tag4432" onclick="CopyToClipboard('tag4432');return false;" class="tag-decoration">nightly-937650d</div><div id="tag26252" onclick="CopyToClipboard('tag26252');return false;" class="tag-decoration">nightly-1.6.1-beta.25</div><div id="tag8759" onclick="CopyToClipboard('tag8759');return false;" class="tag-decoration">nightly-v1</div><div id="tag11077" onclick="CopyToClipboard('tag11077');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag24670" onclick="CopyToClipboard('tag24670');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/937650d7af3bd70b9694554b2b3f9b5107749bab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32144015605" target="_blank">2026-08-18 13:43:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19258" onclick="CopyToClipboard('tag19258');return false;" class="tag-decoration">release</div><div id="tag29054" onclick="CopyToClipboard('tag29054');return false;" class="tag-decoration">release-d54afc2</div><div id="tag21433" onclick="CopyToClipboard('tag21433');return false;" class="tag-decoration">release-1.6.0</div><div id="tag19631" onclick="CopyToClipboard('tag19631');return false;" class="tag-decoration">release-v1</div><div id="tag10856" onclick="CopyToClipboard('tag10856');return false;" class="tag-decoration">release-v1.6</div><div id="tag29505" onclick="CopyToClipboard('tag29505');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/d54afc2ec3ebc95b2b8b10af859127ec135a7665" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/31887450021" target="_blank">2026-08-15 13:31:39</a></td></tr>
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
