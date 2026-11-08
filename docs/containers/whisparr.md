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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24441" onclick="CopyToClipboard('tag24441');return false;" class="tag-decoration">v2</div><div id="tag10249" onclick="CopyToClipboard('tag10249');return false;" class="tag-decoration">v2-260b883</div><div id="tag17869" onclick="CopyToClipboard('tag17869');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag8571" onclick="CopyToClipboard('tag8571');return false;" class="tag-decoration">v2-v2</div><div id="tag28801" onclick="CopyToClipboard('tag28801');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8443" onclick="CopyToClipboard('tag8443');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/260b88301eed06f9258069a9716f9beacfe617eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323851695" target="_blank">2026-11-07 01:23:51</a></td></tr>
<tr><td><div id="tag24187" onclick="CopyToClipboard('tag24187');return false;" class="tag-decoration">v2-develop</div><div id="tag24639" onclick="CopyToClipboard('tag24639');return false;" class="tag-decoration">v2-develop-8be1f91</div><div id="tag30644" onclick="CopyToClipboard('tag30644');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag16039" onclick="CopyToClipboard('tag16039');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14242" onclick="CopyToClipboard('tag14242');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7310" onclick="CopyToClipboard('tag7310');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8be1f9117febfdfa9584444f4ba621ee2da66b36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323849908" target="_blank">2026-11-07 01:23:49</a></td></tr>
<tr><td><div id="tag15635" onclick="CopyToClipboard('tag15635');return false;" class="tag-decoration">v3</div><div id="tag11790" onclick="CopyToClipboard('tag11790');return false;" class="tag-decoration">v3-cf20a4b</div><div id="tag30274" onclick="CopyToClipboard('tag30274');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag21771" onclick="CopyToClipboard('tag21771');return false;" class="tag-decoration">v3-v3</div><div id="tag31781" onclick="CopyToClipboard('tag31781');return false;" class="tag-decoration">v3-v3.6</div><div id="tag12434" onclick="CopyToClipboard('tag12434');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cf20a4b3afe94381b27222a187519ff0756339b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323855295" target="_blank">2026-11-07 01:23:53</a></td></tr>
<tr><td><div id="tag20346" onclick="CopyToClipboard('tag20346');return false;" class="tag-decoration">v3-develop</div><div id="tag15679" onclick="CopyToClipboard('tag15679');return false;" class="tag-decoration">v3-develop-bc5e7da</div><div id="tag12032" onclick="CopyToClipboard('tag12032');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1943</div><div id="tag14118" onclick="CopyToClipboard('tag14118');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5885" onclick="CopyToClipboard('tag5885');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag15843" onclick="CopyToClipboard('tag15843');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bc5e7da4debf8ed1e339d3af28406aa37ead918c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42522192168" target="_blank">2026-11-08 20:50:58</a></td></tr>
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
