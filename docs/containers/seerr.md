---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1598" onclick="CopyToClipboard('tag1598');return false;" class="tag-decoration">nightly</div><div id="tag20247" onclick="CopyToClipboard('tag20247');return false;" class="tag-decoration">nightly-565c56b</div><div id="tag3819" onclick="CopyToClipboard('tag3819');return false;" class="tag-decoration">nightly-5f9722758c4372cf1cd72f414c079e08b1993507</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/565c56bf0b90509ab721eca89587c4cd8e5bdaa4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34139385976" target="_blank">2026-09-07 15:38:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13112" onclick="CopyToClipboard('tag13112');return false;" class="tag-decoration">release</div><div id="tag13936" onclick="CopyToClipboard('tag13936');return false;" class="tag-decoration">release-3b2c475</div><div id="tag28725" onclick="CopyToClipboard('tag28725');return false;" class="tag-decoration">release-3.4.1</div><div id="tag20422" onclick="CopyToClipboard('tag20422');return false;" class="tag-decoration">release-v3</div><div id="tag5360" onclick="CopyToClipboard('tag5360');return false;" class="tag-decoration">release-v3.4</div><div id="tag22542" onclick="CopyToClipboard('tag22542');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3b2c47587d0638d2c4e6199ef0b103303c90591e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33916821183" target="_blank">2026-09-04 20:33:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
