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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18862" onclick="CopyToClipboard('tag18862');return false;" class="tag-decoration">v2</div><div id="tag15042" onclick="CopyToClipboard('tag15042');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag13418" onclick="CopyToClipboard('tag13418');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag11172" onclick="CopyToClipboard('tag11172');return false;" class="tag-decoration">v2-v2</div><div id="tag11579" onclick="CopyToClipboard('tag11579');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30704" onclick="CopyToClipboard('tag30704');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag30392" onclick="CopyToClipboard('tag30392');return false;" class="tag-decoration">v2-develop</div><div id="tag13033" onclick="CopyToClipboard('tag13033');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag1510" onclick="CopyToClipboard('tag1510');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag32534" onclick="CopyToClipboard('tag32534');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3210" onclick="CopyToClipboard('tag3210');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21420" onclick="CopyToClipboard('tag21420');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag10570" onclick="CopyToClipboard('tag10570');return false;" class="tag-decoration">v3</div><div id="tag28557" onclick="CopyToClipboard('tag28557');return false;" class="tag-decoration">v3-5f99aba</div><div id="tag8547" onclick="CopyToClipboard('tag8547');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag8222" onclick="CopyToClipboard('tag8222');return false;" class="tag-decoration">v3-v3</div><div id="tag25255" onclick="CopyToClipboard('tag25255');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9700" onclick="CopyToClipboard('tag9700');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5f99abaf34ac6668e61d0b8521e1da12e891b757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27850486307" target="_blank">2026-06-19 22:04:26</a></td></tr>
<tr><td><div id="tag7778" onclick="CopyToClipboard('tag7778');return false;" class="tag-decoration">v3-develop</div><div id="tag26146" onclick="CopyToClipboard('tag26146');return false;" class="tag-decoration">v3-develop-0082a31</div><div id="tag6892" onclick="CopyToClipboard('tag6892');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag10596" onclick="CopyToClipboard('tag10596');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20152" onclick="CopyToClipboard('tag20152');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag13528" onclick="CopyToClipboard('tag13528');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0082a314704b5ddc920178ddb035d1a47c8ca2fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27853831303" target="_blank">2026-06-19 23:58:08</a></td></tr>
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
