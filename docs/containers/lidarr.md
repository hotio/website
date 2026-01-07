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
<tr><td><div id="tag16723" onclick="CopyToClipboard('tag16723');return false;" class="tag-decoration">nightly</div><div id="tag49" onclick="CopyToClipboard('tag49');return false;" class="tag-decoration">nightly-3.1.2.4902</div><div id="tag14499" onclick="CopyToClipboard('tag14499');return false;" class="tag-decoration">nightly-2c96bea</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/2c96bea9c413ac84a83264a5bafe404c672c621f" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20770099636" target="_blank">2026-01-07 03:57:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9864" onclick="CopyToClipboard('tag9864');return false;" class="tag-decoration">release</div><div id="tag24686" onclick="CopyToClipboard('tag24686');return false;" class="tag-decoration">release-3.1.0.4875</div><div id="tag3588" onclick="CopyToClipboard('tag3588');return false;" class="tag-decoration">release-f94ebdf</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/f94ebdfb4ea0ba739afc9b0e714b0f08ce4fed92" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20770100068" target="_blank">2026-01-07 03:57:25</a></td></tr>
<tr><td><div id="tag16973" onclick="CopyToClipboard('tag16973');return false;" class="tag-decoration">testing</div><div id="tag31548" onclick="CopyToClipboard('tag31548');return false;" class="tag-decoration">testing-3.1.2.4902</div><div id="tag32460" onclick="CopyToClipboard('tag32460');return false;" class="tag-decoration">testing-d375125</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/d375125dff8c5ebcacc497c048026efdbb640f8e" target="_blank">Version update: 3.1.1.4900 => 3.1.2.4902</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20777111360" target="_blank">2026-01-07 09:40:47</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
