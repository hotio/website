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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27549" onclick="CopyToClipboard('tag27549');return false;" class="tag-decoration">v2</div><div id="tag13270" onclick="CopyToClipboard('tag13270');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag13336" onclick="CopyToClipboard('tag13336');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag655" onclick="CopyToClipboard('tag655');return false;" class="tag-decoration">v2-v2</div><div id="tag9134" onclick="CopyToClipboard('tag9134');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19881" onclick="CopyToClipboard('tag19881');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag11627" onclick="CopyToClipboard('tag11627');return false;" class="tag-decoration">v2-develop</div><div id="tag32437" onclick="CopyToClipboard('tag32437');return false;" class="tag-decoration">v2-develop-5574480</div><div id="tag16374" onclick="CopyToClipboard('tag16374');return false;" class="tag-decoration">v2-develop-2.2.0-develop.380</div><div id="tag26361" onclick="CopyToClipboard('tag26361');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8838" onclick="CopyToClipboard('tag8838');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28704" onclick="CopyToClipboard('tag28704');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5574480ba93983a57e6b3e4ed191c77a04c34351" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363855676" target="_blank">2026-09-18 15:40:23</a></td></tr>
<tr><td><div id="tag3218" onclick="CopyToClipboard('tag3218');return false;" class="tag-decoration">v3</div><div id="tag31117" onclick="CopyToClipboard('tag31117');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag29461" onclick="CopyToClipboard('tag29461');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag439" onclick="CopyToClipboard('tag439');return false;" class="tag-decoration">v3-v3</div><div id="tag1936" onclick="CopyToClipboard('tag1936');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30133" onclick="CopyToClipboard('tag30133');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag17987" onclick="CopyToClipboard('tag17987');return false;" class="tag-decoration">v3-develop</div><div id="tag21808" onclick="CopyToClipboard('tag21808');return false;" class="tag-decoration">v3-develop-a503800</div><div id="tag12181" onclick="CopyToClipboard('tag12181');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1674</div><div id="tag22748" onclick="CopyToClipboard('tag22748');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21483" onclick="CopyToClipboard('tag21483');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag19110" onclick="CopyToClipboard('tag19110');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a503800e179265535b3d4071e967b9650ff12307" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363841995" target="_blank">2026-09-18 15:40:15</a></td></tr>
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
