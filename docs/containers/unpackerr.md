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
<tr><td><div id="tag11865" onclick="CopyToClipboard('tag11865');return false;" class="tag-decoration">nightly</div><div id="tag10477" onclick="CopyToClipboard('tag10477');return false;" class="tag-decoration">nightly-df0d11a</div><div id="tag11812" onclick="CopyToClipboard('tag11812');return false;" class="tag-decoration">nightly-dca9c0ac42a3df93bc9eb0fc52e53ebd44b75f11</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/df0d11a9cecdbd03125e5dda71dbe30b505ea80c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32789420796" target="_blank">2026-08-24 23:27:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2967" onclick="CopyToClipboard('tag2967');return false;" class="tag-decoration">release</div><div id="tag59" onclick="CopyToClipboard('tag59');return false;" class="tag-decoration">release-30cd718</div><div id="tag2512" onclick="CopyToClipboard('tag2512');return false;" class="tag-decoration">release-0.15.2</div><div id="tag28823" onclick="CopyToClipboard('tag28823');return false;" class="tag-decoration">release-v0</div><div id="tag10620" onclick="CopyToClipboard('tag10620');return false;" class="tag-decoration">release-v0.15</div><div id="tag11685" onclick="CopyToClipboard('tag11685');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/30cd718899f402536f433e6950ff526671bc738a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920181527" target="_blank">2026-08-26 01:45:32</a></td></tr>
<tr><td><div id="tag2029" onclick="CopyToClipboard('tag2029');return false;" class="tag-decoration">testing</div><div id="tag15385" onclick="CopyToClipboard('tag15385');return false;" class="tag-decoration">testing-0a6e273</div><div id="tag29646" onclick="CopyToClipboard('tag29646');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag2445" onclick="CopyToClipboard('tag2445');return false;" class="tag-decoration">testing-v0</div><div id="tag13371" onclick="CopyToClipboard('tag13371');return false;" class="tag-decoration">testing-v0.15</div><div id="tag9013" onclick="CopyToClipboard('tag9013');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6e273db21fd03a0fdb115cefee874bc4e2e292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920191732" target="_blank">2026-08-26 01:45:42</a></td></tr>
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
