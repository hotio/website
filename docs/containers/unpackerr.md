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
<tr><td><div id="tag31143" onclick="CopyToClipboard('tag31143');return false;" class="tag-decoration">nightly</div><div id="tag4377" onclick="CopyToClipboard('tag4377');return false;" class="tag-decoration">nightly-a39000d</div><div id="tag15344" onclick="CopyToClipboard('tag15344');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a39000df91e333decdf34f79156d987fc5a52ad4" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322464820" target="_blank">2026-01-24 22:15:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17953" onclick="CopyToClipboard('tag17953');return false;" class="tag-decoration">release</div><div id="tag5596" onclick="CopyToClipboard('tag5596');return false;" class="tag-decoration">release-72e1705</div><div id="tag7729" onclick="CopyToClipboard('tag7729');return false;" class="tag-decoration">release-0.14.5</div><div id="tag3557" onclick="CopyToClipboard('tag3557');return false;" class="tag-decoration">release-v0</div><div id="tag31025" onclick="CopyToClipboard('tag31025');return false;" class="tag-decoration">release-v0.14</div><div id="tag18723" onclick="CopyToClipboard('tag18723');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/72e1705926849b4fadcfb6deab74175add495f2e" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322465148" target="_blank">2026-01-24 22:15:34</a></td></tr>
<tr><td><div id="tag14212" onclick="CopyToClipboard('tag14212');return false;" class="tag-decoration">testing</div><div id="tag3275" onclick="CopyToClipboard('tag3275');return false;" class="tag-decoration">testing-bb45458</div><div id="tag13700" onclick="CopyToClipboard('tag13700');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag3218" onclick="CopyToClipboard('tag3218');return false;" class="tag-decoration">testing-v0</div><div id="tag17383" onclick="CopyToClipboard('tag17383');return false;" class="tag-decoration">testing-v0.14</div><div id="tag5841" onclick="CopyToClipboard('tag5841');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/bb454589f6d3fa83696bd88ff8c40e6ee66f5633" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21246782240" target="_blank">2026-01-22 11:30:00</a></td></tr>
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
