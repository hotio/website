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
<tr><td><div id="tag21420" onclick="CopyToClipboard('tag21420');return false;" class="tag-decoration">nightly</div><div id="tag31411" onclick="CopyToClipboard('tag31411');return false;" class="tag-decoration">nightly-2112b54</div><div id="tag17806" onclick="CopyToClipboard('tag17806');return false;" class="tag-decoration">nightly-f405b8927a92700480a796e4960dce8b28479f81</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2112b54f1543b63132e2ddd8cd9fe76d5f28e4ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30382814815" target="_blank">2026-07-28 17:25:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29434" onclick="CopyToClipboard('tag29434');return false;" class="tag-decoration">release</div><div id="tag13810" onclick="CopyToClipboard('tag13810');return false;" class="tag-decoration">release-b5245d7</div><div id="tag32011" onclick="CopyToClipboard('tag32011');return false;" class="tag-decoration">release-5.0.4</div><div id="tag10589" onclick="CopyToClipboard('tag10589');return false;" class="tag-decoration">release-v5</div><div id="tag29231" onclick="CopyToClipboard('tag29231');return false;" class="tag-decoration">release-v5.0</div><div id="tag1047" onclick="CopyToClipboard('tag1047');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag23346" onclick="CopyToClipboard('tag23346');return false;" class="tag-decoration">testing</div><div id="tag19417" onclick="CopyToClipboard('tag19417');return false;" class="tag-decoration">testing-53db5a7</div><div id="tag2054" onclick="CopyToClipboard('tag2054');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/53db5a7cb13bcab6279fac2eeb0452e43f9a5288" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372825056" target="_blank">2026-07-28 15:19:47</a></td></tr>
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
