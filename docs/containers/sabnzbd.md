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
<tr><td><div id="tag29737" onclick="CopyToClipboard('tag29737');return false;" class="tag-decoration">nightly</div><div id="tag5369" onclick="CopyToClipboard('tag5369');return false;" class="tag-decoration">nightly-4102f12</div><div id="tag29232" onclick="CopyToClipboard('tag29232');return false;" class="tag-decoration">nightly-562f3088442a1b32d6519cfa5f68f0fae75ab418</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4102f12a17cf68db10c619a0dac1b448e2005959" target="_blank">Version update: a5a182468d011447bdece3a86f1212bd1bfd0341 => 562f3088442a1b32d6519cfa5f68f0fae75ab418</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22996092752" target="_blank">2026-03-12 09:52:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9187" onclick="CopyToClipboard('tag9187');return false;" class="tag-decoration">release</div><div id="tag28550" onclick="CopyToClipboard('tag28550');return false;" class="tag-decoration">release-48d37cb</div><div id="tag24979" onclick="CopyToClipboard('tag24979');return false;" class="tag-decoration">release-4.5.5</div><div id="tag5653" onclick="CopyToClipboard('tag5653');return false;" class="tag-decoration">release-v4</div><div id="tag10358" onclick="CopyToClipboard('tag10358');return false;" class="tag-decoration">release-v4.5</div><div id="tag1460" onclick="CopyToClipboard('tag1460');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag21457" onclick="CopyToClipboard('tag21457');return false;" class="tag-decoration">testing</div><div id="tag15869" onclick="CopyToClipboard('tag15869');return false;" class="tag-decoration">testing-ed3f736</div><div id="tag20450" onclick="CopyToClipboard('tag20450');return false;" class="tag-decoration">testing-5.0.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ed3f736adb5c08b6b0fc986b06d466d3d4d41601" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta2</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22490144729" target="_blank">2026-02-27 14:27:09</a></td></tr>
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
