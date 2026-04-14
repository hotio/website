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
<tr><td><div id="tag17684" onclick="CopyToClipboard('tag17684');return false;" class="tag-decoration">nightly</div><div id="tag3673" onclick="CopyToClipboard('tag3673');return false;" class="tag-decoration">nightly-22ddd0f</div><div id="tag7973" onclick="CopyToClipboard('tag7973');return false;" class="tag-decoration">nightly-395f8dc4c5c8163e3c641576436eb4987d464fe0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/22ddd0fb42d04d9ff28d813f4c7280e55194426f" target="_blank">Version update: 375cc4955db091b101832ef1c5304e2755927ce9 => 395f8dc4c5c8163e3c641576436eb4987d464fe0</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24411636893" target="_blank">2026-04-14 16:48:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24626" onclick="CopyToClipboard('tag24626');return false;" class="tag-decoration">release</div><div id="tag24324" onclick="CopyToClipboard('tag24324');return false;" class="tag-decoration">release-48d37cb</div><div id="tag25945" onclick="CopyToClipboard('tag25945');return false;" class="tag-decoration">release-4.5.5</div><div id="tag29669" onclick="CopyToClipboard('tag29669');return false;" class="tag-decoration">release-v4</div><div id="tag12871" onclick="CopyToClipboard('tag12871');return false;" class="tag-decoration">release-v4.5</div><div id="tag24173" onclick="CopyToClipboard('tag24173');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag20172" onclick="CopyToClipboard('tag20172');return false;" class="tag-decoration">testing</div><div id="tag15809" onclick="CopyToClipboard('tag15809');return false;" class="tag-decoration">testing-92b527c</div><div id="tag6679" onclick="CopyToClipboard('tag6679');return false;" class="tag-decoration">testing-5.0.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/92b527c17cf6624ae5247d16b7769e63428f82ef" target="_blank">Version update: 5.0.0RC2 => 5.0.0RC3</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24356435204" target="_blank">2026-04-13 17:09:18</a></td></tr>
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
