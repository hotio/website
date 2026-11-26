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
<tr><td><div id="tag11764" onclick="CopyToClipboard('tag11764');return false;" class="tag-decoration">nightly</div><div id="tag6035" onclick="CopyToClipboard('tag6035');return false;" class="tag-decoration">nightly-a73b61b</div><div id="tag28064" onclick="CopyToClipboard('tag28064');return false;" class="tag-decoration">nightly-3.1.0.5797</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/a73b61bcea9593b0cb914eaaeda8d648be604aa9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45764730573" target="_blank">2026-11-26 05:55:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2404" onclick="CopyToClipboard('tag2404');return false;" class="tag-decoration">release</div><div id="tag26087" onclick="CopyToClipboard('tag26087');return false;" class="tag-decoration">release-3f80d0a</div><div id="tag28704" onclick="CopyToClipboard('tag28704');return false;" class="tag-decoration">release-3.1.0.5799</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/3f80d0a8714abf9c013450f1d1fee04cee50f83f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45764740093" target="_blank">2026-11-26 05:55:38</a></td></tr>
<tr><td><div id="tag28750" onclick="CopyToClipboard('tag28750');return false;" class="tag-decoration">testing</div><div id="tag20980" onclick="CopyToClipboard('tag20980');return false;" class="tag-decoration">testing-850a409</div><div id="tag25429" onclick="CopyToClipboard('tag25429');return false;" class="tag-decoration">testing-3.1.0.5799</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/850a40926b31a9e8e651fc651e58d25a83af3574" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45764730119" target="_blank">2026-11-26 05:55:31</a></td></tr>
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
