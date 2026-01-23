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
<tr><td><div id="tag22406" onclick="CopyToClipboard('tag22406');return false;" class="tag-decoration">nightly</div><div id="tag20165" onclick="CopyToClipboard('tag20165');return false;" class="tag-decoration">nightly-fd9699f</div><div id="tag2684" onclick="CopyToClipboard('tag2684');return false;" class="tag-decoration">nightly-62755692e9f0e3db1a2758ad450e9c6eed54bdf9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/fd9699fa72fd2c7e061d4de12d9ee51ea0ee9fa8" target="_blank">Version update: beba2ea0995a67ab8d48939c335e3fafda01997a => 62755692e9f0e3db1a2758ad450e9c6eed54bdf9</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21285280768" target="_blank">2026-01-23 11:55:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21786" onclick="CopyToClipboard('tag21786');return false;" class="tag-decoration">release</div><div id="tag12249" onclick="CopyToClipboard('tag12249');return false;" class="tag-decoration">release-742fef8</div><div id="tag24722" onclick="CopyToClipboard('tag24722');return false;" class="tag-decoration">release-2.7.3</div><div id="tag9402" onclick="CopyToClipboard('tag9402');return false;" class="tag-decoration">release-v2</div><div id="tag3262" onclick="CopyToClipboard('tag3262');return false;" class="tag-decoration">release-v2.7</div><div id="tag16385" onclick="CopyToClipboard('tag16385');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/742fef875044987b708ccf6be895873853c943b0" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21246774940" target="_blank">2026-01-22 11:29:45</a></td></tr>
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
