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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16227" onclick="CopyToClipboard('tag16227');return false;" class="tag-decoration">v2</div><div id="tag12895" onclick="CopyToClipboard('tag12895');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag14821" onclick="CopyToClipboard('tag14821');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag14187" onclick="CopyToClipboard('tag14187');return false;" class="tag-decoration">v2-v2</div><div id="tag7023" onclick="CopyToClipboard('tag7023');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20434" onclick="CopyToClipboard('tag20434');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag30468" onclick="CopyToClipboard('tag30468');return false;" class="tag-decoration">v2-develop</div><div id="tag5094" onclick="CopyToClipboard('tag5094');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag981" onclick="CopyToClipboard('tag981');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag13531" onclick="CopyToClipboard('tag13531');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15054" onclick="CopyToClipboard('tag15054');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17128" onclick="CopyToClipboard('tag17128');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag23658" onclick="CopyToClipboard('tag23658');return false;" class="tag-decoration">v3</div><div id="tag13374" onclick="CopyToClipboard('tag13374');return false;" class="tag-decoration">v3-25f3a87</div><div id="tag4850" onclick="CopyToClipboard('tag4850');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag32477" onclick="CopyToClipboard('tag32477');return false;" class="tag-decoration">v3-v3</div><div id="tag11837" onclick="CopyToClipboard('tag11837');return false;" class="tag-decoration">v3-v3.3</div><div id="tag6792" onclick="CopyToClipboard('tag6792');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25f3a873199cb8559760a6fd48eb664ea54dc09b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271178476" target="_blank">2026-06-10 10:51:44</a></td></tr>
<tr><td><div id="tag2105" onclick="CopyToClipboard('tag2105');return false;" class="tag-decoration">v3-develop</div><div id="tag9371" onclick="CopyToClipboard('tag9371');return false;" class="tag-decoration">v3-develop-7cf4fff</div><div id="tag5536" onclick="CopyToClipboard('tag5536');return false;" class="tag-decoration">v3-develop-3.3.3-develop.778</div><div id="tag29772" onclick="CopyToClipboard('tag29772');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7371" onclick="CopyToClipboard('tag7371');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3387" onclick="CopyToClipboard('tag3387');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7cf4fff1369c21be4c143a6b8445efa42a6fe269" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27598447272" target="_blank">2026-06-16 06:22:29</a></td></tr>
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
