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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22407" onclick="CopyToClipboard('tag22407');return false;" class="tag-decoration">v2</div><div id="tag15374" onclick="CopyToClipboard('tag15374');return false;" class="tag-decoration">v2-ab04a10</div><div id="tag739" onclick="CopyToClipboard('tag739');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ab04a1047cfb64e77ab60fbb7ae7f686cfc39a55" target="_blank">v2</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097472201" target="_blank">2026-01-17 16:33:31</a></td></tr>
<tr><td><div id="tag10054" onclick="CopyToClipboard('tag10054');return false;" class="tag-decoration">v3</div><div id="tag9565" onclick="CopyToClipboard('tag9565');return false;" class="tag-decoration">v3-07f5eac</div><div id="tag9351" onclick="CopyToClipboard('tag9351');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag31195" onclick="CopyToClipboard('tag31195');return false;" class="tag-decoration">v3-v3</div><div id="tag22143" onclick="CopyToClipboard('tag22143');return false;" class="tag-decoration">v3-v3.2</div><div id="tag32259" onclick="CopyToClipboard('tag32259');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07f5eacc59d2a649e33eb325549af74defcd26f6" target="_blank">use new binary locations</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097360175" target="_blank">2026-01-17 16:24:25</a></td></tr>
<tr><td><div id="tag9011" onclick="CopyToClipboard('tag9011');return false;" class="tag-decoration">v3-develop</div><div id="tag5567" onclick="CopyToClipboard('tag5567');return false;" class="tag-decoration">v3-develop-aee86b5</div><div id="tag20353" onclick="CopyToClipboard('tag20353');return false;" class="tag-decoration">v3-develop-3.2.0-develop.45</div><div id="tag21078" onclick="CopyToClipboard('tag21078');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10274" onclick="CopyToClipboard('tag10274');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag6319" onclick="CopyToClipboard('tag6319');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aee86b528508545d24437a7b224751e096affc60" target="_blank">Version update: 3.2.0-develop.43 => 3.2.0-develop.45</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21108835989" target="_blank">2026-01-18 08:35:27</a></td></tr>
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
