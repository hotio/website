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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28245" onclick="CopyToClipboard('tag28245');return false;" class="tag-decoration">v2</div><div id="tag10153" onclick="CopyToClipboard('tag10153');return false;" class="tag-decoration">v2-a0c6c36</div><div id="tag31588" onclick="CopyToClipboard('tag31588');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a0c6c366fc98acb5de912207dbdbd32e56372a86" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124058891" target="_blank">2026-01-19 03:14:28</a></td></tr>
<tr><td><div id="tag29583" onclick="CopyToClipboard('tag29583');return false;" class="tag-decoration">v3</div><div id="tag28325" onclick="CopyToClipboard('tag28325');return false;" class="tag-decoration">v3-f9956bf</div><div id="tag3479" onclick="CopyToClipboard('tag3479');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag13007" onclick="CopyToClipboard('tag13007');return false;" class="tag-decoration">v3-v3</div><div id="tag1882" onclick="CopyToClipboard('tag1882');return false;" class="tag-decoration">v3-v3.2</div><div id="tag21225" onclick="CopyToClipboard('tag21225');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f9956bf12ea0ed6726fbd90dc7c203e6439c2611" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21113704197" target="_blank">2026-01-18 14:57:47</a></td></tr>
<tr><td><div id="tag17566" onclick="CopyToClipboard('tag17566');return false;" class="tag-decoration">v3-develop</div><div id="tag5803" onclick="CopyToClipboard('tag5803');return false;" class="tag-decoration">v3-develop-ea754f2</div><div id="tag25334" onclick="CopyToClipboard('tag25334');return false;" class="tag-decoration">v3-develop-3.2.0-develop.54</div><div id="tag20563" onclick="CopyToClipboard('tag20563');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28824" onclick="CopyToClipboard('tag28824');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag7388" onclick="CopyToClipboard('tag7388');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ea754f21fdb2e44a1f25588330f01679f0fecab4" target="_blank">Version update: 3.2.0-develop.45 => 3.2.0-develop.54</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21119227884" target="_blank">2026-01-18 21:53:48</a></td></tr>
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
