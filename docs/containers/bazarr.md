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
<tr><td><div id="tag30902" onclick="CopyToClipboard('tag30902');return false;" class="tag-decoration">nightly</div><div id="tag23199" onclick="CopyToClipboard('tag23199');return false;" class="tag-decoration">nightly-6732039</div><div id="tag11306" onclick="CopyToClipboard('tag11306');return false;" class="tag-decoration">nightly-1.5.5-beta.16</div><div id="tag19708" onclick="CopyToClipboard('tag19708');return false;" class="tag-decoration">nightly-v1</div><div id="tag15392" onclick="CopyToClipboard('tag15392');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag8215" onclick="CopyToClipboard('tag8215');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/67320399a61e5eec6a4adc90a953714d6c823a5d" target="_blank">Version update: 1.5.5-beta.15 => 1.5.5-beta.16</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21540604259" target="_blank">2026-01-31 06:58:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10271" onclick="CopyToClipboard('tag10271');return false;" class="tag-decoration">release</div><div id="tag11363" onclick="CopyToClipboard('tag11363');return false;" class="tag-decoration">release-051247e</div><div id="tag3333" onclick="CopyToClipboard('tag3333');return false;" class="tag-decoration">release-1.5.4</div><div id="tag28082" onclick="CopyToClipboard('tag28082');return false;" class="tag-decoration">release-v1</div><div id="tag14519" onclick="CopyToClipboard('tag14519');return false;" class="tag-decoration">release-v1.5</div><div id="tag22592" onclick="CopyToClipboard('tag22592');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/051247ed2f8ae835d3aa260fd2911443054af49c" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21428836638" target="_blank">2026-01-28 07:14:13</a></td></tr>
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
