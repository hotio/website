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
<tr><td><div id="tag16967" onclick="CopyToClipboard('tag16967');return false;" class="tag-decoration">nightly</div><div id="tag22037" onclick="CopyToClipboard('tag22037');return false;" class="tag-decoration">nightly-113a473</div><div id="tag12146" onclick="CopyToClipboard('tag12146');return false;" class="tag-decoration">nightly-1.5.6-beta.1</div><div id="tag24597" onclick="CopyToClipboard('tag24597');return false;" class="tag-decoration">nightly-v1</div><div id="tag17760" onclick="CopyToClipboard('tag17760');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag2772" onclick="CopyToClipboard('tag2772');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/113a473796ab5ac29c3acbe615bc39b61a8c0d4a" target="_blank">Version update: 1.5.6-beta.0 => 1.5.6-beta.1</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21620588650" target="_blank">2026-02-03 07:05:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12221" onclick="CopyToClipboard('tag12221');return false;" class="tag-decoration">release</div><div id="tag29385" onclick="CopyToClipboard('tag29385');return false;" class="tag-decoration">release-c06938f</div><div id="tag23659" onclick="CopyToClipboard('tag23659');return false;" class="tag-decoration">release-1.5.5</div><div id="tag24252" onclick="CopyToClipboard('tag24252');return false;" class="tag-decoration">release-v1</div><div id="tag2308" onclick="CopyToClipboard('tag2308');return false;" class="tag-decoration">release-v1.5</div><div id="tag13807" onclick="CopyToClipboard('tag13807');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c06938f0ad30d6084ac6d8605513ea7ab7bc40d6" target="_blank">Version update: 1.5.4 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319983" target="_blank">2026-02-01 18:51:09</a></td></tr>
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
