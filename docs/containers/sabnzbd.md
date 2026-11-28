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
<tr><td><div id="tag11133" onclick="CopyToClipboard('tag11133');return false;" class="tag-decoration">nightly</div><div id="tag11587" onclick="CopyToClipboard('tag11587');return false;" class="tag-decoration">nightly-303ddfc</div><div id="tag5159" onclick="CopyToClipboard('tag5159');return false;" class="tag-decoration">nightly-89000d5b3d4ad7e7dd605968f2cea727d629d47e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/303ddfc7d4f9a93083a6eb6e20e3cbeaba23e6cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46007553347" target="_blank">2026-11-27 13:29:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10911" onclick="CopyToClipboard('tag10911');return false;" class="tag-decoration">release</div><div id="tag22297" onclick="CopyToClipboard('tag22297');return false;" class="tag-decoration">release-b8b78b4</div><div id="tag17634" onclick="CopyToClipboard('tag17634');return false;" class="tag-decoration">release-5.1.3</div><div id="tag25851" onclick="CopyToClipboard('tag25851');return false;" class="tag-decoration">release-v5</div><div id="tag22064" onclick="CopyToClipboard('tag22064');return false;" class="tag-decoration">release-v5.1</div><div id="tag15456" onclick="CopyToClipboard('tag15456');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b8b78b4becde7daba45889283cbabc5df2e73464" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45743817892" target="_blank">2026-11-26 02:38:54</a></td></tr>
<tr><td><div id="tag8279" onclick="CopyToClipboard('tag8279');return false;" class="tag-decoration">testing</div><div id="tag21896" onclick="CopyToClipboard('tag21896');return false;" class="tag-decoration">testing-059e95f</div><div id="tag14758" onclick="CopyToClipboard('tag14758');return false;" class="tag-decoration">testing-5.2.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/059e95fad6c38bafc47ae247d2fe3db25ac3beeb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46107913144" target="_blank">2026-11-28 04:31:04</a></td></tr>
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
