---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23999" onclick="CopyToClipboard('tag23999');return false;" class="tag-decoration">release</div><div id="tag6484" onclick="CopyToClipboard('tag6484');return false;" class="tag-decoration">release-390826c</div><div id="tag10758" onclick="CopyToClipboard('tag10758');return false;" class="tag-decoration">release-0.24.1012</div><div id="tag20781" onclick="CopyToClipboard('tag20781');return false;" class="tag-decoration">release-v0</div><div id="tag32207" onclick="CopyToClipboard('tag32207');return false;" class="tag-decoration">release-v0.24</div><div id="tag20855" onclick="CopyToClipboard('tag20855');return false;" class="tag-decoration">release-v0.24.1012</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/390826c77da9e664f848d842f7f309185d75344c" target="_blank">Version update: 0.24.1008 => 0.24.1012</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21587671665" target="_blank">2026-02-02 11:07:45</a></td></tr>
<tr><td><div id="tag11447" onclick="CopyToClipboard('tag11447');return false;" class="tag-decoration">testing</div><div id="tag23965" onclick="CopyToClipboard('tag23965');return false;" class="tag-decoration">testing-65c7b5f</div><div id="tag13582" onclick="CopyToClipboard('tag13582');return false;" class="tag-decoration">testing-0.24.1012</div><div id="tag29295" onclick="CopyToClipboard('tag29295');return false;" class="tag-decoration">testing-v0</div><div id="tag25084" onclick="CopyToClipboard('tag25084');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25621" onclick="CopyToClipboard('tag25621');return false;" class="tag-decoration">testing-v0.24.1012</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/65c7b5f30b0f988707235bed6d00307e2217ffcd" target="_blank">Version update: 0.24.1008 => 0.24.1012</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21587674037" target="_blank">2026-02-02 11:07:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
