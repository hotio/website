---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23302" onclick="CopyToClipboard('tag23302');return false;" class="tag-decoration">nightly</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">nightly-571db66</div><div id="tag18461" onclick="CopyToClipboard('tag18461');return false;" class="tag-decoration">nightly-3.2.0.5142</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/571db66f99e56b427a01815d192e4ba699cf9e91" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40148759155" target="_blank">2026-10-25 00:58:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24815" onclick="CopyToClipboard('tag24815');return false;" class="tag-decoration">release</div><div id="tag19917" onclick="CopyToClipboard('tag19917');return false;" class="tag-decoration">release-dd8ba10</div><div id="tag30791" onclick="CopyToClipboard('tag30791');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/dd8ba10545c0b9215309828cba77e7e200fdcac4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40072848360" target="_blank">2026-10-24 07:06:42</a></td></tr>
<tr><td><div id="tag19431" onclick="CopyToClipboard('tag19431');return false;" class="tag-decoration">testing</div><div id="tag3212" onclick="CopyToClipboard('tag3212');return false;" class="tag-decoration">testing-1377972</div><div id="tag10238" onclick="CopyToClipboard('tag10238');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/137797290bb67640de7e5c53142f2fe3d856d8b6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40072853066" target="_blank">2026-10-24 07:06:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
