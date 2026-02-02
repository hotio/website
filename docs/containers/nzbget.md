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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22882" onclick="CopyToClipboard('tag22882');return false;" class="tag-decoration">release</div><div id="tag4262" onclick="CopyToClipboard('tag4262');return false;" class="tag-decoration">release-0371dc4</div><div id="tag10340" onclick="CopyToClipboard('tag10340');return false;" class="tag-decoration">release-26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbget/commit/0371dc4e019bebc09db29dfa6fadec653c080709" target="_blank">Version update: 25.4 => 26.0</a></td><td><a href="https://github.com/hotio/nzbget/actions/runs/21595247135" target="_blank">2026-02-02 15:02:32</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbget" \
        -p 6789:6789 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6789/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/nzbget
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=6789/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
