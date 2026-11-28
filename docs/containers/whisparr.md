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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29427" onclick="CopyToClipboard('tag29427');return false;" class="tag-decoration">v2</div><div id="tag9410" onclick="CopyToClipboard('tag9410');return false;" class="tag-decoration">v2-b7bb03d</div><div id="tag15681" onclick="CopyToClipboard('tag15681');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag1503" onclick="CopyToClipboard('tag1503');return false;" class="tag-decoration">v2-v2</div><div id="tag19320" onclick="CopyToClipboard('tag19320');return false;" class="tag-decoration">v2-v2.3</div><div id="tag6104" onclick="CopyToClipboard('tag6104');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b7bb03db4649267de6c2d399ca8957f248d00161" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097445406" target="_blank">2026-11-28 02:18:49</a></td></tr>
<tr><td><div id="tag12933" onclick="CopyToClipboard('tag12933');return false;" class="tag-decoration">v2-develop</div><div id="tag28725" onclick="CopyToClipboard('tag28725');return false;" class="tag-decoration">v2-develop-434ab16</div><div id="tag12256" onclick="CopyToClipboard('tag12256');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag3284" onclick="CopyToClipboard('tag3284');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22964" onclick="CopyToClipboard('tag22964');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag32403" onclick="CopyToClipboard('tag32403');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/434ab16345c50ceca31ae3ecc9972465d07c0772" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763759432" target="_blank">2026-11-26 05:46:18</a></td></tr>
<tr><td><div id="tag6190" onclick="CopyToClipboard('tag6190');return false;" class="tag-decoration">v3</div><div id="tag11455" onclick="CopyToClipboard('tag11455');return false;" class="tag-decoration">v3-f3b7012</div><div id="tag14764" onclick="CopyToClipboard('tag14764');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag11681" onclick="CopyToClipboard('tag11681');return false;" class="tag-decoration">v3-v3</div><div id="tag9067" onclick="CopyToClipboard('tag9067');return false;" class="tag-decoration">v3-v3.6</div><div id="tag682" onclick="CopyToClipboard('tag682');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f3b70121cf0940ddafcc2fadfa9548f850174462" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763754489" target="_blank">2026-11-26 05:46:15</a></td></tr>
<tr><td><div id="tag13938" onclick="CopyToClipboard('tag13938');return false;" class="tag-decoration">v3-develop</div><div id="tag29648" onclick="CopyToClipboard('tag29648');return false;" class="tag-decoration">v3-develop-3a1007f</div><div id="tag29359" onclick="CopyToClipboard('tag29359');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag27040" onclick="CopyToClipboard('tag27040');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1256" onclick="CopyToClipboard('tag1256');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10062" onclick="CopyToClipboard('tag10062');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3a1007f3461a2b63b0b97bec6f488d8b058a829f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097448317" target="_blank">2026-11-28 02:18:51</a></td></tr>
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
