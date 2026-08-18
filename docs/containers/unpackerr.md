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
<tr><td><div id="tag14191" onclick="CopyToClipboard('tag14191');return false;" class="tag-decoration">nightly</div><div id="tag20000" onclick="CopyToClipboard('tag20000');return false;" class="tag-decoration">nightly-dca65ec</div><div id="tag18550" onclick="CopyToClipboard('tag18550');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/dca65ec172c9b4b525da95e68c71e0ba2445223e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/31874897522" target="_blank">2026-08-15 08:36:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3297" onclick="CopyToClipboard('tag3297');return false;" class="tag-decoration">release</div><div id="tag32569" onclick="CopyToClipboard('tag32569');return false;" class="tag-decoration">release-1195d49</div><div id="tag14217" onclick="CopyToClipboard('tag14217');return false;" class="tag-decoration">release-0.15.2</div><div id="tag15682" onclick="CopyToClipboard('tag15682');return false;" class="tag-decoration">release-v0</div><div id="tag29489" onclick="CopyToClipboard('tag29489');return false;" class="tag-decoration">release-v0.15</div><div id="tag31832" onclick="CopyToClipboard('tag31832');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1195d494d0cf498326cffa3dc624d7b5997ecdc4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32144667688" target="_blank">2026-08-18 13:50:00</a></td></tr>
<tr><td><div id="tag16722" onclick="CopyToClipboard('tag16722');return false;" class="tag-decoration">testing</div><div id="tag28940" onclick="CopyToClipboard('tag28940');return false;" class="tag-decoration">testing-c033ff1</div><div id="tag12582" onclick="CopyToClipboard('tag12582');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag17808" onclick="CopyToClipboard('tag17808');return false;" class="tag-decoration">testing-v0</div><div id="tag5098" onclick="CopyToClipboard('tag5098');return false;" class="tag-decoration">testing-v0.15</div><div id="tag9993" onclick="CopyToClipboard('tag9993');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c033ff17c957f2ba6d5ec77ec992f8de41502dc3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32046242046" target="_blank">2026-08-17 16:34:40</a></td></tr>
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
