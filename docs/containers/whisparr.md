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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9318" onclick="CopyToClipboard('tag9318');return false;" class="tag-decoration">v2</div><div id="tag2944" onclick="CopyToClipboard('tag2944');return false;" class="tag-decoration">v2-ab04a10</div><div id="tag2466" onclick="CopyToClipboard('tag2466');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ab04a1047cfb64e77ab60fbb7ae7f686cfc39a55" target="_blank">v2</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097472201" target="_blank">2026-01-17 16:33:31</a></td></tr>
<tr><td><div id="tag8498" onclick="CopyToClipboard('tag8498');return false;" class="tag-decoration">v3</div><div id="tag21100" onclick="CopyToClipboard('tag21100');return false;" class="tag-decoration">v3-07f5eac</div><div id="tag23479" onclick="CopyToClipboard('tag23479');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag25945" onclick="CopyToClipboard('tag25945');return false;" class="tag-decoration">v3-v3</div><div id="tag2381" onclick="CopyToClipboard('tag2381');return false;" class="tag-decoration">v3-v3.2</div><div id="tag930" onclick="CopyToClipboard('tag930');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07f5eacc59d2a649e33eb325549af74defcd26f6" target="_blank">use new binary locations</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097360175" target="_blank">2026-01-17 16:24:25</a></td></tr>
<tr><td><div id="tag2815" onclick="CopyToClipboard('tag2815');return false;" class="tag-decoration">v3-develop</div><div id="tag23746" onclick="CopyToClipboard('tag23746');return false;" class="tag-decoration">v3-develop-31db34b</div><div id="tag25608" onclick="CopyToClipboard('tag25608');return false;" class="tag-decoration">v3-develop-3.2.0-develop.34</div><div id="tag17582" onclick="CopyToClipboard('tag17582');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10076" onclick="CopyToClipboard('tag10076');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag27326" onclick="CopyToClipboard('tag27326');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/31db34bc3dac21564e45f28fa168598c880acee4" target="_blank">Version update: 3.2.0-develop.31 => 3.2.0-develop.34</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21100395026" target="_blank">2026-01-17 20:28:07</a></td></tr>
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
