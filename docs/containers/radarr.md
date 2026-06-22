---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19104" onclick="CopyToClipboard('tag19104');return false;" class="tag-decoration">nightly</div><div id="tag32216" onclick="CopyToClipboard('tag32216');return false;" class="tag-decoration">nightly-e45720c</div><div id="tag12098" onclick="CopyToClipboard('tag12098');return false;" class="tag-decoration">nightly-6.2.1.10464</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/e45720caf79141b98bd47f11909f155dca9a87fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27916368765" target="_blank">2026-06-21 20:22:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23410" onclick="CopyToClipboard('tag23410');return false;" class="tag-decoration">release</div><div id="tag5100" onclick="CopyToClipboard('tag5100');return false;" class="tag-decoration">release-c26dc8e</div><div id="tag30576" onclick="CopyToClipboard('tag30576');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/c26dc8efd4159b4abdc35469ee3410641c6e2968" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27982522327" target="_blank">2026-06-22 20:40:23</a></td></tr>
<tr><td><div id="tag8292" onclick="CopyToClipboard('tag8292');return false;" class="tag-decoration">testing</div><div id="tag8109" onclick="CopyToClipboard('tag8109');return false;" class="tag-decoration">testing-a9bf8a8</div><div id="tag31311" onclick="CopyToClipboard('tag31311');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/a9bf8a8238dcb0cccb459a5b800a7d032e757c39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27916366667" target="_blank">2026-06-21 20:21:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
