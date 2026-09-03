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
<tr><td><div id="tag13341" onclick="CopyToClipboard('tag13341');return false;" class="tag-decoration">nightly</div><div id="tag17194" onclick="CopyToClipboard('tag17194');return false;" class="tag-decoration">nightly-efd2b94</div><div id="tag1792" onclick="CopyToClipboard('tag1792');return false;" class="tag-decoration">nightly-2.6.3.5608</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/efd2b94fb36e23237eba09a60d0d5888121d9f77" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33780517970" target="_blank">2026-09-03 16:45:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11696" onclick="CopyToClipboard('tag11696');return false;" class="tag-decoration">release</div><div id="tag21525" onclick="CopyToClipboard('tag21525');return false;" class="tag-decoration">release-0e8cd5f</div><div id="tag7501" onclick="CopyToClipboard('tag7501');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/0e8cd5f0a2b4992cab3879165c28b8ffef8baa8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33593917979" target="_blank">2026-09-02 05:14:44</a></td></tr>
<tr><td><div id="tag30202" onclick="CopyToClipboard('tag30202');return false;" class="tag-decoration">testing</div><div id="tag10783" onclick="CopyToClipboard('tag10783');return false;" class="tag-decoration">testing-23fbaa5</div><div id="tag5739" onclick="CopyToClipboard('tag5739');return false;" class="tag-decoration">testing-2.6.3.5592</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/23fbaa517ca724a1b89e4200e44a0624fd83999c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33593918380" target="_blank">2026-09-02 05:14:45</a></td></tr>
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
