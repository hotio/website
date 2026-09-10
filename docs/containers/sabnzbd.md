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
<tr><td><div id="tag26723" onclick="CopyToClipboard('tag26723');return false;" class="tag-decoration">nightly</div><div id="tag2328" onclick="CopyToClipboard('tag2328');return false;" class="tag-decoration">nightly-7685542</div><div id="tag6316" onclick="CopyToClipboard('tag6316');return false;" class="tag-decoration">nightly-29699890d5d55b83680d679e18aa734d90663b07</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/76855420967e04a5ae383860a66abedc5a43c0ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423190199" target="_blank">2026-09-10 00:53:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2386" onclick="CopyToClipboard('tag2386');return false;" class="tag-decoration">release</div><div id="tag28131" onclick="CopyToClipboard('tag28131');return false;" class="tag-decoration">release-ba20b35</div><div id="tag31613" onclick="CopyToClipboard('tag31613');return false;" class="tag-decoration">release-5.1.3</div><div id="tag312" onclick="CopyToClipboard('tag312');return false;" class="tag-decoration">release-v5</div><div id="tag29282" onclick="CopyToClipboard('tag29282');return false;" class="tag-decoration">release-v5.1</div><div id="tag8493" onclick="CopyToClipboard('tag8493');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba20b353cdd97b82838713108ed3c770f53f5f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423198405" target="_blank">2026-09-10 00:53:24</a></td></tr>
<tr><td><div id="tag10898" onclick="CopyToClipboard('tag10898');return false;" class="tag-decoration">testing</div><div id="tag11443" onclick="CopyToClipboard('tag11443');return false;" class="tag-decoration">testing-a5201e9</div><div id="tag285" onclick="CopyToClipboard('tag285');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag8883" onclick="CopyToClipboard('tag8883');return false;" class="tag-decoration">testing-v5</div><div id="tag26717" onclick="CopyToClipboard('tag26717');return false;" class="tag-decoration">testing-v5.1</div><div id="tag15152" onclick="CopyToClipboard('tag15152');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5201e938c73c5c7b035a089ce14c723bcceb237" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423185997" target="_blank">2026-09-10 00:53:14</a></td></tr>
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
