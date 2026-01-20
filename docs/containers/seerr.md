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
<tr><td><div id="tag6445" onclick="CopyToClipboard('tag6445');return false;" class="tag-decoration">nightly</div><div id="tag1212" onclick="CopyToClipboard('tag1212');return false;" class="tag-decoration">nightly-d853df3</div><div id="tag168" onclick="CopyToClipboard('tag168');return false;" class="tag-decoration">nightly-dbd5935ade24772d85194edb86abc7720a3bd674</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d853df30ab5f20f272772b2101d9c1700dd83e6f" target="_blank">Version update: bb2120c14d4bf2582a8be7ca57a4db1310a947a6 => dbd5935ade24772d85194edb86abc7720a3bd674</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21170572028" target="_blank">2026-01-20 11:55:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31070" onclick="CopyToClipboard('tag31070');return false;" class="tag-decoration">release</div><div id="tag9793" onclick="CopyToClipboard('tag9793');return false;" class="tag-decoration">release-dada826</div><div id="tag20051" onclick="CopyToClipboard('tag20051');return false;" class="tag-decoration">release-2.7.3</div><div id="tag31245" onclick="CopyToClipboard('tag31245');return false;" class="tag-decoration">release-v2</div><div id="tag10193" onclick="CopyToClipboard('tag10193');return false;" class="tag-decoration">release-v2.7</div><div id="tag4334" onclick="CopyToClipboard('tag4334');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dada82666d30dae79d67f946b92d0f66af91890e" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21132236309" target="_blank">2026-01-19 09:31:07</a></td></tr>
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
