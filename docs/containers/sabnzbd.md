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
<tr><td><div id="tag13611" onclick="CopyToClipboard('tag13611');return false;" class="tag-decoration">nightly</div><div id="tag906" onclick="CopyToClipboard('tag906');return false;" class="tag-decoration">nightly-0db8c60</div><div id="tag21352" onclick="CopyToClipboard('tag21352');return false;" class="tag-decoration">nightly-a1c9a8aab1cd39a8635e23f0e47a04dafed19153</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0db8c60276793cc5d23a0f2f83fa641ed374da78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29534052225" target="_blank">2026-07-16 20:55:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23166" onclick="CopyToClipboard('tag23166');return false;" class="tag-decoration">release</div><div id="tag7186" onclick="CopyToClipboard('tag7186');return false;" class="tag-decoration">release-a654991</div><div id="tag16904" onclick="CopyToClipboard('tag16904');return false;" class="tag-decoration">release-5.0.4</div><div id="tag6794" onclick="CopyToClipboard('tag6794');return false;" class="tag-decoration">release-v5</div><div id="tag13673" onclick="CopyToClipboard('tag13673');return false;" class="tag-decoration">release-v5.0</div><div id="tag21242" onclick="CopyToClipboard('tag21242');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag31422" onclick="CopyToClipboard('tag31422');return false;" class="tag-decoration">testing</div><div id="tag12379" onclick="CopyToClipboard('tag12379');return false;" class="tag-decoration">testing-d6b7699</div><div id="tag25182" onclick="CopyToClipboard('tag25182');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d6b76999c0ec4a482c28e4c136a1a5b1878ef566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364655178" target="_blank">2026-07-14 20:10:08</a></td></tr>
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
