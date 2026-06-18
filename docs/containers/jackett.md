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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25106" onclick="CopyToClipboard('tag25106');return false;" class="tag-decoration">release</div><div id="tag9582" onclick="CopyToClipboard('tag9582');return false;" class="tag-decoration">release-b29cf01</div><div id="tag31132" onclick="CopyToClipboard('tag31132');return false;" class="tag-decoration">release-0.24.2079</div><div id="tag20317" onclick="CopyToClipboard('tag20317');return false;" class="tag-decoration">release-v0</div><div id="tag16968" onclick="CopyToClipboard('tag16968');return false;" class="tag-decoration">release-v0.24</div><div id="tag31030" onclick="CopyToClipboard('tag31030');return false;" class="tag-decoration">release-v0.24.2079</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b29cf01fc372e693016970b60c1b6f188fe483fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27752233436" target="_blank">2026-06-18 10:08:22</a></td></tr>
<tr><td><div id="tag26416" onclick="CopyToClipboard('tag26416');return false;" class="tag-decoration">testing</div><div id="tag11227" onclick="CopyToClipboard('tag11227');return false;" class="tag-decoration">testing-e9ffa47</div><div id="tag10761" onclick="CopyToClipboard('tag10761');return false;" class="tag-decoration">testing-0.24.2079</div><div id="tag27959" onclick="CopyToClipboard('tag27959');return false;" class="tag-decoration">testing-v0</div><div id="tag14718" onclick="CopyToClipboard('tag14718');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10046" onclick="CopyToClipboard('tag10046');return false;" class="tag-decoration">testing-v0.24.2079</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e9ffa4788e299c2d86193b96289907ded18a3d53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27752233955" target="_blank">2026-06-18 10:08:24</a></td></tr>
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
