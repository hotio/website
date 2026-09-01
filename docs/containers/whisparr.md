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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15845" onclick="CopyToClipboard('tag15845');return false;" class="tag-decoration">v2</div><div id="tag314" onclick="CopyToClipboard('tag314');return false;" class="tag-decoration">v2-640b6d0</div><div id="tag21260" onclick="CopyToClipboard('tag21260');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag22094" onclick="CopyToClipboard('tag22094');return false;" class="tag-decoration">v2-v2</div><div id="tag10847" onclick="CopyToClipboard('tag10847');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8790" onclick="CopyToClipboard('tag8790');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/640b6d02dacd2ffb7e9228a830a5ec50e512fa39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498575525" target="_blank">2026-09-01 10:39:59</a></td></tr>
<tr><td><div id="tag29634" onclick="CopyToClipboard('tag29634');return false;" class="tag-decoration">v2-develop</div><div id="tag29782" onclick="CopyToClipboard('tag29782');return false;" class="tag-decoration">v2-develop-d1d04e9</div><div id="tag21883" onclick="CopyToClipboard('tag21883');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag3549" onclick="CopyToClipboard('tag3549');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27929" onclick="CopyToClipboard('tag27929');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10576" onclick="CopyToClipboard('tag10576');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1d04e99cd78fd6cfe11edb32abf58c2b10e7e88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33332982242" target="_blank">2026-08-30 20:12:10</a></td></tr>
<tr><td><div id="tag18858" onclick="CopyToClipboard('tag18858');return false;" class="tag-decoration">v3</div><div id="tag10721" onclick="CopyToClipboard('tag10721');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag17258" onclick="CopyToClipboard('tag17258');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag7277" onclick="CopyToClipboard('tag7277');return false;" class="tag-decoration">v3-v3</div><div id="tag7021" onclick="CopyToClipboard('tag7021');return false;" class="tag-decoration">v3-v3.4</div><div id="tag12887" onclick="CopyToClipboard('tag12887');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag6520" onclick="CopyToClipboard('tag6520');return false;" class="tag-decoration">v3-develop</div><div id="tag28149" onclick="CopyToClipboard('tag28149');return false;" class="tag-decoration">v3-develop-7fd2e49</div><div id="tag20460" onclick="CopyToClipboard('tag20460');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag31155" onclick="CopyToClipboard('tag31155');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3714" onclick="CopyToClipboard('tag3714');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag5443" onclick="CopyToClipboard('tag5443');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7fd2e4983884073ecae779870714b1b996b2c68d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33475060611" target="_blank">2026-09-01 05:49:01</a></td></tr>
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
