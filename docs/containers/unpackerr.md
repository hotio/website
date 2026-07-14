---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3753" onclick="CopyToClipboard('tag3753');return false;" class="tag-decoration">nightly</div><div id="tag28020" onclick="CopyToClipboard('tag28020');return false;" class="tag-decoration">nightly-573df19</div><div id="tag26311" onclick="CopyToClipboard('tag26311');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/573df19b7bd9585727dec851f72ca0ceca5040da" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29310944630" target="_blank">2026-07-14 06:18:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16357" onclick="CopyToClipboard('tag16357');return false;" class="tag-decoration">release</div><div id="tag13878" onclick="CopyToClipboard('tag13878');return false;" class="tag-decoration">release-483927d</div><div id="tag12580" onclick="CopyToClipboard('tag12580');return false;" class="tag-decoration">release-0.15.2</div><div id="tag29187" onclick="CopyToClipboard('tag29187');return false;" class="tag-decoration">release-v0</div><div id="tag10382" onclick="CopyToClipboard('tag10382');return false;" class="tag-decoration">release-v0.15</div><div id="tag4615" onclick="CopyToClipboard('tag4615');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/483927d8dfebf241cbdec01072782d8ac6840349" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29310945397" target="_blank">2026-07-14 06:18:06</a></td></tr>
<tr><td><div id="tag6067" onclick="CopyToClipboard('tag6067');return false;" class="tag-decoration">testing</div><div id="tag8435" onclick="CopyToClipboard('tag8435');return false;" class="tag-decoration">testing-0f751e3</div><div id="tag27897" onclick="CopyToClipboard('tag27897');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag17113" onclick="CopyToClipboard('tag17113');return false;" class="tag-decoration">testing-v0</div><div id="tag23740" onclick="CopyToClipboard('tag23740');return false;" class="tag-decoration">testing-v0.15</div><div id="tag3149" onclick="CopyToClipboard('tag3149');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0f751e3b673c3bac0ac19a1439a49f94f837587c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29320672647" target="_blank">2026-07-14 09:09:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
