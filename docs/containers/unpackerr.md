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
<tr><td><div id="tag7894" onclick="CopyToClipboard('tag7894');return false;" class="tag-decoration">nightly</div><div id="tag14311" onclick="CopyToClipboard('tag14311');return false;" class="tag-decoration">nightly-21a855b</div><div id="tag14086" onclick="CopyToClipboard('tag14086');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/21a855b7107496b115a778f55cc67b6bb82a110d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32326844661" target="_blank">2026-08-20 03:03:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2509" onclick="CopyToClipboard('tag2509');return false;" class="tag-decoration">release</div><div id="tag7791" onclick="CopyToClipboard('tag7791');return false;" class="tag-decoration">release-1195d49</div><div id="tag12606" onclick="CopyToClipboard('tag12606');return false;" class="tag-decoration">release-0.15.2</div><div id="tag8231" onclick="CopyToClipboard('tag8231');return false;" class="tag-decoration">release-v0</div><div id="tag27783" onclick="CopyToClipboard('tag27783');return false;" class="tag-decoration">release-v0.15</div><div id="tag31378" onclick="CopyToClipboard('tag31378');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1195d494d0cf498326cffa3dc624d7b5997ecdc4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32144667688" target="_blank">2026-08-18 13:50:00</a></td></tr>
<tr><td><div id="tag18836" onclick="CopyToClipboard('tag18836');return false;" class="tag-decoration">testing</div><div id="tag126" onclick="CopyToClipboard('tag126');return false;" class="tag-decoration">testing-73f4d81</div><div id="tag991" onclick="CopyToClipboard('tag991');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag18354" onclick="CopyToClipboard('tag18354');return false;" class="tag-decoration">testing-v0</div><div id="tag21868" onclick="CopyToClipboard('tag21868');return false;" class="tag-decoration">testing-v0.15</div><div id="tag20907" onclick="CopyToClipboard('tag20907');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/73f4d81b8ee3fbd8f8e86cfd819c3533858e6d72" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32326845789" target="_blank">2026-08-20 03:03:14</a></td></tr>
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
