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
<tr><td><div id="tag15665" onclick="CopyToClipboard('tag15665');return false;" class="tag-decoration">nightly</div><div id="tag12573" onclick="CopyToClipboard('tag12573');return false;" class="tag-decoration">nightly-b39dba6</div><div id="tag22911" onclick="CopyToClipboard('tag22911');return false;" class="tag-decoration">nightly-5b7a89ffb8a9287046e2fb02a803861f2db83369</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b39dba6a8e7cba17e0433df24d162a92f4ad6ae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29482512651" target="_blank">2026-07-16 08:10:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10623" onclick="CopyToClipboard('tag10623');return false;" class="tag-decoration">release</div><div id="tag5319" onclick="CopyToClipboard('tag5319');return false;" class="tag-decoration">release-a654991</div><div id="tag28702" onclick="CopyToClipboard('tag28702');return false;" class="tag-decoration">release-5.0.4</div><div id="tag3288" onclick="CopyToClipboard('tag3288');return false;" class="tag-decoration">release-v5</div><div id="tag26348" onclick="CopyToClipboard('tag26348');return false;" class="tag-decoration">release-v5.0</div><div id="tag3808" onclick="CopyToClipboard('tag3808');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag19759" onclick="CopyToClipboard('tag19759');return false;" class="tag-decoration">testing</div><div id="tag10893" onclick="CopyToClipboard('tag10893');return false;" class="tag-decoration">testing-d6b7699</div><div id="tag26221" onclick="CopyToClipboard('tag26221');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d6b76999c0ec4a482c28e4c136a1a5b1878ef566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364655178" target="_blank">2026-07-14 20:10:08</a></td></tr>
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
