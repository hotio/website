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
<tr><td><div id="tag17330" onclick="CopyToClipboard('tag17330');return false;" class="tag-decoration">nightly</div><div id="tag15947" onclick="CopyToClipboard('tag15947');return false;" class="tag-decoration">nightly-23f5fb4</div><div id="tag17408" onclick="CopyToClipboard('tag17408');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/23f5fb4da9eb346b076ca7449ad16b126e0404df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589114974" target="_blank">2026-07-02 12:13:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag421" onclick="CopyToClipboard('tag421');return false;" class="tag-decoration">release</div><div id="tag25556" onclick="CopyToClipboard('tag25556');return false;" class="tag-decoration">release-4c4483a</div><div id="tag21389" onclick="CopyToClipboard('tag21389');return false;" class="tag-decoration">release-0.15.2</div><div id="tag18399" onclick="CopyToClipboard('tag18399');return false;" class="tag-decoration">release-v0</div><div id="tag9912" onclick="CopyToClipboard('tag9912');return false;" class="tag-decoration">release-v0.15</div><div id="tag4140" onclick="CopyToClipboard('tag4140');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4c4483a9197c0ebaae8dbecf47c3b70a621c41c2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28796719491" target="_blank">2026-07-06 13:53:06</a></td></tr>
<tr><td><div id="tag31079" onclick="CopyToClipboard('tag31079');return false;" class="tag-decoration">testing</div><div id="tag15845" onclick="CopyToClipboard('tag15845');return false;" class="tag-decoration">testing-6fe1d20</div><div id="tag11841" onclick="CopyToClipboard('tag11841');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag3654" onclick="CopyToClipboard('tag3654');return false;" class="tag-decoration">testing-v0</div><div id="tag7036" onclick="CopyToClipboard('tag7036');return false;" class="tag-decoration">testing-v0.15</div><div id="tag31233" onclick="CopyToClipboard('tag31233');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6fe1d20beeb1866b303c55c037be95f9c50b8195" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589114111" target="_blank">2026-07-02 12:13:30</a></td></tr>
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
