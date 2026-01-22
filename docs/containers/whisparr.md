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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1823" onclick="CopyToClipboard('tag1823');return false;" class="tag-decoration">v2</div><div id="tag9248" onclick="CopyToClipboard('tag9248');return false;" class="tag-decoration">v2-32251ac</div><div id="tag32298" onclick="CopyToClipboard('tag32298');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/32251ace25aed3e99d39c239f18a222294f6fbc9" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246784120" target="_blank">2026-01-22 11:30:03</a></td></tr>
<tr><td><div id="tag20851" onclick="CopyToClipboard('tag20851');return false;" class="tag-decoration">v3</div><div id="tag3295" onclick="CopyToClipboard('tag3295');return false;" class="tag-decoration">v3-e873ce0</div><div id="tag19946" onclick="CopyToClipboard('tag19946');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag11810" onclick="CopyToClipboard('tag11810');return false;" class="tag-decoration">v3-v3</div><div id="tag3649" onclick="CopyToClipboard('tag3649');return false;" class="tag-decoration">v3-v3.2</div><div id="tag23528" onclick="CopyToClipboard('tag23528');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e873ce0709c70b79223edf310524bb00443f42c7" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246785852" target="_blank">2026-01-22 11:30:08</a></td></tr>
<tr><td><div id="tag15935" onclick="CopyToClipboard('tag15935');return false;" class="tag-decoration">v3-develop</div><div id="tag3513" onclick="CopyToClipboard('tag3513');return false;" class="tag-decoration">v3-develop-9ec0974</div><div id="tag2519" onclick="CopyToClipboard('tag2519');return false;" class="tag-decoration">v3-develop-3.2.1-develop.76</div><div id="tag5971" onclick="CopyToClipboard('tag5971');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25747" onclick="CopyToClipboard('tag25747');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag9711" onclick="CopyToClipboard('tag9711');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9ec0974153113cecfc2b6d662cfc7a385dc93fdd" target="_blank">Version update: 3.2.1-develop.74 => 3.2.1-develop.76</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21262860471" target="_blank">2026-01-22 19:55:53</a></td></tr>
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
