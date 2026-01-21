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
<tr><td><div id="tag22523" onclick="CopyToClipboard('tag22523');return false;" class="tag-decoration">nightly</div><div id="tag9042" onclick="CopyToClipboard('tag9042');return false;" class="tag-decoration">nightly-46caa1c</div><div id="tag19389" onclick="CopyToClipboard('tag19389');return false;" class="tag-decoration">nightly-1.5.5-beta.9</div><div id="tag99" onclick="CopyToClipboard('tag99');return false;" class="tag-decoration">nightly-v1</div><div id="tag6293" onclick="CopyToClipboard('tag6293');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag13002" onclick="CopyToClipboard('tag13002');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/46caa1caffc784e56cd09b10a446c8cabb3389f9" target="_blank">Upstream update: alpinevpn-7f0f6dc => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21198323522" target="_blank">2026-01-21 05:23:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15343" onclick="CopyToClipboard('tag15343');return false;" class="tag-decoration">release</div><div id="tag24254" onclick="CopyToClipboard('tag24254');return false;" class="tag-decoration">release-a9ccae6</div><div id="tag23873" onclick="CopyToClipboard('tag23873');return false;" class="tag-decoration">release-1.5.4</div><div id="tag21097" onclick="CopyToClipboard('tag21097');return false;" class="tag-decoration">release-v1</div><div id="tag19912" onclick="CopyToClipboard('tag19912');return false;" class="tag-decoration">release-v1.5</div><div id="tag3328" onclick="CopyToClipboard('tag3328');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a9ccae6ed688d7395b75be124e3b12e9cae5db32" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21200251150" target="_blank">2026-01-21 06:57:03</a></td></tr>
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
