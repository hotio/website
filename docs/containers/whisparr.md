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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag115" onclick="CopyToClipboard('tag115');return false;" class="tag-decoration">v2</div><div id="tag1413" onclick="CopyToClipboard('tag1413');return false;" class="tag-decoration">v2-43667ed</div><div id="tag6690" onclick="CopyToClipboard('tag6690');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/43667ed220d9f82b7a4dea3a11465368e81f8c00" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21113703673" target="_blank">2026-01-18 14:57:44</a></td></tr>
<tr><td><div id="tag9311" onclick="CopyToClipboard('tag9311');return false;" class="tag-decoration">v3</div><div id="tag31862" onclick="CopyToClipboard('tag31862');return false;" class="tag-decoration">v3-f9956bf</div><div id="tag28498" onclick="CopyToClipboard('tag28498');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag19454" onclick="CopyToClipboard('tag19454');return false;" class="tag-decoration">v3-v3</div><div id="tag6691" onclick="CopyToClipboard('tag6691');return false;" class="tag-decoration">v3-v3.2</div><div id="tag27677" onclick="CopyToClipboard('tag27677');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f9956bf12ea0ed6726fbd90dc7c203e6439c2611" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21113704197" target="_blank">2026-01-18 14:57:47</a></td></tr>
<tr><td><div id="tag13380" onclick="CopyToClipboard('tag13380');return false;" class="tag-decoration">v3-develop</div><div id="tag24587" onclick="CopyToClipboard('tag24587');return false;" class="tag-decoration">v3-develop-aee86b5</div><div id="tag18080" onclick="CopyToClipboard('tag18080');return false;" class="tag-decoration">v3-develop-3.2.0-develop.45</div><div id="tag22162" onclick="CopyToClipboard('tag22162');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4322" onclick="CopyToClipboard('tag4322');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag25992" onclick="CopyToClipboard('tag25992');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aee86b528508545d24437a7b224751e096affc60" target="_blank">Version update: 3.2.0-develop.43 => 3.2.0-develop.45</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21108835989" target="_blank">2026-01-18 08:35:27</a></td></tr>
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
