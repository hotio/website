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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18358" onclick="CopyToClipboard('tag18358');return false;" class="tag-decoration">v2</div><div id="tag4372" onclick="CopyToClipboard('tag4372');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag4628" onclick="CopyToClipboard('tag4628');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16011" onclick="CopyToClipboard('tag16011');return false;" class="tag-decoration">v2-v2</div><div id="tag30370" onclick="CopyToClipboard('tag30370');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31769" onclick="CopyToClipboard('tag31769');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag6463" onclick="CopyToClipboard('tag6463');return false;" class="tag-decoration">v2-develop</div><div id="tag2009" onclick="CopyToClipboard('tag2009');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag13166" onclick="CopyToClipboard('tag13166');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag30573" onclick="CopyToClipboard('tag30573');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4116" onclick="CopyToClipboard('tag4116');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29785" onclick="CopyToClipboard('tag29785');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag25532" onclick="CopyToClipboard('tag25532');return false;" class="tag-decoration">v3</div><div id="tag28115" onclick="CopyToClipboard('tag28115');return false;" class="tag-decoration">v3-edb7863</div><div id="tag30044" onclick="CopyToClipboard('tag30044');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag23431" onclick="CopyToClipboard('tag23431');return false;" class="tag-decoration">v3-v3</div><div id="tag13545" onclick="CopyToClipboard('tag13545');return false;" class="tag-decoration">v3-v3.3</div><div id="tag13620" onclick="CopyToClipboard('tag13620');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag7197" onclick="CopyToClipboard('tag7197');return false;" class="tag-decoration">v3-develop</div><div id="tag27094" onclick="CopyToClipboard('tag27094');return false;" class="tag-decoration">v3-develop-b4bd171</div><div id="tag9397" onclick="CopyToClipboard('tag9397');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1232</div><div id="tag15527" onclick="CopyToClipboard('tag15527');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20213" onclick="CopyToClipboard('tag20213');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag1089" onclick="CopyToClipboard('tag1089');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b4bd171668a43d4f625250f0a876e9ea553e2cc5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32540708886" target="_blank">2026-08-22 00:32:58</a></td></tr>
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
