---
hide:
  - toc
title: hotio/seerr
status: new
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
<tr><td><div id="tag9043" onclick="CopyToClipboard('tag9043');return false;" class="tag-decoration">nightly</div><div id="tag9073" onclick="CopyToClipboard('tag9073');return false;" class="tag-decoration">nightly-b029b79</div><div id="tag7341" onclick="CopyToClipboard('tag7341');return false;" class="tag-decoration">nightly-df105b81e395453e5a7385294d4fd6aee810cb16</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b029b79b12f26c19d56f11af8da6eb1c999ebe91" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25956004321" target="_blank">2026-05-16 07:20:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32525" onclick="CopyToClipboard('tag32525');return false;" class="tag-decoration">release</div><div id="tag29159" onclick="CopyToClipboard('tag29159');return false;" class="tag-decoration">release-8d00072</div><div id="tag22824" onclick="CopyToClipboard('tag22824');return false;" class="tag-decoration">release-3.2.0</div><div id="tag3392" onclick="CopyToClipboard('tag3392');return false;" class="tag-decoration">release-v3</div><div id="tag31552" onclick="CopyToClipboard('tag31552');return false;" class="tag-decoration">release-v3.2</div><div id="tag15531" onclick="CopyToClipboard('tag15531');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8d0007215ebe053c3513d897e43fb0e52d186ad0" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25932607260" target="_blank">2026-05-15 17:45:36</a></td></tr>
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
