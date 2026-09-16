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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27218" onclick="CopyToClipboard('tag27218');return false;" class="tag-decoration">v2</div><div id="tag9240" onclick="CopyToClipboard('tag9240');return false;" class="tag-decoration">v2-3168972</div><div id="tag6898" onclick="CopyToClipboard('tag6898');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag19476" onclick="CopyToClipboard('tag19476');return false;" class="tag-decoration">v2-v2</div><div id="tag435" onclick="CopyToClipboard('tag435');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29264" onclick="CopyToClipboard('tag29264');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3168972a270b87e5c5c16715a9f74a7d908a1f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968211953" target="_blank">2026-09-15 12:19:44</a></td></tr>
<tr><td><div id="tag21618" onclick="CopyToClipboard('tag21618');return false;" class="tag-decoration">v2-develop</div><div id="tag3561" onclick="CopyToClipboard('tag3561');return false;" class="tag-decoration">v2-develop-d70569e</div><div id="tag26462" onclick="CopyToClipboard('tag26462');return false;" class="tag-decoration">v2-develop-2.2.0-develop.339</div><div id="tag4497" onclick="CopyToClipboard('tag4497');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29807" onclick="CopyToClipboard('tag29807');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12815" onclick="CopyToClipboard('tag12815');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d70569e1c50e5410ce844de3dc80773fa047d123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35130458272" target="_blank">2026-09-16 17:48:24</a></td></tr>
<tr><td><div id="tag23415" onclick="CopyToClipboard('tag23415');return false;" class="tag-decoration">v3</div><div id="tag9119" onclick="CopyToClipboard('tag9119');return false;" class="tag-decoration">v3-b2c1fc6</div><div id="tag16263" onclick="CopyToClipboard('tag16263');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag16509" onclick="CopyToClipboard('tag16509');return false;" class="tag-decoration">v3-v3</div><div id="tag28746" onclick="CopyToClipboard('tag28746');return false;" class="tag-decoration">v3-v3.5</div><div id="tag14660" onclick="CopyToClipboard('tag14660');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b2c1fc63c5f660a77ff67f2a17e3eb7da4894c4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968203212" target="_blank">2026-09-15 12:19:38</a></td></tr>
<tr><td><div id="tag13277" onclick="CopyToClipboard('tag13277');return false;" class="tag-decoration">v3-develop</div><div id="tag26359" onclick="CopyToClipboard('tag26359');return false;" class="tag-decoration">v3-develop-0246fca</div><div id="tag30535" onclick="CopyToClipboard('tag30535');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1624</div><div id="tag14932" onclick="CopyToClipboard('tag14932');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8195" onclick="CopyToClipboard('tag8195');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag28809" onclick="CopyToClipboard('tag28809');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0246fca09dd5cbe49d583e82b5429a77210a0ebb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968205415" target="_blank">2026-09-15 12:19:39</a></td></tr>
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
