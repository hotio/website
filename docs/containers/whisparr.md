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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3928" onclick="CopyToClipboard('tag3928');return false;" class="tag-decoration">v2</div><div id="tag15651" onclick="CopyToClipboard('tag15651');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag11468" onclick="CopyToClipboard('tag11468');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag14066" onclick="CopyToClipboard('tag14066');return false;" class="tag-decoration">v2-v2</div><div id="tag26073" onclick="CopyToClipboard('tag26073');return false;" class="tag-decoration">v2-v2.2</div><div id="tag967" onclick="CopyToClipboard('tag967');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag2756" onclick="CopyToClipboard('tag2756');return false;" class="tag-decoration">v2-develop</div><div id="tag23334" onclick="CopyToClipboard('tag23334');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag23579" onclick="CopyToClipboard('tag23579');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag2227" onclick="CopyToClipboard('tag2227');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26090" onclick="CopyToClipboard('tag26090');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11518" onclick="CopyToClipboard('tag11518');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag28438" onclick="CopyToClipboard('tag28438');return false;" class="tag-decoration">v3</div><div id="tag17242" onclick="CopyToClipboard('tag17242');return false;" class="tag-decoration">v3-25f3a87</div><div id="tag5985" onclick="CopyToClipboard('tag5985');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag18626" onclick="CopyToClipboard('tag18626');return false;" class="tag-decoration">v3-v3</div><div id="tag6297" onclick="CopyToClipboard('tag6297');return false;" class="tag-decoration">v3-v3.3</div><div id="tag32718" onclick="CopyToClipboard('tag32718');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25f3a873199cb8559760a6fd48eb664ea54dc09b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271178476" target="_blank">2026-06-10 10:51:44</a></td></tr>
<tr><td><div id="tag12938" onclick="CopyToClipboard('tag12938');return false;" class="tag-decoration">v3-develop</div><div id="tag6788" onclick="CopyToClipboard('tag6788');return false;" class="tag-decoration">v3-develop-b109866</div><div id="tag23695" onclick="CopyToClipboard('tag23695');return false;" class="tag-decoration">v3-develop-3.3.3-develop.776</div><div id="tag28489" onclick="CopyToClipboard('tag28489');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3399" onclick="CopyToClipboard('tag3399');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6119" onclick="CopyToClipboard('tag6119');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b109866ba56568d6c74996222572ca5f5102801c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27581750212" target="_blank">2026-06-15 22:54:16</a></td></tr>
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
