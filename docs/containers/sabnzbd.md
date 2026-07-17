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
<tr><td><div id="tag20465" onclick="CopyToClipboard('tag20465');return false;" class="tag-decoration">nightly</div><div id="tag22106" onclick="CopyToClipboard('tag22106');return false;" class="tag-decoration">nightly-9de0e79</div><div id="tag2736" onclick="CopyToClipboard('tag2736');return false;" class="tag-decoration">nightly-636aa91e213b89218a3bea9ae4fc2b57433f9737</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9de0e794a5c45d1ba4e12da7098f35e14b4da9c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29568873839" target="_blank">2026-07-17 09:07:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25435" onclick="CopyToClipboard('tag25435');return false;" class="tag-decoration">release</div><div id="tag8734" onclick="CopyToClipboard('tag8734');return false;" class="tag-decoration">release-a654991</div><div id="tag7327" onclick="CopyToClipboard('tag7327');return false;" class="tag-decoration">release-5.0.4</div><div id="tag10822" onclick="CopyToClipboard('tag10822');return false;" class="tag-decoration">release-v5</div><div id="tag9163" onclick="CopyToClipboard('tag9163');return false;" class="tag-decoration">release-v5.0</div><div id="tag30642" onclick="CopyToClipboard('tag30642');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag20236" onclick="CopyToClipboard('tag20236');return false;" class="tag-decoration">testing</div><div id="tag27719" onclick="CopyToClipboard('tag27719');return false;" class="tag-decoration">testing-a9c5fbe</div><div id="tag3973" onclick="CopyToClipboard('tag3973');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a9c5fbe9449694225530c4eb50b75c6f05176f78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29534052347" target="_blank">2026-07-16 20:55:44</a></td></tr>
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
