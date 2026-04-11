---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18844" onclick="CopyToClipboard('tag18844');return false;" class="tag-decoration">release</div><div id="tag6717" onclick="CopyToClipboard('tag6717');return false;" class="tag-decoration">release-5ea4e38</div><div id="tag147" onclick="CopyToClipboard('tag147');return false;" class="tag-decoration">release-0.24.1564</div><div id="tag10141" onclick="CopyToClipboard('tag10141');return false;" class="tag-decoration">release-v0</div><div id="tag19648" onclick="CopyToClipboard('tag19648');return false;" class="tag-decoration">release-v0.24</div><div id="tag1290" onclick="CopyToClipboard('tag1290');return false;" class="tag-decoration">release-v0.24.1564</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5ea4e38d3174d0f676d07ba17f778711089531e4" target="_blank">Version update: 0.24.1562 => 0.24.1564</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24276251456" target="_blank">2026-04-11 06:02:59</a></td></tr>
<tr><td><div id="tag25810" onclick="CopyToClipboard('tag25810');return false;" class="tag-decoration">testing</div><div id="tag1856" onclick="CopyToClipboard('tag1856');return false;" class="tag-decoration">testing-3f9ba01</div><div id="tag7069" onclick="CopyToClipboard('tag7069');return false;" class="tag-decoration">testing-0.24.1564</div><div id="tag18315" onclick="CopyToClipboard('tag18315');return false;" class="tag-decoration">testing-v0</div><div id="tag30315" onclick="CopyToClipboard('tag30315');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6935" onclick="CopyToClipboard('tag6935');return false;" class="tag-decoration">testing-v0.24.1564</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3f9ba0181019406a706b8e2a8bf51a1a52ff4ef9" target="_blank">Version update: 0.24.1562 => 0.24.1564</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24276251975" target="_blank">2026-04-11 06:03:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
