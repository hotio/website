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
<tr><td><div id="tag32500" onclick="CopyToClipboard('tag32500');return false;" class="tag-decoration">nightly</div><div id="tag14975" onclick="CopyToClipboard('tag14975');return false;" class="tag-decoration">nightly-7993afc</div><div id="tag17250" onclick="CopyToClipboard('tag17250');return false;" class="tag-decoration">nightly-6bb402a651a4240f12fc8e45ff49d09b9f2d18fa</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/7993afc6039b55c8ff0dce9ec0d5d811d931ba5d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25945429332" target="_blank">2026-05-15 23:00:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10312" onclick="CopyToClipboard('tag10312');return false;" class="tag-decoration">release</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">release-8d00072</div><div id="tag5773" onclick="CopyToClipboard('tag5773');return false;" class="tag-decoration">release-3.2.0</div><div id="tag26363" onclick="CopyToClipboard('tag26363');return false;" class="tag-decoration">release-v3</div><div id="tag31650" onclick="CopyToClipboard('tag31650');return false;" class="tag-decoration">release-v3.2</div><div id="tag8831" onclick="CopyToClipboard('tag8831');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8d0007215ebe053c3513d897e43fb0e52d186ad0" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25932607260" target="_blank">2026-05-15 17:45:36</a></td></tr>
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
