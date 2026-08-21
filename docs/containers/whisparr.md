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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31488" onclick="CopyToClipboard('tag31488');return false;" class="tag-decoration">v2</div><div id="tag31541" onclick="CopyToClipboard('tag31541');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag28369" onclick="CopyToClipboard('tag28369');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag32547" onclick="CopyToClipboard('tag32547');return false;" class="tag-decoration">v2-v2</div><div id="tag13911" onclick="CopyToClipboard('tag13911');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5323" onclick="CopyToClipboard('tag5323');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag9027" onclick="CopyToClipboard('tag9027');return false;" class="tag-decoration">v2-develop</div><div id="tag25915" onclick="CopyToClipboard('tag25915');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag13692" onclick="CopyToClipboard('tag13692');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag3785" onclick="CopyToClipboard('tag3785');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26585" onclick="CopyToClipboard('tag26585');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23065" onclick="CopyToClipboard('tag23065');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag32528" onclick="CopyToClipboard('tag32528');return false;" class="tag-decoration">v3</div><div id="tag15628" onclick="CopyToClipboard('tag15628');return false;" class="tag-decoration">v3-edb7863</div><div id="tag22433" onclick="CopyToClipboard('tag22433');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag17311" onclick="CopyToClipboard('tag17311');return false;" class="tag-decoration">v3-v3</div><div id="tag19314" onclick="CopyToClipboard('tag19314');return false;" class="tag-decoration">v3-v3.3</div><div id="tag30789" onclick="CopyToClipboard('tag30789');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag19441" onclick="CopyToClipboard('tag19441');return false;" class="tag-decoration">v3-develop</div><div id="tag19811" onclick="CopyToClipboard('tag19811');return false;" class="tag-decoration">v3-develop-5fd0d71</div><div id="tag7712" onclick="CopyToClipboard('tag7712');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1226</div><div id="tag31110" onclick="CopyToClipboard('tag31110');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag13080" onclick="CopyToClipboard('tag13080');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag28441" onclick="CopyToClipboard('tag28441');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5fd0d7122446a394c16470ac7639d8f80c3cc4c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32531903921" target="_blank">2026-08-21 22:11:19</a></td></tr>
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
