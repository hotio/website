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
<tr><td><div id="tag15321" onclick="CopyToClipboard('tag15321');return false;" class="tag-decoration">nightly</div><div id="tag12609" onclick="CopyToClipboard('tag12609');return false;" class="tag-decoration">nightly-60b94ae</div><div id="tag6377" onclick="CopyToClipboard('tag6377');return false;" class="tag-decoration">nightly-1.6.3-beta.40</div><div id="tag30455" onclick="CopyToClipboard('tag30455');return false;" class="tag-decoration">nightly-v1</div><div id="tag21607" onclick="CopyToClipboard('tag21607');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5364" onclick="CopyToClipboard('tag5364');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/60b94aeaa02f8b4c81aeebf64fbea4fad9a6a893" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45529704006" target="_blank">2026-11-25 01:59:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23028" onclick="CopyToClipboard('tag23028');return false;" class="tag-decoration">release</div><div id="tag24638" onclick="CopyToClipboard('tag24638');return false;" class="tag-decoration">release-03d3601</div><div id="tag24262" onclick="CopyToClipboard('tag24262');return false;" class="tag-decoration">release-1.6.2</div><div id="tag2141" onclick="CopyToClipboard('tag2141');return false;" class="tag-decoration">release-v1</div><div id="tag16607" onclick="CopyToClipboard('tag16607');return false;" class="tag-decoration">release-v1.6</div><div id="tag8272" onclick="CopyToClipboard('tag8272');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/03d36017f26b4f3a44caee8946d0fcc1f51fa273" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45752385822" target="_blank">2026-11-26 03:59:58</a></td></tr>
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
