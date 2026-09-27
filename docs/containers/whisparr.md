---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13189" onclick="CopyToClipboard('tag13189');return false;" class="tag-decoration">v2</div><div id="tag18923" onclick="CopyToClipboard('tag18923');return false;" class="tag-decoration">v2-b17234c</div><div id="tag18025" onclick="CopyToClipboard('tag18025');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29248" onclick="CopyToClipboard('tag29248');return false;" class="tag-decoration">v2-v2</div><div id="tag17879" onclick="CopyToClipboard('tag17879');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20200" onclick="CopyToClipboard('tag20200');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag19722" onclick="CopyToClipboard('tag19722');return false;" class="tag-decoration">v2-develop</div><div id="tag12380" onclick="CopyToClipboard('tag12380');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag2443" onclick="CopyToClipboard('tag2443');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag12166" onclick="CopyToClipboard('tag12166');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9037" onclick="CopyToClipboard('tag9037');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag32417" onclick="CopyToClipboard('tag32417');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag12348" onclick="CopyToClipboard('tag12348');return false;" class="tag-decoration">v3</div><div id="tag3244" onclick="CopyToClipboard('tag3244');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag3710" onclick="CopyToClipboard('tag3710');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag3208" onclick="CopyToClipboard('tag3208');return false;" class="tag-decoration">v3-v3</div><div id="tag20406" onclick="CopyToClipboard('tag20406');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30606" onclick="CopyToClipboard('tag30606');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag25715" onclick="CopyToClipboard('tag25715');return false;" class="tag-decoration">v3-develop</div><div id="tag20005" onclick="CopyToClipboard('tag20005');return false;" class="tag-decoration">v3-develop-e3f1d9b</div><div id="tag1268" onclick="CopyToClipboard('tag1268');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1749</div><div id="tag1348" onclick="CopyToClipboard('tag1348');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag16209" onclick="CopyToClipboard('tag16209');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10263" onclick="CopyToClipboard('tag10263');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e3f1d9b15081c3ec80678f18c1e78d5e64580266" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36352791955" target="_blank">2026-09-27 21:43:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
