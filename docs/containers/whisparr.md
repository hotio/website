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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23956" onclick="CopyToClipboard('tag23956');return false;" class="tag-decoration">v2</div><div id="tag4555" onclick="CopyToClipboard('tag4555');return false;" class="tag-decoration">v2-c75114f</div><div id="tag28789" onclick="CopyToClipboard('tag28789');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32273" onclick="CopyToClipboard('tag32273');return false;" class="tag-decoration">v2-v2</div><div id="tag23940" onclick="CopyToClipboard('tag23940');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9459" onclick="CopyToClipboard('tag9459');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c75114fed8467f31908ecd749daa2c815a431553" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928997579" target="_blank">2026-10-01 21:29:11</a></td></tr>
<tr><td><div id="tag2095" onclick="CopyToClipboard('tag2095');return false;" class="tag-decoration">v2-develop</div><div id="tag18725" onclick="CopyToClipboard('tag18725');return false;" class="tag-decoration">v2-develop-4def09c</div><div id="tag2064" onclick="CopyToClipboard('tag2064');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2476" onclick="CopyToClipboard('tag2476');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20470" onclick="CopyToClipboard('tag20470');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29239" onclick="CopyToClipboard('tag29239');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4def09cc06e3392dc31e9f917e1383772de5c930" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928998437" target="_blank">2026-10-01 21:29:13</a></td></tr>
<tr><td><div id="tag18633" onclick="CopyToClipboard('tag18633');return false;" class="tag-decoration">v3</div><div id="tag12832" onclick="CopyToClipboard('tag12832');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag293" onclick="CopyToClipboard('tag293');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag22498" onclick="CopyToClipboard('tag22498');return false;" class="tag-decoration">v3-v3</div><div id="tag28744" onclick="CopyToClipboard('tag28744');return false;" class="tag-decoration">v3-v3.6</div><div id="tag9176" onclick="CopyToClipboard('tag9176');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag8365" onclick="CopyToClipboard('tag8365');return false;" class="tag-decoration">v3-develop</div><div id="tag13147" onclick="CopyToClipboard('tag13147');return false;" class="tag-decoration">v3-develop-b9acaac</div><div id="tag29341" onclick="CopyToClipboard('tag29341');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag23572" onclick="CopyToClipboard('tag23572');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14974" onclick="CopyToClipboard('tag14974');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag27836" onclick="CopyToClipboard('tag27836');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b9acaac1defc2c9f44d2cd8f720530ac23671845" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36929015366" target="_blank">2026-10-01 21:29:23</a></td></tr>
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
