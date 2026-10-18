---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag5043" onclick="CopyToClipboard('tag5043');return false;" class="tag-decoration">nightly</div><div id="tag29976" onclick="CopyToClipboard('tag29976');return false;" class="tag-decoration">nightly-d72be73</div><div id="tag7313" onclick="CopyToClipboard('tag7313');return false;" class="tag-decoration">nightly-5.0.0.2668</div></td><td>develop/v5-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/d72be73e4aaf6b5fd988f5dadc092c0726aa9458" target="_blank">fix description</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/39099972846" target="_blank">2026-10-18 05:16:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30077" onclick="CopyToClipboard('tag30077');return false;" class="tag-decoration">release</div><div id="tag2406" onclick="CopyToClipboard('tag2406');return false;" class="tag-decoration">release-dff5bb4</div><div id="tag7139" onclick="CopyToClipboard('tag7139');return false;" class="tag-decoration">release-4.0.20.3014</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/dff5bb48c4ab9a8ed57ce3ad3b06688effc35a53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/39135216612" target="_blank">2026-10-18 14:15:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
