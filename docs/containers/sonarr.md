---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29617" onclick="CopyToClipboard('tag29617');return false;" class="tag-decoration">nightly</div><div id="tag2724" onclick="CopyToClipboard('tag2724');return false;" class="tag-decoration">nightly-4.0.16.2946</div><div id="tag18216" onclick="CopyToClipboard('tag18216');return false;" class="tag-decoration">nightly-8306146</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/830614652be0998615f4240ed30f091cdecb05b8" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20842480263" target="_blank">2026-01-09 05:41:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31732" onclick="CopyToClipboard('tag31732');return false;" class="tag-decoration">release</div><div id="tag18050" onclick="CopyToClipboard('tag18050');return false;" class="tag-decoration">release-4.0.16.2944</div><div id="tag26908" onclick="CopyToClipboard('tag26908');return false;" class="tag-decoration">release-ed78b16</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/ed78b163ac9c40c651f32a65facc9ab0306c33e4" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20842480297" target="_blank">2026-01-09 05:41:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
