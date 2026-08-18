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
<tr><td><div id="tag4401" onclick="CopyToClipboard('tag4401');return false;" class="tag-decoration">nightly</div><div id="tag13924" onclick="CopyToClipboard('tag13924');return false;" class="tag-decoration">nightly-bab8993</div><div id="tag24209" onclick="CopyToClipboard('tag24209');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/bab89930daa3565a99f256cb2675f000ccc07c85" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32144684103" target="_blank">2026-08-18 13:50:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4069" onclick="CopyToClipboard('tag4069');return false;" class="tag-decoration">release</div><div id="tag27835" onclick="CopyToClipboard('tag27835');return false;" class="tag-decoration">release-1195d49</div><div id="tag20975" onclick="CopyToClipboard('tag20975');return false;" class="tag-decoration">release-0.15.2</div><div id="tag24236" onclick="CopyToClipboard('tag24236');return false;" class="tag-decoration">release-v0</div><div id="tag15350" onclick="CopyToClipboard('tag15350');return false;" class="tag-decoration">release-v0.15</div><div id="tag22038" onclick="CopyToClipboard('tag22038');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1195d494d0cf498326cffa3dc624d7b5997ecdc4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32144667688" target="_blank">2026-08-18 13:50:00</a></td></tr>
<tr><td><div id="tag29727" onclick="CopyToClipboard('tag29727');return false;" class="tag-decoration">testing</div><div id="tag10512" onclick="CopyToClipboard('tag10512');return false;" class="tag-decoration">testing-40572ff</div><div id="tag27298" onclick="CopyToClipboard('tag27298');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag11418" onclick="CopyToClipboard('tag11418');return false;" class="tag-decoration">testing-v0</div><div id="tag18320" onclick="CopyToClipboard('tag18320');return false;" class="tag-decoration">testing-v0.15</div><div id="tag16544" onclick="CopyToClipboard('tag16544');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/40572ff4930177bb6acc7fa57aac395740794679" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32144669446" target="_blank">2026-08-18 13:50:00</a></td></tr>
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
