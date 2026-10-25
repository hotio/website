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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10971" onclick="CopyToClipboard('tag10971');return false;" class="tag-decoration">v2</div><div id="tag13754" onclick="CopyToClipboard('tag13754');return false;" class="tag-decoration">v2-0a0eaeb</div><div id="tag27586" onclick="CopyToClipboard('tag27586');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29351" onclick="CopyToClipboard('tag29351');return false;" class="tag-decoration">v2-v2</div><div id="tag30590" onclick="CopyToClipboard('tag30590');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20160" onclick="CopyToClipboard('tag20160');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0a0eaeba32fe888e16179725ddffe4ebeaccbe0c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070912628" target="_blank">2026-10-24 06:37:04</a></td></tr>
<tr><td><div id="tag3028" onclick="CopyToClipboard('tag3028');return false;" class="tag-decoration">v2-develop</div><div id="tag223" onclick="CopyToClipboard('tag223');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag18823" onclick="CopyToClipboard('tag18823');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag19137" onclick="CopyToClipboard('tag19137');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14495" onclick="CopyToClipboard('tag14495');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag14810" onclick="CopyToClipboard('tag14810');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag15021" onclick="CopyToClipboard('tag15021');return false;" class="tag-decoration">v3</div><div id="tag31771" onclick="CopyToClipboard('tag31771');return false;" class="tag-decoration">v3-8f93042</div><div id="tag32002" onclick="CopyToClipboard('tag32002');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag11960" onclick="CopyToClipboard('tag11960');return false;" class="tag-decoration">v3-v3</div><div id="tag24887" onclick="CopyToClipboard('tag24887');return false;" class="tag-decoration">v3-v3.6</div><div id="tag17362" onclick="CopyToClipboard('tag17362');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8f9304219aaf1e3138a6b7b1ba7400d9a96bb538" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070915762" target="_blank">2026-10-24 06:37:06</a></td></tr>
<tr><td><div id="tag27591" onclick="CopyToClipboard('tag27591');return false;" class="tag-decoration">v3-develop</div><div id="tag3974" onclick="CopyToClipboard('tag3974');return false;" class="tag-decoration">v3-develop-0a811a3</div><div id="tag13483" onclick="CopyToClipboard('tag13483');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag21999" onclick="CopyToClipboard('tag21999');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30256" onclick="CopyToClipboard('tag30256');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag9709" onclick="CopyToClipboard('tag9709');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0a811a35eecb51b15b44c3edc57c0179c1458fe9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070918872" target="_blank">2026-10-24 06:37:09</a></td></tr>
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
