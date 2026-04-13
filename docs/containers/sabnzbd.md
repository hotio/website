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
<tr><td><div id="tag10919" onclick="CopyToClipboard('tag10919');return false;" class="tag-decoration">nightly</div><div id="tag7153" onclick="CopyToClipboard('tag7153');return false;" class="tag-decoration">nightly-ccd85d3</div><div id="tag28984" onclick="CopyToClipboard('tag28984');return false;" class="tag-decoration">nightly-6ff8aa7cef41d0494c6f107c3a642751d8f48b69</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ccd85d3449bc89dbc6e1bf94037c2c30f0e1c794" target="_blank">Version update: 011794142251a9669c40b21a02e855f82d1ae043 => 6ff8aa7cef41d0494c6f107c3a642751d8f48b69</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24356433208" target="_blank">2026-04-13 17:09:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2916" onclick="CopyToClipboard('tag2916');return false;" class="tag-decoration">release</div><div id="tag8295" onclick="CopyToClipboard('tag8295');return false;" class="tag-decoration">release-48d37cb</div><div id="tag6861" onclick="CopyToClipboard('tag6861');return false;" class="tag-decoration">release-4.5.5</div><div id="tag32328" onclick="CopyToClipboard('tag32328');return false;" class="tag-decoration">release-v4</div><div id="tag20327" onclick="CopyToClipboard('tag20327');return false;" class="tag-decoration">release-v4.5</div><div id="tag21525" onclick="CopyToClipboard('tag21525');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag5169" onclick="CopyToClipboard('tag5169');return false;" class="tag-decoration">testing</div><div id="tag2998" onclick="CopyToClipboard('tag2998');return false;" class="tag-decoration">testing-92b527c</div><div id="tag28682" onclick="CopyToClipboard('tag28682');return false;" class="tag-decoration">testing-5.0.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/92b527c17cf6624ae5247d16b7769e63428f82ef" target="_blank">Version update: 5.0.0RC2 => 5.0.0RC3</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24356435204" target="_blank">2026-04-13 17:09:18</a></td></tr>
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
