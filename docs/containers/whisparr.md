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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag175" onclick="CopyToClipboard('tag175');return false;" class="tag-decoration">v2</div><div id="tag15550" onclick="CopyToClipboard('tag15550');return false;" class="tag-decoration">v2-48e736e</div><div id="tag29759" onclick="CopyToClipboard('tag29759');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag18183" onclick="CopyToClipboard('tag18183');return false;" class="tag-decoration">v2-v2</div><div id="tag4469" onclick="CopyToClipboard('tag4469');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10662" onclick="CopyToClipboard('tag10662');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag10282" onclick="CopyToClipboard('tag10282');return false;" class="tag-decoration">v2-develop</div><div id="tag6528" onclick="CopyToClipboard('tag6528');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag20454" onclick="CopyToClipboard('tag20454');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag17574" onclick="CopyToClipboard('tag17574');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13366" onclick="CopyToClipboard('tag13366');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18961" onclick="CopyToClipboard('tag18961');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag10572" onclick="CopyToClipboard('tag10572');return false;" class="tag-decoration">v3</div><div id="tag10326" onclick="CopyToClipboard('tag10326');return false;" class="tag-decoration">v3-fa81175</div><div id="tag14188" onclick="CopyToClipboard('tag14188');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag21212" onclick="CopyToClipboard('tag21212');return false;" class="tag-decoration">v3-v3</div><div id="tag27679" onclick="CopyToClipboard('tag27679');return false;" class="tag-decoration">v3-v3.3</div><div id="tag25524" onclick="CopyToClipboard('tag25524');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/fa811751d919aecf0fc32af784db29ce125812f3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32049554083" target="_blank">2026-08-17 17:15:50</a></td></tr>
<tr><td><div id="tag28552" onclick="CopyToClipboard('tag28552');return false;" class="tag-decoration">v3-develop</div><div id="tag1262" onclick="CopyToClipboard('tag1262');return false;" class="tag-decoration">v3-develop-5e4a4cd</div><div id="tag10025" onclick="CopyToClipboard('tag10025');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1141</div><div id="tag32087" onclick="CopyToClipboard('tag32087');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5751" onclick="CopyToClipboard('tag5751');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag20476" onclick="CopyToClipboard('tag20476');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5e4a4cdea014f1056df1b919b16d67d5b0a7b353" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32090753972" target="_blank">2026-08-18 02:08:18</a></td></tr>
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
