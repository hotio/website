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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28017" onclick="CopyToClipboard('tag28017');return false;" class="tag-decoration">v2</div><div id="tag15874" onclick="CopyToClipboard('tag15874');return false;" class="tag-decoration">v2-256f305</div><div id="tag27495" onclick="CopyToClipboard('tag27495');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17923" onclick="CopyToClipboard('tag17923');return false;" class="tag-decoration">v2-v2</div><div id="tag30239" onclick="CopyToClipboard('tag30239');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8404" onclick="CopyToClipboard('tag8404');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/256f30523ee094f728b053b40ae4948e1c694ae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674900954" target="_blank">2026-10-21 20:58:24</a></td></tr>
<tr><td><div id="tag17332" onclick="CopyToClipboard('tag17332');return false;" class="tag-decoration">v2-develop</div><div id="tag16132" onclick="CopyToClipboard('tag16132');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag6178" onclick="CopyToClipboard('tag6178');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag20880" onclick="CopyToClipboard('tag20880');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22889" onclick="CopyToClipboard('tag22889');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11269" onclick="CopyToClipboard('tag11269');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag24267" onclick="CopyToClipboard('tag24267');return false;" class="tag-decoration">v3</div><div id="tag22502" onclick="CopyToClipboard('tag22502');return false;" class="tag-decoration">v3-2f7567a</div><div id="tag19909" onclick="CopyToClipboard('tag19909');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag25700" onclick="CopyToClipboard('tag25700');return false;" class="tag-decoration">v3-v3</div><div id="tag19327" onclick="CopyToClipboard('tag19327');return false;" class="tag-decoration">v3-v3.6</div><div id="tag8983" onclick="CopyToClipboard('tag8983');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/2f7567ac9afe8543f9534d645152abf2765a4f49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674895749" target="_blank">2026-10-21 20:58:21</a></td></tr>
<tr><td><div id="tag19249" onclick="CopyToClipboard('tag19249');return false;" class="tag-decoration">v3-develop</div><div id="tag22440" onclick="CopyToClipboard('tag22440');return false;" class="tag-decoration">v3-develop-9320bee</div><div id="tag17503" onclick="CopyToClipboard('tag17503');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag10204" onclick="CopyToClipboard('tag10204');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19657" onclick="CopyToClipboard('tag19657');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1444" onclick="CopyToClipboard('tag1444');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9320bee221615c04ac68e3cf0ac5f7c7ea511757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674903622" target="_blank">2026-10-21 20:58:24</a></td></tr>
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
