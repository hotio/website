---
hide:
  - toc
title: hotio/doplarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/kiranshila/doplarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15897" onclick="CopyToClipboard('tag15897');return false;" class="tag-decoration">release</div><div id="tag17531" onclick="CopyToClipboard('tag17531');return false;" class="tag-decoration">release-a2c2e5b</div><div id="tag11897" onclick="CopyToClipboard('tag11897');return false;" class="tag-decoration">release-3.7.0</div><div id="tag4182" onclick="CopyToClipboard('tag4182');return false;" class="tag-decoration">release-v3</div><div id="tag27836" onclick="CopyToClipboard('tag27836');return false;" class="tag-decoration">release-v3.7</div><div id="tag13328" onclick="CopyToClipboard('tag13328');return false;" class="tag-decoration">release-v3.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/doplarr/commit/a2c2e5ba9c86e9ce875e1b16f74c66338ea87fde" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/doplarr/actions/runs/21065724482" target="_blank">2026-01-16 11:52:16</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="doplarr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/doplarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      doplarr:
        container_name: doplarr
        image: ghcr.io/hotio/doplarr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
