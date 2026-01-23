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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1910" onclick="CopyToClipboard('tag1910');return false;" class="tag-decoration">v2</div><div id="tag32179" onclick="CopyToClipboard('tag32179');return false;" class="tag-decoration">v2-32251ac</div><div id="tag12158" onclick="CopyToClipboard('tag12158');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/32251ace25aed3e99d39c239f18a222294f6fbc9" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246784120" target="_blank">2026-01-22 11:30:03</a></td></tr>
<tr><td><div id="tag11818" onclick="CopyToClipboard('tag11818');return false;" class="tag-decoration">v2-develop</div><div id="tag8981" onclick="CopyToClipboard('tag8981');return false;" class="tag-decoration">v2-develop-3042364</div><div id="tag22887" onclick="CopyToClipboard('tag22887');return false;" class="tag-decoration">v2-develop-2.1.0-develop.21</div><div id="tag21674" onclick="CopyToClipboard('tag21674');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6877" onclick="CopyToClipboard('tag6877');return false;" class="tag-decoration">v2-develop-v2.1</div><div id="tag23873" onclick="CopyToClipboard('tag23873');return false;" class="tag-decoration">v2-develop-v2.1.0</div></td><td>develop</td><td><a href="https://github.com/hotio/whisparr/commit/304236492f80138ff32d6f2a8fd0b48b658b2960" target="_blank">v2 develop</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21276505018" target="_blank">2026-01-23 06:08:03</a></td></tr>
<tr><td><div id="tag2421" onclick="CopyToClipboard('tag2421');return false;" class="tag-decoration">v3</div><div id="tag8086" onclick="CopyToClipboard('tag8086');return false;" class="tag-decoration">v3-e873ce0</div><div id="tag13861" onclick="CopyToClipboard('tag13861');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag1937" onclick="CopyToClipboard('tag1937');return false;" class="tag-decoration">v3-v3</div><div id="tag32285" onclick="CopyToClipboard('tag32285');return false;" class="tag-decoration">v3-v3.2</div><div id="tag12634" onclick="CopyToClipboard('tag12634');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e873ce0709c70b79223edf310524bb00443f42c7" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246785852" target="_blank">2026-01-22 11:30:08</a></td></tr>
<tr><td><div id="tag4365" onclick="CopyToClipboard('tag4365');return false;" class="tag-decoration">v3-develop</div><div id="tag775" onclick="CopyToClipboard('tag775');return false;" class="tag-decoration">v3-develop-9ec0974</div><div id="tag25517" onclick="CopyToClipboard('tag25517');return false;" class="tag-decoration">v3-develop-3.2.1-develop.76</div><div id="tag26450" onclick="CopyToClipboard('tag26450');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag22565" onclick="CopyToClipboard('tag22565');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag1395" onclick="CopyToClipboard('tag1395');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9ec0974153113cecfc2b6d662cfc7a385dc93fdd" target="_blank">Version update: 3.2.1-develop.74 => 3.2.1-develop.76</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21262860471" target="_blank">2026-01-22 19:55:53</a></td></tr>
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
