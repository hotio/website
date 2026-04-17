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
<tr><td><div id="tag27526" onclick="CopyToClipboard('tag27526');return false;" class="tag-decoration">nightly</div><div id="tag11354" onclick="CopyToClipboard('tag11354');return false;" class="tag-decoration">nightly-3882e71</div><div id="tag26594" onclick="CopyToClipboard('tag26594');return false;" class="tag-decoration">nightly-1.5.7-beta.22</div><div id="tag20647" onclick="CopyToClipboard('tag20647');return false;" class="tag-decoration">nightly-v1</div><div id="tag27042" onclick="CopyToClipboard('tag27042');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag17062" onclick="CopyToClipboard('tag17062');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3882e71c6be33fe24abe1609deca8edd9f27b125" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/24552116941" target="_blank">2026-04-17 06:53:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag985" onclick="CopyToClipboard('tag985');return false;" class="tag-decoration">release</div><div id="tag24173" onclick="CopyToClipboard('tag24173');return false;" class="tag-decoration">release-817e2ae</div><div id="tag12459" onclick="CopyToClipboard('tag12459');return false;" class="tag-decoration">release-1.5.6</div><div id="tag15133" onclick="CopyToClipboard('tag15133');return false;" class="tag-decoration">release-v1</div><div id="tag20192" onclick="CopyToClipboard('tag20192');return false;" class="tag-decoration">release-v1.5</div><div id="tag22036" onclick="CopyToClipboard('tag22036');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/817e2ae83df1006d994667ba0cfbe942e3c30381" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/24552117589" target="_blank">2026-04-17 06:53:41</a></td></tr>
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
