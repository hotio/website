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
<tr><td><div id="tag25484" onclick="CopyToClipboard('tag25484');return false;" class="tag-decoration">nightly</div><div id="tag15962" onclick="CopyToClipboard('tag15962');return false;" class="tag-decoration">nightly-7838c5a</div><div id="tag13706" onclick="CopyToClipboard('tag13706');return false;" class="tag-decoration">nightly-6.4.2.10574</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/7838c5ad9f091bef6a81451b910538a6a8c9a1cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/31874289159" target="_blank">2026-08-15 08:21:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag200" onclick="CopyToClipboard('tag200');return false;" class="tag-decoration">release</div><div id="tag14132" onclick="CopyToClipboard('tag14132');return false;" class="tag-decoration">release-6fbb7bb</div><div id="tag18171" onclick="CopyToClipboard('tag18171');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/6fbb7bbd015a0dce470728b9e5cfdae42eb2db67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/31874287409" target="_blank">2026-08-15 08:21:37</a></td></tr>
<tr><td><div id="tag4811" onclick="CopyToClipboard('tag4811');return false;" class="tag-decoration">testing</div><div id="tag7695" onclick="CopyToClipboard('tag7695');return false;" class="tag-decoration">testing-3d5c079</div><div id="tag20229" onclick="CopyToClipboard('tag20229');return false;" class="tag-decoration">testing-6.4.1.10545</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/3d5c079874f7551f10b0b75a4f566bde8740b6f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/31874288123" target="_blank">2026-08-15 08:21:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
