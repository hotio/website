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
<tr><td><div id="tag4546" onclick="CopyToClipboard('tag4546');return false;" class="tag-decoration">nightly</div><div id="tag17844" onclick="CopyToClipboard('tag17844');return false;" class="tag-decoration">nightly-c0e41bb</div><div id="tag22430" onclick="CopyToClipboard('tag22430');return false;" class="tag-decoration">nightly-f9ad1103218f248fecc8cb506bd7bd8a8d7118eb</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/c0e41bb40e0cfe7f9591aa1e2bf40f6c42cd2d38" target="_blank">Version update: 1b830500d18707e639f56d6d0d17cf059f74feca => f9ad1103218f248fecc8cb506bd7bd8a8d7118eb</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21684749446" target="_blank">2026-02-04 19:09:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15150" onclick="CopyToClipboard('tag15150');return false;" class="tag-decoration">release</div><div id="tag4782" onclick="CopyToClipboard('tag4782');return false;" class="tag-decoration">release-be8dbeb</div><div id="tag11267" onclick="CopyToClipboard('tag11267');return false;" class="tag-decoration">release-0.14.5</div><div id="tag19119" onclick="CopyToClipboard('tag19119');return false;" class="tag-decoration">release-v0</div><div id="tag12635" onclick="CopyToClipboard('tag12635');return false;" class="tag-decoration">release-v0.14</div><div id="tag1910" onclick="CopyToClipboard('tag1910');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/be8dbeb260746ea2bede1e064d21c5acddf2534d" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21428875994" target="_blank">2026-01-28 07:15:42</a></td></tr>
<tr><td><div id="tag6045" onclick="CopyToClipboard('tag6045');return false;" class="tag-decoration">testing</div><div id="tag9752" onclick="CopyToClipboard('tag9752');return false;" class="tag-decoration">testing-d447c68</div><div id="tag24194" onclick="CopyToClipboard('tag24194');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag28653" onclick="CopyToClipboard('tag28653');return false;" class="tag-decoration">testing-v0</div><div id="tag7193" onclick="CopyToClipboard('tag7193');return false;" class="tag-decoration">testing-v0.14</div><div id="tag3610" onclick="CopyToClipboard('tag3610');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d447c68baebe6430b3dc12e57dfce9b9d3a1b061" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21428876515" target="_blank">2026-01-28 07:15:44</a></td></tr>
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
