---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3420" onclick="CopyToClipboard('tag3420');return false;" class="tag-decoration">nightly</div><div id="tag10843" onclick="CopyToClipboard('tag10843');return false;" class="tag-decoration">nightly-6.1.1.10317</div><div id="tag3238" onclick="CopyToClipboard('tag3238');return false;" class="tag-decoration">nightly-be48842</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/be488424dc9c04b70b8669ecfd34d8f0011d115d" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20770105261" target="_blank">2026-01-07 03:57:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag417" onclick="CopyToClipboard('tag417');return false;" class="tag-decoration">release</div><div id="tag22103" onclick="CopyToClipboard('tag22103');return false;" class="tag-decoration">release-6.0.4.10291</div><div id="tag5140" onclick="CopyToClipboard('tag5140');return false;" class="tag-decoration">release-e434694</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e43469492b7837a924f18967362b1d612e3629b5" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20770105821" target="_blank">2026-01-07 03:57:46</a></td></tr>
<tr><td><div id="tag23855" onclick="CopyToClipboard('tag23855');return false;" class="tag-decoration">testing</div><div id="tag28229" onclick="CopyToClipboard('tag28229');return false;" class="tag-decoration">testing-6.1.0.10316</div><div id="tag14185" onclick="CopyToClipboard('tag14185');return false;" class="tag-decoration">testing-722f3ec</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/722f3ecfd082c1ba62d530f3508647ee705227cb" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20770106203" target="_blank">2026-01-07 03:57:47</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name radarr \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
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
