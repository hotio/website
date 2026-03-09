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
<tr><td><div id="tag23909" onclick="CopyToClipboard('tag23909');return false;" class="tag-decoration">nightly</div><div id="tag16289" onclick="CopyToClipboard('tag16289');return false;" class="tag-decoration">nightly-aa14f8d</div><div id="tag29240" onclick="CopyToClipboard('tag29240');return false;" class="tag-decoration">nightly-81e78814c8e99f9688aac448d5222849b7b92ede</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/aa14f8dc5a83d3c292d5c247f1b9a0cbcdd67bf9" target="_blank">Version update: eab219f88a32d3aa146477fb0e02dd9751d6f58a => 81e78814c8e99f9688aac448d5222849b7b92ede</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22850490485" target="_blank">2026-03-09 11:05:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26474" onclick="CopyToClipboard('tag26474');return false;" class="tag-decoration">release</div><div id="tag19875" onclick="CopyToClipboard('tag19875');return false;" class="tag-decoration">release-48d37cb</div><div id="tag14327" onclick="CopyToClipboard('tag14327');return false;" class="tag-decoration">release-4.5.5</div><div id="tag5600" onclick="CopyToClipboard('tag5600');return false;" class="tag-decoration">release-v4</div><div id="tag31490" onclick="CopyToClipboard('tag31490');return false;" class="tag-decoration">release-v4.5</div><div id="tag6261" onclick="CopyToClipboard('tag6261');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag12639" onclick="CopyToClipboard('tag12639');return false;" class="tag-decoration">testing</div><div id="tag25054" onclick="CopyToClipboard('tag25054');return false;" class="tag-decoration">testing-ed3f736</div><div id="tag11408" onclick="CopyToClipboard('tag11408');return false;" class="tag-decoration">testing-5.0.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ed3f736adb5c08b6b0fc986b06d466d3d4d41601" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta2</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22490144729" target="_blank">2026-02-27 14:27:09</a></td></tr>
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
