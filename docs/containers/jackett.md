---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20557" onclick="CopyToClipboard('tag20557');return false;" class="tag-decoration">release</div><div id="tag17908" onclick="CopyToClipboard('tag17908');return false;" class="tag-decoration">release-3d1beed</div><div id="tag1585" onclick="CopyToClipboard('tag1585');return false;" class="tag-decoration">release-0.24.2398</div><div id="tag31262" onclick="CopyToClipboard('tag31262');return false;" class="tag-decoration">release-v0</div><div id="tag18282" onclick="CopyToClipboard('tag18282');return false;" class="tag-decoration">release-v0.24</div><div id="tag31869" onclick="CopyToClipboard('tag31869');return false;" class="tag-decoration">release-v0.24.2398</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3d1beed17174c84db04d2918191be456fc3a10d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31572946055" target="_blank">2026-08-12 07:11:22</a></td></tr>
<tr><td><div id="tag4930" onclick="CopyToClipboard('tag4930');return false;" class="tag-decoration">testing</div><div id="tag27218" onclick="CopyToClipboard('tag27218');return false;" class="tag-decoration">testing-030c7d0</div><div id="tag7662" onclick="CopyToClipboard('tag7662');return false;" class="tag-decoration">testing-0.24.2398</div><div id="tag31569" onclick="CopyToClipboard('tag31569');return false;" class="tag-decoration">testing-v0</div><div id="tag12125" onclick="CopyToClipboard('tag12125');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11786" onclick="CopyToClipboard('tag11786');return false;" class="tag-decoration">testing-v0.24.2398</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/030c7d069d05844436846837a73afd0502a5d1d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31572930946" target="_blank">2026-08-12 07:11:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
