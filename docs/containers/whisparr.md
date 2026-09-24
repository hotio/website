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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12884" onclick="CopyToClipboard('tag12884');return false;" class="tag-decoration">v2</div><div id="tag2518" onclick="CopyToClipboard('tag2518');return false;" class="tag-decoration">v2-b17234c</div><div id="tag19933" onclick="CopyToClipboard('tag19933');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag20157" onclick="CopyToClipboard('tag20157');return false;" class="tag-decoration">v2-v2</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32311" onclick="CopyToClipboard('tag32311');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag3668" onclick="CopyToClipboard('tag3668');return false;" class="tag-decoration">v2-develop</div><div id="tag13470" onclick="CopyToClipboard('tag13470');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag20658" onclick="CopyToClipboard('tag20658');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag17427" onclick="CopyToClipboard('tag17427');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3278" onclick="CopyToClipboard('tag3278');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4011" onclick="CopyToClipboard('tag4011');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag21699" onclick="CopyToClipboard('tag21699');return false;" class="tag-decoration">v3</div><div id="tag24765" onclick="CopyToClipboard('tag24765');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag24285" onclick="CopyToClipboard('tag24285');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag30554" onclick="CopyToClipboard('tag30554');return false;" class="tag-decoration">v3-v3</div><div id="tag22439" onclick="CopyToClipboard('tag22439');return false;" class="tag-decoration">v3-v3.6</div><div id="tag8343" onclick="CopyToClipboard('tag8343');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag13712" onclick="CopyToClipboard('tag13712');return false;" class="tag-decoration">v3-develop</div><div id="tag1064" onclick="CopyToClipboard('tag1064');return false;" class="tag-decoration">v3-develop-b6740ec</div><div id="tag31004" onclick="CopyToClipboard('tag31004');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1725</div><div id="tag5574" onclick="CopyToClipboard('tag5574');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2035" onclick="CopyToClipboard('tag2035');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10151" onclick="CopyToClipboard('tag10151');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b6740ecb3f08a5d097f940328c7154694c1479b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960760987" target="_blank">2026-09-24 05:37:19</a></td></tr>
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
