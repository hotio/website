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
<tr><td><div id="tag17846" onclick="CopyToClipboard('tag17846');return false;" class="tag-decoration">nightly</div><div id="tag8288" onclick="CopyToClipboard('tag8288');return false;" class="tag-decoration">nightly-243e057</div><div id="tag31279" onclick="CopyToClipboard('tag31279');return false;" class="tag-decoration">nightly-1.6.1-beta.37</div><div id="tag22165" onclick="CopyToClipboard('tag22165');return false;" class="tag-decoration">nightly-v1</div><div id="tag3235" onclick="CopyToClipboard('tag3235');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag15689" onclick="CopyToClipboard('tag15689');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/243e057fa215d06946084261addabfd8b2d1f93d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33760640609" target="_blank">2026-09-03 13:21:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24764" onclick="CopyToClipboard('tag24764');return false;" class="tag-decoration">release</div><div id="tag19077" onclick="CopyToClipboard('tag19077');return false;" class="tag-decoration">release-78ee904</div><div id="tag20449" onclick="CopyToClipboard('tag20449');return false;" class="tag-decoration">release-1.6.0</div><div id="tag26750" onclick="CopyToClipboard('tag26750');return false;" class="tag-decoration">release-v1</div><div id="tag32699" onclick="CopyToClipboard('tag32699');return false;" class="tag-decoration">release-v1.6</div><div id="tag4156" onclick="CopyToClipboard('tag4156');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/78ee9041bf95fcdf1a6da7fd90eb9969a9ec5a43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33916340715" target="_blank">2026-09-04 20:27:43</a></td></tr>
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
