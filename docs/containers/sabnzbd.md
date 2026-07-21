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
<tr><td><div id="tag11355" onclick="CopyToClipboard('tag11355');return false;" class="tag-decoration">nightly</div><div id="tag3901" onclick="CopyToClipboard('tag3901');return false;" class="tag-decoration">nightly-7ca5a48</div><div id="tag30810" onclick="CopyToClipboard('tag30810');return false;" class="tag-decoration">nightly-91c228353bd343d8c1ddc10d79917e95f48c1b88</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7ca5a48e720ef03d4348decf3c13c20bac7533bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29835935952" target="_blank">2026-07-21 13:45:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12824" onclick="CopyToClipboard('tag12824');return false;" class="tag-decoration">release</div><div id="tag8291" onclick="CopyToClipboard('tag8291');return false;" class="tag-decoration">release-978af83</div><div id="tag21359" onclick="CopyToClipboard('tag21359');return false;" class="tag-decoration">release-5.0.4</div><div id="tag8741" onclick="CopyToClipboard('tag8741');return false;" class="tag-decoration">release-v5</div><div id="tag1483" onclick="CopyToClipboard('tag1483');return false;" class="tag-decoration">release-v5.0</div><div id="tag14360" onclick="CopyToClipboard('tag14360');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/978af833492b92a953e44626fc2254899644e902" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681376820" target="_blank">2026-07-19 09:19:40</a></td></tr>
<tr><td><div id="tag24336" onclick="CopyToClipboard('tag24336');return false;" class="tag-decoration">testing</div><div id="tag8515" onclick="CopyToClipboard('tag8515');return false;" class="tag-decoration">testing-e30e9cd</div><div id="tag2862" onclick="CopyToClipboard('tag2862');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e30e9cda9fd8faac03fa5d97373678faf97e191c" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681380250" target="_blank">2026-07-19 09:19:48</a></td></tr>
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
