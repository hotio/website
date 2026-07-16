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
<tr><td><div id="tag3384" onclick="CopyToClipboard('tag3384');return false;" class="tag-decoration">nightly</div><div id="tag275" onclick="CopyToClipboard('tag275');return false;" class="tag-decoration">nightly-b00a17a</div><div id="tag16415" onclick="CopyToClipboard('tag16415');return false;" class="tag-decoration">nightly-2.5.1.5474</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/b00a17a113f6c08b2acea000bd0eb6a8110408d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29501685009" target="_blank">2026-07-16 13:19:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10316" onclick="CopyToClipboard('tag10316');return false;" class="tag-decoration">release</div><div id="tag5515" onclick="CopyToClipboard('tag5515');return false;" class="tag-decoration">release-dab413b</div><div id="tag18397" onclick="CopyToClipboard('tag18397');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/dab413bb6989c0198ab669084e6230e141f95359" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29360222840" target="_blank">2026-07-14 19:01:32</a></td></tr>
<tr><td><div id="tag31674" onclick="CopyToClipboard('tag31674');return false;" class="tag-decoration">testing</div><div id="tag4800" onclick="CopyToClipboard('tag4800');return false;" class="tag-decoration">testing-dc6e624</div><div id="tag22792" onclick="CopyToClipboard('tag22792');return false;" class="tag-decoration">testing-2.5.1.5464</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/dc6e624bd52a24294ec44a856e3fcd0687aa82b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29360223572" target="_blank">2026-07-14 19:01:32</a></td></tr>
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
