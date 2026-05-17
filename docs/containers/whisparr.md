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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31288" onclick="CopyToClipboard('tag31288');return false;" class="tag-decoration">v2</div><div id="tag14054" onclick="CopyToClipboard('tag14054');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag10836" onclick="CopyToClipboard('tag10836');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6751" onclick="CopyToClipboard('tag6751');return false;" class="tag-decoration">v2-v2</div><div id="tag11118" onclick="CopyToClipboard('tag11118');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30073" onclick="CopyToClipboard('tag30073');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag19252" onclick="CopyToClipboard('tag19252');return false;" class="tag-decoration">v2-develop</div><div id="tag1866" onclick="CopyToClipboard('tag1866');return false;" class="tag-decoration">v2-develop-076c1fc</div><div id="tag22557" onclick="CopyToClipboard('tag22557');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag17269" onclick="CopyToClipboard('tag17269');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26750" onclick="CopyToClipboard('tag26750');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag27185" onclick="CopyToClipboard('tag27185');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/076c1fceec6f30576b12e8823ad85b098a7d3a11" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087943" target="_blank">2026-05-17 10:16:42</a></td></tr>
<tr><td><div id="tag30333" onclick="CopyToClipboard('tag30333');return false;" class="tag-decoration">v3</div><div id="tag20580" onclick="CopyToClipboard('tag20580');return false;" class="tag-decoration">v3-a468baa</div><div id="tag30610" onclick="CopyToClipboard('tag30610');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag30290" onclick="CopyToClipboard('tag30290');return false;" class="tag-decoration">v3-v3</div><div id="tag10333" onclick="CopyToClipboard('tag10333');return false;" class="tag-decoration">v3-v3.3</div><div id="tag8918" onclick="CopyToClipboard('tag8918');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a468baab1ae75ae7d797f0eadd79c98d67fe15cd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442785" target="_blank">2026-05-15 17:20:24</a></td></tr>
<tr><td><div id="tag25663" onclick="CopyToClipboard('tag25663');return false;" class="tag-decoration">v3-develop</div><div id="tag20286" onclick="CopyToClipboard('tag20286');return false;" class="tag-decoration">v3-develop-5c65da0</div><div id="tag3212" onclick="CopyToClipboard('tag3212');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag25812" onclick="CopyToClipboard('tag25812');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8781" onclick="CopyToClipboard('tag8781');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag23230" onclick="CopyToClipboard('tag23230');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c65da042eb95e80238164f3b96da790df4653ce" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442401" target="_blank">2026-05-15 17:20:24</a></td></tr>
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
