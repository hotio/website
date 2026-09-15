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
<tr><td><div id="tag23762" onclick="CopyToClipboard('tag23762');return false;" class="tag-decoration">nightly</div><div id="tag20708" onclick="CopyToClipboard('tag20708');return false;" class="tag-decoration">nightly-1ad4298</div><div id="tag25450" onclick="CopyToClipboard('tag25450');return false;" class="tag-decoration">nightly-1.6.1</div><div id="tag13954" onclick="CopyToClipboard('tag13954');return false;" class="tag-decoration">nightly-v1</div><div id="tag7457" onclick="CopyToClipboard('tag7457');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag8953" onclick="CopyToClipboard('tag8953');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1ad4298fac6104bccebdc031d96d9dd4ba1b83a9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34916547230" target="_blank">2026-09-15 01:15:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14263" onclick="CopyToClipboard('tag14263');return false;" class="tag-decoration">release</div><div id="tag10651" onclick="CopyToClipboard('tag10651');return false;" class="tag-decoration">release-293fb8d</div><div id="tag32312" onclick="CopyToClipboard('tag32312');return false;" class="tag-decoration">release-1.6.1</div><div id="tag262" onclick="CopyToClipboard('tag262');return false;" class="tag-decoration">release-v1</div><div id="tag31148" onclick="CopyToClipboard('tag31148');return false;" class="tag-decoration">release-v1.6</div><div id="tag12560" onclick="CopyToClipboard('tag12560');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/293fb8d329968a63bb1a06bd062694d56149ae5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34941491936" target="_blank">2026-09-15 07:23:46</a></td></tr>
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
