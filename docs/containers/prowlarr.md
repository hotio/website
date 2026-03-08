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
<tr><td><div id="tag23775" onclick="CopyToClipboard('tag23775');return false;" class="tag-decoration">nightly</div><div id="tag886" onclick="CopyToClipboard('tag886');return false;" class="tag-decoration">nightly-4f2dcdd</div><div id="tag26540" onclick="CopyToClipboard('tag26540');return false;" class="tag-decoration">nightly-2.3.3.5296</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/4f2dcdd4c9547c1d0ede4bd76022f97c7e49b3aa" target="_blank">Version update: 2.3.3.5292 => 2.3.3.5296</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22809817979" target="_blank">2026-03-07 23:48:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22640" onclick="CopyToClipboard('tag22640');return false;" class="tag-decoration">release</div><div id="tag7842" onclick="CopyToClipboard('tag7842');return false;" class="tag-decoration">release-fa01a1c</div><div id="tag19469" onclick="CopyToClipboard('tag19469');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fa01a1cc953b314843fcfc28ba575f60be93ebad" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22292129463" target="_blank">2026-02-23 03:43:53</a></td></tr>
<tr><td><div id="tag6584" onclick="CopyToClipboard('tag6584');return false;" class="tag-decoration">testing</div><div id="tag15410" onclick="CopyToClipboard('tag15410');return false;" class="tag-decoration">testing-01f488e</div><div id="tag5085" onclick="CopyToClipboard('tag5085');return false;" class="tag-decoration">testing-2.3.3.5296</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/01f488e25c5c0b01b3d053fc51fe5d751620bb2e" target="_blank">Version update: 2.3.2.5245 => 2.3.3.5296</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22827497172" target="_blank">2026-03-08 18:49:07</a></td></tr>
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
