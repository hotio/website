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
<tr><td><div id="tag4326" onclick="CopyToClipboard('tag4326');return false;" class="tag-decoration">nightly</div><div id="tag2910" onclick="CopyToClipboard('tag2910');return false;" class="tag-decoration">nightly-a47233a</div><div id="tag31069" onclick="CopyToClipboard('tag31069');return false;" class="tag-decoration">nightly-51ea306d9ff60c6e665e2aeedf73de57413d7e98</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a47233a03e274808d81907ef72861c4c37651784" target="_blank">Version update: 96975050b5c2526a4f81c8c06cb1ab9b18be6d17 => 51ea306d9ff60c6e665e2aeedf73de57413d7e98</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25173948379" target="_blank">2026-04-30 15:24:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6540" onclick="CopyToClipboard('tag6540');return false;" class="tag-decoration">release</div><div id="tag25184" onclick="CopyToClipboard('tag25184');return false;" class="tag-decoration">release-55c4a40</div><div id="tag30303" onclick="CopyToClipboard('tag30303');return false;" class="tag-decoration">release-5.0.0</div><div id="tag18496" onclick="CopyToClipboard('tag18496');return false;" class="tag-decoration">release-v5</div><div id="tag28895" onclick="CopyToClipboard('tag28895');return false;" class="tag-decoration">release-v5.0</div><div id="tag20794" onclick="CopyToClipboard('tag20794');return false;" class="tag-decoration">release-v5.0.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/55c4a40d8f28a5efca274291e1921efaee63d554" target="_blank">Version update: 4.5.5 => 5.0.0</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25209255533" target="_blank">2026-05-01 09:13:47</a></td></tr>
<tr><td><div id="tag16234" onclick="CopyToClipboard('tag16234');return false;" class="tag-decoration">testing</div><div id="tag32381" onclick="CopyToClipboard('tag32381');return false;" class="tag-decoration">testing-bf246bc</div><div id="tag2466" onclick="CopyToClipboard('tag2466');return false;" class="tag-decoration">testing-5.0.0</div><div id="tag18583" onclick="CopyToClipboard('tag18583');return false;" class="tag-decoration">testing-v5</div><div id="tag17023" onclick="CopyToClipboard('tag17023');return false;" class="tag-decoration">testing-v5.0</div><div id="tag11875" onclick="CopyToClipboard('tag11875');return false;" class="tag-decoration">testing-v5.0.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bf246bc912184fec4a1ffb6b95ccac52eb72ab10" target="_blank">Version update: 5.0.0RC3 => 5.0.0</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25209256521" target="_blank">2026-05-01 09:13:50</a></td></tr>
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
