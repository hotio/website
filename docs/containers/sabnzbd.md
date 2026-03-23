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
<tr><td><div id="tag32290" onclick="CopyToClipboard('tag32290');return false;" class="tag-decoration">nightly</div><div id="tag31782" onclick="CopyToClipboard('tag31782');return false;" class="tag-decoration">nightly-10dd1b5</div><div id="tag5296" onclick="CopyToClipboard('tag5296');return false;" class="tag-decoration">nightly-9b2c9621a9106b2577db7d9f685417dee1dfc989</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/10dd1b597b4ce67eb6e2348e16c1364ff08d6203" target="_blank">Version update: a1eb3284f25d4009ad80253b1d61ff702776abf9 => 9b2c9621a9106b2577db7d9f685417dee1dfc989</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23434941760" target="_blank">2026-03-23 11:25:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24660" onclick="CopyToClipboard('tag24660');return false;" class="tag-decoration">release</div><div id="tag29833" onclick="CopyToClipboard('tag29833');return false;" class="tag-decoration">release-48d37cb</div><div id="tag27026" onclick="CopyToClipboard('tag27026');return false;" class="tag-decoration">release-4.5.5</div><div id="tag1595" onclick="CopyToClipboard('tag1595');return false;" class="tag-decoration">release-v4</div><div id="tag4460" onclick="CopyToClipboard('tag4460');return false;" class="tag-decoration">release-v4.5</div><div id="tag23127" onclick="CopyToClipboard('tag23127');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag11318" onclick="CopyToClipboard('tag11318');return false;" class="tag-decoration">testing</div><div id="tag2129" onclick="CopyToClipboard('tag2129');return false;" class="tag-decoration">testing-c51e2bd</div><div id="tag25591" onclick="CopyToClipboard('tag25591');return false;" class="tag-decoration">testing-5.0.0Beta4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c51e2bdc07b3554e9cb138a1c1dd4a6e02d64a03" target="_blank">Version update: 5.0.0Beta3 => 5.0.0Beta4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23366053820" target="_blank">2026-03-20 23:03:47</a></td></tr>
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
