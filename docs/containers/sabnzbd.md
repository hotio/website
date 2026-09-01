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
<tr><td><div id="tag31053" onclick="CopyToClipboard('tag31053');return false;" class="tag-decoration">nightly</div><div id="tag9233" onclick="CopyToClipboard('tag9233');return false;" class="tag-decoration">nightly-f2f407e</div><div id="tag16204" onclick="CopyToClipboard('tag16204');return false;" class="tag-decoration">nightly-20915cc626ceb5071ad5a1eba9d49f2b0a5f261c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f2f407e3a6578e0012514b481afde692e264a414" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33481400234" target="_blank">2026-09-01 07:17:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13974" onclick="CopyToClipboard('tag13974');return false;" class="tag-decoration">release</div><div id="tag19298" onclick="CopyToClipboard('tag19298');return false;" class="tag-decoration">release-e8f92c1</div><div id="tag24330" onclick="CopyToClipboard('tag24330');return false;" class="tag-decoration">release-5.1.2</div><div id="tag14997" onclick="CopyToClipboard('tag14997');return false;" class="tag-decoration">release-v5</div><div id="tag18895" onclick="CopyToClipboard('tag18895');return false;" class="tag-decoration">release-v5.1</div><div id="tag30253" onclick="CopyToClipboard('tag30253');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e8f92c155745ea9feac86447635d92b2529d5ca8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33481397362" target="_blank">2026-09-01 07:17:06</a></td></tr>
<tr><td><div id="tag27162" onclick="CopyToClipboard('tag27162');return false;" class="tag-decoration">testing</div><div id="tag9981" onclick="CopyToClipboard('tag9981');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag18551" onclick="CopyToClipboard('tag18551');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag9327" onclick="CopyToClipboard('tag9327');return false;" class="tag-decoration">testing-v5</div><div id="tag31388" onclick="CopyToClipboard('tag31388');return false;" class="tag-decoration">testing-v5.1</div><div id="tag20478" onclick="CopyToClipboard('tag20478');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
