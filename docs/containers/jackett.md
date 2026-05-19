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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5368" onclick="CopyToClipboard('tag5368');return false;" class="tag-decoration">release</div><div id="tag1595" onclick="CopyToClipboard('tag1595');return false;" class="tag-decoration">release-5f4ae01</div><div id="tag8869" onclick="CopyToClipboard('tag8869');return false;" class="tag-decoration">release-0.24.1894</div><div id="tag29321" onclick="CopyToClipboard('tag29321');return false;" class="tag-decoration">release-v0</div><div id="tag20915" onclick="CopyToClipboard('tag20915');return false;" class="tag-decoration">release-v0.24</div><div id="tag22329" onclick="CopyToClipboard('tag22329');return false;" class="tag-decoration">release-v0.24.1894</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5f4ae0199781f23c435ce6c50475051c237a0ffb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26083297702" target="_blank">2026-05-19 07:38:16</a></td></tr>
<tr><td><div id="tag19141" onclick="CopyToClipboard('tag19141');return false;" class="tag-decoration">testing</div><div id="tag23918" onclick="CopyToClipboard('tag23918');return false;" class="tag-decoration">testing-bf32b29</div><div id="tag6120" onclick="CopyToClipboard('tag6120');return false;" class="tag-decoration">testing-0.24.1879</div><div id="tag244" onclick="CopyToClipboard('tag244');return false;" class="tag-decoration">testing-v0</div><div id="tag4925" onclick="CopyToClipboard('tag4925');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28725" onclick="CopyToClipboard('tag28725');return false;" class="tag-decoration">testing-v0.24.1879</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bf32b298bd68e48c68b6ca07084a0f7a0e7da6bc" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26018063715" target="_blank">2026-05-18 06:48:43</a></td></tr>
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
