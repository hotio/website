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
<tr><td><div id="tag30908" onclick="CopyToClipboard('tag30908');return false;" class="tag-decoration">nightly</div><div id="tag25519" onclick="CopyToClipboard('tag25519');return false;" class="tag-decoration">nightly-3be3d98</div><div id="tag20561" onclick="CopyToClipboard('tag20561');return false;" class="tag-decoration">nightly-1.5.7-beta.8</div><div id="tag5147" onclick="CopyToClipboard('tag5147');return false;" class="tag-decoration">nightly-v1</div><div id="tag10349" onclick="CopyToClipboard('tag10349');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5557" onclick="CopyToClipboard('tag5557');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3be3d9834213c8bebd15e2b83d4a6c74944aa5fb" target="_blank">Version update: 1.5.7-beta.7 => 1.5.7-beta.8</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/23373838390" target="_blank">2026-03-21 06:25:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20645" onclick="CopyToClipboard('tag20645');return false;" class="tag-decoration">release</div><div id="tag15916" onclick="CopyToClipboard('tag15916');return false;" class="tag-decoration">release-0c89459</div><div id="tag13663" onclick="CopyToClipboard('tag13663');return false;" class="tag-decoration">release-1.5.6</div><div id="tag17685" onclick="CopyToClipboard('tag17685');return false;" class="tag-decoration">release-v1</div><div id="tag29364" onclick="CopyToClipboard('tag29364');return false;" class="tag-decoration">release-v1.5</div><div id="tag14154" onclick="CopyToClipboard('tag14154');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0c89459871881bc574debbd13c1260cc338f4b19" target="_blank">Version update: 1.5.5 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441008453" target="_blank">2026-02-26 11:56:07</a></td></tr>
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
