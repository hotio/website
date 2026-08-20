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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19335" onclick="CopyToClipboard('tag19335');return false;" class="tag-decoration">v2</div><div id="tag19554" onclick="CopyToClipboard('tag19554');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag18124" onclick="CopyToClipboard('tag18124');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5025" onclick="CopyToClipboard('tag5025');return false;" class="tag-decoration">v2-v2</div><div id="tag13564" onclick="CopyToClipboard('tag13564');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32758" onclick="CopyToClipboard('tag32758');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag10796" onclick="CopyToClipboard('tag10796');return false;" class="tag-decoration">v2-develop</div><div id="tag24491" onclick="CopyToClipboard('tag24491');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag26160" onclick="CopyToClipboard('tag26160');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag18342" onclick="CopyToClipboard('tag18342');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13779" onclick="CopyToClipboard('tag13779');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25976" onclick="CopyToClipboard('tag25976');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag19283" onclick="CopyToClipboard('tag19283');return false;" class="tag-decoration">v3</div><div id="tag10359" onclick="CopyToClipboard('tag10359');return false;" class="tag-decoration">v3-edb7863</div><div id="tag7823" onclick="CopyToClipboard('tag7823');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag15023" onclick="CopyToClipboard('tag15023');return false;" class="tag-decoration">v3-v3</div><div id="tag10209" onclick="CopyToClipboard('tag10209');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9630" onclick="CopyToClipboard('tag9630');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag17816" onclick="CopyToClipboard('tag17816');return false;" class="tag-decoration">v3-develop</div><div id="tag25483" onclick="CopyToClipboard('tag25483');return false;" class="tag-decoration">v3-develop-9d3ad58</div><div id="tag6116" onclick="CopyToClipboard('tag6116');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1201</div><div id="tag22083" onclick="CopyToClipboard('tag22083');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27351" onclick="CopyToClipboard('tag27351');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26142" onclick="CopyToClipboard('tag26142');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9d3ad580edf25d58f7f2cc39e1280b699c3b58ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32418587251" target="_blank">2026-08-20 21:16:46</a></td></tr>
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
