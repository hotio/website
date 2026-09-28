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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31091" onclick="CopyToClipboard('tag31091');return false;" class="tag-decoration">v2</div><div id="tag22963" onclick="CopyToClipboard('tag22963');return false;" class="tag-decoration">v2-b17234c</div><div id="tag7893" onclick="CopyToClipboard('tag7893');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15960" onclick="CopyToClipboard('tag15960');return false;" class="tag-decoration">v2-v2</div><div id="tag28349" onclick="CopyToClipboard('tag28349');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5938" onclick="CopyToClipboard('tag5938');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag8456" onclick="CopyToClipboard('tag8456');return false;" class="tag-decoration">v2-develop</div><div id="tag5706" onclick="CopyToClipboard('tag5706');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag14809" onclick="CopyToClipboard('tag14809');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag9607" onclick="CopyToClipboard('tag9607');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20440" onclick="CopyToClipboard('tag20440');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2936" onclick="CopyToClipboard('tag2936');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag8101" onclick="CopyToClipboard('tag8101');return false;" class="tag-decoration">v3</div><div id="tag24936" onclick="CopyToClipboard('tag24936');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag5233" onclick="CopyToClipboard('tag5233');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag5457" onclick="CopyToClipboard('tag5457');return false;" class="tag-decoration">v3-v3</div><div id="tag4494" onclick="CopyToClipboard('tag4494');return false;" class="tag-decoration">v3-v3.6</div><div id="tag9188" onclick="CopyToClipboard('tag9188');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag14269" onclick="CopyToClipboard('tag14269');return false;" class="tag-decoration">v3-develop</div><div id="tag24145" onclick="CopyToClipboard('tag24145');return false;" class="tag-decoration">v3-develop-b02c688</div><div id="tag30471" onclick="CopyToClipboard('tag30471');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag4285" onclick="CopyToClipboard('tag4285');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15221" onclick="CopyToClipboard('tag15221');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag11850" onclick="CopyToClipboard('tag11850');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b02c6884487a4c488cd0a0536272959fc882a967" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36384630491" target="_blank">2026-09-28 06:03:51</a></td></tr>
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
