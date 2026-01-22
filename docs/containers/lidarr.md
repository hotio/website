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
<tr><td><div id="tag6839" onclick="CopyToClipboard('tag6839');return false;" class="tag-decoration">nightly</div><div id="tag5924" onclick="CopyToClipboard('tag5924');return false;" class="tag-decoration">nightly-b235215</div><div id="tag20161" onclick="CopyToClipboard('tag20161');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/b235215bb98f624d24056768f8309aa3485e35e5" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21237942417" target="_blank">2026-01-22 06:02:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28843" onclick="CopyToClipboard('tag28843');return false;" class="tag-decoration">release</div><div id="tag15084" onclick="CopyToClipboard('tag15084');return false;" class="tag-decoration">release-769c7e3</div><div id="tag18628" onclick="CopyToClipboard('tag18628');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/769c7e30d49d5cf3d70798addfc843ff8c272201" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21200259544" target="_blank">2026-01-21 06:57:25</a></td></tr>
<tr><td><div id="tag3833" onclick="CopyToClipboard('tag3833');return false;" class="tag-decoration">testing</div><div id="tag32554" onclick="CopyToClipboard('tag32554');return false;" class="tag-decoration">testing-e34bfb6</div><div id="tag31994" onclick="CopyToClipboard('tag31994');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/e34bfb6d41bea8fbc5b5f6c1b40072f9d91940f0" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21200260107" target="_blank">2026-01-21 06:57:26</a></td></tr>
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
