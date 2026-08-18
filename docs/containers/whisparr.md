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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21820" onclick="CopyToClipboard('tag21820');return false;" class="tag-decoration">v2</div><div id="tag18397" onclick="CopyToClipboard('tag18397');return false;" class="tag-decoration">v2-48e736e</div><div id="tag3761" onclick="CopyToClipboard('tag3761');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag15728" onclick="CopyToClipboard('tag15728');return false;" class="tag-decoration">v2-v2</div><div id="tag18250" onclick="CopyToClipboard('tag18250');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9317" onclick="CopyToClipboard('tag9317');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag11311" onclick="CopyToClipboard('tag11311');return false;" class="tag-decoration">v2-develop</div><div id="tag26092" onclick="CopyToClipboard('tag26092');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag18580" onclick="CopyToClipboard('tag18580');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag13899" onclick="CopyToClipboard('tag13899');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2056" onclick="CopyToClipboard('tag2056');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16770" onclick="CopyToClipboard('tag16770');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag994" onclick="CopyToClipboard('tag994');return false;" class="tag-decoration">v3</div><div id="tag32061" onclick="CopyToClipboard('tag32061');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag7932" onclick="CopyToClipboard('tag7932');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag5989" onclick="CopyToClipboard('tag5989');return false;" class="tag-decoration">v3-v3</div><div id="tag4515" onclick="CopyToClipboard('tag4515');return false;" class="tag-decoration">v3-v3.3</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag433" onclick="CopyToClipboard('tag433');return false;" class="tag-decoration">v3-develop</div><div id="tag10524" onclick="CopyToClipboard('tag10524');return false;" class="tag-decoration">v3-develop-5e4a4cd</div><div id="tag21006" onclick="CopyToClipboard('tag21006');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1141</div><div id="tag5577" onclick="CopyToClipboard('tag5577');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14501" onclick="CopyToClipboard('tag14501');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag20164" onclick="CopyToClipboard('tag20164');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5e4a4cdea014f1056df1b919b16d67d5b0a7b353" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32090753972" target="_blank">2026-08-18 02:08:18</a></td></tr>
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
