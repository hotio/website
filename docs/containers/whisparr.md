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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20959" onclick="CopyToClipboard('tag20959');return false;" class="tag-decoration">v2</div><div id="tag31983" onclick="CopyToClipboard('tag31983');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag28809" onclick="CopyToClipboard('tag28809');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag21393" onclick="CopyToClipboard('tag21393');return false;" class="tag-decoration">v2-v2</div><div id="tag24952" onclick="CopyToClipboard('tag24952');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13283" onclick="CopyToClipboard('tag13283');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag31031" onclick="CopyToClipboard('tag31031');return false;" class="tag-decoration">v2-develop</div><div id="tag19327" onclick="CopyToClipboard('tag19327');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag13208" onclick="CopyToClipboard('tag13208');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag30878" onclick="CopyToClipboard('tag30878');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11724" onclick="CopyToClipboard('tag11724');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19301" onclick="CopyToClipboard('tag19301');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag3041" onclick="CopyToClipboard('tag3041');return false;" class="tag-decoration">v3</div><div id="tag6680" onclick="CopyToClipboard('tag6680');return false;" class="tag-decoration">v3-edb7863</div><div id="tag12717" onclick="CopyToClipboard('tag12717');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag21542" onclick="CopyToClipboard('tag21542');return false;" class="tag-decoration">v3-v3</div><div id="tag28081" onclick="CopyToClipboard('tag28081');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11624" onclick="CopyToClipboard('tag11624');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag15412" onclick="CopyToClipboard('tag15412');return false;" class="tag-decoration">v3-develop</div><div id="tag30115" onclick="CopyToClipboard('tag30115');return false;" class="tag-decoration">v3-develop-8777f0c</div><div id="tag14130" onclick="CopyToClipboard('tag14130');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1265</div><div id="tag3739" onclick="CopyToClipboard('tag3739');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11613" onclick="CopyToClipboard('tag11613');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag284" onclick="CopyToClipboard('tag284');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8777f0cd053c18b365f5a0296014b8ec44c1c175" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32657310188" target="_blank">2026-08-23 18:12:39</a></td></tr>
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
