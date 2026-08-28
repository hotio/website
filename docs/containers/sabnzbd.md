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
<tr><td><div id="tag20561" onclick="CopyToClipboard('tag20561');return false;" class="tag-decoration">nightly</div><div id="tag26806" onclick="CopyToClipboard('tag26806');return false;" class="tag-decoration">nightly-1facd89</div><div id="tag3882" onclick="CopyToClipboard('tag3882');return false;" class="tag-decoration">nightly-b263c6cfe6fd97926f4b85fc6a4f77efec41f502</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1facd895db9d171d8835dfe627886780b7f74205" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33160203474" target="_blank">2026-08-28 09:38:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16192" onclick="CopyToClipboard('tag16192');return false;" class="tag-decoration">release</div><div id="tag11657" onclick="CopyToClipboard('tag11657');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag10648" onclick="CopyToClipboard('tag10648');return false;" class="tag-decoration">release-5.1.2</div><div id="tag17806" onclick="CopyToClipboard('tag17806');return false;" class="tag-decoration">release-v5</div><div id="tag23435" onclick="CopyToClipboard('tag23435');return false;" class="tag-decoration">release-v5.1</div><div id="tag21790" onclick="CopyToClipboard('tag21790');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag30062" onclick="CopyToClipboard('tag30062');return false;" class="tag-decoration">testing</div><div id="tag30358" onclick="CopyToClipboard('tag30358');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag32166" onclick="CopyToClipboard('tag32166');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag23522" onclick="CopyToClipboard('tag23522');return false;" class="tag-decoration">testing-v5</div><div id="tag23261" onclick="CopyToClipboard('tag23261');return false;" class="tag-decoration">testing-v5.1</div><div id="tag31807" onclick="CopyToClipboard('tag31807');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
