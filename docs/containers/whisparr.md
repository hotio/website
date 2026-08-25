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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18715" onclick="CopyToClipboard('tag18715');return false;" class="tag-decoration">v2</div><div id="tag20780" onclick="CopyToClipboard('tag20780');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag20984" onclick="CopyToClipboard('tag20984');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag18346" onclick="CopyToClipboard('tag18346');return false;" class="tag-decoration">v2-v2</div><div id="tag22327" onclick="CopyToClipboard('tag22327');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21520" onclick="CopyToClipboard('tag21520');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag22293" onclick="CopyToClipboard('tag22293');return false;" class="tag-decoration">v2-develop</div><div id="tag17688" onclick="CopyToClipboard('tag17688');return false;" class="tag-decoration">v2-develop-b2f9e3f</div><div id="tag3274" onclick="CopyToClipboard('tag3274');return false;" class="tag-decoration">v2-develop-2.2.0-develop.187</div><div id="tag21883" onclick="CopyToClipboard('tag21883');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13470" onclick="CopyToClipboard('tag13470');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31181" onclick="CopyToClipboard('tag31181');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b2f9e3f9f2cd1a5bb533c261d05203ecc2429878" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32909917302" target="_blank">2026-08-25 23:15:02</a></td></tr>
<tr><td><div id="tag12050" onclick="CopyToClipboard('tag12050');return false;" class="tag-decoration">v3</div><div id="tag23166" onclick="CopyToClipboard('tag23166');return false;" class="tag-decoration">v3-edb7863</div><div id="tag17403" onclick="CopyToClipboard('tag17403');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag5483" onclick="CopyToClipboard('tag5483');return false;" class="tag-decoration">v3-v3</div><div id="tag25863" onclick="CopyToClipboard('tag25863');return false;" class="tag-decoration">v3-v3.3</div><div id="tag28592" onclick="CopyToClipboard('tag28592');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag13561" onclick="CopyToClipboard('tag13561');return false;" class="tag-decoration">v3-develop</div><div id="tag24606" onclick="CopyToClipboard('tag24606');return false;" class="tag-decoration">v3-develop-d5dc06b</div><div id="tag365" onclick="CopyToClipboard('tag365');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag11254" onclick="CopyToClipboard('tag11254');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21319" onclick="CopyToClipboard('tag21319');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5104" onclick="CopyToClipboard('tag5104');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5dc06b0ee4062c66e3f710becc35249dbfa3a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32889131917" target="_blank">2026-08-25 19:21:37</a></td></tr>
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
