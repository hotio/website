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
<tr><td><div id="tag27248" onclick="CopyToClipboard('tag27248');return false;" class="tag-decoration">nightly</div><div id="tag30321" onclick="CopyToClipboard('tag30321');return false;" class="tag-decoration">nightly-9d76645</div><div id="tag10824" onclick="CopyToClipboard('tag10824');return false;" class="tag-decoration">nightly-dbd71a37866d0864b409b3ff5c7e34553899e62f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9d766451fd52094b00dcf6ef0535f88c7ae4e4dd" target="_blank">Version update: 2d6880cff34f33e1bbd57f10673be873f3ca4589 => dbd71a37866d0864b409b3ff5c7e34553899e62f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24051253819" target="_blank">2026-04-06 21:06:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18030" onclick="CopyToClipboard('tag18030');return false;" class="tag-decoration">release</div><div id="tag23184" onclick="CopyToClipboard('tag23184');return false;" class="tag-decoration">release-48d37cb</div><div id="tag24758" onclick="CopyToClipboard('tag24758');return false;" class="tag-decoration">release-4.5.5</div><div id="tag26115" onclick="CopyToClipboard('tag26115');return false;" class="tag-decoration">release-v4</div><div id="tag24237" onclick="CopyToClipboard('tag24237');return false;" class="tag-decoration">release-v4.5</div><div id="tag22072" onclick="CopyToClipboard('tag22072');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag4974" onclick="CopyToClipboard('tag4974');return false;" class="tag-decoration">testing</div><div id="tag7373" onclick="CopyToClipboard('tag7373');return false;" class="tag-decoration">testing-a35c3b5</div><div id="tag1203" onclick="CopyToClipboard('tag1203');return false;" class="tag-decoration">testing-5.0.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a35c3b5fed3d44ef245b6ecf7d926160e83b96e5" target="_blank">Version update: 5.0.0Beta4 => 5.0.0RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23737339906" target="_blank">2026-03-30 09:19:41</a></td></tr>
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
