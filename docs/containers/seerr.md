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
<tr><td><div id="tag24462" onclick="CopyToClipboard('tag24462');return false;" class="tag-decoration">nightly</div><div id="tag29201" onclick="CopyToClipboard('tag29201');return false;" class="tag-decoration">nightly-adbcf803332f6d1c4da04c9f2bbbcf7068e7921d</div><div id="tag27594" onclick="CopyToClipboard('tag27594');return false;" class="tag-decoration">nightly-ca4574d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/ca4574dbd3257e2f6dcacf6832eb47061cf647eb" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20845769252" target="_blank">2026-01-09 08:22:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5359" onclick="CopyToClipboard('tag5359');return false;" class="tag-decoration">release</div><div id="tag29486" onclick="CopyToClipboard('tag29486');return false;" class="tag-decoration">release-2.7.3</div><div id="tag29223" onclick="CopyToClipboard('tag29223');return false;" class="tag-decoration">release-c42a125</div><div id="tag18066" onclick="CopyToClipboard('tag18066');return false;" class="tag-decoration">release-v2</div><div id="tag1743" onclick="CopyToClipboard('tag1743');return false;" class="tag-decoration">release-v2.7</div><div id="tag29016" onclick="CopyToClipboard('tag29016');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/c42a12578582570253d771cb8d57a75e462c77f8" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20845769417" target="_blank">2026-01-09 08:22:41</a></td></tr>
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
