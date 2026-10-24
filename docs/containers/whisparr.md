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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24051" onclick="CopyToClipboard('tag24051');return false;" class="tag-decoration">v2</div><div id="tag26987" onclick="CopyToClipboard('tag26987');return false;" class="tag-decoration">v2-0a0eaeb</div><div id="tag7162" onclick="CopyToClipboard('tag7162');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag1544" onclick="CopyToClipboard('tag1544');return false;" class="tag-decoration">v2-v2</div><div id="tag14120" onclick="CopyToClipboard('tag14120');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30087" onclick="CopyToClipboard('tag30087');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0a0eaeba32fe888e16179725ddffe4ebeaccbe0c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070912628" target="_blank">2026-10-24 06:37:04</a></td></tr>
<tr><td><div id="tag28601" onclick="CopyToClipboard('tag28601');return false;" class="tag-decoration">v2-develop</div><div id="tag11076" onclick="CopyToClipboard('tag11076');return false;" class="tag-decoration">v2-develop-295d0d6</div><div id="tag28837" onclick="CopyToClipboard('tag28837');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag7324" onclick="CopyToClipboard('tag7324');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18108" onclick="CopyToClipboard('tag18108');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3297" onclick="CopyToClipboard('tag3297');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/295d0d605374ff60ece5f0d68a70d66fb18d7f46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070916514" target="_blank">2026-10-24 06:37:07</a></td></tr>
<tr><td><div id="tag5764" onclick="CopyToClipboard('tag5764');return false;" class="tag-decoration">v3</div><div id="tag20011" onclick="CopyToClipboard('tag20011');return false;" class="tag-decoration">v3-8f93042</div><div id="tag10427" onclick="CopyToClipboard('tag10427');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7729" onclick="CopyToClipboard('tag7729');return false;" class="tag-decoration">v3-v3</div><div id="tag6806" onclick="CopyToClipboard('tag6806');return false;" class="tag-decoration">v3-v3.6</div><div id="tag22099" onclick="CopyToClipboard('tag22099');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8f9304219aaf1e3138a6b7b1ba7400d9a96bb538" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070915762" target="_blank">2026-10-24 06:37:06</a></td></tr>
<tr><td><div id="tag19991" onclick="CopyToClipboard('tag19991');return false;" class="tag-decoration">v3-develop</div><div id="tag22289" onclick="CopyToClipboard('tag22289');return false;" class="tag-decoration">v3-develop-0a811a3</div><div id="tag1203" onclick="CopyToClipboard('tag1203');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag20506" onclick="CopyToClipboard('tag20506');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag22753" onclick="CopyToClipboard('tag22753');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag23941" onclick="CopyToClipboard('tag23941');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0a811a35eecb51b15b44c3edc57c0179c1458fe9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070918872" target="_blank">2026-10-24 06:37:09</a></td></tr>
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
