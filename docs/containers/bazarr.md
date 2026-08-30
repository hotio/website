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
<tr><td><div id="tag20802" onclick="CopyToClipboard('tag20802');return false;" class="tag-decoration">nightly</div><div id="tag2493" onclick="CopyToClipboard('tag2493');return false;" class="tag-decoration">nightly-67dadf7</div><div id="tag13217" onclick="CopyToClipboard('tag13217');return false;" class="tag-decoration">nightly-1.6.1-beta.34</div><div id="tag20116" onclick="CopyToClipboard('tag20116');return false;" class="tag-decoration">nightly-v1</div><div id="tag14554" onclick="CopyToClipboard('tag14554');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag24824" onclick="CopyToClipboard('tag24824');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/67dadf7aa16664a7d642c68e1e46295874c36c74" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33319012518" target="_blank">2026-08-30 15:12:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32618" onclick="CopyToClipboard('tag32618');return false;" class="tag-decoration">release</div><div id="tag16724" onclick="CopyToClipboard('tag16724');return false;" class="tag-decoration">release-95439e8</div><div id="tag867" onclick="CopyToClipboard('tag867');return false;" class="tag-decoration">release-1.6.0</div><div id="tag3664" onclick="CopyToClipboard('tag3664');return false;" class="tag-decoration">release-v1</div><div id="tag22357" onclick="CopyToClipboard('tag22357');return false;" class="tag-decoration">release-v1.6</div><div id="tag19818" onclick="CopyToClipboard('tag19818');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/95439e8bdd27a4f893207dfb22b29c9dd10219a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32918880327" target="_blank">2026-08-26 01:24:52</a></td></tr>
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
