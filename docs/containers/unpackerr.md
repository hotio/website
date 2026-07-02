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
<tr><td><div id="tag28145" onclick="CopyToClipboard('tag28145');return false;" class="tag-decoration">nightly</div><div id="tag13678" onclick="CopyToClipboard('tag13678');return false;" class="tag-decoration">nightly-23f5fb4</div><div id="tag13035" onclick="CopyToClipboard('tag13035');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/23f5fb4da9eb346b076ca7449ad16b126e0404df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589114974" target="_blank">2026-07-02 12:13:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25523" onclick="CopyToClipboard('tag25523');return false;" class="tag-decoration">release</div><div id="tag19426" onclick="CopyToClipboard('tag19426');return false;" class="tag-decoration">release-f3f7a7e</div><div id="tag26894" onclick="CopyToClipboard('tag26894');return false;" class="tag-decoration">release-0.15.2</div><div id="tag7792" onclick="CopyToClipboard('tag7792');return false;" class="tag-decoration">release-v0</div><div id="tag29151" onclick="CopyToClipboard('tag29151');return false;" class="tag-decoration">release-v0.15</div><div id="tag21726" onclick="CopyToClipboard('tag21726');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/f3f7a7e4feccc7fc0ec0ce8d2e6b4c5e0d45c8ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589113929" target="_blank">2026-07-02 12:13:30</a></td></tr>
<tr><td><div id="tag20729" onclick="CopyToClipboard('tag20729');return false;" class="tag-decoration">testing</div><div id="tag16450" onclick="CopyToClipboard('tag16450');return false;" class="tag-decoration">testing-6fe1d20</div><div id="tag12145" onclick="CopyToClipboard('tag12145');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag5032" onclick="CopyToClipboard('tag5032');return false;" class="tag-decoration">testing-v0</div><div id="tag20205" onclick="CopyToClipboard('tag20205');return false;" class="tag-decoration">testing-v0.15</div><div id="tag21177" onclick="CopyToClipboard('tag21177');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6fe1d20beeb1866b303c55c037be95f9c50b8195" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28589114111" target="_blank">2026-07-02 12:13:30</a></td></tr>
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
