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
<tr><td><div id="tag5148" onclick="CopyToClipboard('tag5148');return false;" class="tag-decoration">nightly</div><div id="tag15103" onclick="CopyToClipboard('tag15103');return false;" class="tag-decoration">nightly-46caa1c</div><div id="tag27507" onclick="CopyToClipboard('tag27507');return false;" class="tag-decoration">nightly-1.5.5-beta.9</div><div id="tag8737" onclick="CopyToClipboard('tag8737');return false;" class="tag-decoration">nightly-v1</div><div id="tag2357" onclick="CopyToClipboard('tag2357');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5330" onclick="CopyToClipboard('tag5330');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/46caa1caffc784e56cd09b10a446c8cabb3389f9" target="_blank">Upstream update: alpinevpn-7f0f6dc => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21198323522" target="_blank">2026-01-21 05:23:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8936" onclick="CopyToClipboard('tag8936');return false;" class="tag-decoration">release</div><div id="tag32642" onclick="CopyToClipboard('tag32642');return false;" class="tag-decoration">release-19a4e1f</div><div id="tag30733" onclick="CopyToClipboard('tag30733');return false;" class="tag-decoration">release-1.5.4</div><div id="tag12635" onclick="CopyToClipboard('tag12635');return false;" class="tag-decoration">release-v1</div><div id="tag31662" onclick="CopyToClipboard('tag31662');return false;" class="tag-decoration">release-v1.5</div><div id="tag18999" onclick="CopyToClipboard('tag18999');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/19a4e1f1040933c5940932fbb1a1e28bdbf621bb" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-7f0f6dc</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21197447610" target="_blank">2026-01-21 04:39:02</a></td></tr>
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
