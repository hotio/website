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
<tr><td><div id="tag13959" onclick="CopyToClipboard('tag13959');return false;" class="tag-decoration">nightly</div><div id="tag6564" onclick="CopyToClipboard('tag6564');return false;" class="tag-decoration">nightly-21c1cfa</div><div id="tag855" onclick="CopyToClipboard('tag855');return false;" class="tag-decoration">nightly-1.5.7-beta.62</div><div id="tag12887" onclick="CopyToClipboard('tag12887');return false;" class="tag-decoration">nightly-v1</div><div id="tag23006" onclick="CopyToClipboard('tag23006');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5563" onclick="CopyToClipboard('tag5563');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/21c1cfafcb1f054b70c918d83789e39b72d08f00" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27987165917" target="_blank">2026-06-22 22:05:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12255" onclick="CopyToClipboard('tag12255');return false;" class="tag-decoration">release</div><div id="tag21341" onclick="CopyToClipboard('tag21341');return false;" class="tag-decoration">release-90b2921</div><div id="tag25773" onclick="CopyToClipboard('tag25773');return false;" class="tag-decoration">release-1.5.6</div><div id="tag7438" onclick="CopyToClipboard('tag7438');return false;" class="tag-decoration">release-v1</div><div id="tag6854" onclick="CopyToClipboard('tag6854');return false;" class="tag-decoration">release-v1.5</div><div id="tag12194" onclick="CopyToClipboard('tag12194');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/90b2921c87341b859323d1b3bbfe257d06257d80" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27987164238" target="_blank">2026-06-22 22:05:00</a></td></tr>
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
