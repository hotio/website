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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22434" onclick="CopyToClipboard('tag22434');return false;" class="tag-decoration">v2</div><div id="tag32703" onclick="CopyToClipboard('tag32703');return false;" class="tag-decoration">v2-a0c6c36</div><div id="tag29382" onclick="CopyToClipboard('tag29382');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a0c6c366fc98acb5de912207dbdbd32e56372a86" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124058891" target="_blank">2026-01-19 03:14:28</a></td></tr>
<tr><td><div id="tag17924" onclick="CopyToClipboard('tag17924');return false;" class="tag-decoration">v3</div><div id="tag5811" onclick="CopyToClipboard('tag5811');return false;" class="tag-decoration">v3-f9956bf</div><div id="tag28046" onclick="CopyToClipboard('tag28046');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag27839" onclick="CopyToClipboard('tag27839');return false;" class="tag-decoration">v3-v3</div><div id="tag5132" onclick="CopyToClipboard('tag5132');return false;" class="tag-decoration">v3-v3.2</div><div id="tag5988" onclick="CopyToClipboard('tag5988');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f9956bf12ea0ed6726fbd90dc7c203e6439c2611" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21113704197" target="_blank">2026-01-18 14:57:47</a></td></tr>
<tr><td><div id="tag27713" onclick="CopyToClipboard('tag27713');return false;" class="tag-decoration">v3-develop</div><div id="tag30388" onclick="CopyToClipboard('tag30388');return false;" class="tag-decoration">v3-develop-99bff48</div><div id="tag24496" onclick="CopyToClipboard('tag24496');return false;" class="tag-decoration">v3-develop-3.2.0-develop.54</div><div id="tag21379" onclick="CopyToClipboard('tag21379');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10819" onclick="CopyToClipboard('tag10819');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag8484" onclick="CopyToClipboard('tag8484');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/99bff48c4cdd261776bd4a0f176eb3b211834113" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124059405" target="_blank">2026-01-19 03:14:30</a></td></tr>
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
