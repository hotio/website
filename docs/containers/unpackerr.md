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
<tr><td><div id="tag3109" onclick="CopyToClipboard('tag3109');return false;" class="tag-decoration">nightly</div><div id="tag25236" onclick="CopyToClipboard('tag25236');return false;" class="tag-decoration">nightly-1d06e0f</div><div id="tag931" onclick="CopyToClipboard('tag931');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/1d06e0fc98d8238c8b4d194d9051fdb1665b8b2a" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707329515" target="_blank">2026-05-12 01:20:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30450" onclick="CopyToClipboard('tag30450');return false;" class="tag-decoration">release</div><div id="tag4102" onclick="CopyToClipboard('tag4102');return false;" class="tag-decoration">release-0486ca8</div><div id="tag3232" onclick="CopyToClipboard('tag3232');return false;" class="tag-decoration">release-0.15.2</div><div id="tag19145" onclick="CopyToClipboard('tag19145');return false;" class="tag-decoration">release-v0</div><div id="tag13939" onclick="CopyToClipboard('tag13939');return false;" class="tag-decoration">release-v0.15</div><div id="tag5691" onclick="CopyToClipboard('tag5691');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0486ca8d841a4dd3ad97d1bf506daa0bfa3b7484" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707046476" target="_blank">2026-05-12 01:11:25</a></td></tr>
<tr><td><div id="tag24811" onclick="CopyToClipboard('tag24811');return false;" class="tag-decoration">testing</div><div id="tag12684" onclick="CopyToClipboard('tag12684');return false;" class="tag-decoration">testing-062e072</div><div id="tag31619" onclick="CopyToClipboard('tag31619');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag30605" onclick="CopyToClipboard('tag30605');return false;" class="tag-decoration">testing-v0</div><div id="tag6687" onclick="CopyToClipboard('tag6687');return false;" class="tag-decoration">testing-v0.15</div><div id="tag21409" onclick="CopyToClipboard('tag21409');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/062e072a05264a9c96568828ea9e312ea09933ac" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707334701" target="_blank">2026-05-12 01:20:15</a></td></tr>
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
