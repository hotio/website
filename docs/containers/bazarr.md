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
<tr><td><div id="tag13649" onclick="CopyToClipboard('tag13649');return false;" class="tag-decoration">nightly</div><div id="tag10938" onclick="CopyToClipboard('tag10938');return false;" class="tag-decoration">nightly-88b6c99</div><div id="tag24068" onclick="CopyToClipboard('tag24068');return false;" class="tag-decoration">nightly-1.6.2-beta.0</div><div id="tag30794" onclick="CopyToClipboard('tag30794');return false;" class="tag-decoration">nightly-v1</div><div id="tag17335" onclick="CopyToClipboard('tag17335');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag12455" onclick="CopyToClipboard('tag12455');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/88b6c994e86f9d007fda4cc1398f5003e8c742c4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35256086712" target="_blank">2026-09-17 17:59:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29207" onclick="CopyToClipboard('tag29207');return false;" class="tag-decoration">release</div><div id="tag19511" onclick="CopyToClipboard('tag19511');return false;" class="tag-decoration">release-3b094cb</div><div id="tag14517" onclick="CopyToClipboard('tag14517');return false;" class="tag-decoration">release-1.6.1</div><div id="tag23871" onclick="CopyToClipboard('tag23871');return false;" class="tag-decoration">release-v1</div><div id="tag24158" onclick="CopyToClipboard('tag24158');return false;" class="tag-decoration">release-v1.6</div><div id="tag10507" onclick="CopyToClipboard('tag10507');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/3b094cb4876ad8849332a17d26c214f0df3951ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35256090521" target="_blank">2026-09-17 17:59:38</a></td></tr>
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
