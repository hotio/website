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
<tr><td><div id="tag29456" onclick="CopyToClipboard('tag29456');return false;" class="tag-decoration">nightly</div><div id="tag25813" onclick="CopyToClipboard('tag25813');return false;" class="tag-decoration">nightly-db68286</div><div id="tag3981" onclick="CopyToClipboard('tag3981');return false;" class="tag-decoration">nightly-1.6.1-beta.1</div><div id="tag23262" onclick="CopyToClipboard('tag23262');return false;" class="tag-decoration">nightly-v1</div><div id="tag18285" onclick="CopyToClipboard('tag18285');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag4790" onclick="CopyToClipboard('tag4790');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/db682861e0909a7faa39ccb6a32fd3cee5ce3e10" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29356457405" target="_blank">2026-07-14 18:05:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13803" onclick="CopyToClipboard('tag13803');return false;" class="tag-decoration">release</div><div id="tag25977" onclick="CopyToClipboard('tag25977');return false;" class="tag-decoration">release-8261181</div><div id="tag12786" onclick="CopyToClipboard('tag12786');return false;" class="tag-decoration">release-1.6.0</div><div id="tag12984" onclick="CopyToClipboard('tag12984');return false;" class="tag-decoration">release-v1</div><div id="tag21431" onclick="CopyToClipboard('tag21431');return false;" class="tag-decoration">release-v1.6</div><div id="tag16847" onclick="CopyToClipboard('tag16847');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/8261181a8dad99e61c8f40bf26c1074bdbd474f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29317068404" target="_blank">2026-07-14 08:10:10</a></td></tr>
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
