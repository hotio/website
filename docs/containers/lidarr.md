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
<tr><td><div id="tag2263" onclick="CopyToClipboard('tag2263');return false;" class="tag-decoration">nightly</div><div id="tag9072" onclick="CopyToClipboard('tag9072');return false;" class="tag-decoration">nightly-6b2516f</div><div id="tag1539" onclick="CopyToClipboard('tag1539');return false;" class="tag-decoration">nightly-3.1.2.4939</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/6b2516f3f72766af87ba84db8399415583f9337e" target="_blank">Upstream/Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25698844717" target="_blank">2026-05-11 21:38:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3579" onclick="CopyToClipboard('tag3579');return false;" class="tag-decoration">release</div><div id="tag3478" onclick="CopyToClipboard('tag3478');return false;" class="tag-decoration">release-a9540ad</div><div id="tag25454" onclick="CopyToClipboard('tag25454');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/a9540ad891498e84aa88b8a6812bccf6ddd90c66" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25664467287" target="_blank">2026-05-11 10:23:41</a></td></tr>
<tr><td><div id="tag9029" onclick="CopyToClipboard('tag9029');return false;" class="tag-decoration">testing</div><div id="tag17910" onclick="CopyToClipboard('tag17910');return false;" class="tag-decoration">testing-fb73b77</div><div id="tag11264" onclick="CopyToClipboard('tag11264');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/fb73b778ed89221b879d49d59482943b25049ef6" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25664469064" target="_blank">2026-05-11 10:23:43</a></td></tr>
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
