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
<tr><td><div id="tag32071" onclick="CopyToClipboard('tag32071');return false;" class="tag-decoration">nightly</div><div id="tag8096" onclick="CopyToClipboard('tag8096');return false;" class="tag-decoration">nightly-eb38d7e</div><div id="tag30752" onclick="CopyToClipboard('tag30752');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/eb38d7e0c3c3a91437a2463536680edc297cd680" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218274" target="_blank">2026-01-28 05:23:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24611" onclick="CopyToClipboard('tag24611');return false;" class="tag-decoration">release</div><div id="tag5915" onclick="CopyToClipboard('tag5915');return false;" class="tag-decoration">release-e8fa352</div><div id="tag2989" onclick="CopyToClipboard('tag2989');return false;" class="tag-decoration">release-0.14.5</div><div id="tag6783" onclick="CopyToClipboard('tag6783');return false;" class="tag-decoration">release-v0</div><div id="tag18933" onclick="CopyToClipboard('tag18933');return false;" class="tag-decoration">release-v0.14</div><div id="tag24688" onclick="CopyToClipboard('tag24688');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e8fa3524f8a266a77d82cb2a9a4ae7d4a7c4f86d" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218825" target="_blank">2026-01-28 05:23:49</a></td></tr>
<tr><td><div id="tag19325" onclick="CopyToClipboard('tag19325');return false;" class="tag-decoration">testing</div><div id="tag27959" onclick="CopyToClipboard('tag27959');return false;" class="tag-decoration">testing-d17c281</div><div id="tag30668" onclick="CopyToClipboard('tag30668');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag29044" onclick="CopyToClipboard('tag29044');return false;" class="tag-decoration">testing-v0</div><div id="tag22383" onclick="CopyToClipboard('tag22383');return false;" class="tag-decoration">testing-v0.14</div><div id="tag9683" onclick="CopyToClipboard('tag9683');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d17c2813912a7e2a80e5846dc344493711a4d2cc" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426219063" target="_blank">2026-01-28 05:23:50</a></td></tr>
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
