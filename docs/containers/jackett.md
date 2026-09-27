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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5554" onclick="CopyToClipboard('tag5554');return false;" class="tag-decoration">release</div><div id="tag13756" onclick="CopyToClipboard('tag13756');return false;" class="tag-decoration">release-6a3c263</div><div id="tag18698" onclick="CopyToClipboard('tag18698');return false;" class="tag-decoration">release-0.24.2680</div><div id="tag6880" onclick="CopyToClipboard('tag6880');return false;" class="tag-decoration">release-v0</div><div id="tag4198" onclick="CopyToClipboard('tag4198');return false;" class="tag-decoration">release-v0.24</div><div id="tag23332" onclick="CopyToClipboard('tag23332');return false;" class="tag-decoration">release-v0.24.2680</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6a3c2638dde1469780cb91de91ca218b73a3fb69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36307231006" target="_blank">2026-09-27 08:45:57</a></td></tr>
<tr><td><div id="tag3918" onclick="CopyToClipboard('tag3918');return false;" class="tag-decoration">testing</div><div id="tag5952" onclick="CopyToClipboard('tag5952');return false;" class="tag-decoration">testing-4f629be</div><div id="tag24455" onclick="CopyToClipboard('tag24455');return false;" class="tag-decoration">testing-0.24.2680</div><div id="tag25659" onclick="CopyToClipboard('tag25659');return false;" class="tag-decoration">testing-v0</div><div id="tag26472" onclick="CopyToClipboard('tag26472');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6819" onclick="CopyToClipboard('tag6819');return false;" class="tag-decoration">testing-v0.24.2680</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4f629beeefe0903ed5b9df15896b25f0b1d17e9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36307231491" target="_blank">2026-09-27 08:45:57</a></td></tr>
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
