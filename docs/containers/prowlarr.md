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
<tr><td><div id="tag18895" onclick="CopyToClipboard('tag18895');return false;" class="tag-decoration">nightly</div><div id="tag2974" onclick="CopyToClipboard('tag2974');return false;" class="tag-decoration">nightly-34aa273</div><div id="tag1510" onclick="CopyToClipboard('tag1510');return false;" class="tag-decoration">nightly-2.6.5.5672</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/34aa273493b8683043136b92017fa0e767db7055" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39126572889" target="_blank">2026-10-18 12:15:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30260" onclick="CopyToClipboard('tag30260');return false;" class="tag-decoration">release</div><div id="tag2798" onclick="CopyToClipboard('tag2798');return false;" class="tag-decoration">release-f20f80b</div><div id="tag5031" onclick="CopyToClipboard('tag5031');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/f20f80b00f8896679067cd74efd8575c420bfa54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39126569415" target="_blank">2026-10-18 12:15:57</a></td></tr>
<tr><td><div id="tag4436" onclick="CopyToClipboard('tag4436');return false;" class="tag-decoration">testing</div><div id="tag19475" onclick="CopyToClipboard('tag19475');return false;" class="tag-decoration">testing-33e0e99</div><div id="tag2836" onclick="CopyToClipboard('tag2836');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/33e0e9999bd59e5664753c212f40b384d5c1c939" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/39126571533" target="_blank">2026-10-18 12:15:58</a></td></tr>
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
