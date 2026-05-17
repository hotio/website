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
<tr><td><div id="tag21423" onclick="CopyToClipboard('tag21423');return false;" class="tag-decoration">nightly</div><div id="tag13096" onclick="CopyToClipboard('tag13096');return false;" class="tag-decoration">nightly-72ef963</div><div id="tag22139" onclick="CopyToClipboard('tag22139');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/72ef963b8faa4150fb7d1363c475a852401cb742" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25987634535" target="_blank">2026-05-17 09:54:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8444" onclick="CopyToClipboard('tag8444');return false;" class="tag-decoration">release</div><div id="tag17651" onclick="CopyToClipboard('tag17651');return false;" class="tag-decoration">release-3557515</div><div id="tag23848" onclick="CopyToClipboard('tag23848');return false;" class="tag-decoration">release-0.15.2</div><div id="tag7960" onclick="CopyToClipboard('tag7960');return false;" class="tag-decoration">release-v0</div><div id="tag3978" onclick="CopyToClipboard('tag3978');return false;" class="tag-decoration">release-v0.15</div><div id="tag4280" onclick="CopyToClipboard('tag4280');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/3557515a1760df2ae7b5ed4dcc1ab0eeec94fdbe" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25987635968" target="_blank">2026-05-17 09:54:15</a></td></tr>
<tr><td><div id="tag30355" onclick="CopyToClipboard('tag30355');return false;" class="tag-decoration">testing</div><div id="tag13708" onclick="CopyToClipboard('tag13708');return false;" class="tag-decoration">testing-94a0975</div><div id="tag20853" onclick="CopyToClipboard('tag20853');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag7828" onclick="CopyToClipboard('tag7828');return false;" class="tag-decoration">testing-v0</div><div id="tag22786" onclick="CopyToClipboard('tag22786');return false;" class="tag-decoration">testing-v0.15</div><div id="tag10912" onclick="CopyToClipboard('tag10912');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/94a0975cf9deb560b2e5bf1a2f0aeb0d00ae3905" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25987634477" target="_blank">2026-05-17 09:54:09</a></td></tr>
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
