---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

!!! warning
    The tag `release` is (until the Seerr project does a release) still Jellyseerr. Do not attempt to migrate from `hotio/overseerr:___` to `hotio/seerr:release`. It should be safe to go from `hotio/overseerr:___` and `hotio/jellyseerr:___` to `hotio/seerr:nightly`. It is also safe to go from `hotio/jellyseerr:release` to `hotio/seerr:release`, because they are the same version at present. If this is all too complicated, stay where you are! If you need help, join the discord server.

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
<tr><td><div id="tag18014" onclick="CopyToClipboard('tag18014');return false;" class="tag-decoration">nightly</div><div id="tag23474" onclick="CopyToClipboard('tag23474');return false;" class="tag-decoration">nightly-bdf4e77</div><div id="tag15114" onclick="CopyToClipboard('tag15114');return false;" class="tag-decoration">nightly-92504b7864e9095ef7df52c715c1c3d7985bf9c8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/bdf4e77cbb6b92f42a95aa43aa87ec13bcd25d16" target="_blank">Version update: 018e04a657795f528e48ac2c191891371321ac8d => 92504b7864e9095ef7df52c715c1c3d7985bf9c8</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22022553777" target="_blank">2026-02-14 18:54:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25231" onclick="CopyToClipboard('tag25231');return false;" class="tag-decoration">release</div><div id="tag3759" onclick="CopyToClipboard('tag3759');return false;" class="tag-decoration">release-cc619ca</div><div id="tag30322" onclick="CopyToClipboard('tag30322');return false;" class="tag-decoration">release-2.7.3</div><div id="tag3726" onclick="CopyToClipboard('tag3726');return false;" class="tag-decoration">release-v2</div><div id="tag3986" onclick="CopyToClipboard('tag3986');return false;" class="tag-decoration">release-v2.7</div><div id="tag2351" onclick="CopyToClipboard('tag2351');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/cc619ca6fd33e14bf7ef2e2df0bc2d801abab3b2" target="_blank">Version update: 3.0.0 => 2.7.3</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22021840671" target="_blank">2026-02-14 18:00:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
