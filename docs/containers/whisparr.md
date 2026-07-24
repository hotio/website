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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32568" onclick="CopyToClipboard('tag32568');return false;" class="tag-decoration">v2</div><div id="tag28422" onclick="CopyToClipboard('tag28422');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag9753" onclick="CopyToClipboard('tag9753');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag3926" onclick="CopyToClipboard('tag3926');return false;" class="tag-decoration">v2-v2</div><div id="tag5560" onclick="CopyToClipboard('tag5560');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29832" onclick="CopyToClipboard('tag29832');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag25796" onclick="CopyToClipboard('tag25796');return false;" class="tag-decoration">v2-develop</div><div id="tag1252" onclick="CopyToClipboard('tag1252');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag2656" onclick="CopyToClipboard('tag2656');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag1501" onclick="CopyToClipboard('tag1501');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8049" onclick="CopyToClipboard('tag8049');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22844" onclick="CopyToClipboard('tag22844');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag26847" onclick="CopyToClipboard('tag26847');return false;" class="tag-decoration">v3</div><div id="tag406" onclick="CopyToClipboard('tag406');return false;" class="tag-decoration">v3-8e8d413</div><div id="tag23247" onclick="CopyToClipboard('tag23247');return false;" class="tag-decoration">v3-3.3.5-release.861</div><div id="tag11284" onclick="CopyToClipboard('tag11284');return false;" class="tag-decoration">v3-v3</div><div id="tag16598" onclick="CopyToClipboard('tag16598');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17227" onclick="CopyToClipboard('tag17227');return false;" class="tag-decoration">v3-v3.3.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8e8d41311f875473ab2d370d0190da5829f10466" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29878160771" target="_blank">2026-07-21 23:46:10</a></td></tr>
<tr><td><div id="tag2505" onclick="CopyToClipboard('tag2505');return false;" class="tag-decoration">v3-develop</div><div id="tag15013" onclick="CopyToClipboard('tag15013');return false;" class="tag-decoration">v3-develop-230a462</div><div id="tag3713" onclick="CopyToClipboard('tag3713');return false;" class="tag-decoration">v3-develop-3.3.7-develop.942</div><div id="tag10277" onclick="CopyToClipboard('tag10277');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14830" onclick="CopyToClipboard('tag14830');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag9519" onclick="CopyToClipboard('tag9519');return false;" class="tag-decoration">v3-develop-v3.3.7</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/230a462a159f0d1c68a236aff35888acd23920f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30058986007" target="_blank">2026-07-24 01:26:54</a></td></tr>
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
