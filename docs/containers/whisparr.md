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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13872" onclick="CopyToClipboard('tag13872');return false;" class="tag-decoration">v2</div><div id="tag2209" onclick="CopyToClipboard('tag2209');return false;" class="tag-decoration">v2-c8c8c34</div><div id="tag6363" onclick="CopyToClipboard('tag6363');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag2803" onclick="CopyToClipboard('tag2803');return false;" class="tag-decoration">v2-v2</div><div id="tag15156" onclick="CopyToClipboard('tag15156');return false;" class="tag-decoration">v2-v2.2</div><div id="tag14566" onclick="CopyToClipboard('tag14566');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c8c8c345edd25276ceb5cccc85d5db21da8e5cea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39696289709" target="_blank">2026-10-21 23:53:20</a></td></tr>
<tr><td><div id="tag21660" onclick="CopyToClipboard('tag21660');return false;" class="tag-decoration">v2-develop</div><div id="tag3131" onclick="CopyToClipboard('tag3131');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag7800" onclick="CopyToClipboard('tag7800');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2430" onclick="CopyToClipboard('tag2430');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30161" onclick="CopyToClipboard('tag30161');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25956" onclick="CopyToClipboard('tag25956');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag2391" onclick="CopyToClipboard('tag2391');return false;" class="tag-decoration">v3</div><div id="tag15515" onclick="CopyToClipboard('tag15515');return false;" class="tag-decoration">v3-2f7567a</div><div id="tag2806" onclick="CopyToClipboard('tag2806');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag17613" onclick="CopyToClipboard('tag17613');return false;" class="tag-decoration">v3-v3</div><div id="tag27997" onclick="CopyToClipboard('tag27997');return false;" class="tag-decoration">v3-v3.6</div><div id="tag23188" onclick="CopyToClipboard('tag23188');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/2f7567ac9afe8543f9534d645152abf2765a4f49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674895749" target="_blank">2026-10-21 20:58:21</a></td></tr>
<tr><td><div id="tag9890" onclick="CopyToClipboard('tag9890');return false;" class="tag-decoration">v3-develop</div><div id="tag14643" onclick="CopyToClipboard('tag14643');return false;" class="tag-decoration">v3-develop-37d08a5</div><div id="tag20956" onclick="CopyToClipboard('tag20956');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag8860" onclick="CopyToClipboard('tag8860');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag963" onclick="CopyToClipboard('tag963');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag19286" onclick="CopyToClipboard('tag19286');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/37d08a554acce6fc757610b100c13fa1a7aa707c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39696289567" target="_blank">2026-10-21 23:53:20</a></td></tr>
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
