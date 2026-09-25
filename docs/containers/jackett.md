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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16514" onclick="CopyToClipboard('tag16514');return false;" class="tag-decoration">release</div><div id="tag31143" onclick="CopyToClipboard('tag31143');return false;" class="tag-decoration">release-c9486d4</div><div id="tag30563" onclick="CopyToClipboard('tag30563');return false;" class="tag-decoration">release-0.24.2668</div><div id="tag28823" onclick="CopyToClipboard('tag28823');return false;" class="tag-decoration">release-v0</div><div id="tag5694" onclick="CopyToClipboard('tag5694');return false;" class="tag-decoration">release-v0.24</div><div id="tag23684" onclick="CopyToClipboard('tag23684');return false;" class="tag-decoration">release-v0.24.2668</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c9486d4890e9256e5244b9956ee5a4175e754aa4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36104975130" target="_blank">2026-09-25 06:53:54</a></td></tr>
<tr><td><div id="tag5972" onclick="CopyToClipboard('tag5972');return false;" class="tag-decoration">testing</div><div id="tag17927" onclick="CopyToClipboard('tag17927');return false;" class="tag-decoration">testing-18c757e</div><div id="tag16334" onclick="CopyToClipboard('tag16334');return false;" class="tag-decoration">testing-0.24.2668</div><div id="tag9782" onclick="CopyToClipboard('tag9782');return false;" class="tag-decoration">testing-v0</div><div id="tag16001" onclick="CopyToClipboard('tag16001');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25521" onclick="CopyToClipboard('tag25521');return false;" class="tag-decoration">testing-v0.24.2668</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/18c757e00748c79bb8f757f401b30df1e840097a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36104967956" target="_blank">2026-09-25 06:53:48</a></td></tr>
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
