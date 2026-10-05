---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27736" onclick="CopyToClipboard('tag27736');return false;" class="tag-decoration">nightly</div><div id="tag19789" onclick="CopyToClipboard('tag19789');return false;" class="tag-decoration">nightly-bc939ce</div><div id="tag4544" onclick="CopyToClipboard('tag4544');return false;" class="tag-decoration">nightly-1.6.3-beta.5</div><div id="tag21822" onclick="CopyToClipboard('tag21822');return false;" class="tag-decoration">nightly-v1</div><div id="tag725" onclick="CopyToClipboard('tag725');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag15672" onclick="CopyToClipboard('tag15672');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/bc939ce8f369986d78467e36ac2199bc9d32a648" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37353249942" target="_blank">2026-10-05 18:04:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25669" onclick="CopyToClipboard('tag25669');return false;" class="tag-decoration">release</div><div id="tag13535" onclick="CopyToClipboard('tag13535');return false;" class="tag-decoration">release-e5016dd</div><div id="tag9781" onclick="CopyToClipboard('tag9781');return false;" class="tag-decoration">release-1.6.2</div><div id="tag28172" onclick="CopyToClipboard('tag28172');return false;" class="tag-decoration">release-v1</div><div id="tag26574" onclick="CopyToClipboard('tag26574');return false;" class="tag-decoration">release-v1.6</div><div id="tag2190" onclick="CopyToClipboard('tag2190');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e5016dd1a27ea4ec5a06284ff663fdb65505507b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36929977788" target="_blank">2026-10-01 21:38:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
