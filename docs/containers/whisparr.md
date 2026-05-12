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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22061" onclick="CopyToClipboard('tag22061');return false;" class="tag-decoration">v2</div><div id="tag18202" onclick="CopyToClipboard('tag18202');return false;" class="tag-decoration">v2-f568107</div><div id="tag23972" onclick="CopyToClipboard('tag23972');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2243" onclick="CopyToClipboard('tag2243');return false;" class="tag-decoration">v2-v2</div><div id="tag10498" onclick="CopyToClipboard('tag10498');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19927" onclick="CopyToClipboard('tag19927');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag10848" onclick="CopyToClipboard('tag10848');return false;" class="tag-decoration">v2-develop</div><div id="tag28356" onclick="CopyToClipboard('tag28356');return false;" class="tag-decoration">v2-develop-96c3c5b</div><div id="tag11303" onclick="CopyToClipboard('tag11303');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag21458" onclick="CopyToClipboard('tag21458');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18570" onclick="CopyToClipboard('tag18570');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11453" onclick="CopyToClipboard('tag11453');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/96c3c5b88907831087ce3d3c478d1584b625b720" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715059618" target="_blank">2026-05-12 05:19:55</a></td></tr>
<tr><td><div id="tag21371" onclick="CopyToClipboard('tag21371');return false;" class="tag-decoration">v3</div><div id="tag13270" onclick="CopyToClipboard('tag13270');return false;" class="tag-decoration">v3-5ea215c</div><div id="tag26727" onclick="CopyToClipboard('tag26727');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag16879" onclick="CopyToClipboard('tag16879');return false;" class="tag-decoration">v3-v3</div><div id="tag17512" onclick="CopyToClipboard('tag17512');return false;" class="tag-decoration">v3-v3.3</div><div id="tag7475" onclick="CopyToClipboard('tag7475');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5ea215c2a03d2332fa3a6a08b1fe5d46c3d10389" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715068861" target="_blank">2026-05-12 05:20:07</a></td></tr>
<tr><td><div id="tag29112" onclick="CopyToClipboard('tag29112');return false;" class="tag-decoration">v3-develop</div><div id="tag16447" onclick="CopyToClipboard('tag16447');return false;" class="tag-decoration">v3-develop-74323f5</div><div id="tag1823" onclick="CopyToClipboard('tag1823');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag28338" onclick="CopyToClipboard('tag28338');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24189" onclick="CopyToClipboard('tag24189');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag9317" onclick="CopyToClipboard('tag9317');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/74323f5706ccfc9ae6ff2f109e9ad4852813dbbe" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715064250" target="_blank">2026-05-12 05:20:02</a></td></tr>
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
