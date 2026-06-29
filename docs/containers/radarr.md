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
<tr><td><div id="tag31559" onclick="CopyToClipboard('tag31559');return false;" class="tag-decoration">nightly</div><div id="tag16675" onclick="CopyToClipboard('tag16675');return false;" class="tag-decoration">nightly-8e37ac3</div><div id="tag26239" onclick="CopyToClipboard('tag26239');return false;" class="tag-decoration">nightly-6.3.0.10496</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/8e37ac3e11021cbde1af21d572a5e91ecbd3fe46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28366638834" target="_blank">2026-06-29 10:49:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6087" onclick="CopyToClipboard('tag6087');return false;" class="tag-decoration">release</div><div id="tag16510" onclick="CopyToClipboard('tag16510');return false;" class="tag-decoration">release-c26dc8e</div><div id="tag652" onclick="CopyToClipboard('tag652');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/c26dc8efd4159b4abdc35469ee3410641c6e2968" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27982522327" target="_blank">2026-06-22 20:40:23</a></td></tr>
<tr><td><div id="tag24992" onclick="CopyToClipboard('tag24992');return false;" class="tag-decoration">testing</div><div id="tag31906" onclick="CopyToClipboard('tag31906');return false;" class="tag-decoration">testing-e9f249a</div><div id="tag8228" onclick="CopyToClipboard('tag8228');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e9f249a9f5d0b3840656dd79b2bfe65d514d37f5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28390876483" target="_blank">2026-06-29 17:32:46</a></td></tr>
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
