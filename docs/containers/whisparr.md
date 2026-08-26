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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10554" onclick="CopyToClipboard('tag10554');return false;" class="tag-decoration">v2</div><div id="tag31205" onclick="CopyToClipboard('tag31205');return false;" class="tag-decoration">v2-7521c04</div><div id="tag26711" onclick="CopyToClipboard('tag26711');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag12150" onclick="CopyToClipboard('tag12150');return false;" class="tag-decoration">v2-v2</div><div id="tag6449" onclick="CopyToClipboard('tag6449');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16030" onclick="CopyToClipboard('tag16030');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag32128" onclick="CopyToClipboard('tag32128');return false;" class="tag-decoration">v2-develop</div><div id="tag1829" onclick="CopyToClipboard('tag1829');return false;" class="tag-decoration">v2-develop-01085fe</div><div id="tag6980" onclick="CopyToClipboard('tag6980');return false;" class="tag-decoration">v2-develop-2.2.0-develop.202</div><div id="tag26161" onclick="CopyToClipboard('tag26161');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18829" onclick="CopyToClipboard('tag18829');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8934" onclick="CopyToClipboard('tag8934');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/01085fe9a2c39ee4a502c8f6360153fd478dce6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32927502453" target="_blank">2026-08-26 03:43:05</a></td></tr>
<tr><td><div id="tag24017" onclick="CopyToClipboard('tag24017');return false;" class="tag-decoration">v3</div><div id="tag21295" onclick="CopyToClipboard('tag21295');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag22820" onclick="CopyToClipboard('tag22820');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag16821" onclick="CopyToClipboard('tag16821');return false;" class="tag-decoration">v3-v3</div><div id="tag32392" onclick="CopyToClipboard('tag32392');return false;" class="tag-decoration">v3-v3.3</div><div id="tag923" onclick="CopyToClipboard('tag923');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag29491" onclick="CopyToClipboard('tag29491');return false;" class="tag-decoration">v3-develop</div><div id="tag19197" onclick="CopyToClipboard('tag19197');return false;" class="tag-decoration">v3-develop-f7396fb</div><div id="tag77" onclick="CopyToClipboard('tag77');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag30091" onclick="CopyToClipboard('tag30091');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27664" onclick="CopyToClipboard('tag27664');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag24578" onclick="CopyToClipboard('tag24578');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f7396fba0d4fda86103197a99b59bb397993e44c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922173242" target="_blank">2026-08-26 02:17:25</a></td></tr>
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
