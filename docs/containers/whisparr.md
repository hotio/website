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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19712" onclick="CopyToClipboard('tag19712');return false;" class="tag-decoration">v2</div><div id="tag14760" onclick="CopyToClipboard('tag14760');return false;" class="tag-decoration">v2-48e736e</div><div id="tag26653" onclick="CopyToClipboard('tag26653');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16141" onclick="CopyToClipboard('tag16141');return false;" class="tag-decoration">v2-v2</div><div id="tag19736" onclick="CopyToClipboard('tag19736');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26603" onclick="CopyToClipboard('tag26603');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag11598" onclick="CopyToClipboard('tag11598');return false;" class="tag-decoration">v2-develop</div><div id="tag5553" onclick="CopyToClipboard('tag5553');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag11683" onclick="CopyToClipboard('tag11683');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag23089" onclick="CopyToClipboard('tag23089');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6585" onclick="CopyToClipboard('tag6585');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10890" onclick="CopyToClipboard('tag10890');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag7006" onclick="CopyToClipboard('tag7006');return false;" class="tag-decoration">v3</div><div id="tag23268" onclick="CopyToClipboard('tag23268');return false;" class="tag-decoration">v3-bdc773c</div><div id="tag29938" onclick="CopyToClipboard('tag29938');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag29178" onclick="CopyToClipboard('tag29178');return false;" class="tag-decoration">v3-v3</div><div id="tag7482" onclick="CopyToClipboard('tag7482');return false;" class="tag-decoration">v3-v3.3</div><div id="tag7928" onclick="CopyToClipboard('tag7928');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/bdc773cd0e41dc736bf61c9e8336c34985cde5c3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31908686087" target="_blank">2026-08-15 21:10:08</a></td></tr>
<tr><td><div id="tag25827" onclick="CopyToClipboard('tag25827');return false;" class="tag-decoration">v3-develop</div><div id="tag7692" onclick="CopyToClipboard('tag7692');return false;" class="tag-decoration">v3-develop-fe4537c</div><div id="tag17089" onclick="CopyToClipboard('tag17089');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1105</div><div id="tag22347" onclick="CopyToClipboard('tag22347');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24375" onclick="CopyToClipboard('tag24375');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22357" onclick="CopyToClipboard('tag22357');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fe4537ccce3c8956a89f6f15a03a36d750a3fec9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31913999748" target="_blank">2026-08-15 23:09:19</a></td></tr>
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
