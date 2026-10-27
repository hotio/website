---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28745" onclick="CopyToClipboard('tag28745');return false;" class="tag-decoration">nightly</div><div id="tag9383" onclick="CopyToClipboard('tag9383');return false;" class="tag-decoration">nightly-06ceaea</div><div id="tag25448" onclick="CopyToClipboard('tag25448');return false;" class="tag-decoration">nightly-1f5d8827f9940c85279e6b447e0e845e61b60229</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/06ceaea48cc45bb6d0a0b0a9c39c9a1b5c2d2473" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568023001" target="_blank">2026-10-27 19:19:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7416" onclick="CopyToClipboard('tag7416');return false;" class="tag-decoration">release</div><div id="tag2771" onclick="CopyToClipboard('tag2771');return false;" class="tag-decoration">release-1efe991</div><div id="tag2623" onclick="CopyToClipboard('tag2623');return false;" class="tag-decoration">release-5.1.3</div><div id="tag16568" onclick="CopyToClipboard('tag16568');return false;" class="tag-decoration">release-v5</div><div id="tag31705" onclick="CopyToClipboard('tag31705');return false;" class="tag-decoration">release-v5.1</div><div id="tag22674" onclick="CopyToClipboard('tag22674');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1efe9918f7ea28e4b9e1d2ce55a24307813b4009" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568029850" target="_blank">2026-10-27 19:19:10</a></td></tr>
<tr><td><div id="tag29644" onclick="CopyToClipboard('tag29644');return false;" class="tag-decoration">testing</div><div id="tag7948" onclick="CopyToClipboard('tag7948');return false;" class="tag-decoration">testing-b267447</div><div id="tag24655" onclick="CopyToClipboard('tag24655');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b2674478b8c45212dc6aed5aef04053d20184607" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568022947" target="_blank">2026-10-27 19:19:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
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
