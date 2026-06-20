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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1200" onclick="CopyToClipboard('tag1200');return false;" class="tag-decoration">v2</div><div id="tag11588" onclick="CopyToClipboard('tag11588');return false;" class="tag-decoration">v2-42357df</div><div id="tag11057" onclick="CopyToClipboard('tag11057');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag20202" onclick="CopyToClipboard('tag20202');return false;" class="tag-decoration">v2-v2</div><div id="tag15494" onclick="CopyToClipboard('tag15494');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12812" onclick="CopyToClipboard('tag12812');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/42357dfa0fea1b225bb5809241bcc84d4d9e6c31" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044493" target="_blank">2026-06-20 12:22:14</a></td></tr>
<tr><td><div id="tag23129" onclick="CopyToClipboard('tag23129');return false;" class="tag-decoration">v2-develop</div><div id="tag16975" onclick="CopyToClipboard('tag16975');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag18731" onclick="CopyToClipboard('tag18731');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag13193" onclick="CopyToClipboard('tag13193');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19223" onclick="CopyToClipboard('tag19223');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24958" onclick="CopyToClipboard('tag24958');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag31279" onclick="CopyToClipboard('tag31279');return false;" class="tag-decoration">v3</div><div id="tag23291" onclick="CopyToClipboard('tag23291');return false;" class="tag-decoration">v3-5f99aba</div><div id="tag6747" onclick="CopyToClipboard('tag6747');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag16428" onclick="CopyToClipboard('tag16428');return false;" class="tag-decoration">v3-v3</div><div id="tag295" onclick="CopyToClipboard('tag295');return false;" class="tag-decoration">v3-v3.3</div><div id="tag16668" onclick="CopyToClipboard('tag16668');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5f99abaf34ac6668e61d0b8521e1da12e891b757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27850486307" target="_blank">2026-06-19 22:04:26</a></td></tr>
<tr><td><div id="tag29378" onclick="CopyToClipboard('tag29378');return false;" class="tag-decoration">v3-develop</div><div id="tag7949" onclick="CopyToClipboard('tag7949');return false;" class="tag-decoration">v3-develop-0082a31</div><div id="tag26960" onclick="CopyToClipboard('tag26960');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag32464" onclick="CopyToClipboard('tag32464');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12311" onclick="CopyToClipboard('tag12311');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag25386" onclick="CopyToClipboard('tag25386');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0082a314704b5ddc920178ddb035d1a47c8ca2fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27853831303" target="_blank">2026-06-19 23:58:08</a></td></tr>
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
