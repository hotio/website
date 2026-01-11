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
<tr><td><div id="tag30509" onclick="CopyToClipboard('tag30509');return false;" class="tag-decoration">nightly</div><div id="tag11445" onclick="CopyToClipboard('tag11445');return false;" class="tag-decoration">nightly-4ab919360a7da0c3dae43e6c46878e858164f98a</div><div id="tag30616" onclick="CopyToClipboard('tag30616');return false;" class="tag-decoration">nightly-80f21ad</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/80f21adcb7e3ecacec7ddac915f1be7dbc6581ad" target="_blank">Version update: adbcf803332f6d1c4da04c9f2bbbcf7068e7921d => 4ab919360a7da0c3dae43e6c46878e858164f98a</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20899281997" target="_blank">2026-01-11 17:43:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12702" onclick="CopyToClipboard('tag12702');return false;" class="tag-decoration">release</div><div id="tag12703" onclick="CopyToClipboard('tag12703');return false;" class="tag-decoration">release-2.7.3</div><div id="tag29382" onclick="CopyToClipboard('tag29382');return false;" class="tag-decoration">release-f8ae145</div><div id="tag24263" onclick="CopyToClipboard('tag24263');return false;" class="tag-decoration">release-v2</div><div id="tag24805" onclick="CopyToClipboard('tag24805');return false;" class="tag-decoration">release-v2.7</div><div id="tag11007" onclick="CopyToClipboard('tag11007');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/f8ae145b6ba73f1d403950558a4731b96f970704" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20898166763" target="_blank">2026-01-11 16:17:49</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
