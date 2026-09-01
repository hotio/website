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
<tr><td><div id="tag20406" onclick="CopyToClipboard('tag20406');return false;" class="tag-decoration">nightly</div><div id="tag21357" onclick="CopyToClipboard('tag21357');return false;" class="tag-decoration">nightly-f2f407e</div><div id="tag16306" onclick="CopyToClipboard('tag16306');return false;" class="tag-decoration">nightly-20915cc626ceb5071ad5a1eba9d49f2b0a5f261c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f2f407e3a6578e0012514b481afde692e264a414" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33481400234" target="_blank">2026-09-01 07:17:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2644" onclick="CopyToClipboard('tag2644');return false;" class="tag-decoration">release</div><div id="tag19627" onclick="CopyToClipboard('tag19627');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag29418" onclick="CopyToClipboard('tag29418');return false;" class="tag-decoration">release-5.1.2</div><div id="tag9449" onclick="CopyToClipboard('tag9449');return false;" class="tag-decoration">release-v5</div><div id="tag20722" onclick="CopyToClipboard('tag20722');return false;" class="tag-decoration">release-v5.1</div><div id="tag20721" onclick="CopyToClipboard('tag20721');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag9009" onclick="CopyToClipboard('tag9009');return false;" class="tag-decoration">testing</div><div id="tag16308" onclick="CopyToClipboard('tag16308');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag5418" onclick="CopyToClipboard('tag5418');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag13218" onclick="CopyToClipboard('tag13218');return false;" class="tag-decoration">testing-v5</div><div id="tag576" onclick="CopyToClipboard('tag576');return false;" class="tag-decoration">testing-v5.1</div><div id="tag22854" onclick="CopyToClipboard('tag22854');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
