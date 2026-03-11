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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2673" onclick="CopyToClipboard('tag2673');return false;" class="tag-decoration">release</div><div id="tag12864" onclick="CopyToClipboard('tag12864');return false;" class="tag-decoration">release-324d243</div><div id="tag31050" onclick="CopyToClipboard('tag31050');return false;" class="tag-decoration">release-0.24.1341</div><div id="tag20579" onclick="CopyToClipboard('tag20579');return false;" class="tag-decoration">release-v0</div><div id="tag31039" onclick="CopyToClipboard('tag31039');return false;" class="tag-decoration">release-v0.24</div><div id="tag13688" onclick="CopyToClipboard('tag13688');return false;" class="tag-decoration">release-v0.24.1341</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/324d2435097c5f586585c3d840a865255638b9c9" target="_blank">Version update: 0.24.1332 => 0.24.1341</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22940813500" target="_blank">2026-03-11 07:01:04</a></td></tr>
<tr><td><div id="tag6581" onclick="CopyToClipboard('tag6581');return false;" class="tag-decoration">testing</div><div id="tag31406" onclick="CopyToClipboard('tag31406');return false;" class="tag-decoration">testing-9ea480e</div><div id="tag6907" onclick="CopyToClipboard('tag6907');return false;" class="tag-decoration">testing-0.24.1341</div><div id="tag14760" onclick="CopyToClipboard('tag14760');return false;" class="tag-decoration">testing-v0</div><div id="tag18095" onclick="CopyToClipboard('tag18095');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5897" onclick="CopyToClipboard('tag5897');return false;" class="tag-decoration">testing-v0.24.1341</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9ea480e2e153a3d3a929243b58a36f791ed933a8" target="_blank">Version update: 0.24.1332 => 0.24.1341</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22940814247" target="_blank">2026-03-11 07:01:05</a></td></tr>
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
