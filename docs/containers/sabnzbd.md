---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22008" onclick="CopyToClipboard('tag22008');return false;" class="tag-decoration">nightly</div><div id="tag9859" onclick="CopyToClipboard('tag9859');return false;" class="tag-decoration">nightly-0c3cde3</div><div id="tag16522" onclick="CopyToClipboard('tag16522');return false;" class="tag-decoration">nightly-3c922ee0875910dca8810114e9aa8d6a8b60973e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0c3cde385bfda89c66002c03ef89092e8ecb10e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27428198840" target="_blank">2026-06-12 16:16:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26257" onclick="CopyToClipboard('tag26257');return false;" class="tag-decoration">release</div><div id="tag2712" onclick="CopyToClipboard('tag2712');return false;" class="tag-decoration">release-a0ab641</div><div id="tag1255" onclick="CopyToClipboard('tag1255');return false;" class="tag-decoration">release-5.0.4</div><div id="tag12437" onclick="CopyToClipboard('tag12437');return false;" class="tag-decoration">release-v5</div><div id="tag30260" onclick="CopyToClipboard('tag30260');return false;" class="tag-decoration">release-v5.0</div><div id="tag16552" onclick="CopyToClipboard('tag16552');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag14410" onclick="CopyToClipboard('tag14410');return false;" class="tag-decoration">testing</div><div id="tag23187" onclick="CopyToClipboard('tag23187');return false;" class="tag-decoration">testing-40b258e</div><div id="tag23967" onclick="CopyToClipboard('tag23967');return false;" class="tag-decoration">testing-5.0.4</div><div id="tag8797" onclick="CopyToClipboard('tag8797');return false;" class="tag-decoration">testing-v5</div><div id="tag19419" onclick="CopyToClipboard('tag19419');return false;" class="tag-decoration">testing-v5.0</div><div id="tag11944" onclick="CopyToClipboard('tag11944');return false;" class="tag-decoration">testing-v5.0.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40b258ed9792f66f6fbd60178369606253b3e84c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554352" target="_blank">2026-06-11 14:35:21</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
