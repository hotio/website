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
<tr><td><div id="tag26965" onclick="CopyToClipboard('tag26965');return false;" class="tag-decoration">nightly</div><div id="tag30268" onclick="CopyToClipboard('tag30268');return false;" class="tag-decoration">nightly-adbcf803332f6d1c4da04c9f2bbbcf7068e7921d</div><div id="tag27513" onclick="CopyToClipboard('tag27513');return false;" class="tag-decoration">nightly-ca4574d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/ca4574dbd3257e2f6dcacf6832eb47061cf647eb" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20845769252" target="_blank">2026-01-09 08:22:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22780" onclick="CopyToClipboard('tag22780');return false;" class="tag-decoration">release</div><div id="tag19527" onclick="CopyToClipboard('tag19527');return false;" class="tag-decoration">release-2.7.3</div><div id="tag26692" onclick="CopyToClipboard('tag26692');return false;" class="tag-decoration">release-39894bc</div><div id="tag24350" onclick="CopyToClipboard('tag24350');return false;" class="tag-decoration">release-v2</div><div id="tag14181" onclick="CopyToClipboard('tag14181');return false;" class="tag-decoration">release-v2.7</div><div id="tag25609" onclick="CopyToClipboard('tag25609');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/39894bc482943d2aabe3d81fcc729f178e1592b2" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20850351478" target="_blank">2026-01-09 11:23:30</a></td></tr>
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
