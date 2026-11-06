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
<tr><td><div id="tag17020" onclick="CopyToClipboard('tag17020');return false;" class="tag-decoration">nightly</div><div id="tag27633" onclick="CopyToClipboard('tag27633');return false;" class="tag-decoration">nightly-d9d6ae2</div><div id="tag24312" onclick="CopyToClipboard('tag24312');return false;" class="tag-decoration">nightly-3.2.1.5182</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/d9d6ae2a02bc067c77de54196c4589359030a7ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42308418934" target="_blank">2026-11-06 22:56:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31268" onclick="CopyToClipboard('tag31268');return false;" class="tag-decoration">release</div><div id="tag23284" onclick="CopyToClipboard('tag23284');return false;" class="tag-decoration">release-e651617</div><div id="tag1897" onclick="CopyToClipboard('tag1897');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/e65161753c4cd5c79b12ebb37fa20f23f2656c59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42308434316" target="_blank">2026-11-06 22:56:51</a></td></tr>
<tr><td><div id="tag8762" onclick="CopyToClipboard('tag8762');return false;" class="tag-decoration">testing</div><div id="tag27780" onclick="CopyToClipboard('tag27780');return false;" class="tag-decoration">testing-6e32936</div><div id="tag7201" onclick="CopyToClipboard('tag7201');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/6e329363b1d8ad20e404fdfc8aa32b529aa0a03c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42308426406" target="_blank">2026-11-06 22:56:47</a></td></tr>
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
