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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12093" onclick="CopyToClipboard('tag12093');return false;" class="tag-decoration">v2</div><div id="tag30434" onclick="CopyToClipboard('tag30434');return false;" class="tag-decoration">v2-48e736e</div><div id="tag13202" onclick="CopyToClipboard('tag13202');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag581" onclick="CopyToClipboard('tag581');return false;" class="tag-decoration">v2-v2</div><div id="tag20247" onclick="CopyToClipboard('tag20247');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19723" onclick="CopyToClipboard('tag19723');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag26624" onclick="CopyToClipboard('tag26624');return false;" class="tag-decoration">v2-develop</div><div id="tag16155" onclick="CopyToClipboard('tag16155');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag21328" onclick="CopyToClipboard('tag21328');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag16888" onclick="CopyToClipboard('tag16888');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26636" onclick="CopyToClipboard('tag26636');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28944" onclick="CopyToClipboard('tag28944');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag27115" onclick="CopyToClipboard('tag27115');return false;" class="tag-decoration">v3</div><div id="tag28867" onclick="CopyToClipboard('tag28867');return false;" class="tag-decoration">v3-fa81175</div><div id="tag3294" onclick="CopyToClipboard('tag3294');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag25776" onclick="CopyToClipboard('tag25776');return false;" class="tag-decoration">v3-v3</div><div id="tag626" onclick="CopyToClipboard('tag626');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27607" onclick="CopyToClipboard('tag27607');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/fa811751d919aecf0fc32af784db29ce125812f3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32049554083" target="_blank">2026-08-17 17:15:50</a></td></tr>
<tr><td><div id="tag5716" onclick="CopyToClipboard('tag5716');return false;" class="tag-decoration">v3-develop</div><div id="tag30963" onclick="CopyToClipboard('tag30963');return false;" class="tag-decoration">v3-develop-b26ab22</div><div id="tag24184" onclick="CopyToClipboard('tag24184');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1139</div><div id="tag12927" onclick="CopyToClipboard('tag12927');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14230" onclick="CopyToClipboard('tag14230');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22326" onclick="CopyToClipboard('tag22326');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b26ab229974adbf94f3b93671a4aadd3551aebda" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32084945076" target="_blank">2026-08-18 00:33:04</a></td></tr>
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
