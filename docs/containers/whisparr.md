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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26199" onclick="CopyToClipboard('tag26199');return false;" class="tag-decoration">v2</div><div id="tag14688" onclick="CopyToClipboard('tag14688');return false;" class="tag-decoration">v2-5dd76d2</div><div id="tag20504" onclick="CopyToClipboard('tag20504');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag20873" onclick="CopyToClipboard('tag20873');return false;" class="tag-decoration">v2-v2</div><div id="tag32071" onclick="CopyToClipboard('tag32071');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13574" onclick="CopyToClipboard('tag13574');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5dd76d29651963aabf95be18d24a45f397c90062" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356440855" target="_blank">2026-07-14 18:05:12</a></td></tr>
<tr><td><div id="tag10464" onclick="CopyToClipboard('tag10464');return false;" class="tag-decoration">v2-develop</div><div id="tag5188" onclick="CopyToClipboard('tag5188');return false;" class="tag-decoration">v2-develop-3e573cd</div><div id="tag26102" onclick="CopyToClipboard('tag26102');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag8985" onclick="CopyToClipboard('tag8985');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26171" onclick="CopyToClipboard('tag26171');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11327" onclick="CopyToClipboard('tag11327');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e573cd13f78f65341dd9fa843ce16aa58204fcf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356438023" target="_blank">2026-07-14 18:05:11</a></td></tr>
<tr><td><div id="tag20042" onclick="CopyToClipboard('tag20042');return false;" class="tag-decoration">v3</div><div id="tag25170" onclick="CopyToClipboard('tag25170');return false;" class="tag-decoration">v3-be17d29</div><div id="tag9836" onclick="CopyToClipboard('tag9836');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag32113" onclick="CopyToClipboard('tag32113');return false;" class="tag-decoration">v3-v3</div><div id="tag18141" onclick="CopyToClipboard('tag18141');return false;" class="tag-decoration">v3-v3.3</div><div id="tag240" onclick="CopyToClipboard('tag240');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/be17d29c400052915b1b18741e61dd7e6f4f625d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356451636" target="_blank">2026-07-14 18:05:24</a></td></tr>
<tr><td><div id="tag25450" onclick="CopyToClipboard('tag25450');return false;" class="tag-decoration">v3-develop</div><div id="tag22029" onclick="CopyToClipboard('tag22029');return false;" class="tag-decoration">v3-develop-ac1b1fe</div><div id="tag11764" onclick="CopyToClipboard('tag11764');return false;" class="tag-decoration">v3-develop-3.3.4-develop.818</div><div id="tag27435" onclick="CopyToClipboard('tag27435');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20583" onclick="CopyToClipboard('tag20583');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag1213" onclick="CopyToClipboard('tag1213');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ac1b1fe263e1fed06556fe10e69b2dd429d8f982" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29446682403" target="_blank">2026-07-15 20:00:50</a></td></tr>
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
