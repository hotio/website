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
<tr><td><div id="tag27203" onclick="CopyToClipboard('tag27203');return false;" class="tag-decoration">nightly</div><div id="tag26590" onclick="CopyToClipboard('tag26590');return false;" class="tag-decoration">nightly-1.5.5-beta.2</div><div id="tag17133" onclick="CopyToClipboard('tag17133');return false;" class="tag-decoration">nightly-554d56a</div><div id="tag23763" onclick="CopyToClipboard('tag23763');return false;" class="tag-decoration">nightly-v1</div><div id="tag30204" onclick="CopyToClipboard('tag30204');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag12927" onclick="CopyToClipboard('tag12927');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/554d56adb37ae5b9d7369b87416a44dafee94565" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20850327172" target="_blank">2026-01-09 11:22:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25745" onclick="CopyToClipboard('tag25745');return false;" class="tag-decoration">release</div><div id="tag9409" onclick="CopyToClipboard('tag9409');return false;" class="tag-decoration">release-1.5.4</div><div id="tag30056" onclick="CopyToClipboard('tag30056');return false;" class="tag-decoration">release-e6a2a12</div><div id="tag11309" onclick="CopyToClipboard('tag11309');return false;" class="tag-decoration">release-v1</div><div id="tag26987" onclick="CopyToClipboard('tag26987');return false;" class="tag-decoration">release-v1.5</div><div id="tag3774" onclick="CopyToClipboard('tag3774');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e6a2a129422b465d3c49d7a4271795a7569a660c" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20850327563" target="_blank">2026-01-09 11:22:33</a></td></tr>
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
