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
<tr><td><div id="tag3036" onclick="CopyToClipboard('tag3036');return false;" class="tag-decoration">nightly</div><div id="tag3750" onclick="CopyToClipboard('tag3750');return false;" class="tag-decoration">nightly-51ec997</div><div id="tag30493" onclick="CopyToClipboard('tag30493');return false;" class="tag-decoration">nightly-1.6.3-beta.30</div><div id="tag7419" onclick="CopyToClipboard('tag7419');return false;" class="tag-decoration">nightly-v1</div><div id="tag20992" onclick="CopyToClipboard('tag20992');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag990" onclick="CopyToClipboard('tag990');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/51ec99777a551e139bec5fc42a3d8517d728180d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/43329166277" target="_blank">2026-11-12 23:28:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7816" onclick="CopyToClipboard('tag7816');return false;" class="tag-decoration">release</div><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">release-c49aefb</div><div id="tag19519" onclick="CopyToClipboard('tag19519');return false;" class="tag-decoration">release-1.6.2</div><div id="tag6512" onclick="CopyToClipboard('tag6512');return false;" class="tag-decoration">release-v1</div><div id="tag2453" onclick="CopyToClipboard('tag2453');return false;" class="tag-decoration">release-v1.6</div><div id="tag25857" onclick="CopyToClipboard('tag25857');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c49aefb2a109dc66a0427b01841a126219e6c0c8" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/43329169963" target="_blank">2026-11-12 23:28:34</a></td></tr>
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
