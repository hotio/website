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
<tr><td><div id="tag31214" onclick="CopyToClipboard('tag31214');return false;" class="tag-decoration">nightly</div><div id="tag30125" onclick="CopyToClipboard('tag30125');return false;" class="tag-decoration">nightly-b788f58</div><div id="tag15626" onclick="CopyToClipboard('tag15626');return false;" class="tag-decoration">nightly-07c5c40d585d938c86a9f8ed8bd15c24044ffb7e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b788f5844d4bc06493fad7004f7cda5c7043469a" target="_blank">Version update: e8791f9c7b188b50fac8a83ddd18ad1787a8248a => 07c5c40d585d938c86a9f8ed8bd15c24044ffb7e</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22488311265" target="_blank">2026-02-27 13:33:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27342" onclick="CopyToClipboard('tag27342');return false;" class="tag-decoration">release</div><div id="tag18703" onclick="CopyToClipboard('tag18703');return false;" class="tag-decoration">release-48d37cb</div><div id="tag25342" onclick="CopyToClipboard('tag25342');return false;" class="tag-decoration">release-4.5.5</div><div id="tag24402" onclick="CopyToClipboard('tag24402');return false;" class="tag-decoration">release-v4</div><div id="tag31577" onclick="CopyToClipboard('tag31577');return false;" class="tag-decoration">release-v4.5</div><div id="tag2238" onclick="CopyToClipboard('tag2238');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag30256" onclick="CopyToClipboard('tag30256');return false;" class="tag-decoration">testing</div><div id="tag10825" onclick="CopyToClipboard('tag10825');return false;" class="tag-decoration">testing-8bcc047</div><div id="tag6533" onclick="CopyToClipboard('tag6533');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/8bcc047bad6c958f5657fbfb81e279bf20391032" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292137252" target="_blank">2026-02-23 03:44:20</a></td></tr>
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
