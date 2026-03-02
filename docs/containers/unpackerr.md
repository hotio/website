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
<tr><td><div id="tag6025" onclick="CopyToClipboard('tag6025');return false;" class="tag-decoration">nightly</div><div id="tag12111" onclick="CopyToClipboard('tag12111');return false;" class="tag-decoration">nightly-8a698fc</div><div id="tag24759" onclick="CopyToClipboard('tag24759');return false;" class="tag-decoration">nightly-d83d76922f52da31f8d6be926b838aaa0166c10b</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8a698fc489456e7d12410aaebda3835244d3fd9f" target="_blank">Version update: 320729880f6fb35f6ca1a444841b8a1854808592 => d83d76922f52da31f8d6be926b838aaa0166c10b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563008610" target="_blank">2026-03-02 05:39:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6750" onclick="CopyToClipboard('tag6750');return false;" class="tag-decoration">release</div><div id="tag19838" onclick="CopyToClipboard('tag19838');return false;" class="tag-decoration">release-1b24405</div><div id="tag6959" onclick="CopyToClipboard('tag6959');return false;" class="tag-decoration">release-0.14.5</div><div id="tag10359" onclick="CopyToClipboard('tag10359');return false;" class="tag-decoration">release-v0</div><div id="tag31025" onclick="CopyToClipboard('tag31025');return false;" class="tag-decoration">release-v0.14</div><div id="tag6347" onclick="CopyToClipboard('tag6347');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1b2440584c8c5c182575ee09194034a992ed0541" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292143031" target="_blank">2026-02-23 03:44:41</a></td></tr>
<tr><td><div id="tag9798" onclick="CopyToClipboard('tag9798');return false;" class="tag-decoration">testing</div><div id="tag19667" onclick="CopyToClipboard('tag19667');return false;" class="tag-decoration">testing-d57eee3</div><div id="tag29575" onclick="CopyToClipboard('tag29575');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag6613" onclick="CopyToClipboard('tag6613');return false;" class="tag-decoration">testing-v0</div><div id="tag22884" onclick="CopyToClipboard('tag22884');return false;" class="tag-decoration">testing-v0.14</div><div id="tag31369" onclick="CopyToClipboard('tag31369');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d57eee3d30c55ada7de7540fbf6472200f7917ca" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292143353" target="_blank">2026-02-23 03:44:42</a></td></tr>
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
