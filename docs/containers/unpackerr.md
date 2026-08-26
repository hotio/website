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
<tr><td><div id="tag6774" onclick="CopyToClipboard('tag6774');return false;" class="tag-decoration">nightly</div><div id="tag3127" onclick="CopyToClipboard('tag3127');return false;" class="tag-decoration">nightly-519a74e</div><div id="tag2822" onclick="CopyToClipboard('tag2822');return false;" class="tag-decoration">nightly-a3ae1cf9cc5bdc5a22a753b61896ab3f60447dea</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/519a74ee7fd16944bee63ca772c7ef04071e810c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/33022537363" target="_blank">2026-08-26 23:14:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8571" onclick="CopyToClipboard('tag8571');return false;" class="tag-decoration">release</div><div id="tag11796" onclick="CopyToClipboard('tag11796');return false;" class="tag-decoration">release-30cd718</div><div id="tag19324" onclick="CopyToClipboard('tag19324');return false;" class="tag-decoration">release-0.15.2</div><div id="tag27348" onclick="CopyToClipboard('tag27348');return false;" class="tag-decoration">release-v0</div><div id="tag31109" onclick="CopyToClipboard('tag31109');return false;" class="tag-decoration">release-v0.15</div><div id="tag14420" onclick="CopyToClipboard('tag14420');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/30cd718899f402536f433e6950ff526671bc738a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920181527" target="_blank">2026-08-26 01:45:32</a></td></tr>
<tr><td><div id="tag11689" onclick="CopyToClipboard('tag11689');return false;" class="tag-decoration">testing</div><div id="tag18637" onclick="CopyToClipboard('tag18637');return false;" class="tag-decoration">testing-0a6e273</div><div id="tag13425" onclick="CopyToClipboard('tag13425');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag10" onclick="CopyToClipboard('tag10');return false;" class="tag-decoration">testing-v0</div><div id="tag28910" onclick="CopyToClipboard('tag28910');return false;" class="tag-decoration">testing-v0.15</div><div id="tag8137" onclick="CopyToClipboard('tag8137');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6e273db21fd03a0fdb115cefee874bc4e2e292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920191732" target="_blank">2026-08-26 01:45:42</a></td></tr>
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
