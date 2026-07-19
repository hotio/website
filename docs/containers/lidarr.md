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
<tr><td><div id="tag4674" onclick="CopyToClipboard('tag4674');return false;" class="tag-decoration">nightly</div><div id="tag661" onclick="CopyToClipboard('tag661');return false;" class="tag-decoration">nightly-4e75eb6</div><div id="tag32394" onclick="CopyToClipboard('tag32394');return false;" class="tag-decoration">nightly-3.1.3.4977</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/4e75eb61484a1d54405a6919aba452f627593d40" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29681052028" target="_blank">2026-07-19 09:08:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag802" onclick="CopyToClipboard('tag802');return false;" class="tag-decoration">release</div><div id="tag15577" onclick="CopyToClipboard('tag15577');return false;" class="tag-decoration">release-f373ffa</div><div id="tag28477" onclick="CopyToClipboard('tag28477');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/f373ffa41e27d649ec3195a1c5756a66c61027ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29356733844" target="_blank">2026-07-14 18:09:43</a></td></tr>
<tr><td><div id="tag1070" onclick="CopyToClipboard('tag1070');return false;" class="tag-decoration">testing</div><div id="tag9694" onclick="CopyToClipboard('tag9694');return false;" class="tag-decoration">testing-f0cf571</div><div id="tag4465" onclick="CopyToClipboard('tag4465');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/f0cf571a125ba6e091a8b7e6e162b898435894ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29681056116" target="_blank">2026-07-19 09:08:38</a></td></tr>
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
