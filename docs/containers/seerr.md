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
<tr><td><div id="tag6429" onclick="CopyToClipboard('tag6429');return false;" class="tag-decoration">nightly</div><div id="tag838" onclick="CopyToClipboard('tag838');return false;" class="tag-decoration">nightly-469c6d2</div><div id="tag29687" onclick="CopyToClipboard('tag29687');return false;" class="tag-decoration">nightly-a4f5eaa21e30736648600e115ecc87e27a5f6666</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/469c6d202f831185f04699fe6ec48d06db48f194" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33854720118" target="_blank">2026-09-04 08:42:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14141" onclick="CopyToClipboard('tag14141');return false;" class="tag-decoration">release</div><div id="tag25071" onclick="CopyToClipboard('tag25071');return false;" class="tag-decoration">release-ed050d4</div><div id="tag23875" onclick="CopyToClipboard('tag23875');return false;" class="tag-decoration">release-3.4.1</div><div id="tag27843" onclick="CopyToClipboard('tag27843');return false;" class="tag-decoration">release-v3</div><div id="tag5657" onclick="CopyToClipboard('tag5657');return false;" class="tag-decoration">release-v3.4</div><div id="tag5403" onclick="CopyToClipboard('tag5403');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ed050d4a70bc7d9546251806a9d007116c87356f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33609764559" target="_blank">2026-09-02 08:38:07</a></td></tr>
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
