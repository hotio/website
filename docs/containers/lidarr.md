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
<tr><td><div id="tag3" onclick="CopyToClipboard('tag3');return false;" class="tag-decoration">nightly</div><div id="tag29600" onclick="CopyToClipboard('tag29600');return false;" class="tag-decoration">nightly-32dea69</div><div id="tag19119" onclick="CopyToClipboard('tag19119');return false;" class="tag-decoration">nightly-3.1.3.4975</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/32dea69f35e243bb6b886408fc2f51fcc886def5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29169746872" target="_blank">2026-07-11 21:59:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19601" onclick="CopyToClipboard('tag19601');return false;" class="tag-decoration">release</div><div id="tag18848" onclick="CopyToClipboard('tag18848');return false;" class="tag-decoration">release-89f7036</div><div id="tag17057" onclick="CopyToClipboard('tag17057');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/89f7036f8d3f7bb0eca59fabbf515105de7e979e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/28976295145" target="_blank">2026-07-08 21:15:56</a></td></tr>
<tr><td><div id="tag25805" onclick="CopyToClipboard('tag25805');return false;" class="tag-decoration">testing</div><div id="tag7462" onclick="CopyToClipboard('tag7462');return false;" class="tag-decoration">testing-ff2038d</div><div id="tag9963" onclick="CopyToClipboard('tag9963');return false;" class="tag-decoration">testing-3.1.3.4968</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/ff2038df2c0b8b295d1030def43e5349f49c1297" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/28976296162" target="_blank">2026-07-08 21:15:57</a></td></tr>
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
