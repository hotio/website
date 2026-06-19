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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9916" onclick="CopyToClipboard('tag9916');return false;" class="tag-decoration">v2</div><div id="tag8164" onclick="CopyToClipboard('tag8164');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag4865" onclick="CopyToClipboard('tag4865');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag25923" onclick="CopyToClipboard('tag25923');return false;" class="tag-decoration">v2-v2</div><div id="tag7299" onclick="CopyToClipboard('tag7299');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1376" onclick="CopyToClipboard('tag1376');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag11481" onclick="CopyToClipboard('tag11481');return false;" class="tag-decoration">v2-develop</div><div id="tag5815" onclick="CopyToClipboard('tag5815');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag23512" onclick="CopyToClipboard('tag23512');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag8159" onclick="CopyToClipboard('tag8159');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18020" onclick="CopyToClipboard('tag18020');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24044" onclick="CopyToClipboard('tag24044');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag5302" onclick="CopyToClipboard('tag5302');return false;" class="tag-decoration">v3</div><div id="tag12246" onclick="CopyToClipboard('tag12246');return false;" class="tag-decoration">v3-5f99aba</div><div id="tag8509" onclick="CopyToClipboard('tag8509');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag14319" onclick="CopyToClipboard('tag14319');return false;" class="tag-decoration">v3-v3</div><div id="tag14234" onclick="CopyToClipboard('tag14234');return false;" class="tag-decoration">v3-v3.3</div><div id="tag5115" onclick="CopyToClipboard('tag5115');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5f99abaf34ac6668e61d0b8521e1da12e891b757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27850486307" target="_blank">2026-06-19 22:04:26</a></td></tr>
<tr><td><div id="tag28700" onclick="CopyToClipboard('tag28700');return false;" class="tag-decoration">v3-develop</div><div id="tag20352" onclick="CopyToClipboard('tag20352');return false;" class="tag-decoration">v3-develop-b792367</div><div id="tag21510" onclick="CopyToClipboard('tag21510');return false;" class="tag-decoration">v3-develop-3.3.4-develop.788</div><div id="tag5378" onclick="CopyToClipboard('tag5378');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29793" onclick="CopyToClipboard('tag29793');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag15549" onclick="CopyToClipboard('tag15549');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b792367bcae05da6d2fd4d0126ad79da277d2d28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27743613076" target="_blank">2026-06-18 07:24:27</a></td></tr>
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
