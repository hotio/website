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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19924" onclick="CopyToClipboard('tag19924');return false;" class="tag-decoration">release</div><div id="tag15389" onclick="CopyToClipboard('tag15389');return false;" class="tag-decoration">release-4455025</div><div id="tag9478" onclick="CopyToClipboard('tag9478');return false;" class="tag-decoration">release-2.1.9</div><div id="tag21281" onclick="CopyToClipboard('tag21281');return false;" class="tag-decoration">release-v2</div><div id="tag24877" onclick="CopyToClipboard('tag24877');return false;" class="tag-decoration">release-v2.1</div><div id="tag18858" onclick="CopyToClipboard('tag18858');return false;" class="tag-decoration">release-v2.1.9</div></td><td>Releases</td><td><a href="https://github.com/hotio/requestrr/commit/4455025de733ba01772f172711d9600aefc1a2ca" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/requestrr/actions/runs/21237953704" target="_blank">2026-01-22 06:03:21</a></td></tr>
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
