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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13722" onclick="CopyToClipboard('tag13722');return false;" class="tag-decoration">v2</div><div id="tag18460" onclick="CopyToClipboard('tag18460');return false;" class="tag-decoration">v2-b17234c</div><div id="tag19116" onclick="CopyToClipboard('tag19116');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag12954" onclick="CopyToClipboard('tag12954');return false;" class="tag-decoration">v2-v2</div><div id="tag28885" onclick="CopyToClipboard('tag28885');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10694" onclick="CopyToClipboard('tag10694');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag30614" onclick="CopyToClipboard('tag30614');return false;" class="tag-decoration">v2-develop</div><div id="tag10124" onclick="CopyToClipboard('tag10124');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag2290" onclick="CopyToClipboard('tag2290');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag7624" onclick="CopyToClipboard('tag7624');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag910" onclick="CopyToClipboard('tag910');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17583" onclick="CopyToClipboard('tag17583');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag22290" onclick="CopyToClipboard('tag22290');return false;" class="tag-decoration">v3</div><div id="tag27693" onclick="CopyToClipboard('tag27693');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag32579" onclick="CopyToClipboard('tag32579');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag28119" onclick="CopyToClipboard('tag28119');return false;" class="tag-decoration">v3-v3</div><div id="tag132" onclick="CopyToClipboard('tag132');return false;" class="tag-decoration">v3-v3.6</div><div id="tag23269" onclick="CopyToClipboard('tag23269');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag19322" onclick="CopyToClipboard('tag19322');return false;" class="tag-decoration">v3-develop</div><div id="tag14757" onclick="CopyToClipboard('tag14757');return false;" class="tag-decoration">v3-develop-b6740ec</div><div id="tag383" onclick="CopyToClipboard('tag383');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1725</div><div id="tag8416" onclick="CopyToClipboard('tag8416');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25861" onclick="CopyToClipboard('tag25861');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag16699" onclick="CopyToClipboard('tag16699');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b6740ecb3f08a5d097f940328c7154694c1479b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960760987" target="_blank">2026-09-24 05:37:19</a></td></tr>
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
