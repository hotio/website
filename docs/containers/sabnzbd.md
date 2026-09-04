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
<tr><td><div id="tag26188" onclick="CopyToClipboard('tag26188');return false;" class="tag-decoration">nightly</div><div id="tag14931" onclick="CopyToClipboard('tag14931');return false;" class="tag-decoration">nightly-5e24bba</div><div id="tag13259" onclick="CopyToClipboard('tag13259');return false;" class="tag-decoration">nightly-6cbe811d105cd9ef9485bf6ce965ce52d785e621</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5e24bba439fe253f4d98af1d6ec5cc4de0b276bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33850908874" target="_blank">2026-09-04 07:54:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14956" onclick="CopyToClipboard('tag14956');return false;" class="tag-decoration">release</div><div id="tag1383" onclick="CopyToClipboard('tag1383');return false;" class="tag-decoration">release-046c8b0</div><div id="tag15210" onclick="CopyToClipboard('tag15210');return false;" class="tag-decoration">release-5.1.2</div><div id="tag9544" onclick="CopyToClipboard('tag9544');return false;" class="tag-decoration">release-v5</div><div id="tag15462" onclick="CopyToClipboard('tag15462');return false;" class="tag-decoration">release-v5.1</div><div id="tag25650" onclick="CopyToClipboard('tag25650');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag27433" onclick="CopyToClipboard('tag27433');return false;" class="tag-decoration">testing</div><div id="tag20916" onclick="CopyToClipboard('tag20916');return false;" class="tag-decoration">testing-e63a5b3</div><div id="tag1368" onclick="CopyToClipboard('tag1368');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag28107" onclick="CopyToClipboard('tag28107');return false;" class="tag-decoration">testing-v5</div><div id="tag19425" onclick="CopyToClipboard('tag19425');return false;" class="tag-decoration">testing-v5.1</div><div id="tag22756" onclick="CopyToClipboard('tag22756');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63a5b3c1a38a713c4187abd18a1b561ce60f241" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605398475" target="_blank">2026-09-02 07:48:03</a></td></tr>
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
