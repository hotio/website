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
<tr><td><div id="tag2222" onclick="CopyToClipboard('tag2222');return false;" class="tag-decoration">nightly</div><div id="tag23266" onclick="CopyToClipboard('tag23266');return false;" class="tag-decoration">nightly-d09c4b5</div><div id="tag27512" onclick="CopyToClipboard('tag27512');return false;" class="tag-decoration">nightly-20915cc626ceb5071ad5a1eba9d49f2b0a5f261c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d09c4b54d418b2d4402be7542112065311f9b7b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511450231" target="_blank">2026-09-01 13:06:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1506" onclick="CopyToClipboard('tag1506');return false;" class="tag-decoration">release</div><div id="tag26665" onclick="CopyToClipboard('tag26665');return false;" class="tag-decoration">release-ad640d3</div><div id="tag17024" onclick="CopyToClipboard('tag17024');return false;" class="tag-decoration">release-5.1.2</div><div id="tag17435" onclick="CopyToClipboard('tag17435');return false;" class="tag-decoration">release-v5</div><div id="tag9985" onclick="CopyToClipboard('tag9985');return false;" class="tag-decoration">release-v5.1</div><div id="tag29905" onclick="CopyToClipboard('tag29905');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ad640d31ac3e7b1f2757e028b8b0ea8e26464d8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511452321" target="_blank">2026-09-01 13:06:43</a></td></tr>
<tr><td><div id="tag29959" onclick="CopyToClipboard('tag29959');return false;" class="tag-decoration">testing</div><div id="tag21965" onclick="CopyToClipboard('tag21965');return false;" class="tag-decoration">testing-879b8aa</div><div id="tag27458" onclick="CopyToClipboard('tag27458');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag2353" onclick="CopyToClipboard('tag2353');return false;" class="tag-decoration">testing-v5</div><div id="tag21686" onclick="CopyToClipboard('tag21686');return false;" class="tag-decoration">testing-v5.1</div><div id="tag31700" onclick="CopyToClipboard('tag31700');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/879b8aa249ff15a05b34c477b81f70d1c41b5e52" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511455115" target="_blank">2026-09-01 13:06:45</a></td></tr>
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
