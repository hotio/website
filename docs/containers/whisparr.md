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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28691" onclick="CopyToClipboard('tag28691');return false;" class="tag-decoration">v2</div><div id="tag29" onclick="CopyToClipboard('tag29');return false;" class="tag-decoration">v2-bd26bf8</div><div id="tag17212" onclick="CopyToClipboard('tag17212');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag14867" onclick="CopyToClipboard('tag14867');return false;" class="tag-decoration">v2-v2</div><div id="tag30018" onclick="CopyToClipboard('tag30018');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19225" onclick="CopyToClipboard('tag19225');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/bd26bf80189b90f776856cc63082e2145da00049" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527208" target="_blank">2026-09-22 08:00:54</a></td></tr>
<tr><td><div id="tag21215" onclick="CopyToClipboard('tag21215');return false;" class="tag-decoration">v2-develop</div><div id="tag2023" onclick="CopyToClipboard('tag2023');return false;" class="tag-decoration">v2-develop-e2c30e7</div><div id="tag19082" onclick="CopyToClipboard('tag19082');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag26652" onclick="CopyToClipboard('tag26652');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20210" onclick="CopyToClipboard('tag20210');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10649" onclick="CopyToClipboard('tag10649');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e2c30e7e94393fae086a94e9da38d134dbd4a9d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702539420" target="_blank">2026-09-22 08:01:03</a></td></tr>
<tr><td><div id="tag19577" onclick="CopyToClipboard('tag19577');return false;" class="tag-decoration">v3</div><div id="tag19163" onclick="CopyToClipboard('tag19163');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag1127" onclick="CopyToClipboard('tag1127');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag20449" onclick="CopyToClipboard('tag20449');return false;" class="tag-decoration">v3-v3</div><div id="tag8662" onclick="CopyToClipboard('tag8662');return false;" class="tag-decoration">v3-v3.6</div><div id="tag12054" onclick="CopyToClipboard('tag12054');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag8247" onclick="CopyToClipboard('tag8247');return false;" class="tag-decoration">v3-develop</div><div id="tag13040" onclick="CopyToClipboard('tag13040');return false;" class="tag-decoration">v3-develop-2e16075</div><div id="tag6578" onclick="CopyToClipboard('tag6578');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1714</div><div id="tag20558" onclick="CopyToClipboard('tag20558');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1924" onclick="CopyToClipboard('tag1924');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag13272" onclick="CopyToClipboard('tag13272');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2e16075dcf42709d2354c8667ad7f07a805581d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35781368457" target="_blank">2026-09-22 20:36:14</a></td></tr>
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
