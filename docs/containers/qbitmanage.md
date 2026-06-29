---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6965" onclick="CopyToClipboard('tag6965');return false;" class="tag-decoration">nightly</div><div id="tag24620" onclick="CopyToClipboard('tag24620');return false;" class="tag-decoration">nightly-8001ccd</div><div id="tag7322" onclick="CopyToClipboard('tag7322');return false;" class="tag-decoration">nightly-6515eabef2d3401d72cb5d4d0b609fa4a33e2fc8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/8001ccd534928c28c67739dde4de4bf0c0a27ea2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28387612489" target="_blank">2026-06-29 16:35:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19664" onclick="CopyToClipboard('tag19664');return false;" class="tag-decoration">release</div><div id="tag32303" onclick="CopyToClipboard('tag32303');return false;" class="tag-decoration">release-fe4598e</div><div id="tag9199" onclick="CopyToClipboard('tag9199');return false;" class="tag-decoration">release-4.9.1</div><div id="tag25206" onclick="CopyToClipboard('tag25206');return false;" class="tag-decoration">release-v4</div><div id="tag22680" onclick="CopyToClipboard('tag22680');return false;" class="tag-decoration">release-v4.9</div><div id="tag11173" onclick="CopyToClipboard('tag11173');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fe4598e353073372ce2f91b501828f5649348cfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28331113300" target="_blank">2026-06-28 18:01:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
