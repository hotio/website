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
<tr><td><div id="tag21421" onclick="CopyToClipboard('tag21421');return false;" class="tag-decoration">nightly</div><div id="tag2150" onclick="CopyToClipboard('tag2150');return false;" class="tag-decoration">nightly-077327c</div><div id="tag28132" onclick="CopyToClipboard('tag28132');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/077327c62749515fa284788fac0c8984d57ff196" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845490" target="_blank">2026-06-20 14:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7823" onclick="CopyToClipboard('tag7823');return false;" class="tag-decoration">release</div><div id="tag15796" onclick="CopyToClipboard('tag15796');return false;" class="tag-decoration">release-d448a27</div><div id="tag24641" onclick="CopyToClipboard('tag24641');return false;" class="tag-decoration">release-0.15.2</div><div id="tag10981" onclick="CopyToClipboard('tag10981');return false;" class="tag-decoration">release-v0</div><div id="tag28573" onclick="CopyToClipboard('tag28573');return false;" class="tag-decoration">release-v0.15</div><div id="tag3460" onclick="CopyToClipboard('tag3460');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d448a273055f08bf20b3e1d083fc42ca73ae2762" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276375236" target="_blank">2026-06-10 12:31:06</a></td></tr>
<tr><td><div id="tag30284" onclick="CopyToClipboard('tag30284');return false;" class="tag-decoration">testing</div><div id="tag10288" onclick="CopyToClipboard('tag10288');return false;" class="tag-decoration">testing-7239098</div><div id="tag5717" onclick="CopyToClipboard('tag5717');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag1815" onclick="CopyToClipboard('tag1815');return false;" class="tag-decoration">testing-v0</div><div id="tag8859" onclick="CopyToClipboard('tag8859');return false;" class="tag-decoration">testing-v0.15</div><div id="tag15516" onclick="CopyToClipboard('tag15516');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7239098052b0ae6e0addc58392f5b3e94e3781a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845853" target="_blank">2026-06-20 14:20:14</a></td></tr>
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
