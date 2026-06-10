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
<tr><td><div id="tag18369" onclick="CopyToClipboard('tag18369');return false;" class="tag-decoration">nightly</div><div id="tag7949" onclick="CopyToClipboard('tag7949');return false;" class="tag-decoration">nightly-0308354</div><div id="tag29076" onclick="CopyToClipboard('tag29076');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/0308354560935a2f31de98bc6018b65ce6a16407" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/26364172969" target="_blank">2026-05-24 14:40:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20663" onclick="CopyToClipboard('tag20663');return false;" class="tag-decoration">release</div><div id="tag13357" onclick="CopyToClipboard('tag13357');return false;" class="tag-decoration">release-df75df0</div><div id="tag4640" onclick="CopyToClipboard('tag4640');return false;" class="tag-decoration">release-0.15.2</div><div id="tag9756" onclick="CopyToClipboard('tag9756');return false;" class="tag-decoration">release-v0</div><div id="tag14517" onclick="CopyToClipboard('tag14517');return false;" class="tag-decoration">release-v0.15</div><div id="tag1368" onclick="CopyToClipboard('tag1368');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/df75df077d5f24b753427f7685ff9d323f47d4fb" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/26364175448" target="_blank">2026-05-24 14:40:27</a></td></tr>
<tr><td><div id="tag22319" onclick="CopyToClipboard('tag22319');return false;" class="tag-decoration">testing</div><div id="tag31599" onclick="CopyToClipboard('tag31599');return false;" class="tag-decoration">testing-320765b</div><div id="tag10600" onclick="CopyToClipboard('tag10600');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag23859" onclick="CopyToClipboard('tag23859');return false;" class="tag-decoration">testing-v0</div><div id="tag23498" onclick="CopyToClipboard('tag23498');return false;" class="tag-decoration">testing-v0.15</div><div id="tag16426" onclick="CopyToClipboard('tag16426');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/320765be042609e4ed28540575b4ee4840e2f8e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276371080" target="_blank">2026-06-10 12:31:02</a></td></tr>
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
