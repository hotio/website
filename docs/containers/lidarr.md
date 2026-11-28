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
<tr><td><div id="tag18725" onclick="CopyToClipboard('tag18725');return false;" class="tag-decoration">nightly</div><div id="tag15937" onclick="CopyToClipboard('tag15937');return false;" class="tag-decoration">nightly-3ab2783</div><div id="tag3597" onclick="CopyToClipboard('tag3597');return false;" class="tag-decoration">nightly-4.0.0.5247</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/3ab2783b13aa6f6cfcaedb848fc255970d23b70f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46046285988" target="_blank">2026-11-27 18:01:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23533" onclick="CopyToClipboard('tag23533');return false;" class="tag-decoration">release</div><div id="tag461" onclick="CopyToClipboard('tag461');return false;" class="tag-decoration">release-cf91095</div><div id="tag10646" onclick="CopyToClipboard('tag10646');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/cf910952224e55521f92100d6c66ecf115d25593" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46095102993" target="_blank">2026-11-28 01:50:16</a></td></tr>
<tr><td><div id="tag2531" onclick="CopyToClipboard('tag2531');return false;" class="tag-decoration">testing</div><div id="tag2963" onclick="CopyToClipboard('tag2963');return false;" class="tag-decoration">testing-0299e1d</div><div id="tag32571" onclick="CopyToClipboard('tag32571');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/0299e1dfb20a7be1a218f569aab9f839a855b90f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46046271333" target="_blank">2026-11-27 18:01:12</a></td></tr>
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
