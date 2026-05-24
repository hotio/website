---
hide:
  - toc
title: hotio/autoscan
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23000" onclick="CopyToClipboard('tag23000');return false;" class="tag-decoration">nightly</div><div id="tag7818" onclick="CopyToClipboard('tag7818');return false;" class="tag-decoration">nightly-7b4ca21</div><div id="tag22822" onclick="CopyToClipboard('tag22822');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/7b4ca218f87bb391050cfa030a5c7bb52f5c85e6" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/26363823644" target="_blank">2026-05-24 14:24:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24886" onclick="CopyToClipboard('tag24886');return false;" class="tag-decoration">release</div><div id="tag27058" onclick="CopyToClipboard('tag27058');return false;" class="tag-decoration">release-1bb531c</div><div id="tag20777" onclick="CopyToClipboard('tag20777');return false;" class="tag-decoration">release-1.4.0</div><div id="tag5170" onclick="CopyToClipboard('tag5170');return false;" class="tag-decoration">release-v1</div><div id="tag27736" onclick="CopyToClipboard('tag27736');return false;" class="tag-decoration">release-v1.4</div><div id="tag24549" onclick="CopyToClipboard('tag24549');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/1bb531cd548a64f4146febb8a0ca4ad0a70edc3b" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/25986658230" target="_blank">2026-05-17 09:06:21</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="autoscan" \
        -p 3030:3030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="3030/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
        ports:
          - "3030:3030"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=3030/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
