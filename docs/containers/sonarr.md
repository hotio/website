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
<tr><td><div id="tag13814" onclick="CopyToClipboard('tag13814');return false;" class="tag-decoration">nightly</div><div id="tag11458" onclick="CopyToClipboard('tag11458');return false;" class="tag-decoration">nightly-4.0.16.2946</div><div id="tag13362" onclick="CopyToClipboard('tag13362');return false;" class="tag-decoration">nightly-e2b79e9</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/e2b79e9b269dd0b37231dc754bed3a415934a8ec" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20845769878" target="_blank">2026-01-09 08:22:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13650" onclick="CopyToClipboard('tag13650');return false;" class="tag-decoration">release</div><div id="tag10338" onclick="CopyToClipboard('tag10338');return false;" class="tag-decoration">release-4.0.16.2944</div><div id="tag4154" onclick="CopyToClipboard('tag4154');return false;" class="tag-decoration">release-9831336</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/98313364ec21b4e7b08632e1918f13ca9c0fba5d" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20850352395" target="_blank">2026-01-09 11:23:33</a></td></tr>
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
