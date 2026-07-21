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
<tr><td><div id="tag22281" onclick="CopyToClipboard('tag22281');return false;" class="tag-decoration">nightly</div><div id="tag11048" onclick="CopyToClipboard('tag11048');return false;" class="tag-decoration">nightly-6495bd7</div><div id="tag29075" onclick="CopyToClipboard('tag29075');return false;" class="tag-decoration">nightly-bf5323faf4feb15ecfeafeef33131c258e7f0be9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/6495bd7323a23d5ec1c0add452ead847f29212a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29848579737" target="_blank">2026-07-21 16:26:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19084" onclick="CopyToClipboard('tag19084');return false;" class="tag-decoration">release</div><div id="tag20520" onclick="CopyToClipboard('tag20520');return false;" class="tag-decoration">release-141b813</div><div id="tag16318" onclick="CopyToClipboard('tag16318');return false;" class="tag-decoration">release-3.3.0</div><div id="tag16101" onclick="CopyToClipboard('tag16101');return false;" class="tag-decoration">release-v3</div><div id="tag23033" onclick="CopyToClipboard('tag23033');return false;" class="tag-decoration">release-v3.3</div><div id="tag12168" onclick="CopyToClipboard('tag12168');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/141b8133bc9ef2ae4a8c24eeaff795129d5e7330" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29681390598" target="_blank">2026-07-19 09:20:08</a></td></tr>
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
