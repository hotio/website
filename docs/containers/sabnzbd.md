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
<tr><td><div id="tag17171" onclick="CopyToClipboard('tag17171');return false;" class="tag-decoration">nightly</div><div id="tag28470" onclick="CopyToClipboard('tag28470');return false;" class="tag-decoration">nightly-4e71f05</div><div id="tag24691" onclick="CopyToClipboard('tag24691');return false;" class="tag-decoration">nightly-43667a100131d0763d5d4142658e507f86dd11fd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4e71f056115d9b4d4086ca8887ec172fb5b61aad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35707995596" target="_blank">2026-09-22 09:01:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2456" onclick="CopyToClipboard('tag2456');return false;" class="tag-decoration">release</div><div id="tag25127" onclick="CopyToClipboard('tag25127');return false;" class="tag-decoration">release-f5f5b69</div><div id="tag4868" onclick="CopyToClipboard('tag4868');return false;" class="tag-decoration">release-5.1.3</div><div id="tag8505" onclick="CopyToClipboard('tag8505');return false;" class="tag-decoration">release-v5</div><div id="tag23501" onclick="CopyToClipboard('tag23501');return false;" class="tag-decoration">release-v5.1</div><div id="tag13290" onclick="CopyToClipboard('tag13290');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f5f5b691da6a0b48830ff7885f92b65f35ea3e2c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35371455032" target="_blank">2026-09-18 16:56:54</a></td></tr>
<tr><td><div id="tag23160" onclick="CopyToClipboard('tag23160');return false;" class="tag-decoration">testing</div><div id="tag16768" onclick="CopyToClipboard('tag16768');return false;" class="tag-decoration">testing-fb7d2fc</div><div id="tag16842" onclick="CopyToClipboard('tag16842');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag14055" onclick="CopyToClipboard('tag14055');return false;" class="tag-decoration">testing-v5</div><div id="tag25978" onclick="CopyToClipboard('tag25978');return false;" class="tag-decoration">testing-v5.1</div><div id="tag363" onclick="CopyToClipboard('tag363');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/fb7d2fcd918803df0c808daf406ef51e755845b6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35707999107" target="_blank">2026-09-22 09:01:10</a></td></tr>
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
