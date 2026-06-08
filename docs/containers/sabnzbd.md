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
<tr><td><div id="tag31876" onclick="CopyToClipboard('tag31876');return false;" class="tag-decoration">nightly</div><div id="tag11776" onclick="CopyToClipboard('tag11776');return false;" class="tag-decoration">nightly-c4916c0</div><div id="tag30387" onclick="CopyToClipboard('tag30387');return false;" class="tag-decoration">nightly-5c4d2f1d9f9ca606872382ad41fb004b78014722</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c4916c022c8165410639b7c31fdbe44098f47aab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27145856513" target="_blank">2026-06-08 14:47:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26444" onclick="CopyToClipboard('tag26444');return false;" class="tag-decoration">release</div><div id="tag13274" onclick="CopyToClipboard('tag13274');return false;" class="tag-decoration">release-d9901aa</div><div id="tag431" onclick="CopyToClipboard('tag431');return false;" class="tag-decoration">release-5.0.3</div><div id="tag17387" onclick="CopyToClipboard('tag17387');return false;" class="tag-decoration">release-v5</div><div id="tag24969" onclick="CopyToClipboard('tag24969');return false;" class="tag-decoration">release-v5.0</div><div id="tag13992" onclick="CopyToClipboard('tag13992');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag27610" onclick="CopyToClipboard('tag27610');return false;" class="tag-decoration">testing</div><div id="tag24761" onclick="CopyToClipboard('tag24761');return false;" class="tag-decoration">testing-65daef7</div><div id="tag7681" onclick="CopyToClipboard('tag7681');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/65daef7db77a32e4201c0a892315d23aae1b6951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27092387403" target="_blank">2026-06-07 12:20:06</a></td></tr>
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
