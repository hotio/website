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
<tr><td><div id="tag22972" onclick="CopyToClipboard('tag22972');return false;" class="tag-decoration">nightly</div><div id="tag10175" onclick="CopyToClipboard('tag10175');return false;" class="tag-decoration">nightly-1.5.5-beta.2</div><div id="tag9598" onclick="CopyToClipboard('tag9598');return false;" class="tag-decoration">nightly-4cc3d6e</div><div id="tag21009" onclick="CopyToClipboard('tag21009');return false;" class="tag-decoration">nightly-v1</div><div id="tag8957" onclick="CopyToClipboard('tag8957');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag23196" onclick="CopyToClipboard('tag23196');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4cc3d6e80a82aaab93d18a208cc40763a216c813" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20844727974" target="_blank">2026-01-09 07:35:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16294" onclick="CopyToClipboard('tag16294');return false;" class="tag-decoration">release</div><div id="tag22025" onclick="CopyToClipboard('tag22025');return false;" class="tag-decoration">release-1.5.4</div><div id="tag15506" onclick="CopyToClipboard('tag15506');return false;" class="tag-decoration">release-50d4b1c</div><div id="tag45" onclick="CopyToClipboard('tag45');return false;" class="tag-decoration">release-v1</div><div id="tag30509" onclick="CopyToClipboard('tag30509');return false;" class="tag-decoration">release-v1.5</div><div id="tag2031" onclick="CopyToClipboard('tag2031');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/50d4b1cb21caf230b031cfe357f48adbebcbe903" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20842467558" target="_blank">2026-01-09 05:40:31</a></td></tr>
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
