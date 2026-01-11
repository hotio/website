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
<tr><td><div id="tag27878" onclick="CopyToClipboard('tag27878');return false;" class="tag-decoration">nightly</div><div id="tag13803" onclick="CopyToClipboard('tag13803');return false;" class="tag-decoration">nightly-adbcf803332f6d1c4da04c9f2bbbcf7068e7921d</div><div id="tag679" onclick="CopyToClipboard('tag679');return false;" class="tag-decoration">nightly-428ed03</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/428ed031c8cdc7b743742c408a0f026ce3a61756" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20892090260" target="_blank">2026-01-11 08:20:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31517" onclick="CopyToClipboard('tag31517');return false;" class="tag-decoration">release</div><div id="tag26957" onclick="CopyToClipboard('tag26957');return false;" class="tag-decoration">release-2.7.3</div><div id="tag8143" onclick="CopyToClipboard('tag8143');return false;" class="tag-decoration">release-39894bc</div><div id="tag10340" onclick="CopyToClipboard('tag10340');return false;" class="tag-decoration">release-v2</div><div id="tag24844" onclick="CopyToClipboard('tag24844');return false;" class="tag-decoration">release-v2.7</div><div id="tag13309" onclick="CopyToClipboard('tag13309');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/39894bc482943d2aabe3d81fcc729f178e1592b2" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20850351478" target="_blank">2026-01-09 11:23:30</a></td></tr>
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
