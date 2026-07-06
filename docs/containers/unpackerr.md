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
<tr><td><div id="tag6382" onclick="CopyToClipboard('tag6382');return false;" class="tag-decoration">nightly</div><div id="tag12877" onclick="CopyToClipboard('tag12877');return false;" class="tag-decoration">nightly-395874d</div><div id="tag136" onclick="CopyToClipboard('tag136');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/395874d96e55f8305442dbacc0af08581fb4090c" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28796724695" target="_blank">2026-07-06 13:53:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3410" onclick="CopyToClipboard('tag3410');return false;" class="tag-decoration">release</div><div id="tag4299" onclick="CopyToClipboard('tag4299');return false;" class="tag-decoration">release-4c4483a</div><div id="tag10548" onclick="CopyToClipboard('tag10548');return false;" class="tag-decoration">release-0.15.2</div><div id="tag1237" onclick="CopyToClipboard('tag1237');return false;" class="tag-decoration">release-v0</div><div id="tag16576" onclick="CopyToClipboard('tag16576');return false;" class="tag-decoration">release-v0.15</div><div id="tag27546" onclick="CopyToClipboard('tag27546');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4c4483a9197c0ebaae8dbecf47c3b70a621c41c2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28796719491" target="_blank">2026-07-06 13:53:06</a></td></tr>
<tr><td><div id="tag5393" onclick="CopyToClipboard('tag5393');return false;" class="tag-decoration">testing</div><div id="tag29460" onclick="CopyToClipboard('tag29460');return false;" class="tag-decoration">testing-6fe1d20</div><div id="tag31124" onclick="CopyToClipboard('tag31124');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag716" onclick="CopyToClipboard('tag716');return false;" class="tag-decoration">testing-v0</div><div id="tag21378" onclick="CopyToClipboard('tag21378');return false;" class="tag-decoration">testing-v0.15</div><div id="tag10946" onclick="CopyToClipboard('tag10946');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6fe1d20beeb1866b303c55c037be95f9c50b8195" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589114111" target="_blank">2026-07-02 12:13:30</a></td></tr>
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
