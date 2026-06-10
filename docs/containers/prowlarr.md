---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag11868" onclick="CopyToClipboard('tag11868');return false;" class="tag-decoration">nightly</div><div id="tag10503" onclick="CopyToClipboard('tag10503');return false;" class="tag-decoration">nightly-ae79d68</div><div id="tag11665" onclick="CopyToClipboard('tag11665');return false;" class="tag-decoration">nightly-2.4.0.5396</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ae79d683921fbc177d8b322fca6e850aa88e6c54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27200001435" target="_blank">2026-06-09 10:27:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15327" onclick="CopyToClipboard('tag15327');return false;" class="tag-decoration">release</div><div id="tag29106" onclick="CopyToClipboard('tag29106');return false;" class="tag-decoration">release-e1522b7</div><div id="tag1956" onclick="CopyToClipboard('tag1956');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/e1522b71a3c84dc850eab58f3ede345d6f44d1be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27271384546" target="_blank">2026-06-10 10:55:44</a></td></tr>
<tr><td><div id="tag28597" onclick="CopyToClipboard('tag28597');return false;" class="tag-decoration">testing</div><div id="tag9547" onclick="CopyToClipboard('tag9547');return false;" class="tag-decoration">testing-ebdb2c2</div><div id="tag6186" onclick="CopyToClipboard('tag6186');return false;" class="tag-decoration">testing-2.4.0.5391</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/ebdb2c23d442dcd435dbb15bdd6b62dea94c55d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/26721666675" target="_blank">2026-05-31 19:03:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
