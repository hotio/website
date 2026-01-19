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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21442" onclick="CopyToClipboard('tag21442');return false;" class="tag-decoration">v2</div><div id="tag18256" onclick="CopyToClipboard('tag18256');return false;" class="tag-decoration">v2-a0c6c36</div><div id="tag9185" onclick="CopyToClipboard('tag9185');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a0c6c366fc98acb5de912207dbdbd32e56372a86" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124058891" target="_blank">2026-01-19 03:14:28</a></td></tr>
<tr><td><div id="tag18364" onclick="CopyToClipboard('tag18364');return false;" class="tag-decoration">v3</div><div id="tag20785" onclick="CopyToClipboard('tag20785');return false;" class="tag-decoration">v3-3eefc53</div><div id="tag172" onclick="CopyToClipboard('tag172');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag5160" onclick="CopyToClipboard('tag5160');return false;" class="tag-decoration">v3-v3</div><div id="tag7126" onclick="CopyToClipboard('tag7126');return false;" class="tag-decoration">v3-v3.2</div><div id="tag29528" onclick="CopyToClipboard('tag29528');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/3eefc53bd79e7eb185f3c8a57913a6d34ff655b5" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124060160" target="_blank">2026-01-19 03:14:33</a></td></tr>
<tr><td><div id="tag26128" onclick="CopyToClipboard('tag26128');return false;" class="tag-decoration">v3-develop</div><div id="tag8334" onclick="CopyToClipboard('tag8334');return false;" class="tag-decoration">v3-develop-99bff48</div><div id="tag11086" onclick="CopyToClipboard('tag11086');return false;" class="tag-decoration">v3-develop-3.2.0-develop.54</div><div id="tag22447" onclick="CopyToClipboard('tag22447');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24644" onclick="CopyToClipboard('tag24644');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag9989" onclick="CopyToClipboard('tag9989');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/99bff48c4cdd261776bd4a0f176eb3b211834113" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21124059405" target="_blank">2026-01-19 03:14:30</a></td></tr>
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
