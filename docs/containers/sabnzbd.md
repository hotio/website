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
<tr><td><div id="tag9831" onclick="CopyToClipboard('tag9831');return false;" class="tag-decoration">nightly</div><div id="tag2418" onclick="CopyToClipboard('tag2418');return false;" class="tag-decoration">nightly-97b0cf0</div><div id="tag8266" onclick="CopyToClipboard('tag8266');return false;" class="tag-decoration">nightly-d215d4b0d7bb35b6fce90a0a96966a37a6f6a1fc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/97b0cf04d008b7a18b43dfefd2d28b111ea5f81e" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21244721091" target="_blank">2026-01-22 10:19:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30445" onclick="CopyToClipboard('tag30445');return false;" class="tag-decoration">release</div><div id="tag19747" onclick="CopyToClipboard('tag19747');return false;" class="tag-decoration">release-88e7b4a</div><div id="tag921" onclick="CopyToClipboard('tag921');return false;" class="tag-decoration">release-4.5.5</div><div id="tag14331" onclick="CopyToClipboard('tag14331');return false;" class="tag-decoration">release-v4</div><div id="tag32684" onclick="CopyToClipboard('tag32684');return false;" class="tag-decoration">release-v4.5</div><div id="tag4746" onclick="CopyToClipboard('tag4746');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/88e7b4a5d1f73b1a4ffbf45ed2542ef80d2246bd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21244721804" target="_blank">2026-01-22 10:19:54</a></td></tr>
<tr><td><div id="tag24354" onclick="CopyToClipboard('tag24354');return false;" class="tag-decoration">testing</div><div id="tag16854" onclick="CopyToClipboard('tag16854');return false;" class="tag-decoration">testing-843181d</div><div id="tag5011" onclick="CopyToClipboard('tag5011');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/843181d0d4d3174ad9402cfcfd51e836c40c933c" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21243869816" target="_blank">2026-01-22 09:52:06</a></td></tr>
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
