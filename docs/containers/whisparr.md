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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9462" onclick="CopyToClipboard('tag9462');return false;" class="tag-decoration">v2</div><div id="tag3229" onclick="CopyToClipboard('tag3229');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag23956" onclick="CopyToClipboard('tag23956');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3955" onclick="CopyToClipboard('tag3955');return false;" class="tag-decoration">v2-v2</div><div id="tag14301" onclick="CopyToClipboard('tag14301');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19651" onclick="CopyToClipboard('tag19651');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag18398" onclick="CopyToClipboard('tag18398');return false;" class="tag-decoration">v2-develop</div><div id="tag2464" onclick="CopyToClipboard('tag2464');return false;" class="tag-decoration">v2-develop-6ed8161</div><div id="tag23365" onclick="CopyToClipboard('tag23365');return false;" class="tag-decoration">v2-develop-2.2.0-develop.295</div><div id="tag14511" onclick="CopyToClipboard('tag14511');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4496" onclick="CopyToClipboard('tag4496');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19231" onclick="CopyToClipboard('tag19231');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6ed8161b9ca3b0ea4f3f0ac6364f5abfa12d90fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33273324749" target="_blank">2026-08-29 20:22:33</a></td></tr>
<tr><td><div id="tag21263" onclick="CopyToClipboard('tag21263');return false;" class="tag-decoration">v3</div><div id="tag26789" onclick="CopyToClipboard('tag26789');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag26737" onclick="CopyToClipboard('tag26737');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag21960" onclick="CopyToClipboard('tag21960');return false;" class="tag-decoration">v3-v3</div><div id="tag12267" onclick="CopyToClipboard('tag12267');return false;" class="tag-decoration">v3-v3.3</div><div id="tag18515" onclick="CopyToClipboard('tag18515');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag17204" onclick="CopyToClipboard('tag17204');return false;" class="tag-decoration">v3-develop</div><div id="tag17696" onclick="CopyToClipboard('tag17696');return false;" class="tag-decoration">v3-develop-dc1b4ee</div><div id="tag15282" onclick="CopyToClipboard('tag15282');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1378</div><div id="tag16491" onclick="CopyToClipboard('tag16491');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29198" onclick="CopyToClipboard('tag29198');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag22128" onclick="CopyToClipboard('tag22128');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc1b4eed714c721cfe73b4b3c26e41aa4b28117a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33245622204" target="_blank">2026-08-29 09:29:49</a></td></tr>
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
