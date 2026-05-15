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
<tr><td><div id="tag3893" onclick="CopyToClipboard('tag3893');return false;" class="tag-decoration">nightly</div><div id="tag6416" onclick="CopyToClipboard('tag6416');return false;" class="tag-decoration">nightly-4ee32e1</div><div id="tag23714" onclick="CopyToClipboard('tag23714');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/4ee32e191c972b0b6eb45c2ea6aaa31c82b30472" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25715055411" target="_blank">2026-05-12 05:19:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27611" onclick="CopyToClipboard('tag27611');return false;" class="tag-decoration">release</div><div id="tag9553" onclick="CopyToClipboard('tag9553');return false;" class="tag-decoration">release-3ea13d9</div><div id="tag31895" onclick="CopyToClipboard('tag31895');return false;" class="tag-decoration">release-0.15.2</div><div id="tag31596" onclick="CopyToClipboard('tag31596');return false;" class="tag-decoration">release-v0</div><div id="tag11877" onclick="CopyToClipboard('tag11877');return false;" class="tag-decoration">release-v0.15</div><div id="tag19647" onclick="CopyToClipboard('tag19647');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/3ea13d9ff10f4c4dddeb3a24b73209c7f060a190" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25930304880" target="_blank">2026-05-15 16:55:12</a></td></tr>
<tr><td><div id="tag10265" onclick="CopyToClipboard('tag10265');return false;" class="tag-decoration">testing</div><div id="tag14684" onclick="CopyToClipboard('tag14684');return false;" class="tag-decoration">testing-c43c450</div><div id="tag30559" onclick="CopyToClipboard('tag30559');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag6745" onclick="CopyToClipboard('tag6745');return false;" class="tag-decoration">testing-v0</div><div id="tag3672" onclick="CopyToClipboard('tag3672');return false;" class="tag-decoration">testing-v0.15</div><div id="tag17562" onclick="CopyToClipboard('tag17562');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c43c450d5dde62a40627a5ac189645b2011c2059" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25715057582" target="_blank">2026-05-12 05:19:51</a></td></tr>
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
