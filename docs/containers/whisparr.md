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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13747" onclick="CopyToClipboard('tag13747');return false;" class="tag-decoration">v2</div><div id="tag28184" onclick="CopyToClipboard('tag28184');return false;" class="tag-decoration">v2-f8fcd9e</div><div id="tag27320" onclick="CopyToClipboard('tag27320');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f8fcd9e4580933707b8dfb2aa4ee8636074e7e0c" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21132242980" target="_blank">2026-01-19 09:31:20</a></td></tr>
<tr><td><div id="tag30981" onclick="CopyToClipboard('tag30981');return false;" class="tag-decoration">v3</div><div id="tag27921" onclick="CopyToClipboard('tag27921');return false;" class="tag-decoration">v3-3eefc53</div><div id="tag1700" onclick="CopyToClipboard('tag1700');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag3968" onclick="CopyToClipboard('tag3968');return false;" class="tag-decoration">v3-v3</div><div id="tag5323" onclick="CopyToClipboard('tag5323');return false;" class="tag-decoration">v3-v3.2</div><div id="tag4636" onclick="CopyToClipboard('tag4636');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/3eefc53bd79e7eb185f3c8a57913a6d34ff655b5" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124060160" target="_blank">2026-01-19 03:14:33</a></td></tr>
<tr><td><div id="tag9296" onclick="CopyToClipboard('tag9296');return false;" class="tag-decoration">v3-develop</div><div id="tag23290" onclick="CopyToClipboard('tag23290');return false;" class="tag-decoration">v3-develop-41d3001</div><div id="tag13785" onclick="CopyToClipboard('tag13785');return false;" class="tag-decoration">v3-develop-3.2.1-develop.60</div><div id="tag23443" onclick="CopyToClipboard('tag23443');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3924" onclick="CopyToClipboard('tag3924');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag14681" onclick="CopyToClipboard('tag14681');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/41d3001350223e13ad665fbd7ade9485b09ef27e" target="_blank">Version update: 3.2.0-develop.54 => 3.2.1-develop.60</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21125951454" target="_blank">2026-01-19 05:03:44</a></td></tr>
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
