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
<tr><td><div id="tag4180" onclick="CopyToClipboard('tag4180');return false;" class="tag-decoration">nightly</div><div id="tag6814" onclick="CopyToClipboard('tag6814');return false;" class="tag-decoration">nightly-46713c4</div><div id="tag11546" onclick="CopyToClipboard('tag11546');return false;" class="tag-decoration">nightly-4.0.0.5236</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/46713c4320502e8dc644f8f41261562e0282f151" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45448323476" target="_blank">2026-11-24 17:24:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15935" onclick="CopyToClipboard('tag15935');return false;" class="tag-decoration">release</div><div id="tag30730" onclick="CopyToClipboard('tag30730');return false;" class="tag-decoration">release-b451046</div><div id="tag9389" onclick="CopyToClipboard('tag9389');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/b451046837eefdfb9e65f03f979c2619d3d9b4ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45448330249" target="_blank">2026-11-24 17:24:59</a></td></tr>
<tr><td><div id="tag10172" onclick="CopyToClipboard('tag10172');return false;" class="tag-decoration">testing</div><div id="tag28365" onclick="CopyToClipboard('tag28365');return false;" class="tag-decoration">testing-a397001</div><div id="tag22577" onclick="CopyToClipboard('tag22577');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/a397001215bdfd9193087af73031709a2cb632b7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45448328066" target="_blank">2026-11-24 17:24:58</a></td></tr>
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
