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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12735" onclick="CopyToClipboard('tag12735');return false;" class="tag-decoration">v2</div><div id="tag31911" onclick="CopyToClipboard('tag31911');return false;" class="tag-decoration">v2-48e736e</div><div id="tag27572" onclick="CopyToClipboard('tag27572');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10706" onclick="CopyToClipboard('tag10706');return false;" class="tag-decoration">v2-v2</div><div id="tag1019" onclick="CopyToClipboard('tag1019');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18118" onclick="CopyToClipboard('tag18118');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag20971" onclick="CopyToClipboard('tag20971');return false;" class="tag-decoration">v2-develop</div><div id="tag2699" onclick="CopyToClipboard('tag2699');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag5829" onclick="CopyToClipboard('tag5829');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag24723" onclick="CopyToClipboard('tag24723');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29362" onclick="CopyToClipboard('tag29362');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18515" onclick="CopyToClipboard('tag18515');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag23661" onclick="CopyToClipboard('tag23661');return false;" class="tag-decoration">v3</div><div id="tag20457" onclick="CopyToClipboard('tag20457');return false;" class="tag-decoration">v3-fa81175</div><div id="tag7780" onclick="CopyToClipboard('tag7780');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag5917" onclick="CopyToClipboard('tag5917');return false;" class="tag-decoration">v3-v3</div><div id="tag24660" onclick="CopyToClipboard('tag24660');return false;" class="tag-decoration">v3-v3.3</div><div id="tag15516" onclick="CopyToClipboard('tag15516');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/fa811751d919aecf0fc32af784db29ce125812f3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32049554083" target="_blank">2026-08-17 17:15:50</a></td></tr>
<tr><td><div id="tag26281" onclick="CopyToClipboard('tag26281');return false;" class="tag-decoration">v3-develop</div><div id="tag26111" onclick="CopyToClipboard('tag26111');return false;" class="tag-decoration">v3-develop-d61f9bc</div><div id="tag7749" onclick="CopyToClipboard('tag7749');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1135</div><div id="tag19429" onclick="CopyToClipboard('tag19429');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32534" onclick="CopyToClipboard('tag32534');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag1398" onclick="CopyToClipboard('tag1398');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d61f9bc58111a6ee4b05382f9f73d1570866bd09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32079396707" target="_blank">2026-08-17 23:11:42</a></td></tr>
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
