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
<tr><td><div id="tag26340" onclick="CopyToClipboard('tag26340');return false;" class="tag-decoration">nightly</div><div id="tag9183" onclick="CopyToClipboard('tag9183');return false;" class="tag-decoration">nightly-0308354</div><div id="tag23150" onclick="CopyToClipboard('tag23150');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/0308354560935a2f31de98bc6018b65ce6a16407" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/26364172969" target="_blank">2026-05-24 14:40:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19324" onclick="CopyToClipboard('tag19324');return false;" class="tag-decoration">release</div><div id="tag8755" onclick="CopyToClipboard('tag8755');return false;" class="tag-decoration">release-df75df0</div><div id="tag16478" onclick="CopyToClipboard('tag16478');return false;" class="tag-decoration">release-0.15.2</div><div id="tag12333" onclick="CopyToClipboard('tag12333');return false;" class="tag-decoration">release-v0</div><div id="tag11355" onclick="CopyToClipboard('tag11355');return false;" class="tag-decoration">release-v0.15</div><div id="tag14863" onclick="CopyToClipboard('tag14863');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/df75df077d5f24b753427f7685ff9d323f47d4fb" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/26364175448" target="_blank">2026-05-24 14:40:27</a></td></tr>
<tr><td><div id="tag1004" onclick="CopyToClipboard('tag1004');return false;" class="tag-decoration">testing</div><div id="tag28330" onclick="CopyToClipboard('tag28330');return false;" class="tag-decoration">testing-ea78705</div><div id="tag27860" onclick="CopyToClipboard('tag27860');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag28416" onclick="CopyToClipboard('tag28416');return false;" class="tag-decoration">testing-v0</div><div id="tag21531" onclick="CopyToClipboard('tag21531');return false;" class="tag-decoration">testing-v0.15</div><div id="tag17187" onclick="CopyToClipboard('tag17187');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ea78705fc5fd1cdd93b67834af43cb4dfaa5bc0f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/26364174507" target="_blank">2026-05-24 14:40:24</a></td></tr>
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
