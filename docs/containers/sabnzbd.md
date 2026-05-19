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
<tr><td><div id="tag8536" onclick="CopyToClipboard('tag8536');return false;" class="tag-decoration">nightly</div><div id="tag2855" onclick="CopyToClipboard('tag2855');return false;" class="tag-decoration">nightly-12ebaec</div><div id="tag6193" onclick="CopyToClipboard('tag6193');return false;" class="tag-decoration">nightly-a8751c5e77cea4753d139bd785eef05ad99d22f0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/12ebaecb0ee8fc7760c1fe5861bfff72daf45a90" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082334459" target="_blank">2026-05-19 07:16:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23483" onclick="CopyToClipboard('tag23483');return false;" class="tag-decoration">release</div><div id="tag19049" onclick="CopyToClipboard('tag19049');return false;" class="tag-decoration">release-f14120f</div><div id="tag10642" onclick="CopyToClipboard('tag10642');return false;" class="tag-decoration">release-5.0.3</div><div id="tag14749" onclick="CopyToClipboard('tag14749');return false;" class="tag-decoration">release-v5</div><div id="tag3857" onclick="CopyToClipboard('tag3857');return false;" class="tag-decoration">release-v5.0</div><div id="tag21060" onclick="CopyToClipboard('tag21060');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f14120f5b2a70ca59916b20ab54478aa4d1aecee" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082287675" target="_blank">2026-05-19 07:15:28</a></td></tr>
<tr><td><div id="tag6739" onclick="CopyToClipboard('tag6739');return false;" class="tag-decoration">testing</div><div id="tag17227" onclick="CopyToClipboard('tag17227');return false;" class="tag-decoration">testing-5cda10d</div><div id="tag5503" onclick="CopyToClipboard('tag5503');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag29136" onclick="CopyToClipboard('tag29136');return false;" class="tag-decoration">testing-v5</div><div id="tag30325" onclick="CopyToClipboard('tag30325');return false;" class="tag-decoration">testing-v5.0</div><div id="tag27255" onclick="CopyToClipboard('tag27255');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cda10d55ee8d2282773042ccf76b4e9f06b1a65" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082311366" target="_blank">2026-05-19 07:16:02</a></td></tr>
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
