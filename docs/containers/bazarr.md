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
<tr><td><div id="tag4214" onclick="CopyToClipboard('tag4214');return false;" class="tag-decoration">nightly</div><div id="tag25247" onclick="CopyToClipboard('tag25247');return false;" class="tag-decoration">nightly-1e76873</div><div id="tag25518" onclick="CopyToClipboard('tag25518');return false;" class="tag-decoration">nightly-1.5.5-beta.5</div><div id="tag15067" onclick="CopyToClipboard('tag15067');return false;" class="tag-decoration">nightly-v1</div><div id="tag25686" onclick="CopyToClipboard('tag25686');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5370" onclick="CopyToClipboard('tag5370');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1e76873a4ada308a2910b9d47dfc839fe253b2b0" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21060533673" target="_blank">2026-01-16 08:33:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6566" onclick="CopyToClipboard('tag6566');return false;" class="tag-decoration">release</div><div id="tag13821" onclick="CopyToClipboard('tag13821');return false;" class="tag-decoration">release-43faffc</div><div id="tag30154" onclick="CopyToClipboard('tag30154');return false;" class="tag-decoration">release-1.5.4</div><div id="tag21025" onclick="CopyToClipboard('tag21025');return false;" class="tag-decoration">release-v1</div><div id="tag4955" onclick="CopyToClipboard('tag4955');return false;" class="tag-decoration">release-v1.5</div><div id="tag8136" onclick="CopyToClipboard('tag8136');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/43faffc5aa0ea14c8885b7b21811e5d241c61e07" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21060534174" target="_blank">2026-01-16 08:33:20</a></td></tr>
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
