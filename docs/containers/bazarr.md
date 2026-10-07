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
<tr><td><div id="tag21659" onclick="CopyToClipboard('tag21659');return false;" class="tag-decoration">nightly</div><div id="tag19575" onclick="CopyToClipboard('tag19575');return false;" class="tag-decoration">nightly-f13f1cc</div><div id="tag23785" onclick="CopyToClipboard('tag23785');return false;" class="tag-decoration">nightly-1.6.3-beta.6</div><div id="tag7490" onclick="CopyToClipboard('tag7490');return false;" class="tag-decoration">nightly-v1</div><div id="tag19552" onclick="CopyToClipboard('tag19552');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag24249" onclick="CopyToClipboard('tag24249');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f13f1cce0238f67a1d0a69ac38090b33da445bc1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37482482031" target="_blank">2026-10-06 14:51:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16430" onclick="CopyToClipboard('tag16430');return false;" class="tag-decoration">release</div><div id="tag15792" onclick="CopyToClipboard('tag15792');return false;" class="tag-decoration">release-58f6816</div><div id="tag2027" onclick="CopyToClipboard('tag2027');return false;" class="tag-decoration">release-1.6.2</div><div id="tag26804" onclick="CopyToClipboard('tag26804');return false;" class="tag-decoration">release-v1</div><div id="tag30024" onclick="CopyToClipboard('tag30024');return false;" class="tag-decoration">release-v1.6</div><div id="tag27369" onclick="CopyToClipboard('tag27369');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/58f68166884e632634cd8d7b8c3b40a304de4d0d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37552024314" target="_blank">2026-10-07 00:27:02</a></td></tr>
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
