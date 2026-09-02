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
<tr><td><div id="tag25177" onclick="CopyToClipboard('tag25177');return false;" class="tag-decoration">nightly</div><div id="tag28514" onclick="CopyToClipboard('tag28514');return false;" class="tag-decoration">nightly-ff5fd3b</div><div id="tag9854" onclick="CopyToClipboard('tag9854');return false;" class="tag-decoration">nightly-3.1.5.5041</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/ff5fd3bc249cfa53da0870d00e891e87e6203464" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33613963147" target="_blank">2026-09-02 09:24:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24248" onclick="CopyToClipboard('tag24248');return false;" class="tag-decoration">release</div><div id="tag1950" onclick="CopyToClipboard('tag1950');return false;" class="tag-decoration">release-4b8a9f8</div><div id="tag27021" onclick="CopyToClipboard('tag27021');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/4b8a9f86b851820380212518f5fed92f5b10a533" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33613955804" target="_blank">2026-09-02 09:24:37</a></td></tr>
<tr><td><div id="tag17588" onclick="CopyToClipboard('tag17588');return false;" class="tag-decoration">testing</div><div id="tag16953" onclick="CopyToClipboard('tag16953');return false;" class="tag-decoration">testing-5b9798d</div><div id="tag2996" onclick="CopyToClipboard('tag2996');return false;" class="tag-decoration">testing-3.1.4.5029</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/5b9798df8ba8ae84940683e429f501254240248a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33613981270" target="_blank">2026-09-02 09:24:53</a></td></tr>
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
