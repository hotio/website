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
<tr><td><div id="tag1657" onclick="CopyToClipboard('tag1657');return false;" class="tag-decoration">nightly</div><div id="tag16487" onclick="CopyToClipboard('tag16487');return false;" class="tag-decoration">nightly-51df53a</div><div id="tag11741" onclick="CopyToClipboard('tag11741');return false;" class="tag-decoration">nightly-1.5.7-beta.53</div><div id="tag30688" onclick="CopyToClipboard('tag30688');return false;" class="tag-decoration">nightly-v1</div><div id="tag466" onclick="CopyToClipboard('tag466');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag26701" onclick="CopyToClipboard('tag26701');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/51df53a2487c31388f950fadb478f82eb17b17e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27283241427" target="_blank">2026-06-10 14:25:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5014" onclick="CopyToClipboard('tag5014');return false;" class="tag-decoration">release</div><div id="tag292" onclick="CopyToClipboard('tag292');return false;" class="tag-decoration">release-a2f0a5c</div><div id="tag9118" onclick="CopyToClipboard('tag9118');return false;" class="tag-decoration">release-1.5.6</div><div id="tag10134" onclick="CopyToClipboard('tag10134');return false;" class="tag-decoration">release-v1</div><div id="tag9064" onclick="CopyToClipboard('tag9064');return false;" class="tag-decoration">release-v1.5</div><div id="tag16065" onclick="CopyToClipboard('tag16065');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a2f0a5cfef502abadb1e000e878a3c633b1b2a76" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26710768166" target="_blank">2026-05-31 11:00:33</a></td></tr>
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
