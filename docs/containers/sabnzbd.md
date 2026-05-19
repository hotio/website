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
<tr><td><div id="tag29184" onclick="CopyToClipboard('tag29184');return false;" class="tag-decoration">nightly</div><div id="tag10173" onclick="CopyToClipboard('tag10173');return false;" class="tag-decoration">nightly-03aed43</div><div id="tag28396" onclick="CopyToClipboard('tag28396');return false;" class="tag-decoration">nightly-a8751c5e77cea4753d139bd785eef05ad99d22f0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/03aed4352361b9fb5f8e17c746712cb4860cf915" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26046051900" target="_blank">2026-05-18 16:22:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27933" onclick="CopyToClipboard('tag27933');return false;" class="tag-decoration">release</div><div id="tag27633" onclick="CopyToClipboard('tag27633');return false;" class="tag-decoration">release-f14120f</div><div id="tag11327" onclick="CopyToClipboard('tag11327');return false;" class="tag-decoration">release-5.0.3</div><div id="tag16420" onclick="CopyToClipboard('tag16420');return false;" class="tag-decoration">release-v5</div><div id="tag13545" onclick="CopyToClipboard('tag13545');return false;" class="tag-decoration">release-v5.0</div><div id="tag29119" onclick="CopyToClipboard('tag29119');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f14120f5b2a70ca59916b20ab54478aa4d1aecee" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082287675" target="_blank">2026-05-19 07:15:28</a></td></tr>
<tr><td><div id="tag5966" onclick="CopyToClipboard('tag5966');return false;" class="tag-decoration">testing</div><div id="tag5689" onclick="CopyToClipboard('tag5689');return false;" class="tag-decoration">testing-2b94a3d</div><div id="tag13499" onclick="CopyToClipboard('tag13499');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag1306" onclick="CopyToClipboard('tag1306');return false;" class="tag-decoration">testing-v5</div><div id="tag21139" onclick="CopyToClipboard('tag21139');return false;" class="tag-decoration">testing-v5.0</div><div id="tag19563" onclick="CopyToClipboard('tag19563');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b94a3d3acb027ec09d6d8e0b707e9568705b72e" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25986626347" target="_blank">2026-05-17 09:04:50</a></td></tr>
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
