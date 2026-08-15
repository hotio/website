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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3129" onclick="CopyToClipboard('tag3129');return false;" class="tag-decoration">release</div><div id="tag16681" onclick="CopyToClipboard('tag16681');return false;" class="tag-decoration">release-0eb9199</div><div id="tag17423" onclick="CopyToClipboard('tag17423');return false;" class="tag-decoration">release-0.24.2406</div><div id="tag16202" onclick="CopyToClipboard('tag16202');return false;" class="tag-decoration">release-v0</div><div id="tag513" onclick="CopyToClipboard('tag513');return false;" class="tag-decoration">release-v0.24</div><div id="tag3696" onclick="CopyToClipboard('tag3696');return false;" class="tag-decoration">release-v0.24.2406</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0eb9199e3af211a6c495adf2753402d36bd04755" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31779007560" target="_blank">2026-08-14 07:11:48</a></td></tr>
<tr><td><div id="tag23388" onclick="CopyToClipboard('tag23388');return false;" class="tag-decoration">testing</div><div id="tag27296" onclick="CopyToClipboard('tag27296');return false;" class="tag-decoration">testing-ec30f1d</div><div id="tag23386" onclick="CopyToClipboard('tag23386');return false;" class="tag-decoration">testing-0.24.2406</div><div id="tag17938" onclick="CopyToClipboard('tag17938');return false;" class="tag-decoration">testing-v0</div><div id="tag20478" onclick="CopyToClipboard('tag20478');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15802" onclick="CopyToClipboard('tag15802');return false;" class="tag-decoration">testing-v0.24.2406</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ec30f1dd8a059d3c0c55f3c1a2ac61adb3bea2a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31874094096" target="_blank">2026-08-15 08:16:54</a></td></tr>
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
