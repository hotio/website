---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28715" onclick="CopyToClipboard('tag28715');return false;" class="tag-decoration">nightly</div><div id="tag27559" onclick="CopyToClipboard('tag27559');return false;" class="tag-decoration">nightly-91f0b4e</div><div id="tag21458" onclick="CopyToClipboard('tag21458');return false;" class="tag-decoration">nightly-3.2.0.5150</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/91f0b4e6b241e022b91ae5ee7ca7ea86e41c9242" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40612878075" target="_blank">2026-10-28 01:05:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2729" onclick="CopyToClipboard('tag2729');return false;" class="tag-decoration">release</div><div id="tag17404" onclick="CopyToClipboard('tag17404');return false;" class="tag-decoration">release-eb42525</div><div id="tag13379" onclick="CopyToClipboard('tag13379');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/eb4252509a2d45e57f2048cfae3e73e9b48d8751" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40584713115" target="_blank">2026-10-27 21:11:46</a></td></tr>
<tr><td><div id="tag21991" onclick="CopyToClipboard('tag21991');return false;" class="tag-decoration">testing</div><div id="tag8963" onclick="CopyToClipboard('tag8963');return false;" class="tag-decoration">testing-18acb62</div><div id="tag6126" onclick="CopyToClipboard('tag6126');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/18acb627117b87397e5f19d876f701418f571a7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40584715828" target="_blank">2026-10-27 21:11:47</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
