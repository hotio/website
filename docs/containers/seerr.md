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
<tr><td><div id="tag2752" onclick="CopyToClipboard('tag2752');return false;" class="tag-decoration">nightly</div><div id="tag6581" onclick="CopyToClipboard('tag6581');return false;" class="tag-decoration">nightly-8422472</div><div id="tag20264" onclick="CopyToClipboard('tag20264');return false;" class="tag-decoration">nightly-886adac27597b45cd901099cd02a0b46d9d3cb7f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/8422472ac4aa5c04a6c94766f1c8365d2f2bdbc9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42133480433" target="_blank">2026-11-05 23:59:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10882" onclick="CopyToClipboard('tag10882');return false;" class="tag-decoration">release</div><div id="tag1014" onclick="CopyToClipboard('tag1014');return false;" class="tag-decoration">release-582fcb1</div><div id="tag16824" onclick="CopyToClipboard('tag16824');return false;" class="tag-decoration">release-3.5.1</div><div id="tag13209" onclick="CopyToClipboard('tag13209');return false;" class="tag-decoration">release-v3</div><div id="tag14709" onclick="CopyToClipboard('tag14709');return false;" class="tag-decoration">release-v3.5</div><div id="tag3473" onclick="CopyToClipboard('tag3473');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/582fcb115f50656e05262c57c3f0aca6d22760a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42320133641" target="_blank">2026-11-07 00:45:12</a></td></tr>
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
