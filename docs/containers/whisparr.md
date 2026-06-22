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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16009" onclick="CopyToClipboard('tag16009');return false;" class="tag-decoration">v2</div><div id="tag30565" onclick="CopyToClipboard('tag30565');return false;" class="tag-decoration">v2-a514428</div><div id="tag28426" onclick="CopyToClipboard('tag28426');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16567" onclick="CopyToClipboard('tag16567');return false;" class="tag-decoration">v2-v2</div><div id="tag16063" onclick="CopyToClipboard('tag16063');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7491" onclick="CopyToClipboard('tag7491');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a514428a53cc1c33b0acbc573e101f6122bb5afb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988390033" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag4643" onclick="CopyToClipboard('tag4643');return false;" class="tag-decoration">v2-develop</div><div id="tag1772" onclick="CopyToClipboard('tag1772');return false;" class="tag-decoration">v2-develop-41b6bcb</div><div id="tag25145" onclick="CopyToClipboard('tag25145');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag9423" onclick="CopyToClipboard('tag9423');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32606" onclick="CopyToClipboard('tag32606');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16390" onclick="CopyToClipboard('tag16390');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/41b6bcb97c7f33e885aeb9f9bba3126a134031aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391804" target="_blank">2026-06-21 21:02:49</a></td></tr>
<tr><td><div id="tag16387" onclick="CopyToClipboard('tag16387');return false;" class="tag-decoration">v3</div><div id="tag3583" onclick="CopyToClipboard('tag3583');return false;" class="tag-decoration">v3-082401c</div><div id="tag28633" onclick="CopyToClipboard('tag28633');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag16448" onclick="CopyToClipboard('tag16448');return false;" class="tag-decoration">v3-v3</div><div id="tag30121" onclick="CopyToClipboard('tag30121');return false;" class="tag-decoration">v3-v3.3</div><div id="tag26925" onclick="CopyToClipboard('tag26925');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/082401c479b6d471c47a1306b32c6e527f823b53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390003" target="_blank">2026-06-21 21:02:46</a></td></tr>
<tr><td><div id="tag32515" onclick="CopyToClipboard('tag32515');return false;" class="tag-decoration">v3-develop</div><div id="tag9692" onclick="CopyToClipboard('tag9692');return false;" class="tag-decoration">v3-develop-ae6a42f</div><div id="tag29285" onclick="CopyToClipboard('tag29285');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag9158" onclick="CopyToClipboard('tag9158');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12627" onclick="CopyToClipboard('tag12627');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31493" onclick="CopyToClipboard('tag31493');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ae6a42fba39aac0bedc5e0465c99cae139c6d811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390930" target="_blank">2026-06-21 21:02:48</a></td></tr>
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
