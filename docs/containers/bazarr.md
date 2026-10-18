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
<tr><td><div id="tag18506" onclick="CopyToClipboard('tag18506');return false;" class="tag-decoration">nightly</div><div id="tag3969" onclick="CopyToClipboard('tag3969');return false;" class="tag-decoration">nightly-d2f1756</div><div id="tag13615" onclick="CopyToClipboard('tag13615');return false;" class="tag-decoration">nightly-1.6.3-beta.15</div><div id="tag28198" onclick="CopyToClipboard('tag28198');return false;" class="tag-decoration">nightly-v1</div><div id="tag23047" onclick="CopyToClipboard('tag23047');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag30943" onclick="CopyToClipboard('tag30943');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d2f1756b9b1c1e9629b544d7f3aaec176bf0b1a0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39133201920" target="_blank">2026-10-18 13:48:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag886" onclick="CopyToClipboard('tag886');return false;" class="tag-decoration">release</div><div id="tag16813" onclick="CopyToClipboard('tag16813');return false;" class="tag-decoration">release-40ec246</div><div id="tag28231" onclick="CopyToClipboard('tag28231');return false;" class="tag-decoration">release-1.6.2</div><div id="tag6155" onclick="CopyToClipboard('tag6155');return false;" class="tag-decoration">release-v1</div><div id="tag28948" onclick="CopyToClipboard('tag28948');return false;" class="tag-decoration">release-v1.6</div><div id="tag13351" onclick="CopyToClipboard('tag13351');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/40ec24678ab38dfe37c4078bfc027b6ebbe645a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39133200368" target="_blank">2026-10-18 13:48:53</a></td></tr>
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
