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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3291" onclick="CopyToClipboard('tag3291');return false;" class="tag-decoration">v2</div><div id="tag25383" onclick="CopyToClipboard('tag25383');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag7355" onclick="CopyToClipboard('tag7355');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2809" onclick="CopyToClipboard('tag2809');return false;" class="tag-decoration">v2-v2</div><div id="tag16272" onclick="CopyToClipboard('tag16272');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32015" onclick="CopyToClipboard('tag32015');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag28039" onclick="CopyToClipboard('tag28039');return false;" class="tag-decoration">v2-develop</div><div id="tag13584" onclick="CopyToClipboard('tag13584');return false;" class="tag-decoration">v2-develop-85a83c7</div><div id="tag15703" onclick="CopyToClipboard('tag15703');return false;" class="tag-decoration">v2-develop-2.2.0-develop.165</div><div id="tag18688" onclick="CopyToClipboard('tag18688');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9848" onclick="CopyToClipboard('tag9848');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26898" onclick="CopyToClipboard('tag26898');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/85a83c7488c14410a2f764b09d1657e7a23bbc50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32866356282" target="_blank">2026-08-25 15:31:43</a></td></tr>
<tr><td><div id="tag30902" onclick="CopyToClipboard('tag30902');return false;" class="tag-decoration">v3</div><div id="tag1062" onclick="CopyToClipboard('tag1062');return false;" class="tag-decoration">v3-edb7863</div><div id="tag23491" onclick="CopyToClipboard('tag23491');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag26957" onclick="CopyToClipboard('tag26957');return false;" class="tag-decoration">v3-v3</div><div id="tag10097" onclick="CopyToClipboard('tag10097');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23991" onclick="CopyToClipboard('tag23991');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag400" onclick="CopyToClipboard('tag400');return false;" class="tag-decoration">v3-develop</div><div id="tag30556" onclick="CopyToClipboard('tag30556');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag24517" onclick="CopyToClipboard('tag24517');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag31370" onclick="CopyToClipboard('tag31370');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20790" onclick="CopyToClipboard('tag20790');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag11512" onclick="CopyToClipboard('tag11512');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
