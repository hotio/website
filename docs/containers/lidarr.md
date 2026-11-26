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
<tr><td><div id="tag25221" onclick="CopyToClipboard('tag25221');return false;" class="tag-decoration">nightly</div><div id="tag20957" onclick="CopyToClipboard('tag20957');return false;" class="tag-decoration">nightly-5ecbb17</div><div id="tag30155" onclick="CopyToClipboard('tag30155');return false;" class="tag-decoration">nightly-4.0.0.5247</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/5ecbb17c0b674baf963ac6608c59ed07a8b08607" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45912223569" target="_blank">2026-11-26 23:39:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24916" onclick="CopyToClipboard('tag24916');return false;" class="tag-decoration">release</div><div id="tag29891" onclick="CopyToClipboard('tag29891');return false;" class="tag-decoration">release-60b8dc7</div><div id="tag31437" onclick="CopyToClipboard('tag31437');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/60b8dc7c8776b62834cc228826e7ced82c6f2ccf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45757823218" target="_blank">2026-11-26 04:51:16</a></td></tr>
<tr><td><div id="tag4475" onclick="CopyToClipboard('tag4475');return false;" class="tag-decoration">testing</div><div id="tag20393" onclick="CopyToClipboard('tag20393');return false;" class="tag-decoration">testing-57565d1</div><div id="tag10156" onclick="CopyToClipboard('tag10156');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/57565d114ed381700531c2b4101c4ee34a97dbb4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45757820134" target="_blank">2026-11-26 04:51:15</a></td></tr>
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
