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
<tr><td><div id="tag12560" onclick="CopyToClipboard('tag12560');return false;" class="tag-decoration">nightly</div><div id="tag20319" onclick="CopyToClipboard('tag20319');return false;" class="tag-decoration">nightly-8fb8727</div><div id="tag7428" onclick="CopyToClipboard('tag7428');return false;" class="tag-decoration">nightly-87c0c95ce20dfa20ca6df5aac0c331c637953dca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8fb8727c3a0c4ff0b368fab49a66e395e39c8e19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/33110011874" target="_blank">2026-08-27 19:45:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag663" onclick="CopyToClipboard('tag663');return false;" class="tag-decoration">release</div><div id="tag5269" onclick="CopyToClipboard('tag5269');return false;" class="tag-decoration">release-30cd718</div><div id="tag23047" onclick="CopyToClipboard('tag23047');return false;" class="tag-decoration">release-0.15.2</div><div id="tag17226" onclick="CopyToClipboard('tag17226');return false;" class="tag-decoration">release-v0</div><div id="tag25554" onclick="CopyToClipboard('tag25554');return false;" class="tag-decoration">release-v0.15</div><div id="tag28746" onclick="CopyToClipboard('tag28746');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/30cd718899f402536f433e6950ff526671bc738a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920181527" target="_blank">2026-08-26 01:45:32</a></td></tr>
<tr><td><div id="tag7900" onclick="CopyToClipboard('tag7900');return false;" class="tag-decoration">testing</div><div id="tag3465" onclick="CopyToClipboard('tag3465');return false;" class="tag-decoration">testing-0a6e273</div><div id="tag18741" onclick="CopyToClipboard('tag18741');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag9314" onclick="CopyToClipboard('tag9314');return false;" class="tag-decoration">testing-v0</div><div id="tag17664" onclick="CopyToClipboard('tag17664');return false;" class="tag-decoration">testing-v0.15</div><div id="tag27835" onclick="CopyToClipboard('tag27835');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6e273db21fd03a0fdb115cefee874bc4e2e292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920191732" target="_blank">2026-08-26 01:45:42</a></td></tr>
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
