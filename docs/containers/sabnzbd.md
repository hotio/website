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
<tr><td><div id="tag14373" onclick="CopyToClipboard('tag14373');return false;" class="tag-decoration">nightly</div><div id="tag3311" onclick="CopyToClipboard('tag3311');return false;" class="tag-decoration">nightly-64e14ae</div><div id="tag31470" onclick="CopyToClipboard('tag31470');return false;" class="tag-decoration">nightly-ab879cc7d0f59c7d5fec0eee9223c5e3b0289b28</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/64e14ae0118b7a25f931abf9af19470d0c6d212c" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29526748235" target="_blank">2026-07-16 19:07:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21268" onclick="CopyToClipboard('tag21268');return false;" class="tag-decoration">release</div><div id="tag21092" onclick="CopyToClipboard('tag21092');return false;" class="tag-decoration">release-a654991</div><div id="tag28335" onclick="CopyToClipboard('tag28335');return false;" class="tag-decoration">release-5.0.4</div><div id="tag25947" onclick="CopyToClipboard('tag25947');return false;" class="tag-decoration">release-v5</div><div id="tag23309" onclick="CopyToClipboard('tag23309');return false;" class="tag-decoration">release-v5.0</div><div id="tag25993" onclick="CopyToClipboard('tag25993');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag32155" onclick="CopyToClipboard('tag32155');return false;" class="tag-decoration">testing</div><div id="tag27272" onclick="CopyToClipboard('tag27272');return false;" class="tag-decoration">testing-d6b7699</div><div id="tag30465" onclick="CopyToClipboard('tag30465');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d6b76999c0ec4a482c28e4c136a1a5b1878ef566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364655178" target="_blank">2026-07-14 20:10:08</a></td></tr>
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
