---
hide:
  - toc
title: hotio/doplarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/activexray/doplarr_rs){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17543" onclick="CopyToClipboard('tag17543');return false;" class="tag-decoration">release</div><div id="tag27469" onclick="CopyToClipboard('tag27469');return false;" class="tag-decoration">release-16f288b</div><div id="tag31171" onclick="CopyToClipboard('tag31171');return false;" class="tag-decoration">release-3.8.0</div><div id="tag15590" onclick="CopyToClipboard('tag15590');return false;" class="tag-decoration">release-v3</div><div id="tag17562" onclick="CopyToClipboard('tag17562');return false;" class="tag-decoration">release-v3.8</div><div id="tag6437" onclick="CopyToClipboard('tag6437');return false;" class="tag-decoration">release-v3.8.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/doplarr/commit/16f288b08267e10b94a0fae5b79df1455479025f" target="_blank">migrate to doplarr_rs</a></td><td><a href="https://github.com/hotio/doplarr/actions/runs/27934246261" target="_blank">2026-06-22 06:34:52</a></td></tr>
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
