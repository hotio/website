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
<tr><td><div id="tag7852" onclick="CopyToClipboard('tag7852');return false;" class="tag-decoration">nightly</div><div id="tag23889" onclick="CopyToClipboard('tag23889');return false;" class="tag-decoration">nightly-374e464</div><div id="tag30328" onclick="CopyToClipboard('tag30328');return false;" class="tag-decoration">nightly-1.5.7-beta.38</div><div id="tag14735" onclick="CopyToClipboard('tag14735');return false;" class="tag-decoration">nightly-v1</div><div id="tag32614" onclick="CopyToClipboard('tag32614');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag786" onclick="CopyToClipboard('tag786');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/374e464186d10cab86d86de38302a17f5cce79fa" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25915971267" target="_blank">2026-05-15 11:42:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8556" onclick="CopyToClipboard('tag8556');return false;" class="tag-decoration">release</div><div id="tag13286" onclick="CopyToClipboard('tag13286');return false;" class="tag-decoration">release-049b5e3</div><div id="tag8207" onclick="CopyToClipboard('tag8207');return false;" class="tag-decoration">release-1.5.6</div><div id="tag237" onclick="CopyToClipboard('tag237');return false;" class="tag-decoration">release-v1</div><div id="tag25648" onclick="CopyToClipboard('tag25648');return false;" class="tag-decoration">release-v1.5</div><div id="tag6409" onclick="CopyToClipboard('tag6409');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/049b5e3905503928a3a30588ea5b7f16c806e233" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25925826743" target="_blank">2026-05-15 15:20:17</a></td></tr>
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
