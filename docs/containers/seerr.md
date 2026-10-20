---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22140" onclick="CopyToClipboard('tag22140');return false;" class="tag-decoration">nightly</div><div id="tag9309" onclick="CopyToClipboard('tag9309');return false;" class="tag-decoration">nightly-4161e24</div><div id="tag27685" onclick="CopyToClipboard('tag27685');return false;" class="tag-decoration">nightly-84ed3c1c0ecf991e2a34140c55a0981c304d0bf9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/4161e2418ae5c205625893cee413a16a9e6b522e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39480340584" target="_blank">2026-10-20 19:04:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10527" onclick="CopyToClipboard('tag10527');return false;" class="tag-decoration">release</div><div id="tag31752" onclick="CopyToClipboard('tag31752');return false;" class="tag-decoration">release-b4d4fa8</div><div id="tag20790" onclick="CopyToClipboard('tag20790');return false;" class="tag-decoration">release-3.5.0</div><div id="tag19420" onclick="CopyToClipboard('tag19420');return false;" class="tag-decoration">release-v3</div><div id="tag19971" onclick="CopyToClipboard('tag19971');return false;" class="tag-decoration">release-v3.5</div><div id="tag12945" onclick="CopyToClipboard('tag12945');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b4d4fa85baec9d06ce44705db0338e6af8493382" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39480351245" target="_blank">2026-10-20 19:04:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
