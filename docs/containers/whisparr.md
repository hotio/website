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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30007" onclick="CopyToClipboard('tag30007');return false;" class="tag-decoration">v2</div><div id="tag17872" onclick="CopyToClipboard('tag17872');return false;" class="tag-decoration">v2-48e736e</div><div id="tag21196" onclick="CopyToClipboard('tag21196');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag17159" onclick="CopyToClipboard('tag17159');return false;" class="tag-decoration">v2-v2</div><div id="tag4259" onclick="CopyToClipboard('tag4259');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18255" onclick="CopyToClipboard('tag18255');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag1567" onclick="CopyToClipboard('tag1567');return false;" class="tag-decoration">v2-develop</div><div id="tag24268" onclick="CopyToClipboard('tag24268');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag8530" onclick="CopyToClipboard('tag8530');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag5161" onclick="CopyToClipboard('tag5161');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag142" onclick="CopyToClipboard('tag142');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag318" onclick="CopyToClipboard('tag318');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag23245" onclick="CopyToClipboard('tag23245');return false;" class="tag-decoration">v3</div><div id="tag27834" onclick="CopyToClipboard('tag27834');return false;" class="tag-decoration">v3-fa81175</div><div id="tag5058" onclick="CopyToClipboard('tag5058');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag17624" onclick="CopyToClipboard('tag17624');return false;" class="tag-decoration">v3-v3</div><div id="tag19470" onclick="CopyToClipboard('tag19470');return false;" class="tag-decoration">v3-v3.3</div><div id="tag582" onclick="CopyToClipboard('tag582');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/fa811751d919aecf0fc32af784db29ce125812f3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32049554083" target="_blank">2026-08-17 17:15:50</a></td></tr>
<tr><td><div id="tag12011" onclick="CopyToClipboard('tag12011');return false;" class="tag-decoration">v3-develop</div><div id="tag28002" onclick="CopyToClipboard('tag28002');return false;" class="tag-decoration">v3-develop-5e4a4cd</div><div id="tag16937" onclick="CopyToClipboard('tag16937');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1141</div><div id="tag3387" onclick="CopyToClipboard('tag3387');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12799" onclick="CopyToClipboard('tag12799');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag2587" onclick="CopyToClipboard('tag2587');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5e4a4cdea014f1056df1b919b16d67d5b0a7b353" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32090753972" target="_blank">2026-08-18 02:08:18</a></td></tr>
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
