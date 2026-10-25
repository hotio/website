---
hide:
  - toc
title: hotio/requestrr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/requestrr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/requestrr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/thomst08/requestrr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17108" onclick="CopyToClipboard('tag17108');return false;" class="tag-decoration">release</div><div id="tag13331" onclick="CopyToClipboard('tag13331');return false;" class="tag-decoration">release-ba68999</div><div id="tag30678" onclick="CopyToClipboard('tag30678');return false;" class="tag-decoration">release-2.1.10</div><div id="tag10908" onclick="CopyToClipboard('tag10908');return false;" class="tag-decoration">release-v2</div><div id="tag12619" onclick="CopyToClipboard('tag12619');return false;" class="tag-decoration">release-v2.1</div><div id="tag2359" onclick="CopyToClipboard('tag2359');return false;" class="tag-decoration">release-v2.1.10</div></td><td>Releases</td><td><a href="https://github.com/hotio/requestrr/commit/ba68999c7ddb57840e3cb4f21d5ac2f2f8dd0c17" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/requestrr/actions/runs/40219096424" target="_blank">2026-10-25 17:59:30</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="requestrr" \
        -p 4545:4545 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="4545/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/requestrr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      requestrr:
        container_name: requestrr
        image: ghcr.io/hotio/requestrr
        ports:
          - "4545:4545"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=4545/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
