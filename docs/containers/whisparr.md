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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26112" onclick="CopyToClipboard('tag26112');return false;" class="tag-decoration">v2</div><div id="tag22424" onclick="CopyToClipboard('tag22424');return false;" class="tag-decoration">v2-3168972</div><div id="tag6851" onclick="CopyToClipboard('tag6851');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15310" onclick="CopyToClipboard('tag15310');return false;" class="tag-decoration">v2-v2</div><div id="tag23065" onclick="CopyToClipboard('tag23065');return false;" class="tag-decoration">v2-v2.2</div><div id="tag14360" onclick="CopyToClipboard('tag14360');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3168972a270b87e5c5c16715a9f74a7d908a1f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968211953" target="_blank">2026-09-15 12:19:44</a></td></tr>
<tr><td><div id="tag17720" onclick="CopyToClipboard('tag17720');return false;" class="tag-decoration">v2-develop</div><div id="tag31591" onclick="CopyToClipboard('tag31591');return false;" class="tag-decoration">v2-develop-d70569e</div><div id="tag13501" onclick="CopyToClipboard('tag13501');return false;" class="tag-decoration">v2-develop-2.2.0-develop.339</div><div id="tag9217" onclick="CopyToClipboard('tag9217');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9915" onclick="CopyToClipboard('tag9915');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24575" onclick="CopyToClipboard('tag24575');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d70569e1c50e5410ce844de3dc80773fa047d123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35130458272" target="_blank">2026-09-16 17:48:24</a></td></tr>
<tr><td><div id="tag10925" onclick="CopyToClipboard('tag10925');return false;" class="tag-decoration">v3</div><div id="tag9708" onclick="CopyToClipboard('tag9708');return false;" class="tag-decoration">v3-b2c1fc6</div><div id="tag20780" onclick="CopyToClipboard('tag20780');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag14855" onclick="CopyToClipboard('tag14855');return false;" class="tag-decoration">v3-v3</div><div id="tag15808" onclick="CopyToClipboard('tag15808');return false;" class="tag-decoration">v3-v3.5</div><div id="tag6088" onclick="CopyToClipboard('tag6088');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b2c1fc63c5f660a77ff67f2a17e3eb7da4894c4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968203212" target="_blank">2026-09-15 12:19:38</a></td></tr>
<tr><td><div id="tag24883" onclick="CopyToClipboard('tag24883');return false;" class="tag-decoration">v3-develop</div><div id="tag23533" onclick="CopyToClipboard('tag23533');return false;" class="tag-decoration">v3-develop-2987f68</div><div id="tag9043" onclick="CopyToClipboard('tag9043');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1633</div><div id="tag7808" onclick="CopyToClipboard('tag7808');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag13231" onclick="CopyToClipboard('tag13231');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag6917" onclick="CopyToClipboard('tag6917');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2987f68fe326df8e155e2ae52033fa62d4236beb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35197778908" target="_blank">2026-09-17 08:04:53</a></td></tr>
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
