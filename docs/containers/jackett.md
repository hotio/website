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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4911" onclick="CopyToClipboard('tag4911');return false;" class="tag-decoration">release</div><div id="tag18133" onclick="CopyToClipboard('tag18133');return false;" class="tag-decoration">release-1ae4db6</div><div id="tag18244" onclick="CopyToClipboard('tag18244');return false;" class="tag-decoration">release-0.24.2985</div><div id="tag5442" onclick="CopyToClipboard('tag5442');return false;" class="tag-decoration">release-v0</div><div id="tag29072" onclick="CopyToClipboard('tag29072');return false;" class="tag-decoration">release-v0.24</div><div id="tag30228" onclick="CopyToClipboard('tag30228');return false;" class="tag-decoration">release-v0.24.2985</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1ae4db63ecc457138e3771dcf157ac50949488bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41289008615" target="_blank">2026-11-01 08:28:22</a></td></tr>
<tr><td><div id="tag13246" onclick="CopyToClipboard('tag13246');return false;" class="tag-decoration">testing</div><div id="tag17114" onclick="CopyToClipboard('tag17114');return false;" class="tag-decoration">testing-b9866a8</div><div id="tag14500" onclick="CopyToClipboard('tag14500');return false;" class="tag-decoration">testing-0.24.2985</div><div id="tag4793" onclick="CopyToClipboard('tag4793');return false;" class="tag-decoration">testing-v0</div><div id="tag21222" onclick="CopyToClipboard('tag21222');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11299" onclick="CopyToClipboard('tag11299');return false;" class="tag-decoration">testing-v0.24.2985</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b9866a862bf4b63ef4c096427469f4722546bc32" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41289017233" target="_blank">2026-11-01 08:28:31</a></td></tr>
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
