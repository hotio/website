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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2924" onclick="CopyToClipboard('tag2924');return false;" class="tag-decoration">v2</div><div id="tag21139" onclick="CopyToClipboard('tag21139');return false;" class="tag-decoration">v2-48e736e</div><div id="tag1292" onclick="CopyToClipboard('tag1292');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag27365" onclick="CopyToClipboard('tag27365');return false;" class="tag-decoration">v2-v2</div><div id="tag14328" onclick="CopyToClipboard('tag14328');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20308" onclick="CopyToClipboard('tag20308');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag9391" onclick="CopyToClipboard('tag9391');return false;" class="tag-decoration">v2-develop</div><div id="tag8139" onclick="CopyToClipboard('tag8139');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag28479" onclick="CopyToClipboard('tag28479');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag22902" onclick="CopyToClipboard('tag22902');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9180" onclick="CopyToClipboard('tag9180');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26912" onclick="CopyToClipboard('tag26912');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag2262" onclick="CopyToClipboard('tag2262');return false;" class="tag-decoration">v3</div><div id="tag13261" onclick="CopyToClipboard('tag13261');return false;" class="tag-decoration">v3-fa81175</div><div id="tag162" onclick="CopyToClipboard('tag162');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag29115" onclick="CopyToClipboard('tag29115');return false;" class="tag-decoration">v3-v3</div><div id="tag14377" onclick="CopyToClipboard('tag14377');return false;" class="tag-decoration">v3-v3.3</div><div id="tag19939" onclick="CopyToClipboard('tag19939');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/fa811751d919aecf0fc32af784db29ce125812f3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32049554083" target="_blank">2026-08-17 17:15:50</a></td></tr>
<tr><td><div id="tag24027" onclick="CopyToClipboard('tag24027');return false;" class="tag-decoration">v3-develop</div><div id="tag20736" onclick="CopyToClipboard('tag20736');return false;" class="tag-decoration">v3-develop-68f7f08</div><div id="tag968" onclick="CopyToClipboard('tag968');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1129</div><div id="tag22277" onclick="CopyToClipboard('tag22277');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28330" onclick="CopyToClipboard('tag28330');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27401" onclick="CopyToClipboard('tag27401');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/68f7f0830b319d20083ddb24ff29eb73e55c6074" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31991848786" target="_blank">2026-08-17 03:39:14</a></td></tr>
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
