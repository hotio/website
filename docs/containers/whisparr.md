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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20505" onclick="CopyToClipboard('tag20505');return false;" class="tag-decoration">v2</div><div id="tag22956" onclick="CopyToClipboard('tag22956');return false;" class="tag-decoration">v2-7521c04</div><div id="tag6486" onclick="CopyToClipboard('tag6486');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag29993" onclick="CopyToClipboard('tag29993');return false;" class="tag-decoration">v2-v2</div><div id="tag9121" onclick="CopyToClipboard('tag9121');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18365" onclick="CopyToClipboard('tag18365');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag24989" onclick="CopyToClipboard('tag24989');return false;" class="tag-decoration">v2-develop</div><div id="tag23947" onclick="CopyToClipboard('tag23947');return false;" class="tag-decoration">v2-develop-d3e001b</div><div id="tag30791" onclick="CopyToClipboard('tag30791');return false;" class="tag-decoration">v2-develop-2.2.0-develop.206</div><div id="tag28148" onclick="CopyToClipboard('tag28148');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29440" onclick="CopyToClipboard('tag29440');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9863" onclick="CopyToClipboard('tag9863');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d3e001bbecd2b8719dd4b40724d716590a877020" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32933773407" target="_blank">2026-08-26 05:22:06</a></td></tr>
<tr><td><div id="tag22194" onclick="CopyToClipboard('tag22194');return false;" class="tag-decoration">v3</div><div id="tag15966" onclick="CopyToClipboard('tag15966');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag12430" onclick="CopyToClipboard('tag12430');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag32030" onclick="CopyToClipboard('tag32030');return false;" class="tag-decoration">v3-v3</div><div id="tag1716" onclick="CopyToClipboard('tag1716');return false;" class="tag-decoration">v3-v3.3</div><div id="tag32321" onclick="CopyToClipboard('tag32321');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag7003" onclick="CopyToClipboard('tag7003');return false;" class="tag-decoration">v3-develop</div><div id="tag19762" onclick="CopyToClipboard('tag19762');return false;" class="tag-decoration">v3-develop-f24470e</div><div id="tag8843" onclick="CopyToClipboard('tag8843');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1287</div><div id="tag19633" onclick="CopyToClipboard('tag19633');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14463" onclick="CopyToClipboard('tag14463');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag11502" onclick="CopyToClipboard('tag11502');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f24470eebce674ed5adf53bd767840fb689bd026" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32953241622" target="_blank">2026-08-26 09:29:03</a></td></tr>
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
