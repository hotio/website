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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21782" onclick="CopyToClipboard('tag21782');return false;" class="tag-decoration">v2</div><div id="tag6426" onclick="CopyToClipboard('tag6426');return false;" class="tag-decoration">v2-3168972</div><div id="tag5453" onclick="CopyToClipboard('tag5453');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4297" onclick="CopyToClipboard('tag4297');return false;" class="tag-decoration">v2-v2</div><div id="tag569" onclick="CopyToClipboard('tag569');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5512" onclick="CopyToClipboard('tag5512');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3168972a270b87e5c5c16715a9f74a7d908a1f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968211953" target="_blank">2026-09-15 12:19:44</a></td></tr>
<tr><td><div id="tag12272" onclick="CopyToClipboard('tag12272');return false;" class="tag-decoration">v2-develop</div><div id="tag11507" onclick="CopyToClipboard('tag11507');return false;" class="tag-decoration">v2-develop-24b6c11</div><div id="tag22003" onclick="CopyToClipboard('tag22003');return false;" class="tag-decoration">v2-develop-2.2.0-develop.337</div><div id="tag7013" onclick="CopyToClipboard('tag7013');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26673" onclick="CopyToClipboard('tag26673');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10029" onclick="CopyToClipboard('tag10029');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/24b6c116eebdcbdf3ea9c059c2e8a33d2d9d000d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968199088" target="_blank">2026-09-15 12:19:35</a></td></tr>
<tr><td><div id="tag2997" onclick="CopyToClipboard('tag2997');return false;" class="tag-decoration">v3</div><div id="tag31131" onclick="CopyToClipboard('tag31131');return false;" class="tag-decoration">v3-b2c1fc6</div><div id="tag23996" onclick="CopyToClipboard('tag23996');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag29650" onclick="CopyToClipboard('tag29650');return false;" class="tag-decoration">v3-v3</div><div id="tag8976" onclick="CopyToClipboard('tag8976');return false;" class="tag-decoration">v3-v3.5</div><div id="tag9178" onclick="CopyToClipboard('tag9178');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b2c1fc63c5f660a77ff67f2a17e3eb7da4894c4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968203212" target="_blank">2026-09-15 12:19:38</a></td></tr>
<tr><td><div id="tag21898" onclick="CopyToClipboard('tag21898');return false;" class="tag-decoration">v3-develop</div><div id="tag20981" onclick="CopyToClipboard('tag20981');return false;" class="tag-decoration">v3-develop-0246fca</div><div id="tag23618" onclick="CopyToClipboard('tag23618');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1624</div><div id="tag24100" onclick="CopyToClipboard('tag24100');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25137" onclick="CopyToClipboard('tag25137');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag25067" onclick="CopyToClipboard('tag25067');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0246fca09dd5cbe49d583e82b5429a77210a0ebb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968205415" target="_blank">2026-09-15 12:19:39</a></td></tr>
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
