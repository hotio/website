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
<tr><td><div id="tag5407" onclick="CopyToClipboard('tag5407');return false;" class="tag-decoration">nightly</div><div id="tag21926" onclick="CopyToClipboard('tag21926');return false;" class="tag-decoration">nightly-f1d8267</div><div id="tag10076" onclick="CopyToClipboard('tag10076');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag11520" onclick="CopyToClipboard('tag11520');return false;" class="tag-decoration">nightly-v1</div><div id="tag13800" onclick="CopyToClipboard('tag13800');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag26968" onclick="CopyToClipboard('tag26968');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f1d8267fb06f146332326e5364594a53d427ace2" target="_blank">Version update: 1.5.7-beta.35 => 1.5.7-beta.36</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25659954706" target="_blank">2026-05-11 08:47:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30597" onclick="CopyToClipboard('tag30597');return false;" class="tag-decoration">release</div><div id="tag20028" onclick="CopyToClipboard('tag20028');return false;" class="tag-decoration">release-20c9a40</div><div id="tag21536" onclick="CopyToClipboard('tag21536');return false;" class="tag-decoration">release-1.5.6</div><div id="tag5786" onclick="CopyToClipboard('tag5786');return false;" class="tag-decoration">release-v1</div><div id="tag706" onclick="CopyToClipboard('tag706');return false;" class="tag-decoration">release-v1.5</div><div id="tag5834" onclick="CopyToClipboard('tag5834');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/20c9a40d80d5f5853e6a7307fe6e690dbef2f921" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25605042838" target="_blank">2026-05-09 15:43:10</a></td></tr>
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
