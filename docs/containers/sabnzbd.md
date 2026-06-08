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
<tr><td><div id="tag17049" onclick="CopyToClipboard('tag17049');return false;" class="tag-decoration">nightly</div><div id="tag14279" onclick="CopyToClipboard('tag14279');return false;" class="tag-decoration">nightly-bb9984d</div><div id="tag18483" onclick="CopyToClipboard('tag18483');return false;" class="tag-decoration">nightly-a141dc942bc6bd9181bfe66480e12ad921b5f1dc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb9984dea350dd10ba342c5125a6e54ec3dc241d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27164150504" target="_blank">2026-06-08 20:13:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8713" onclick="CopyToClipboard('tag8713');return false;" class="tag-decoration">release</div><div id="tag27734" onclick="CopyToClipboard('tag27734');return false;" class="tag-decoration">release-d9901aa</div><div id="tag1032" onclick="CopyToClipboard('tag1032');return false;" class="tag-decoration">release-5.0.3</div><div id="tag29332" onclick="CopyToClipboard('tag29332');return false;" class="tag-decoration">release-v5</div><div id="tag18290" onclick="CopyToClipboard('tag18290');return false;" class="tag-decoration">release-v5.0</div><div id="tag30124" onclick="CopyToClipboard('tag30124');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag15165" onclick="CopyToClipboard('tag15165');return false;" class="tag-decoration">testing</div><div id="tag14640" onclick="CopyToClipboard('tag14640');return false;" class="tag-decoration">testing-65daef7</div><div id="tag6682" onclick="CopyToClipboard('tag6682');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/65daef7db77a32e4201c0a892315d23aae1b6951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27092387403" target="_blank">2026-06-07 12:20:06</a></td></tr>
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
