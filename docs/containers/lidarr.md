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
<tr><td><div id="tag6382" onclick="CopyToClipboard('tag6382');return false;" class="tag-decoration">nightly</div><div id="tag32759" onclick="CopyToClipboard('tag32759');return false;" class="tag-decoration">nightly-d80c3de</div><div id="tag5757" onclick="CopyToClipboard('tag5757');return false;" class="tag-decoration">nightly-3.1.5.5041</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/d80c3deed7a486c6b960c4b1b73a39d10eac492b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33494573061" target="_blank">2026-09-01 09:53:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32074" onclick="CopyToClipboard('tag32074');return false;" class="tag-decoration">release</div><div id="tag27624" onclick="CopyToClipboard('tag27624');return false;" class="tag-decoration">release-8f42b81</div><div id="tag7950" onclick="CopyToClipboard('tag7950');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/8f42b816e5e6717a9391b1f004497e464027a0e9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33494576428" target="_blank">2026-09-01 09:53:28</a></td></tr>
<tr><td><div id="tag11646" onclick="CopyToClipboard('tag11646');return false;" class="tag-decoration">testing</div><div id="tag18935" onclick="CopyToClipboard('tag18935');return false;" class="tag-decoration">testing-50d7c25</div><div id="tag20297" onclick="CopyToClipboard('tag20297');return false;" class="tag-decoration">testing-3.1.4.5029</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/50d7c252e3cc545b86193ade524685d6342857ad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33296848870" target="_blank">2026-08-30 06:25:13</a></td></tr>
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
