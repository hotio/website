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
<tr><td><div id="tag22902" onclick="CopyToClipboard('tag22902');return false;" class="tag-decoration">nightly</div><div id="tag10364" onclick="CopyToClipboard('tag10364');return false;" class="tag-decoration">nightly-a39000d</div><div id="tag3146" onclick="CopyToClipboard('tag3146');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a39000df91e333decdf34f79156d987fc5a52ad4" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322464820" target="_blank">2026-01-24 22:15:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29768" onclick="CopyToClipboard('tag29768');return false;" class="tag-decoration">release</div><div id="tag16961" onclick="CopyToClipboard('tag16961');return false;" class="tag-decoration">release-4ca4036</div><div id="tag28668" onclick="CopyToClipboard('tag28668');return false;" class="tag-decoration">release-0.14.5</div><div id="tag13246" onclick="CopyToClipboard('tag13246');return false;" class="tag-decoration">release-v0</div><div id="tag26870" onclick="CopyToClipboard('tag26870');return false;" class="tag-decoration">release-v0.14</div><div id="tag10707" onclick="CopyToClipboard('tag10707');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4ca403604b3e8646c469c3c25c02285941284c21" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21246781290" target="_blank">2026-01-22 11:29:59</a></td></tr>
<tr><td><div id="tag5392" onclick="CopyToClipboard('tag5392');return false;" class="tag-decoration">testing</div><div id="tag23096" onclick="CopyToClipboard('tag23096');return false;" class="tag-decoration">testing-bb45458</div><div id="tag2110" onclick="CopyToClipboard('tag2110');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag14878" onclick="CopyToClipboard('tag14878');return false;" class="tag-decoration">testing-v0</div><div id="tag31107" onclick="CopyToClipboard('tag31107');return false;" class="tag-decoration">testing-v0.14</div><div id="tag16936" onclick="CopyToClipboard('tag16936');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/bb454589f6d3fa83696bd88ff8c40e6ee66f5633" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21246782240" target="_blank">2026-01-22 11:30:00</a></td></tr>
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
