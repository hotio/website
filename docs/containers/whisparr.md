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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23246" onclick="CopyToClipboard('tag23246');return false;" class="tag-decoration">v2</div><div id="tag8837" onclick="CopyToClipboard('tag8837');return false;" class="tag-decoration">v2-48e736e</div><div id="tag2707" onclick="CopyToClipboard('tag2707');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag9319" onclick="CopyToClipboard('tag9319');return false;" class="tag-decoration">v2-v2</div><div id="tag26203" onclick="CopyToClipboard('tag26203');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9836" onclick="CopyToClipboard('tag9836');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag30685" onclick="CopyToClipboard('tag30685');return false;" class="tag-decoration">v2-develop</div><div id="tag2907" onclick="CopyToClipboard('tag2907');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag14148" onclick="CopyToClipboard('tag14148');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag25394" onclick="CopyToClipboard('tag25394');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12833" onclick="CopyToClipboard('tag12833');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28990" onclick="CopyToClipboard('tag28990');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag10386" onclick="CopyToClipboard('tag10386');return false;" class="tag-decoration">v3</div><div id="tag9137" onclick="CopyToClipboard('tag9137');return false;" class="tag-decoration">v3-25c55fb</div><div id="tag3719" onclick="CopyToClipboard('tag3719');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag24341" onclick="CopyToClipboard('tag24341');return false;" class="tag-decoration">v3-v3</div><div id="tag32139" onclick="CopyToClipboard('tag32139');return false;" class="tag-decoration">v3-v3.3</div><div id="tag6609" onclick="CopyToClipboard('tag6609');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25c55fb5b73a213ff854e4077eb47e3d4702374a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513222" target="_blank">2026-08-15 09:14:58</a></td></tr>
<tr><td><div id="tag27767" onclick="CopyToClipboard('tag27767');return false;" class="tag-decoration">v3-develop</div><div id="tag25474" onclick="CopyToClipboard('tag25474');return false;" class="tag-decoration">v3-develop-da649e1</div><div id="tag15476" onclick="CopyToClipboard('tag15476');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1092</div><div id="tag1725" onclick="CopyToClipboard('tag1725');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21969" onclick="CopyToClipboard('tag21969');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag23682" onclick="CopyToClipboard('tag23682');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da649e146a5d1035b396d3dffba9bb64e79bd0be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511419" target="_blank">2026-08-15 09:14:55</a></td></tr>
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
