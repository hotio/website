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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6201" onclick="CopyToClipboard('tag6201');return false;" class="tag-decoration">v2</div><div id="tag7912" onclick="CopyToClipboard('tag7912');return false;" class="tag-decoration">v2-9ae9357</div><div id="tag32677" onclick="CopyToClipboard('tag32677');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag3804" onclick="CopyToClipboard('tag3804');return false;" class="tag-decoration">v2-v2</div><div id="tag28307" onclick="CopyToClipboard('tag28307');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3521" onclick="CopyToClipboard('tag3521');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9ae93578d0de04f081e840e4bfbeee518f9a5cd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147774445" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag3380" onclick="CopyToClipboard('tag3380');return false;" class="tag-decoration">v2-develop</div><div id="tag17322" onclick="CopyToClipboard('tag17322');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag21122" onclick="CopyToClipboard('tag21122');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag10365" onclick="CopyToClipboard('tag10365');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag973" onclick="CopyToClipboard('tag973');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag27638" onclick="CopyToClipboard('tag27638');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag4214" onclick="CopyToClipboard('tag4214');return false;" class="tag-decoration">v3</div><div id="tag30410" onclick="CopyToClipboard('tag30410');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag23343" onclick="CopyToClipboard('tag23343');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag12113" onclick="CopyToClipboard('tag12113');return false;" class="tag-decoration">v3-v3</div><div id="tag15216" onclick="CopyToClipboard('tag15216');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17869" onclick="CopyToClipboard('tag17869');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag12055" onclick="CopyToClipboard('tag12055');return false;" class="tag-decoration">v3-develop</div><div id="tag16307" onclick="CopyToClipboard('tag16307');return false;" class="tag-decoration">v3-develop-3114853</div><div id="tag26716" onclick="CopyToClipboard('tag26716');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1159</div><div id="tag18194" onclick="CopyToClipboard('tag18194');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17043" onclick="CopyToClipboard('tag17043');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26579" onclick="CopyToClipboard('tag26579');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3114853010b355667fca0fffa5fb851519ede1bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32201683769" target="_blank">2026-08-19 00:33:13</a></td></tr>
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
