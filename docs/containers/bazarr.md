---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/bazarr/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19332" onclick="CopyToClipboard('tag19332');return false;" class="tag-decoration">nightly</div><div id="tag9619" onclick="CopyToClipboard('tag9619');return false;" class="tag-decoration">nightly-1.5.5-beta.2</div><div id="tag22901" onclick="CopyToClipboard('tag22901');return false;" class="tag-decoration">nightly-4cc3d6e</div><div id="tag27849" onclick="CopyToClipboard('tag27849');return false;" class="tag-decoration">nightly-v1</div><div id="tag25539" onclick="CopyToClipboard('tag25539');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag21082" onclick="CopyToClipboard('tag21082');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4cc3d6e80a82aaab93d18a208cc40763a216c813" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20844727974" target="_blank">2026-01-09 07:35:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12573" onclick="CopyToClipboard('tag12573');return false;" class="tag-decoration">release</div><div id="tag22528" onclick="CopyToClipboard('tag22528');return false;" class="tag-decoration">release-1.5.4</div><div id="tag12416" onclick="CopyToClipboard('tag12416');return false;" class="tag-decoration">release-e6a2a12</div><div id="tag28124" onclick="CopyToClipboard('tag28124');return false;" class="tag-decoration">release-v1</div><div id="tag25402" onclick="CopyToClipboard('tag25402');return false;" class="tag-decoration">release-v1.5</div><div id="tag8763" onclick="CopyToClipboard('tag8763');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e6a2a129422b465d3c49d7a4271795a7569a660c" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20850327563" target="_blank">2026-01-09 11:22:33</a></td></tr>
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
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

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
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
