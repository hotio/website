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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4878" onclick="CopyToClipboard('tag4878');return false;" class="tag-decoration">v2</div><div id="tag20067" onclick="CopyToClipboard('tag20067');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag31690" onclick="CopyToClipboard('tag31690');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag27822" onclick="CopyToClipboard('tag27822');return false;" class="tag-decoration">v2-v2</div><div id="tag493" onclick="CopyToClipboard('tag493');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19822" onclick="CopyToClipboard('tag19822');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag12416" onclick="CopyToClipboard('tag12416');return false;" class="tag-decoration">v2-develop</div><div id="tag23462" onclick="CopyToClipboard('tag23462');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag9286" onclick="CopyToClipboard('tag9286');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag13606" onclick="CopyToClipboard('tag13606');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13476" onclick="CopyToClipboard('tag13476');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17027" onclick="CopyToClipboard('tag17027');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag226" onclick="CopyToClipboard('tag226');return false;" class="tag-decoration">v3</div><div id="tag21067" onclick="CopyToClipboard('tag21067');return false;" class="tag-decoration">v3-edb7863</div><div id="tag22354" onclick="CopyToClipboard('tag22354');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag31713" onclick="CopyToClipboard('tag31713');return false;" class="tag-decoration">v3-v3</div><div id="tag7140" onclick="CopyToClipboard('tag7140');return false;" class="tag-decoration">v3-v3.3</div><div id="tag30223" onclick="CopyToClipboard('tag30223');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag6655" onclick="CopyToClipboard('tag6655');return false;" class="tag-decoration">v3-develop</div><div id="tag17433" onclick="CopyToClipboard('tag17433');return false;" class="tag-decoration">v3-develop-d7872c2</div><div id="tag21448" onclick="CopyToClipboard('tag21448');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1250</div><div id="tag26052" onclick="CopyToClipboard('tag26052');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9472" onclick="CopyToClipboard('tag9472');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag19070" onclick="CopyToClipboard('tag19070');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d7872c2953a801ab129508fd04a322a2046754db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32615933172" target="_blank">2026-08-23 03:40:15</a></td></tr>
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
