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
<tr><td><div id="tag24239" onclick="CopyToClipboard('tag24239');return false;" class="tag-decoration">nightly</div><div id="tag23856" onclick="CopyToClipboard('tag23856');return false;" class="tag-decoration">nightly-72b9e83</div><div id="tag9595" onclick="CopyToClipboard('tag9595');return false;" class="tag-decoration">nightly-1fcada54f91d50bccc590449e0c78a611f024b58</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/72b9e836a6f05b0d53aad2d575459d6e06e5a716" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31493965182" target="_blank">2026-08-11 13:00:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10122" onclick="CopyToClipboard('tag10122');return false;" class="tag-decoration">release</div><div id="tag10963" onclick="CopyToClipboard('tag10963');return false;" class="tag-decoration">release-2916138</div><div id="tag24820" onclick="CopyToClipboard('tag24820');return false;" class="tag-decoration">release-5.1.0</div><div id="tag19408" onclick="CopyToClipboard('tag19408');return false;" class="tag-decoration">release-v5</div><div id="tag2673" onclick="CopyToClipboard('tag2673');return false;" class="tag-decoration">release-v5.1</div><div id="tag2589" onclick="CopyToClipboard('tag2589');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2916138071676b34ce6eca981b052a531e8495c0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390982584" target="_blank">2026-08-10 13:03:40</a></td></tr>
<tr><td><div id="tag27345" onclick="CopyToClipboard('tag27345');return false;" class="tag-decoration">testing</div><div id="tag7483" onclick="CopyToClipboard('tag7483');return false;" class="tag-decoration">testing-548e80e</div><div id="tag25050" onclick="CopyToClipboard('tag25050');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag18576" onclick="CopyToClipboard('tag18576');return false;" class="tag-decoration">testing-v5</div><div id="tag23412" onclick="CopyToClipboard('tag23412');return false;" class="tag-decoration">testing-v5.1</div><div id="tag10252" onclick="CopyToClipboard('tag10252');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/548e80e4667e44fbaf1cbc46cbad2e8a8a29718f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390988136" target="_blank">2026-08-10 13:03:45</a></td></tr>
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
