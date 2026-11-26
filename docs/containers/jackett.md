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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27464" onclick="CopyToClipboard('tag27464');return false;" class="tag-decoration">release</div><div id="tag11038" onclick="CopyToClipboard('tag11038');return false;" class="tag-decoration">release-7c7e413</div><div id="tag26824" onclick="CopyToClipboard('tag26824');return false;" class="tag-decoration">release-0.25.40</div><div id="tag16730" onclick="CopyToClipboard('tag16730');return false;" class="tag-decoration">release-v0</div><div id="tag30229" onclick="CopyToClipboard('tag30229');return false;" class="tag-decoration">release-v0.25</div><div id="tag24942" onclick="CopyToClipboard('tag24942');return false;" class="tag-decoration">release-v0.25.40</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7c7e41316ff7ad40fa588701f287468af20ae4e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45828671763" target="_blank">2026-11-26 13:23:23</a></td></tr>
<tr><td><div id="tag10331" onclick="CopyToClipboard('tag10331');return false;" class="tag-decoration">testing</div><div id="tag22004" onclick="CopyToClipboard('tag22004');return false;" class="tag-decoration">testing-d65cd2f</div><div id="tag3043" onclick="CopyToClipboard('tag3043');return false;" class="tag-decoration">testing-0.25.40</div><div id="tag32242" onclick="CopyToClipboard('tag32242');return false;" class="tag-decoration">testing-v0</div><div id="tag7922" onclick="CopyToClipboard('tag7922');return false;" class="tag-decoration">testing-v0.25</div><div id="tag14648" onclick="CopyToClipboard('tag14648');return false;" class="tag-decoration">testing-v0.25.40</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d65cd2fea00a81e8cfd0be35e884247f576abc20" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45828680327" target="_blank">2026-11-26 13:23:26</a></td></tr>
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
