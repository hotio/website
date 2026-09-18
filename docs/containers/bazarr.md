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
<tr><td><div id="tag10602" onclick="CopyToClipboard('tag10602');return false;" class="tag-decoration">nightly</div><div id="tag26110" onclick="CopyToClipboard('tag26110');return false;" class="tag-decoration">nightly-2c6b286</div><div id="tag10538" onclick="CopyToClipboard('tag10538');return false;" class="tag-decoration">nightly-1.6.2-beta.0</div><div id="tag23692" onclick="CopyToClipboard('tag23692');return false;" class="tag-decoration">nightly-v1</div><div id="tag21264" onclick="CopyToClipboard('tag21264');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5689" onclick="CopyToClipboard('tag5689');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/2c6b2868375212a5d212450f443b0605afbb0c67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35307184271" target="_blank">2026-09-18 04:29:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25839" onclick="CopyToClipboard('tag25839');return false;" class="tag-decoration">release</div><div id="tag30705" onclick="CopyToClipboard('tag30705');return false;" class="tag-decoration">release-3b094cb</div><div id="tag13087" onclick="CopyToClipboard('tag13087');return false;" class="tag-decoration">release-1.6.1</div><div id="tag27586" onclick="CopyToClipboard('tag27586');return false;" class="tag-decoration">release-v1</div><div id="tag3841" onclick="CopyToClipboard('tag3841');return false;" class="tag-decoration">release-v1.6</div><div id="tag5059" onclick="CopyToClipboard('tag5059');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/3b094cb4876ad8849332a17d26c214f0df3951ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35256090521" target="_blank">2026-09-17 17:59:38</a></td></tr>
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
