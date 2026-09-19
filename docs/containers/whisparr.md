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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3431" onclick="CopyToClipboard('tag3431');return false;" class="tag-decoration">v2</div><div id="tag5032" onclick="CopyToClipboard('tag5032');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag27241" onclick="CopyToClipboard('tag27241');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag31041" onclick="CopyToClipboard('tag31041');return false;" class="tag-decoration">v2-v2</div><div id="tag10530" onclick="CopyToClipboard('tag10530');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6221" onclick="CopyToClipboard('tag6221');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag17721" onclick="CopyToClipboard('tag17721');return false;" class="tag-decoration">v2-develop</div><div id="tag201" onclick="CopyToClipboard('tag201');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag2084" onclick="CopyToClipboard('tag2084');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag4800" onclick="CopyToClipboard('tag4800');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9832" onclick="CopyToClipboard('tag9832');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28436" onclick="CopyToClipboard('tag28436');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag8268" onclick="CopyToClipboard('tag8268');return false;" class="tag-decoration">v3</div><div id="tag31842" onclick="CopyToClipboard('tag31842');return false;" class="tag-decoration">v3-44c7018</div><div id="tag19799" onclick="CopyToClipboard('tag19799');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag23850" onclick="CopyToClipboard('tag23850');return false;" class="tag-decoration">v3-v3</div><div id="tag10421" onclick="CopyToClipboard('tag10421');return false;" class="tag-decoration">v3-v3.6</div><div id="tag22122" onclick="CopyToClipboard('tag22122');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag30261" onclick="CopyToClipboard('tag30261');return false;" class="tag-decoration">v3-develop</div><div id="tag8736" onclick="CopyToClipboard('tag8736');return false;" class="tag-decoration">v3-develop-e39ebbc</div><div id="tag22349" onclick="CopyToClipboard('tag22349');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1701</div><div id="tag30617" onclick="CopyToClipboard('tag30617');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32503" onclick="CopyToClipboard('tag32503');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag23076" onclick="CopyToClipboard('tag23076');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e39ebbc468d577ea9f43474c764f50dea66642d6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471708241" target="_blank">2026-09-19 21:52:36</a></td></tr>
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
