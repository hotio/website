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
<tr><td><div id="tag30352" onclick="CopyToClipboard('tag30352');return false;" class="tag-decoration">nightly</div><div id="tag29672" onclick="CopyToClipboard('tag29672');return false;" class="tag-decoration">nightly-a9cf9e7</div><div id="tag11195" onclick="CopyToClipboard('tag11195');return false;" class="tag-decoration">nightly-d9cd7a72b119873e5728b7abdd528acd12ef8c34</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a9cf9e73be4bccd7f20ab33cedeb0c5ac2de328e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28471895777" target="_blank">2026-06-30 19:55:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12299" onclick="CopyToClipboard('tag12299');return false;" class="tag-decoration">release</div><div id="tag27368" onclick="CopyToClipboard('tag27368');return false;" class="tag-decoration">release-2dd34ce</div><div id="tag32450" onclick="CopyToClipboard('tag32450');return false;" class="tag-decoration">release-5.0.4</div><div id="tag10598" onclick="CopyToClipboard('tag10598');return false;" class="tag-decoration">release-v5</div><div id="tag14593" onclick="CopyToClipboard('tag14593');return false;" class="tag-decoration">release-v5.0</div><div id="tag24730" onclick="CopyToClipboard('tag24730');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2dd34ceefd0fcb9d9b5ed494cfa6f23888f5d3cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443082106" target="_blank">2026-06-30 12:07:33</a></td></tr>
<tr><td><div id="tag18236" onclick="CopyToClipboard('tag18236');return false;" class="tag-decoration">testing</div><div id="tag31196" onclick="CopyToClipboard('tag31196');return false;" class="tag-decoration">testing-7eb9b92</div><div id="tag7410" onclick="CopyToClipboard('tag7410');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7eb9b928e35c5d4a37c3cdfd9802bb0cdd52b9e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443081600" target="_blank">2026-06-30 12:07:34</a></td></tr>
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
