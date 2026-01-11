---
hide:
  - toc
title: hotio/qui
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qui){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qui){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/autobrr/qui){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23434" onclick="CopyToClipboard('tag23434');return false;" class="tag-decoration">release</div><div id="tag14532" onclick="CopyToClipboard('tag14532');return false;" class="tag-decoration">release-1.12.0</div><div id="tag21172" onclick="CopyToClipboard('tag21172');return false;" class="tag-decoration">release-88b4347</div><div id="tag11048" onclick="CopyToClipboard('tag11048');return false;" class="tag-decoration">release-v1</div><div id="tag8360" onclick="CopyToClipboard('tag8360');return false;" class="tag-decoration">release-v1.12</div><div id="tag15807" onclick="CopyToClipboard('tag15807');return false;" class="tag-decoration">release-v1.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qui/commit/88b4347a00638229aa0f1cf6c54045fbeb616a50" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/qui/actions/runs/20892088344" target="_blank">2026-01-11 08:19:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qui" \
        -p 7476:7476 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/qui
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qui:
        container_name: qui
        image: ghcr.io/hotio/qui
        ports:
          - "7476:7476"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
