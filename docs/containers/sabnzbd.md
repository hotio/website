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
<tr><td><div id="tag10416" onclick="CopyToClipboard('tag10416');return false;" class="tag-decoration">nightly</div><div id="tag13778" onclick="CopyToClipboard('tag13778');return false;" class="tag-decoration">nightly-2be59b9</div><div id="tag20420" onclick="CopyToClipboard('tag20420');return false;" class="tag-decoration">nightly-aee1cd8e41853970f667a031ee19602df28f35c2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2be59b9e2614b5671e369746210cc6b906076c4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27415176260" target="_blank">2026-06-12 12:18:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18582" onclick="CopyToClipboard('tag18582');return false;" class="tag-decoration">release</div><div id="tag25458" onclick="CopyToClipboard('tag25458');return false;" class="tag-decoration">release-a0ab641</div><div id="tag4879" onclick="CopyToClipboard('tag4879');return false;" class="tag-decoration">release-5.0.4</div><div id="tag31720" onclick="CopyToClipboard('tag31720');return false;" class="tag-decoration">release-v5</div><div id="tag15770" onclick="CopyToClipboard('tag15770');return false;" class="tag-decoration">release-v5.0</div><div id="tag25000" onclick="CopyToClipboard('tag25000');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag13017" onclick="CopyToClipboard('tag13017');return false;" class="tag-decoration">testing</div><div id="tag13186" onclick="CopyToClipboard('tag13186');return false;" class="tag-decoration">testing-40b258e</div><div id="tag12840" onclick="CopyToClipboard('tag12840');return false;" class="tag-decoration">testing-5.0.4</div><div id="tag567" onclick="CopyToClipboard('tag567');return false;" class="tag-decoration">testing-v5</div><div id="tag4663" onclick="CopyToClipboard('tag4663');return false;" class="tag-decoration">testing-v5.0</div><div id="tag19496" onclick="CopyToClipboard('tag19496');return false;" class="tag-decoration">testing-v5.0.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40b258ed9792f66f6fbd60178369606253b3e84c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554352" target="_blank">2026-06-11 14:35:21</a></td></tr>
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
