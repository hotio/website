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
<tr><td><div id="tag16111" onclick="CopyToClipboard('tag16111');return false;" class="tag-decoration">nightly</div><div id="tag7959" onclick="CopyToClipboard('tag7959');return false;" class="tag-decoration">nightly-1e5640d</div><div id="tag9398" onclick="CopyToClipboard('tag9398');return false;" class="tag-decoration">nightly-7a7201157d0c9acbbcc808f86bfcc33457e9564a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1e5640d10ef31cbb2a121f31b7f8306e8a63c5d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36247412009" target="_blank">2026-09-26 14:07:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31952" onclick="CopyToClipboard('tag31952');return false;" class="tag-decoration">release</div><div id="tag30953" onclick="CopyToClipboard('tag30953');return false;" class="tag-decoration">release-6c0939f</div><div id="tag9519" onclick="CopyToClipboard('tag9519');return false;" class="tag-decoration">release-5.1.3</div><div id="tag1001" onclick="CopyToClipboard('tag1001');return false;" class="tag-decoration">release-v5</div><div id="tag25926" onclick="CopyToClipboard('tag25926');return false;" class="tag-decoration">release-v5.1</div><div id="tag25791" onclick="CopyToClipboard('tag25791');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0939f9f34b785658f21ebd636970ad04d06342" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941384203" target="_blank">2026-09-24 01:05:28</a></td></tr>
<tr><td><div id="tag14934" onclick="CopyToClipboard('tag14934');return false;" class="tag-decoration">testing</div><div id="tag3286" onclick="CopyToClipboard('tag3286');return false;" class="tag-decoration">testing-20a267d</div><div id="tag14558" onclick="CopyToClipboard('tag14558');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/20a267daf4fdc45bf36c0d589e3921a2c159bf45" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941399602" target="_blank">2026-09-24 01:05:41</a></td></tr>
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
