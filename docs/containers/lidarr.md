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
<tr><td><div id="tag31098" onclick="CopyToClipboard('tag31098');return false;" class="tag-decoration">nightly</div><div id="tag24484" onclick="CopyToClipboard('tag24484');return false;" class="tag-decoration">nightly-4a6e95e</div><div id="tag1077" onclick="CopyToClipboard('tag1077');return false;" class="tag-decoration">nightly-3.1.4.5029</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/4a6e95e056f13fbedf9d57114c5a940a162d55cf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32920190969" target="_blank">2026-08-26 01:45:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20276" onclick="CopyToClipboard('tag20276');return false;" class="tag-decoration">release</div><div id="tag29627" onclick="CopyToClipboard('tag29627');return false;" class="tag-decoration">release-71e22c7</div><div id="tag19597" onclick="CopyToClipboard('tag19597');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/71e22c7b9bf9b057ff50f3b9e8cdb1865ce14a7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32920189303" target="_blank">2026-08-26 01:45:39</a></td></tr>
<tr><td><div id="tag21830" onclick="CopyToClipboard('tag21830');return false;" class="tag-decoration">testing</div><div id="tag12633" onclick="CopyToClipboard('tag12633');return false;" class="tag-decoration">testing-5ca9850</div><div id="tag28282" onclick="CopyToClipboard('tag28282');return false;" class="tag-decoration">testing-3.1.3.4987</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/5ca9850401384816fe2aa4c40c3077e132b45fb6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32326865553" target="_blank">2026-08-20 03:03:34</a></td></tr>
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
