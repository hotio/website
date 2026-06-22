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
<tr><td><div id="tag7279" onclick="CopyToClipboard('tag7279');return false;" class="tag-decoration">nightly</div><div id="tag811" onclick="CopyToClipboard('tag811');return false;" class="tag-decoration">nightly-340f952</div><div id="tag8147" onclick="CopyToClipboard('tag8147');return false;" class="tag-decoration">nightly-1.5.7-beta.62</div><div id="tag29738" onclick="CopyToClipboard('tag29738');return false;" class="tag-decoration">nightly-v1</div><div id="tag30584" onclick="CopyToClipboard('tag30584');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag3733" onclick="CopyToClipboard('tag3733');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/340f95213b23a17040a469e6a1b9ccf63b8f1c04" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27946920968" target="_blank">2026-06-22 10:41:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12132" onclick="CopyToClipboard('tag12132');return false;" class="tag-decoration">release</div><div id="tag24652" onclick="CopyToClipboard('tag24652');return false;" class="tag-decoration">release-61fbe12</div><div id="tag6858" onclick="CopyToClipboard('tag6858');return false;" class="tag-decoration">release-1.5.6</div><div id="tag18216" onclick="CopyToClipboard('tag18216');return false;" class="tag-decoration">release-v1</div><div id="tag29865" onclick="CopyToClipboard('tag29865');return false;" class="tag-decoration">release-v1.5</div><div id="tag19799" onclick="CopyToClipboard('tag19799');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/61fbe12f4635a8170afed0b031a1aa6f7b2c0f7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27915487932" target="_blank">2026-06-21 19:46:34</a></td></tr>
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
