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
<tr><td><div id="tag20032" onclick="CopyToClipboard('tag20032');return false;" class="tag-decoration">nightly</div><div id="tag18473" onclick="CopyToClipboard('tag18473');return false;" class="tag-decoration">nightly-8c8d1c3</div><div id="tag16360" onclick="CopyToClipboard('tag16360');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8c8d1c3d32fe2a549f5e68f8b9e65d7eca0eaa3c" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552149834" target="_blank">2026-04-17 06:54:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18946" onclick="CopyToClipboard('tag18946');return false;" class="tag-decoration">release</div><div id="tag28638" onclick="CopyToClipboard('tag28638');return false;" class="tag-decoration">release-d92585e</div><div id="tag23019" onclick="CopyToClipboard('tag23019');return false;" class="tag-decoration">release-0.15.2</div><div id="tag27211" onclick="CopyToClipboard('tag27211');return false;" class="tag-decoration">release-v0</div><div id="tag14273" onclick="CopyToClipboard('tag14273');return false;" class="tag-decoration">release-v0.15</div><div id="tag10089" onclick="CopyToClipboard('tag10089');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d92585eeea221d20f390b80ab3df12abd2d297c9" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829297109" target="_blank">2026-03-08 20:33:31</a></td></tr>
<tr><td><div id="tag9766" onclick="CopyToClipboard('tag9766');return false;" class="tag-decoration">testing</div><div id="tag3542" onclick="CopyToClipboard('tag3542');return false;" class="tag-decoration">testing-0b33773</div><div id="tag19730" onclick="CopyToClipboard('tag19730');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag6144" onclick="CopyToClipboard('tag6144');return false;" class="tag-decoration">testing-v0</div><div id="tag11814" onclick="CopyToClipboard('tag11814');return false;" class="tag-decoration">testing-v0.15</div><div id="tag7104" onclick="CopyToClipboard('tag7104');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b337731160676905a73944e3ebf1e4ac20db7ab" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150822" target="_blank">2026-04-17 06:54:42</a></td></tr>
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
