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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4171" onclick="CopyToClipboard('tag4171');return false;" class="tag-decoration">v2</div><div id="tag13199" onclick="CopyToClipboard('tag13199');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag19463" onclick="CopyToClipboard('tag19463');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16775" onclick="CopyToClipboard('tag16775');return false;" class="tag-decoration">v2-v2</div><div id="tag14689" onclick="CopyToClipboard('tag14689');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11732" onclick="CopyToClipboard('tag11732');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag25580" onclick="CopyToClipboard('tag25580');return false;" class="tag-decoration">v2-develop</div><div id="tag6746" onclick="CopyToClipboard('tag6746');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag30217" onclick="CopyToClipboard('tag30217');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag6137" onclick="CopyToClipboard('tag6137');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30101" onclick="CopyToClipboard('tag30101');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6065" onclick="CopyToClipboard('tag6065');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag25075" onclick="CopyToClipboard('tag25075');return false;" class="tag-decoration">v3</div><div id="tag13706" onclick="CopyToClipboard('tag13706');return false;" class="tag-decoration">v3-edb7863</div><div id="tag21615" onclick="CopyToClipboard('tag21615');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag23760" onclick="CopyToClipboard('tag23760');return false;" class="tag-decoration">v3-v3</div><div id="tag4587" onclick="CopyToClipboard('tag4587');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14796" onclick="CopyToClipboard('tag14796');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag20095" onclick="CopyToClipboard('tag20095');return false;" class="tag-decoration">v3-develop</div><div id="tag8275" onclick="CopyToClipboard('tag8275');return false;" class="tag-decoration">v3-develop-3fe0bb7</div><div id="tag11375" onclick="CopyToClipboard('tag11375');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1242</div><div id="tag19192" onclick="CopyToClipboard('tag19192');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30744" onclick="CopyToClipboard('tag30744');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag12408" onclick="CopyToClipboard('tag12408');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3fe0bb7579f1e58815ca298b182e2eb51c5a5d1a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32601656266" target="_blank">2026-08-22 22:09:38</a></td></tr>
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
