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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2882" onclick="CopyToClipboard('tag2882');return false;" class="tag-decoration">v2</div><div id="tag4604" onclick="CopyToClipboard('tag4604');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag32181" onclick="CopyToClipboard('tag32181');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16904" onclick="CopyToClipboard('tag16904');return false;" class="tag-decoration">v2-v2</div><div id="tag7088" onclick="CopyToClipboard('tag7088');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28218" onclick="CopyToClipboard('tag28218');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag31238" onclick="CopyToClipboard('tag31238');return false;" class="tag-decoration">v2-develop</div><div id="tag18789" onclick="CopyToClipboard('tag18789');return false;" class="tag-decoration">v2-develop-6d8ef45</div><div id="tag15750" onclick="CopyToClipboard('tag15750');return false;" class="tag-decoration">v2-develop-2.2.0-develop.198</div><div id="tag16381" onclick="CopyToClipboard('tag16381');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12845" onclick="CopyToClipboard('tag12845');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8524" onclick="CopyToClipboard('tag8524');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6d8ef4525bcfc34049941775db0094351af42fcc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922181221" target="_blank">2026-08-26 02:17:33</a></td></tr>
<tr><td><div id="tag3704" onclick="CopyToClipboard('tag3704');return false;" class="tag-decoration">v3</div><div id="tag22015" onclick="CopyToClipboard('tag22015');return false;" class="tag-decoration">v3-edb7863</div><div id="tag30021" onclick="CopyToClipboard('tag30021');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag22769" onclick="CopyToClipboard('tag22769');return false;" class="tag-decoration">v3-v3</div><div id="tag25707" onclick="CopyToClipboard('tag25707');return false;" class="tag-decoration">v3-v3.3</div><div id="tag2314" onclick="CopyToClipboard('tag2314');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag2563" onclick="CopyToClipboard('tag2563');return false;" class="tag-decoration">v3-develop</div><div id="tag10058" onclick="CopyToClipboard('tag10058');return false;" class="tag-decoration">v3-develop-d5dc06b</div><div id="tag21728" onclick="CopyToClipboard('tag21728');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag30448" onclick="CopyToClipboard('tag30448');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31082" onclick="CopyToClipboard('tag31082');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6387" onclick="CopyToClipboard('tag6387');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5dc06b0ee4062c66e3f710becc35249dbfa3a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32889131917" target="_blank">2026-08-25 19:21:37</a></td></tr>
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
