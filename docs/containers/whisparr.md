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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14221" onclick="CopyToClipboard('tag14221');return false;" class="tag-decoration">v2</div><div id="tag31810" onclick="CopyToClipboard('tag31810');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag8861" onclick="CopyToClipboard('tag8861');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag21871" onclick="CopyToClipboard('tag21871');return false;" class="tag-decoration">v2-v2</div><div id="tag27090" onclick="CopyToClipboard('tag27090');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3542" onclick="CopyToClipboard('tag3542');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag22607" onclick="CopyToClipboard('tag22607');return false;" class="tag-decoration">v2-develop</div><div id="tag26031" onclick="CopyToClipboard('tag26031');return false;" class="tag-decoration">v2-develop-ef20f95</div><div id="tag242" onclick="CopyToClipboard('tag242');return false;" class="tag-decoration">v2-develop-2.2.0-develop.160</div><div id="tag25972" onclick="CopyToClipboard('tag25972');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag177" onclick="CopyToClipboard('tag177');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31819" onclick="CopyToClipboard('tag31819');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ef20f951f9f6729b4feedb4f80ea40656598dbe1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32805920189" target="_blank">2026-08-25 03:38:11</a></td></tr>
<tr><td><div id="tag28262" onclick="CopyToClipboard('tag28262');return false;" class="tag-decoration">v3</div><div id="tag19507" onclick="CopyToClipboard('tag19507');return false;" class="tag-decoration">v3-edb7863</div><div id="tag15297" onclick="CopyToClipboard('tag15297');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag30944" onclick="CopyToClipboard('tag30944');return false;" class="tag-decoration">v3-v3</div><div id="tag2638" onclick="CopyToClipboard('tag2638');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1795" onclick="CopyToClipboard('tag1795');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag18904" onclick="CopyToClipboard('tag18904');return false;" class="tag-decoration">v3-develop</div><div id="tag2761" onclick="CopyToClipboard('tag2761');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag21694" onclick="CopyToClipboard('tag21694');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag2178" onclick="CopyToClipboard('tag2178');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32555" onclick="CopyToClipboard('tag32555');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31438" onclick="CopyToClipboard('tag31438');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
