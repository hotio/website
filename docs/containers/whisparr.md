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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23699" onclick="CopyToClipboard('tag23699');return false;" class="tag-decoration">v2</div><div id="tag20795" onclick="CopyToClipboard('tag20795');return false;" class="tag-decoration">v2-9422f24</div><div id="tag26122" onclick="CopyToClipboard('tag26122');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2214" onclick="CopyToClipboard('tag2214');return false;" class="tag-decoration">v2-v2</div><div id="tag30802" onclick="CopyToClipboard('tag30802');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19487" onclick="CopyToClipboard('tag19487');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9422f2405e40a0ac77d1ae1ebe8665f01e1d87b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801194" target="_blank">2026-07-14 09:44:03</a></td></tr>
<tr><td><div id="tag23560" onclick="CopyToClipboard('tag23560');return false;" class="tag-decoration">v2-develop</div><div id="tag11665" onclick="CopyToClipboard('tag11665');return false;" class="tag-decoration">v2-develop-f47019c</div><div id="tag29707" onclick="CopyToClipboard('tag29707');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag23885" onclick="CopyToClipboard('tag23885');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17421" onclick="CopyToClipboard('tag17421');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8212" onclick="CopyToClipboard('tag8212');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f47019c595f30bbd63ddcdfd004e0761571c100b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322797563" target="_blank">2026-07-14 09:43:59</a></td></tr>
<tr><td><div id="tag27266" onclick="CopyToClipboard('tag27266');return false;" class="tag-decoration">v3</div><div id="tag15572" onclick="CopyToClipboard('tag15572');return false;" class="tag-decoration">v3-96c927c</div><div id="tag29122" onclick="CopyToClipboard('tag29122');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag6032" onclick="CopyToClipboard('tag6032');return false;" class="tag-decoration">v3-v3</div><div id="tag11152" onclick="CopyToClipboard('tag11152');return false;" class="tag-decoration">v3-v3.3</div><div id="tag21495" onclick="CopyToClipboard('tag21495');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/96c927c999444dcf3e635c4d14a11fabf4836ba2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322796800" target="_blank">2026-07-14 09:43:58</a></td></tr>
<tr><td><div id="tag13141" onclick="CopyToClipboard('tag13141');return false;" class="tag-decoration">v3-develop</div><div id="tag3081" onclick="CopyToClipboard('tag3081');return false;" class="tag-decoration">v3-develop-1fe24a7</div><div id="tag1662" onclick="CopyToClipboard('tag1662');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag18584" onclick="CopyToClipboard('tag18584');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24151" onclick="CopyToClipboard('tag24151');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29403" onclick="CopyToClipboard('tag29403');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1fe24a7eeac6d1d326d33796a187ee07348e87eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801683" target="_blank">2026-07-14 09:44:03</a></td></tr>
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
