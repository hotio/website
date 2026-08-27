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
<tr><td><div id="tag31958" onclick="CopyToClipboard('tag31958');return false;" class="tag-decoration">nightly</div><div id="tag11938" onclick="CopyToClipboard('tag11938');return false;" class="tag-decoration">nightly-9b327eb</div><div id="tag7709" onclick="CopyToClipboard('tag7709');return false;" class="tag-decoration">nightly-d990a17424775a0d8d4b2d003ff384f43d96e53d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9b327ebed543b5e487d51a286e7c9fff71b8a071" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33126875521" target="_blank">2026-08-27 23:36:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20274" onclick="CopyToClipboard('tag20274');return false;" class="tag-decoration">release</div><div id="tag31285" onclick="CopyToClipboard('tag31285');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag18155" onclick="CopyToClipboard('tag18155');return false;" class="tag-decoration">release-5.1.2</div><div id="tag4325" onclick="CopyToClipboard('tag4325');return false;" class="tag-decoration">release-v5</div><div id="tag488" onclick="CopyToClipboard('tag488');return false;" class="tag-decoration">release-v5.1</div><div id="tag16057" onclick="CopyToClipboard('tag16057');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag26453" onclick="CopyToClipboard('tag26453');return false;" class="tag-decoration">testing</div><div id="tag16579" onclick="CopyToClipboard('tag16579');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag8270" onclick="CopyToClipboard('tag8270');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag17586" onclick="CopyToClipboard('tag17586');return false;" class="tag-decoration">testing-v5</div><div id="tag5583" onclick="CopyToClipboard('tag5583');return false;" class="tag-decoration">testing-v5.1</div><div id="tag899" onclick="CopyToClipboard('tag899');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
