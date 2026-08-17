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
<tr><td><div id="tag21245" onclick="CopyToClipboard('tag21245');return false;" class="tag-decoration">nightly</div><div id="tag1787" onclick="CopyToClipboard('tag1787');return false;" class="tag-decoration">nightly-dca65ec</div><div id="tag4075" onclick="CopyToClipboard('tag4075');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/dca65ec172c9b4b525da95e68c71e0ba2445223e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/31874897522" target="_blank">2026-08-15 08:36:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2330" onclick="CopyToClipboard('tag2330');return false;" class="tag-decoration">release</div><div id="tag28682" onclick="CopyToClipboard('tag28682');return false;" class="tag-decoration">release-0bf4750</div><div id="tag30076" onclick="CopyToClipboard('tag30076');return false;" class="tag-decoration">release-0.15.2</div><div id="tag17383" onclick="CopyToClipboard('tag17383');return false;" class="tag-decoration">release-v0</div><div id="tag9643" onclick="CopyToClipboard('tag9643');return false;" class="tag-decoration">release-v0.15</div><div id="tag25962" onclick="CopyToClipboard('tag25962');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0bf4750a3e5d3e9debec03eafa71c86892fd0659" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/31874900552" target="_blank">2026-08-15 08:36:31</a></td></tr>
<tr><td><div id="tag2751" onclick="CopyToClipboard('tag2751');return false;" class="tag-decoration">testing</div><div id="tag406" onclick="CopyToClipboard('tag406');return false;" class="tag-decoration">testing-c033ff1</div><div id="tag15842" onclick="CopyToClipboard('tag15842');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag23776" onclick="CopyToClipboard('tag23776');return false;" class="tag-decoration">testing-v0</div><div id="tag5495" onclick="CopyToClipboard('tag5495');return false;" class="tag-decoration">testing-v0.15</div><div id="tag3676" onclick="CopyToClipboard('tag3676');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c033ff17c957f2ba6d5ec77ec992f8de41502dc3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32046242046" target="_blank">2026-08-17 16:34:40</a></td></tr>
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
