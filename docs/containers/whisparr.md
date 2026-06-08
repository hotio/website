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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12607" onclick="CopyToClipboard('tag12607');return false;" class="tag-decoration">v2</div><div id="tag4521" onclick="CopyToClipboard('tag4521');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag9758" onclick="CopyToClipboard('tag9758');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag25844" onclick="CopyToClipboard('tag25844');return false;" class="tag-decoration">v2-v2</div><div id="tag25594" onclick="CopyToClipboard('tag25594');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11830" onclick="CopyToClipboard('tag11830');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag10259" onclick="CopyToClipboard('tag10259');return false;" class="tag-decoration">v2-develop</div><div id="tag21032" onclick="CopyToClipboard('tag21032');return false;" class="tag-decoration">v2-develop-6f299d7</div><div id="tag28142" onclick="CopyToClipboard('tag28142');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag19957" onclick="CopyToClipboard('tag19957');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9439" onclick="CopyToClipboard('tag9439');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29364" onclick="CopyToClipboard('tag29364');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6f299d795bbb90b74906ea2993190da719e55d49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27160917487" target="_blank">2026-06-08 19:13:28</a></td></tr>
<tr><td><div id="tag14189" onclick="CopyToClipboard('tag14189');return false;" class="tag-decoration">v3</div><div id="tag3627" onclick="CopyToClipboard('tag3627');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag5761" onclick="CopyToClipboard('tag5761');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag24584" onclick="CopyToClipboard('tag24584');return false;" class="tag-decoration">v3-v3</div><div id="tag18816" onclick="CopyToClipboard('tag18816');return false;" class="tag-decoration">v3-v3.3</div><div id="tag792" onclick="CopyToClipboard('tag792');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag30355" onclick="CopyToClipboard('tag30355');return false;" class="tag-decoration">v3-develop</div><div id="tag10036" onclick="CopyToClipboard('tag10036');return false;" class="tag-decoration">v3-develop-0ab41c3</div><div id="tag2607" onclick="CopyToClipboard('tag2607');return false;" class="tag-decoration">v3-develop-3.3.3-develop.758</div><div id="tag24016" onclick="CopyToClipboard('tag24016');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6704" onclick="CopyToClipboard('tag6704');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag11026" onclick="CopyToClipboard('tag11026');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0ab41c39eb85758db9a4c5a01c82f7a3a9a89328" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27168721621" target="_blank">2026-06-08 21:40:51</a></td></tr>
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
