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
<tr><td><div id="tag8430" onclick="CopyToClipboard('tag8430');return false;" class="tag-decoration">nightly</div><div id="tag18327" onclick="CopyToClipboard('tag18327');return false;" class="tag-decoration">nightly-c88d555</div><div id="tag10297" onclick="CopyToClipboard('tag10297');return false;" class="tag-decoration">nightly-1.6.3-beta.41</div><div id="tag8427" onclick="CopyToClipboard('tag8427');return false;" class="tag-decoration">nightly-v1</div><div id="tag25217" onclick="CopyToClipboard('tag25217');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag24314" onclick="CopyToClipboard('tag24314');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c88d55522b4e10ae403079ccbc145d5e42607007" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/46081527522" target="_blank">2026-11-27 23:16:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24761" onclick="CopyToClipboard('tag24761');return false;" class="tag-decoration">release</div><div id="tag17579" onclick="CopyToClipboard('tag17579');return false;" class="tag-decoration">release-de3380d</div><div id="tag13603" onclick="CopyToClipboard('tag13603');return false;" class="tag-decoration">release-1.6.2</div><div id="tag6886" onclick="CopyToClipboard('tag6886');return false;" class="tag-decoration">release-v1</div><div id="tag16664" onclick="CopyToClipboard('tag16664');return false;" class="tag-decoration">release-v1.6</div><div id="tag1802" onclick="CopyToClipboard('tag1802');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/de3380db02ea550dc19f440749c04eefdb9627fb" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/46081521718" target="_blank">2026-11-27 23:16:01</a></td></tr>
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
