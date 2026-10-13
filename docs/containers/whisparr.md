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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1994" onclick="CopyToClipboard('tag1994');return false;" class="tag-decoration">v2</div><div id="tag20657" onclick="CopyToClipboard('tag20657');return false;" class="tag-decoration">v2-998495f</div><div id="tag2102" onclick="CopyToClipboard('tag2102');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag22756" onclick="CopyToClipboard('tag22756');return false;" class="tag-decoration">v2-v2</div><div id="tag7290" onclick="CopyToClipboard('tag7290');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19142" onclick="CopyToClipboard('tag19142');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag14174" onclick="CopyToClipboard('tag14174');return false;" class="tag-decoration">v2-develop</div><div id="tag8572" onclick="CopyToClipboard('tag8572');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag10735" onclick="CopyToClipboard('tag10735');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag24633" onclick="CopyToClipboard('tag24633');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9738" onclick="CopyToClipboard('tag9738');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13110" onclick="CopyToClipboard('tag13110');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag11281" onclick="CopyToClipboard('tag11281');return false;" class="tag-decoration">v3</div><div id="tag2853" onclick="CopyToClipboard('tag2853');return false;" class="tag-decoration">v3-7fb9b23</div><div id="tag4589" onclick="CopyToClipboard('tag4589');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag23085" onclick="CopyToClipboard('tag23085');return false;" class="tag-decoration">v3-v3</div><div id="tag8312" onclick="CopyToClipboard('tag8312');return false;" class="tag-decoration">v3-v3.6</div><div id="tag27940" onclick="CopyToClipboard('tag27940');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7fb9b2395ccc8060763d457df9946db9e183be64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38456159836" target="_blank">2026-10-13 19:36:17</a></td></tr>
<tr><td><div id="tag24186" onclick="CopyToClipboard('tag24186');return false;" class="tag-decoration">v3-develop</div><div id="tag10123" onclick="CopyToClipboard('tag10123');return false;" class="tag-decoration">v3-develop-642c903</div><div id="tag24518" onclick="CopyToClipboard('tag24518');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1889</div><div id="tag26253" onclick="CopyToClipboard('tag26253');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29225" onclick="CopyToClipboard('tag29225');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag31076" onclick="CopyToClipboard('tag31076');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/642c9031e9bc19bc8ec157f9fcc3dc58738ccd33" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38456172932" target="_blank">2026-10-13 19:36:22</a></td></tr>
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
