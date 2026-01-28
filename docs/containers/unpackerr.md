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
<tr><td><div id="tag6183" onclick="CopyToClipboard('tag6183');return false;" class="tag-decoration">nightly</div><div id="tag16564" onclick="CopyToClipboard('tag16564');return false;" class="tag-decoration">nightly-1e6aa3f</div><div id="tag19805" onclick="CopyToClipboard('tag19805');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/1e6aa3ff4519ea2bd7cc3724a1266634b079a0a4" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21428875371" target="_blank">2026-01-28 07:15:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24517" onclick="CopyToClipboard('tag24517');return false;" class="tag-decoration">release</div><div id="tag15444" onclick="CopyToClipboard('tag15444');return false;" class="tag-decoration">release-e8fa352</div><div id="tag7909" onclick="CopyToClipboard('tag7909');return false;" class="tag-decoration">release-0.14.5</div><div id="tag10427" onclick="CopyToClipboard('tag10427');return false;" class="tag-decoration">release-v0</div><div id="tag26756" onclick="CopyToClipboard('tag26756');return false;" class="tag-decoration">release-v0.14</div><div id="tag5337" onclick="CopyToClipboard('tag5337');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e8fa3524f8a266a77d82cb2a9a4ae7d4a7c4f86d" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218825" target="_blank">2026-01-28 05:23:49</a></td></tr>
<tr><td><div id="tag18611" onclick="CopyToClipboard('tag18611');return false;" class="tag-decoration">testing</div><div id="tag14302" onclick="CopyToClipboard('tag14302');return false;" class="tag-decoration">testing-d17c281</div><div id="tag7191" onclick="CopyToClipboard('tag7191');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag19732" onclick="CopyToClipboard('tag19732');return false;" class="tag-decoration">testing-v0</div><div id="tag21134" onclick="CopyToClipboard('tag21134');return false;" class="tag-decoration">testing-v0.14</div><div id="tag25966" onclick="CopyToClipboard('tag25966');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d17c2813912a7e2a80e5846dc344493711a4d2cc" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426219063" target="_blank">2026-01-28 05:23:50</a></td></tr>
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
