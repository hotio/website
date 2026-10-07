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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32036" onclick="CopyToClipboard('tag32036');return false;" class="tag-decoration">v2</div><div id="tag21355" onclick="CopyToClipboard('tag21355');return false;" class="tag-decoration">v2-998495f</div><div id="tag16267" onclick="CopyToClipboard('tag16267');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag802" onclick="CopyToClipboard('tag802');return false;" class="tag-decoration">v2-v2</div><div id="tag14390" onclick="CopyToClipboard('tag14390');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11754" onclick="CopyToClipboard('tag11754');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag31730" onclick="CopyToClipboard('tag31730');return false;" class="tag-decoration">v2-develop</div><div id="tag29232" onclick="CopyToClipboard('tag29232');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag3753" onclick="CopyToClipboard('tag3753');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag18232" onclick="CopyToClipboard('tag18232');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19672" onclick="CopyToClipboard('tag19672');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5694" onclick="CopyToClipboard('tag5694');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag15164" onclick="CopyToClipboard('tag15164');return false;" class="tag-decoration">v3</div><div id="tag13271" onclick="CopyToClipboard('tag13271');return false;" class="tag-decoration">v3-8bd3823</div><div id="tag12228" onclick="CopyToClipboard('tag12228');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag17563" onclick="CopyToClipboard('tag17563');return false;" class="tag-decoration">v3-v3</div><div id="tag24543" onclick="CopyToClipboard('tag24543');return false;" class="tag-decoration">v3-v3.6</div><div id="tag14903" onclick="CopyToClipboard('tag14903');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8bd3823cd1cb0f9d88447aaabf54b3ab2e003fa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018980" target="_blank">2026-10-07 03:04:14</a></td></tr>
<tr><td><div id="tag16909" onclick="CopyToClipboard('tag16909');return false;" class="tag-decoration">v3-develop</div><div id="tag16620" onclick="CopyToClipboard('tag16620');return false;" class="tag-decoration">v3-develop-abe72af</div><div id="tag6010" onclick="CopyToClipboard('tag6010');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag7928" onclick="CopyToClipboard('tag7928');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19858" onclick="CopyToClipboard('tag19858');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag12117" onclick="CopyToClipboard('tag12117');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/abe72af848ad7feb496881f5e3d47e2e870152a6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018851" target="_blank">2026-10-07 03:04:14</a></td></tr>
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
