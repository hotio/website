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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29616" onclick="CopyToClipboard('tag29616');return false;" class="tag-decoration">v2</div><div id="tag1771" onclick="CopyToClipboard('tag1771');return false;" class="tag-decoration">v2-ab04a10</div><div id="tag19385" onclick="CopyToClipboard('tag19385');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ab04a1047cfb64e77ab60fbb7ae7f686cfc39a55" target="_blank">v2</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097472201" target="_blank">2026-01-17 16:33:31</a></td></tr>
<tr><td><div id="tag22257" onclick="CopyToClipboard('tag22257');return false;" class="tag-decoration">v3</div><div id="tag23616" onclick="CopyToClipboard('tag23616');return false;" class="tag-decoration">v3-07f5eac</div><div id="tag21146" onclick="CopyToClipboard('tag21146');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag20509" onclick="CopyToClipboard('tag20509');return false;" class="tag-decoration">v3-v3</div><div id="tag9551" onclick="CopyToClipboard('tag9551');return false;" class="tag-decoration">v3-v3.2</div><div id="tag27223" onclick="CopyToClipboard('tag27223');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07f5eacc59d2a649e33eb325549af74defcd26f6" target="_blank">use new binary locations</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097360175" target="_blank">2026-01-17 16:24:25</a></td></tr>
<tr><td><div id="tag16913" onclick="CopyToClipboard('tag16913');return false;" class="tag-decoration">v3-develop</div><div id="tag28011" onclick="CopyToClipboard('tag28011');return false;" class="tag-decoration">v3-develop-da29d13</div><div id="tag28497" onclick="CopyToClipboard('tag28497');return false;" class="tag-decoration">v3-develop-3.2.0-develop.31</div><div id="tag30858" onclick="CopyToClipboard('tag30858');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5766" onclick="CopyToClipboard('tag5766');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag24470" onclick="CopyToClipboard('tag24470');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da29d13821df4a3e8bf04b7f2d819b9e2ff5f2e2" target="_blank">eros-develop branch builds</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097403016" target="_blank">2026-01-17 16:27:55</a></td></tr>
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
