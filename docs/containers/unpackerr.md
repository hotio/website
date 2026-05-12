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
<tr><td><div id="tag19144" onclick="CopyToClipboard('tag19144');return false;" class="tag-decoration">nightly</div><div id="tag18763" onclick="CopyToClipboard('tag18763');return false;" class="tag-decoration">nightly-1d06e0f</div><div id="tag17404" onclick="CopyToClipboard('tag17404');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/1d06e0fc98d8238c8b4d194d9051fdb1665b8b2a" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707329515" target="_blank">2026-05-12 01:20:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26050" onclick="CopyToClipboard('tag26050');return false;" class="tag-decoration">release</div><div id="tag25778" onclick="CopyToClipboard('tag25778');return false;" class="tag-decoration">release-0486ca8</div><div id="tag2882" onclick="CopyToClipboard('tag2882');return false;" class="tag-decoration">release-0.15.2</div><div id="tag28890" onclick="CopyToClipboard('tag28890');return false;" class="tag-decoration">release-v0</div><div id="tag28245" onclick="CopyToClipboard('tag28245');return false;" class="tag-decoration">release-v0.15</div><div id="tag9809" onclick="CopyToClipboard('tag9809');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0486ca8d841a4dd3ad97d1bf506daa0bfa3b7484" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707046476" target="_blank">2026-05-12 01:11:25</a></td></tr>
<tr><td><div id="tag17122" onclick="CopyToClipboard('tag17122');return false;" class="tag-decoration">testing</div><div id="tag17607" onclick="CopyToClipboard('tag17607');return false;" class="tag-decoration">testing-2c6b8e7</div><div id="tag14931" onclick="CopyToClipboard('tag14931');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag9863" onclick="CopyToClipboard('tag9863');return false;" class="tag-decoration">testing-v0</div><div id="tag1294" onclick="CopyToClipboard('tag1294');return false;" class="tag-decoration">testing-v0.15</div><div id="tag11711" onclick="CopyToClipboard('tag11711');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2c6b8e79d4d459c85305c731cd28e1492d6ae9d7" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707049171" target="_blank">2026-05-12 01:11:30</a></td></tr>
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
