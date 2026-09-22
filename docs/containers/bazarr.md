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
<tr><td><div id="tag28698" onclick="CopyToClipboard('tag28698');return false;" class="tag-decoration">nightly</div><div id="tag9005" onclick="CopyToClipboard('tag9005');return false;" class="tag-decoration">nightly-3a359f5</div><div id="tag21218" onclick="CopyToClipboard('tag21218');return false;" class="tag-decoration">nightly-1.6.2-beta.3</div><div id="tag7042" onclick="CopyToClipboard('tag7042');return false;" class="tag-decoration">nightly-v1</div><div id="tag27823" onclick="CopyToClipboard('tag27823');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5857" onclick="CopyToClipboard('tag5857');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3a359f5bfeb6c8ff51627040aa5d9f5bc338f1d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35708793339" target="_blank">2026-09-22 09:09:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6778" onclick="CopyToClipboard('tag6778');return false;" class="tag-decoration">release</div><div id="tag19395" onclick="CopyToClipboard('tag19395');return false;" class="tag-decoration">release-1ee6b86</div><div id="tag12735" onclick="CopyToClipboard('tag12735');return false;" class="tag-decoration">release-1.6.1</div><div id="tag5449" onclick="CopyToClipboard('tag5449');return false;" class="tag-decoration">release-v1</div><div id="tag2700" onclick="CopyToClipboard('tag2700');return false;" class="tag-decoration">release-v1.6</div><div id="tag24221" onclick="CopyToClipboard('tag24221');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/1ee6b86402bff02dbe648622d92cfe4c7e8c848a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35708788132" target="_blank">2026-09-22 09:09:31</a></td></tr>
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
