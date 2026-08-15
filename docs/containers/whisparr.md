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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17984" onclick="CopyToClipboard('tag17984');return false;" class="tag-decoration">v2</div><div id="tag21827" onclick="CopyToClipboard('tag21827');return false;" class="tag-decoration">v2-48e736e</div><div id="tag7166" onclick="CopyToClipboard('tag7166');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag23725" onclick="CopyToClipboard('tag23725');return false;" class="tag-decoration">v2-v2</div><div id="tag17773" onclick="CopyToClipboard('tag17773');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10702" onclick="CopyToClipboard('tag10702');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag26731" onclick="CopyToClipboard('tag26731');return false;" class="tag-decoration">v2-develop</div><div id="tag9408" onclick="CopyToClipboard('tag9408');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag16715" onclick="CopyToClipboard('tag16715');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag26783" onclick="CopyToClipboard('tag26783');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1280" onclick="CopyToClipboard('tag1280');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19059" onclick="CopyToClipboard('tag19059');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag30434" onclick="CopyToClipboard('tag30434');return false;" class="tag-decoration">v3</div><div id="tag15274" onclick="CopyToClipboard('tag15274');return false;" class="tag-decoration">v3-bdc773c</div><div id="tag14058" onclick="CopyToClipboard('tag14058');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag18879" onclick="CopyToClipboard('tag18879');return false;" class="tag-decoration">v3-v3</div><div id="tag32698" onclick="CopyToClipboard('tag32698');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31645" onclick="CopyToClipboard('tag31645');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/bdc773cd0e41dc736bf61c9e8336c34985cde5c3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31908686087" target="_blank">2026-08-15 21:10:08</a></td></tr>
<tr><td><div id="tag20632" onclick="CopyToClipboard('tag20632');return false;" class="tag-decoration">v3-develop</div><div id="tag28271" onclick="CopyToClipboard('tag28271');return false;" class="tag-decoration">v3-develop-6cbe2c8</div><div id="tag3694" onclick="CopyToClipboard('tag3694');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1094</div><div id="tag20613" onclick="CopyToClipboard('tag20613');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6202" onclick="CopyToClipboard('tag6202');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5524" onclick="CopyToClipboard('tag5524');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6cbe2c802b4200d4f8734b367542e30de7302689" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31903296055" target="_blank">2026-08-15 19:13:08</a></td></tr>
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
