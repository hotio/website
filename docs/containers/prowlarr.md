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
<tr><td><div id="tag17294" onclick="CopyToClipboard('tag17294');return false;" class="tag-decoration">nightly</div><div id="tag16422" onclick="CopyToClipboard('tag16422');return false;" class="tag-decoration">nightly-506d467</div><div id="tag23401" onclick="CopyToClipboard('tag23401');return false;" class="tag-decoration">nightly-2.6.5.5672</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/506d467711a727bc71a4bb27dad3c85ff4d46f55" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39485934150" target="_blank">2026-10-20 19:43:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9144" onclick="CopyToClipboard('tag9144');return false;" class="tag-decoration">release</div><div id="tag18755" onclick="CopyToClipboard('tag18755');return false;" class="tag-decoration">release-4c2dcd2</div><div id="tag23366" onclick="CopyToClipboard('tag23366');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/4c2dcd2f1e711fc1aadc6032f8c0b5c6f66767a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39485937234" target="_blank">2026-10-20 19:43:52</a></td></tr>
<tr><td><div id="tag32423" onclick="CopyToClipboard('tag32423');return false;" class="tag-decoration">testing</div><div id="tag16539" onclick="CopyToClipboard('tag16539');return false;" class="tag-decoration">testing-fba8d52</div><div id="tag10651" onclick="CopyToClipboard('tag10651');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/fba8d52e5518e0a1cb73a4e6eeb8c3b91c65f5c4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39485936831" target="_blank">2026-10-20 19:43:51</a></td></tr>
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
