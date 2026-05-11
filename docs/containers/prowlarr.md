---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag5968" onclick="CopyToClipboard('tag5968');return false;" class="tag-decoration">nightly</div><div id="tag13774" onclick="CopyToClipboard('tag13774');return false;" class="tag-decoration">nightly-8eeecab</div><div id="tag17454" onclick="CopyToClipboard('tag17454');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/8eeecabb625662ca41533f7055e3da09d87d3091" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25701848401" target="_blank">2026-05-11 22:47:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30087" onclick="CopyToClipboard('tag30087');return false;" class="tag-decoration">release</div><div id="tag11686" onclick="CopyToClipboard('tag11686');return false;" class="tag-decoration">release-419e69b</div><div id="tag29152" onclick="CopyToClipboard('tag29152');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/419e69b0fcab4dd1eeb2d2cfce0616e1ef891ba2" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25700524883" target="_blank">2026-05-11 22:15:56</a></td></tr>
<tr><td><div id="tag4806" onclick="CopyToClipboard('tag4806');return false;" class="tag-decoration">testing</div><div id="tag2007" onclick="CopyToClipboard('tag2007');return false;" class="tag-decoration">testing-b2840af</div><div id="tag17113" onclick="CopyToClipboard('tag17113');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/b2840af3d2fcba7e9c2f7ea38267ec852787bc36" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25700528373" target="_blank">2026-05-11 22:16:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
