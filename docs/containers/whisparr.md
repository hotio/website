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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12587" onclick="CopyToClipboard('tag12587');return false;" class="tag-decoration">v2</div><div id="tag29312" onclick="CopyToClipboard('tag29312');return false;" class="tag-decoration">v2-43667ed</div><div id="tag29719" onclick="CopyToClipboard('tag29719');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/43667ed220d9f82b7a4dea3a11465368e81f8c00" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21113703673" target="_blank">2026-01-18 14:57:44</a></td></tr>
<tr><td><div id="tag3835" onclick="CopyToClipboard('tag3835');return false;" class="tag-decoration">v3</div><div id="tag5246" onclick="CopyToClipboard('tag5246');return false;" class="tag-decoration">v3-07f5eac</div><div id="tag1297" onclick="CopyToClipboard('tag1297');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag17787" onclick="CopyToClipboard('tag17787');return false;" class="tag-decoration">v3-v3</div><div id="tag2136" onclick="CopyToClipboard('tag2136');return false;" class="tag-decoration">v3-v3.2</div><div id="tag21282" onclick="CopyToClipboard('tag21282');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07f5eacc59d2a649e33eb325549af74defcd26f6" target="_blank">use new binary locations</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097360175" target="_blank">2026-01-17 16:24:25</a></td></tr>
<tr><td><div id="tag9179" onclick="CopyToClipboard('tag9179');return false;" class="tag-decoration">v3-develop</div><div id="tag8500" onclick="CopyToClipboard('tag8500');return false;" class="tag-decoration">v3-develop-aee86b5</div><div id="tag30653" onclick="CopyToClipboard('tag30653');return false;" class="tag-decoration">v3-develop-3.2.0-develop.45</div><div id="tag24575" onclick="CopyToClipboard('tag24575');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25556" onclick="CopyToClipboard('tag25556');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag14908" onclick="CopyToClipboard('tag14908');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aee86b528508545d24437a7b224751e096affc60" target="_blank">Version update: 3.2.0-develop.43 => 3.2.0-develop.45</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21108835989" target="_blank">2026-01-18 08:35:27</a></td></tr>
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
