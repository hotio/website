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
<tr><td><div id="tag21600" onclick="CopyToClipboard('tag21600');return false;" class="tag-decoration">nightly</div><div id="tag8491" onclick="CopyToClipboard('tag8491');return false;" class="tag-decoration">nightly-dbf2be4</div><div id="tag8226" onclick="CopyToClipboard('tag8226');return false;" class="tag-decoration">nightly-2.6.3.5608</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/dbf2be4fafdb12c491bd82233d1bafc7199b8753" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33919734660" target="_blank">2026-09-04 21:09:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20554" onclick="CopyToClipboard('tag20554');return false;" class="tag-decoration">release</div><div id="tag4555" onclick="CopyToClipboard('tag4555');return false;" class="tag-decoration">release-9c0bac4</div><div id="tag4250" onclick="CopyToClipboard('tag4250');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9c0bac4febce83640a8997d974d0883878bd7858" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33919741535" target="_blank">2026-09-04 21:09:09</a></td></tr>
<tr><td><div id="tag16905" onclick="CopyToClipboard('tag16905');return false;" class="tag-decoration">testing</div><div id="tag25555" onclick="CopyToClipboard('tag25555');return false;" class="tag-decoration">testing-b97aef1</div><div id="tag7085" onclick="CopyToClipboard('tag7085');return false;" class="tag-decoration">testing-2.6.3.5592</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/b97aef12cfed12555a5c8faea3febcc87a2cd9f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33919732167" target="_blank">2026-09-04 21:09:03</a></td></tr>
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
