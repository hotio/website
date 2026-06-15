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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26963" onclick="CopyToClipboard('tag26963');return false;" class="tag-decoration">v2</div><div id="tag7086" onclick="CopyToClipboard('tag7086');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag15344" onclick="CopyToClipboard('tag15344');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag4940" onclick="CopyToClipboard('tag4940');return false;" class="tag-decoration">v2-v2</div><div id="tag22389" onclick="CopyToClipboard('tag22389');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12558" onclick="CopyToClipboard('tag12558');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag16433" onclick="CopyToClipboard('tag16433');return false;" class="tag-decoration">v2-develop</div><div id="tag8508" onclick="CopyToClipboard('tag8508');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag31089" onclick="CopyToClipboard('tag31089');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag14026" onclick="CopyToClipboard('tag14026');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3210" onclick="CopyToClipboard('tag3210');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1605" onclick="CopyToClipboard('tag1605');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag5132" onclick="CopyToClipboard('tag5132');return false;" class="tag-decoration">v3</div><div id="tag27291" onclick="CopyToClipboard('tag27291');return false;" class="tag-decoration">v3-25f3a87</div><div id="tag18510" onclick="CopyToClipboard('tag18510');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag7046" onclick="CopyToClipboard('tag7046');return false;" class="tag-decoration">v3-v3</div><div id="tag9844" onclick="CopyToClipboard('tag9844');return false;" class="tag-decoration">v3-v3.3</div><div id="tag29758" onclick="CopyToClipboard('tag29758');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25f3a873199cb8559760a6fd48eb664ea54dc09b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271178476" target="_blank">2026-06-10 10:51:44</a></td></tr>
<tr><td><div id="tag8156" onclick="CopyToClipboard('tag8156');return false;" class="tag-decoration">v3-develop</div><div id="tag3986" onclick="CopyToClipboard('tag3986');return false;" class="tag-decoration">v3-develop-c3d41cb</div><div id="tag4810" onclick="CopyToClipboard('tag4810');return false;" class="tag-decoration">v3-develop-3.3.3-develop.773</div><div id="tag2104" onclick="CopyToClipboard('tag2104');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20704" onclick="CopyToClipboard('tag20704');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27251" onclick="CopyToClipboard('tag27251');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c3d41cbe4132c7e9b712df426f0b446186ee5a85" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27523837445" target="_blank">2026-06-15 04:22:21</a></td></tr>
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
