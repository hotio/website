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
<tr><td><div id="tag14431" onclick="CopyToClipboard('tag14431');return false;" class="tag-decoration">nightly</div><div id="tag9567" onclick="CopyToClipboard('tag9567');return false;" class="tag-decoration">nightly-79f8898</div><div id="tag11632" onclick="CopyToClipboard('tag11632');return false;" class="tag-decoration">nightly-dca9c0ac42a3df93bc9eb0fc52e53ebd44b75f11</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/79f8898af6e9ea6c9a243cd2ad0a232fe744867e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920183587" target="_blank">2026-08-26 01:45:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14823" onclick="CopyToClipboard('tag14823');return false;" class="tag-decoration">release</div><div id="tag26889" onclick="CopyToClipboard('tag26889');return false;" class="tag-decoration">release-30cd718</div><div id="tag19090" onclick="CopyToClipboard('tag19090');return false;" class="tag-decoration">release-0.15.2</div><div id="tag31431" onclick="CopyToClipboard('tag31431');return false;" class="tag-decoration">release-v0</div><div id="tag26067" onclick="CopyToClipboard('tag26067');return false;" class="tag-decoration">release-v0.15</div><div id="tag13380" onclick="CopyToClipboard('tag13380');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/30cd718899f402536f433e6950ff526671bc738a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920181527" target="_blank">2026-08-26 01:45:32</a></td></tr>
<tr><td><div id="tag11163" onclick="CopyToClipboard('tag11163');return false;" class="tag-decoration">testing</div><div id="tag14070" onclick="CopyToClipboard('tag14070');return false;" class="tag-decoration">testing-0a6e273</div><div id="tag26678" onclick="CopyToClipboard('tag26678');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag14486" onclick="CopyToClipboard('tag14486');return false;" class="tag-decoration">testing-v0</div><div id="tag22473" onclick="CopyToClipboard('tag22473');return false;" class="tag-decoration">testing-v0.15</div><div id="tag7024" onclick="CopyToClipboard('tag7024');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6e273db21fd03a0fdb115cefee874bc4e2e292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32920191732" target="_blank">2026-08-26 01:45:42</a></td></tr>
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
