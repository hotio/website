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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22671" onclick="CopyToClipboard('tag22671');return false;" class="tag-decoration">v2</div><div id="tag4945" onclick="CopyToClipboard('tag4945');return false;" class="tag-decoration">v2-bd26bf8</div><div id="tag25752" onclick="CopyToClipboard('tag25752');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29321" onclick="CopyToClipboard('tag29321');return false;" class="tag-decoration">v2-v2</div><div id="tag11872" onclick="CopyToClipboard('tag11872');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27139" onclick="CopyToClipboard('tag27139');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/bd26bf80189b90f776856cc63082e2145da00049" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527208" target="_blank">2026-09-22 08:00:54</a></td></tr>
<tr><td><div id="tag14649" onclick="CopyToClipboard('tag14649');return false;" class="tag-decoration">v2-develop</div><div id="tag8716" onclick="CopyToClipboard('tag8716');return false;" class="tag-decoration">v2-develop-e2c30e7</div><div id="tag14949" onclick="CopyToClipboard('tag14949');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag21412" onclick="CopyToClipboard('tag21412');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14287" onclick="CopyToClipboard('tag14287');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9842" onclick="CopyToClipboard('tag9842');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e2c30e7e94393fae086a94e9da38d134dbd4a9d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702539420" target="_blank">2026-09-22 08:01:03</a></td></tr>
<tr><td><div id="tag22687" onclick="CopyToClipboard('tag22687');return false;" class="tag-decoration">v3</div><div id="tag9597" onclick="CopyToClipboard('tag9597');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag16241" onclick="CopyToClipboard('tag16241');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag4444" onclick="CopyToClipboard('tag4444');return false;" class="tag-decoration">v3-v3</div><div id="tag18588" onclick="CopyToClipboard('tag18588');return false;" class="tag-decoration">v3-v3.6</div><div id="tag12676" onclick="CopyToClipboard('tag12676');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag357" onclick="CopyToClipboard('tag357');return false;" class="tag-decoration">v3-develop</div><div id="tag19728" onclick="CopyToClipboard('tag19728');return false;" class="tag-decoration">v3-develop-bcfb4b6</div><div id="tag3394" onclick="CopyToClipboard('tag3394');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1717</div><div id="tag12491" onclick="CopyToClipboard('tag12491');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8607" onclick="CopyToClipboard('tag8607');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag8630" onclick="CopyToClipboard('tag8630');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bcfb4b68b4f764061e8cd089634e4b5f799c7c5b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35797035323" target="_blank">2026-09-22 23:21:40</a></td></tr>
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
