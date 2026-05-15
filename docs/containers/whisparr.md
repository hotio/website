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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31045" onclick="CopyToClipboard('tag31045');return false;" class="tag-decoration">v2</div><div id="tag27786" onclick="CopyToClipboard('tag27786');return false;" class="tag-decoration">v2-f568107</div><div id="tag12201" onclick="CopyToClipboard('tag12201');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag28372" onclick="CopyToClipboard('tag28372');return false;" class="tag-decoration">v2-v2</div><div id="tag7612" onclick="CopyToClipboard('tag7612');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12656" onclick="CopyToClipboard('tag12656');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag8961" onclick="CopyToClipboard('tag8961');return false;" class="tag-decoration">v2-develop</div><div id="tag4977" onclick="CopyToClipboard('tag4977');return false;" class="tag-decoration">v2-develop-2d9661d</div><div id="tag19177" onclick="CopyToClipboard('tag19177');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag4798" onclick="CopyToClipboard('tag4798');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag24697" onclick="CopyToClipboard('tag24697');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22455" onclick="CopyToClipboard('tag22455');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2d9661dbe6017cee3ba05f6b38b08e23761ff9d7" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927511014" target="_blank">2026-05-15 15:55:16</a></td></tr>
<tr><td><div id="tag1535" onclick="CopyToClipboard('tag1535');return false;" class="tag-decoration">v3</div><div id="tag7943" onclick="CopyToClipboard('tag7943');return false;" class="tag-decoration">v3-5ea215c</div><div id="tag10087" onclick="CopyToClipboard('tag10087');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag24870" onclick="CopyToClipboard('tag24870');return false;" class="tag-decoration">v3-v3</div><div id="tag24288" onclick="CopyToClipboard('tag24288');return false;" class="tag-decoration">v3-v3.3</div><div id="tag19266" onclick="CopyToClipboard('tag19266');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5ea215c2a03d2332fa3a6a08b1fe5d46c3d10389" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715068861" target="_blank">2026-05-12 05:20:07</a></td></tr>
<tr><td><div id="tag2153" onclick="CopyToClipboard('tag2153');return false;" class="tag-decoration">v3-develop</div><div id="tag14392" onclick="CopyToClipboard('tag14392');return false;" class="tag-decoration">v3-develop-5c1a10c</div><div id="tag25120" onclick="CopyToClipboard('tag25120');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag21133" onclick="CopyToClipboard('tag21133');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7524" onclick="CopyToClipboard('tag7524');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag21916" onclick="CopyToClipboard('tag21916');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c1a10c95c9efa5658b027e01bb7bd5ae60df374" target="_blank">test build</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25718085189" target="_blank">2026-05-12 06:41:56</a></td></tr>
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
