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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27837" onclick="CopyToClipboard('tag27837');return false;" class="tag-decoration">v2</div><div id="tag19762" onclick="CopyToClipboard('tag19762');return false;" class="tag-decoration">v2-f568107</div><div id="tag13182" onclick="CopyToClipboard('tag13182');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag23059" onclick="CopyToClipboard('tag23059');return false;" class="tag-decoration">v2-v2</div><div id="tag1770" onclick="CopyToClipboard('tag1770');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9213" onclick="CopyToClipboard('tag9213');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag5636" onclick="CopyToClipboard('tag5636');return false;" class="tag-decoration">v2-develop</div><div id="tag17828" onclick="CopyToClipboard('tag17828');return false;" class="tag-decoration">v2-develop-96c3c5b</div><div id="tag22576" onclick="CopyToClipboard('tag22576');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag24931" onclick="CopyToClipboard('tag24931');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29010" onclick="CopyToClipboard('tag29010');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag357" onclick="CopyToClipboard('tag357');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/96c3c5b88907831087ce3d3c478d1584b625b720" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715059618" target="_blank">2026-05-12 05:19:55</a></td></tr>
<tr><td><div id="tag15545" onclick="CopyToClipboard('tag15545');return false;" class="tag-decoration">v3</div><div id="tag11304" onclick="CopyToClipboard('tag11304');return false;" class="tag-decoration">v3-5ea215c</div><div id="tag6322" onclick="CopyToClipboard('tag6322');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag29343" onclick="CopyToClipboard('tag29343');return false;" class="tag-decoration">v3-v3</div><div id="tag1059" onclick="CopyToClipboard('tag1059');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31460" onclick="CopyToClipboard('tag31460');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5ea215c2a03d2332fa3a6a08b1fe5d46c3d10389" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715068861" target="_blank">2026-05-12 05:20:07</a></td></tr>
<tr><td><div id="tag23306" onclick="CopyToClipboard('tag23306');return false;" class="tag-decoration">v3-develop</div><div id="tag28936" onclick="CopyToClipboard('tag28936');return false;" class="tag-decoration">v3-develop-74323f5</div><div id="tag23743" onclick="CopyToClipboard('tag23743');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag26070" onclick="CopyToClipboard('tag26070');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11110" onclick="CopyToClipboard('tag11110');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag32120" onclick="CopyToClipboard('tag32120');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/74323f5706ccfc9ae6ff2f109e9ad4852813dbbe" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715064250" target="_blank">2026-05-12 05:20:02</a></td></tr>
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
