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
<tr><td><div id="tag23698" onclick="CopyToClipboard('tag23698');return false;" class="tag-decoration">nightly</div><div id="tag29033" onclick="CopyToClipboard('tag29033');return false;" class="tag-decoration">nightly-f0f5d12</div><div id="tag23052" onclick="CopyToClipboard('tag23052');return false;" class="tag-decoration">nightly-3.0.1.5748</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/f0f5d121d77859b41a1f5a46469b696823e27775" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324060523" target="_blank">2026-11-07 01:26:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17237" onclick="CopyToClipboard('tag17237');return false;" class="tag-decoration">release</div><div id="tag4563" onclick="CopyToClipboard('tag4563');return false;" class="tag-decoration">release-03900a3</div><div id="tag16773" onclick="CopyToClipboard('tag16773');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/03900a3a525cf364fe67dc58aa3d329a380e6e4e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324063670" target="_blank">2026-11-07 01:26:15</a></td></tr>
<tr><td><div id="tag29519" onclick="CopyToClipboard('tag29519');return false;" class="tag-decoration">testing</div><div id="tag11555" onclick="CopyToClipboard('tag11555');return false;" class="tag-decoration">testing-5393edf</div><div id="tag24407" onclick="CopyToClipboard('tag24407');return false;" class="tag-decoration">testing-3.0.0.5737</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/5393edf5a388258e213bd58f478d3aa0f9a7c07a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324060184" target="_blank">2026-11-07 01:26:13</a></td></tr>
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
