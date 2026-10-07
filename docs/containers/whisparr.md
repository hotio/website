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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13696" onclick="CopyToClipboard('tag13696');return false;" class="tag-decoration">v2</div><div id="tag13972" onclick="CopyToClipboard('tag13972');return false;" class="tag-decoration">v2-5de9807</div><div id="tag22952" onclick="CopyToClipboard('tag22952');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag24239" onclick="CopyToClipboard('tag24239');return false;" class="tag-decoration">v2-v2</div><div id="tag6726" onclick="CopyToClipboard('tag6726');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11386" onclick="CopyToClipboard('tag11386');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5de9807bb0627d27981ec70abe9983b8dcc7eac5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474605896" target="_blank">2026-10-06 13:54:46</a></td></tr>
<tr><td><div id="tag7259" onclick="CopyToClipboard('tag7259');return false;" class="tag-decoration">v2-develop</div><div id="tag30213" onclick="CopyToClipboard('tag30213');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag9782" onclick="CopyToClipboard('tag9782');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag17878" onclick="CopyToClipboard('tag17878');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23935" onclick="CopyToClipboard('tag23935');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22006" onclick="CopyToClipboard('tag22006');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag24125" onclick="CopyToClipboard('tag24125');return false;" class="tag-decoration">v3</div><div id="tag15217" onclick="CopyToClipboard('tag15217');return false;" class="tag-decoration">v3-8bd3823</div><div id="tag26229" onclick="CopyToClipboard('tag26229');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag12690" onclick="CopyToClipboard('tag12690');return false;" class="tag-decoration">v3-v3</div><div id="tag23496" onclick="CopyToClipboard('tag23496');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30934" onclick="CopyToClipboard('tag30934');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8bd3823cd1cb0f9d88447aaabf54b3ab2e003fa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018980" target="_blank">2026-10-07 03:04:14</a></td></tr>
<tr><td><div id="tag23586" onclick="CopyToClipboard('tag23586');return false;" class="tag-decoration">v3-develop</div><div id="tag23352" onclick="CopyToClipboard('tag23352');return false;" class="tag-decoration">v3-develop-abe72af</div><div id="tag3569" onclick="CopyToClipboard('tag3569');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag11822" onclick="CopyToClipboard('tag11822');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8406" onclick="CopyToClipboard('tag8406');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag16256" onclick="CopyToClipboard('tag16256');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/abe72af848ad7feb496881f5e3d47e2e870152a6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018851" target="_blank">2026-10-07 03:04:14</a></td></tr>
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
