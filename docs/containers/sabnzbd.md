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
<tr><td><div id="tag31328" onclick="CopyToClipboard('tag31328');return false;" class="tag-decoration">nightly</div><div id="tag5101" onclick="CopyToClipboard('tag5101');return false;" class="tag-decoration">nightly-2c6e511</div><div id="tag28387" onclick="CopyToClipboard('tag28387');return false;" class="tag-decoration">nightly-727f5aeb194b45b663f1d99a2233e9857a2a8913</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c6e5116e255e1b473b1593b42836cc7fb6de82b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35283219938" target="_blank">2026-09-17 22:40:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15320" onclick="CopyToClipboard('tag15320');return false;" class="tag-decoration">release</div><div id="tag18637" onclick="CopyToClipboard('tag18637');return false;" class="tag-decoration">release-4ddb3c4</div><div id="tag26348" onclick="CopyToClipboard('tag26348');return false;" class="tag-decoration">release-5.1.3</div><div id="tag1506" onclick="CopyToClipboard('tag1506');return false;" class="tag-decoration">release-v5</div><div id="tag26408" onclick="CopyToClipboard('tag26408');return false;" class="tag-decoration">release-v5.1</div><div id="tag25840" onclick="CopyToClipboard('tag25840');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ddb3c4fda361856ab55e9395cac018dca1110a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265594397" target="_blank">2026-09-17 19:33:28</a></td></tr>
<tr><td><div id="tag20751" onclick="CopyToClipboard('tag20751');return false;" class="tag-decoration">testing</div><div id="tag29978" onclick="CopyToClipboard('tag29978');return false;" class="tag-decoration">testing-5df8c80</div><div id="tag17839" onclick="CopyToClipboard('tag17839');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag6502" onclick="CopyToClipboard('tag6502');return false;" class="tag-decoration">testing-v5</div><div id="tag6027" onclick="CopyToClipboard('tag6027');return false;" class="tag-decoration">testing-v5.1</div><div id="tag4709" onclick="CopyToClipboard('tag4709');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5df8c809fde0597c0b673853a9c54044c1a909f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265606384" target="_blank">2026-09-17 19:33:35</a></td></tr>
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
