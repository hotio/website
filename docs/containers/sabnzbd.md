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
<tr><td><div id="tag19064" onclick="CopyToClipboard('tag19064');return false;" class="tag-decoration">nightly</div><div id="tag9858" onclick="CopyToClipboard('tag9858');return false;" class="tag-decoration">nightly-0935920</div><div id="tag11240" onclick="CopyToClipboard('tag11240');return false;" class="tag-decoration">nightly-e9692768280aaedcf5b4de260cd2042d8a60668e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0935920f50efd04f577077340aa6dab5715f393d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27340212756" target="_blank">2026-06-11 10:21:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag963" onclick="CopyToClipboard('tag963');return false;" class="tag-decoration">release</div><div id="tag688" onclick="CopyToClipboard('tag688');return false;" class="tag-decoration">release-b9b0219</div><div id="tag22602" onclick="CopyToClipboard('tag22602');return false;" class="tag-decoration">release-5.0.3</div><div id="tag11720" onclick="CopyToClipboard('tag11720');return false;" class="tag-decoration">release-v5</div><div id="tag8336" onclick="CopyToClipboard('tag8336');return false;" class="tag-decoration">release-v5.0</div><div id="tag29249" onclick="CopyToClipboard('tag29249');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b9b02190bdad5c1cb5a1c9f439eb4d0c5236057f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280225359" target="_blank">2026-06-10 13:36:55</a></td></tr>
<tr><td><div id="tag11962" onclick="CopyToClipboard('tag11962');return false;" class="tag-decoration">testing</div><div id="tag8056" onclick="CopyToClipboard('tag8056');return false;" class="tag-decoration">testing-2703dc2</div><div id="tag18032" onclick="CopyToClipboard('tag18032');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2703dc28bdbac36a8721d614baa0393addc4f30b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280224072" target="_blank">2026-06-10 13:36:54</a></td></tr>
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
