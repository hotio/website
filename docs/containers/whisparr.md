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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31369" onclick="CopyToClipboard('tag31369');return false;" class="tag-decoration">v2</div><div id="tag10758" onclick="CopyToClipboard('tag10758');return false;" class="tag-decoration">v2-f821635</div><div id="tag9646" onclick="CopyToClipboard('tag9646');return false;" class="tag-decoration">v2-2.0.0.2142</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f821635c2e6f577a2efd3fb94b8294db3d3fa172" target="_blank">Version update: 2.0.0.2130 => 2.0.0.2142</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162272259" target="_blank">2026-01-20 06:52:53</a></td></tr>
<tr><td><div id="tag16881" onclick="CopyToClipboard('tag16881');return false;" class="tag-decoration">v3</div><div id="tag20776" onclick="CopyToClipboard('tag20776');return false;" class="tag-decoration">v3-ab933a5</div><div id="tag1143" onclick="CopyToClipboard('tag1143');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag26614" onclick="CopyToClipboard('tag26614');return false;" class="tag-decoration">v3-v3</div><div id="tag28748" onclick="CopyToClipboard('tag28748');return false;" class="tag-decoration">v3-v3.2</div><div id="tag15322" onclick="CopyToClipboard('tag15322');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/ab933a599f8b6890a386eb5bed591deaf76b886f" target="_blank">Version update: 3.2.0-release.27 => 3.2.1-release.65</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162273867" target="_blank">2026-01-20 06:52:58</a></td></tr>
<tr><td><div id="tag9377" onclick="CopyToClipboard('tag9377');return false;" class="tag-decoration">v3-develop</div><div id="tag12564" onclick="CopyToClipboard('tag12564');return false;" class="tag-decoration">v3-develop-5d91cb4</div><div id="tag12362" onclick="CopyToClipboard('tag12362');return false;" class="tag-decoration">v3-develop-3.2.1-develop.60</div><div id="tag27494" onclick="CopyToClipboard('tag27494');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6773" onclick="CopyToClipboard('tag6773');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag10515" onclick="CopyToClipboard('tag10515');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5d91cb47be798ef36aef78e72543a2c37507a86b" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21132243627" target="_blank">2026-01-19 09:31:21</a></td></tr>
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
