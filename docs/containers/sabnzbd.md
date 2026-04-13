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
<tr><td><div id="tag10866" onclick="CopyToClipboard('tag10866');return false;" class="tag-decoration">nightly</div><div id="tag17154" onclick="CopyToClipboard('tag17154');return false;" class="tag-decoration">nightly-68eb008</div><div id="tag31277" onclick="CopyToClipboard('tag31277');return false;" class="tag-decoration">nightly-011794142251a9669c40b21a02e855f82d1ae043</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/68eb008dd75d8eeb2898822e8c97f9684134844a" target="_blank">Version update: 004e4e68ebe2946b443891b7e73a0d1d49939bfa => 011794142251a9669c40b21a02e855f82d1ae043</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24325744229" target="_blank">2026-04-13 04:31:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21774" onclick="CopyToClipboard('tag21774');return false;" class="tag-decoration">release</div><div id="tag32541" onclick="CopyToClipboard('tag32541');return false;" class="tag-decoration">release-48d37cb</div><div id="tag28625" onclick="CopyToClipboard('tag28625');return false;" class="tag-decoration">release-4.5.5</div><div id="tag20043" onclick="CopyToClipboard('tag20043');return false;" class="tag-decoration">release-v4</div><div id="tag20580" onclick="CopyToClipboard('tag20580');return false;" class="tag-decoration">release-v4.5</div><div id="tag17983" onclick="CopyToClipboard('tag17983');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag4484" onclick="CopyToClipboard('tag4484');return false;" class="tag-decoration">testing</div><div id="tag16493" onclick="CopyToClipboard('tag16493');return false;" class="tag-decoration">testing-92b527c</div><div id="tag21470" onclick="CopyToClipboard('tag21470');return false;" class="tag-decoration">testing-5.0.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/92b527c17cf6624ae5247d16b7769e63428f82ef" target="_blank">Version update: 5.0.0RC2 => 5.0.0RC3</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24356435204" target="_blank">2026-04-13 17:09:18</a></td></tr>
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
