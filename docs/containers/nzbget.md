---
hide:
  - toc
title: hotio/nzbget
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbget){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbget){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/nzbgetcom/nzbget){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10534" onclick="CopyToClipboard('tag10534');return false;" class="tag-decoration">release</div><div id="tag24093" onclick="CopyToClipboard('tag24093');return false;" class="tag-decoration">release-25.4</div><div id="tag8836" onclick="CopyToClipboard('tag8836');return false;" class="tag-decoration">release-86b3a63</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbget/commit/86b3a638fc522aa699a2696939b5d44918858e12" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/nzbget/actions/runs/20770100826" target="_blank">2026-01-07 03:57:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name nzbget \
        -p 6789:6789 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/nzbget
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      nzbget:
        container_name: nzbget
        image: ghcr.io/hotio/nzbget
        ports:
          - "6789:6789"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
