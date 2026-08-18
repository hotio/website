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
<tr><td><div id="tag4690" onclick="CopyToClipboard('tag4690');return false;" class="tag-decoration">nightly</div><div id="tag28503" onclick="CopyToClipboard('tag28503');return false;" class="tag-decoration">nightly-9358510</div><div id="tag19251" onclick="CopyToClipboard('tag19251');return false;" class="tag-decoration">nightly-3.1.3.5020</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/93585101baae42fe2727e6d6c7f13f1b3a8b6923" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32144664222" target="_blank">2026-08-18 13:49:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15044" onclick="CopyToClipboard('tag15044');return false;" class="tag-decoration">release</div><div id="tag7776" onclick="CopyToClipboard('tag7776');return false;" class="tag-decoration">release-2bd0b6c</div><div id="tag11258" onclick="CopyToClipboard('tag11258');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/2bd0b6c4d4c078216a4c98c4e8855b466065f9cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32144663902" target="_blank">2026-08-18 13:49:58</a></td></tr>
<tr><td><div id="tag2599" onclick="CopyToClipboard('tag2599');return false;" class="tag-decoration">testing</div><div id="tag11147" onclick="CopyToClipboard('tag11147');return false;" class="tag-decoration">testing-5e1cb54</div><div id="tag25898" onclick="CopyToClipboard('tag25898');return false;" class="tag-decoration">testing-3.1.3.4987</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/5e1cb54f3cbee90b1bfae6fc73c4de64996e1fbe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32144685638" target="_blank">2026-08-18 13:50:10</a></td></tr>
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
