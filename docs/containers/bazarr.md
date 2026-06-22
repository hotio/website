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
<tr><td><div id="tag22679" onclick="CopyToClipboard('tag22679');return false;" class="tag-decoration">nightly</div><div id="tag23500" onclick="CopyToClipboard('tag23500');return false;" class="tag-decoration">nightly-21c1cfa</div><div id="tag9659" onclick="CopyToClipboard('tag9659');return false;" class="tag-decoration">nightly-1.5.7-beta.62</div><div id="tag22995" onclick="CopyToClipboard('tag22995');return false;" class="tag-decoration">nightly-v1</div><div id="tag3006" onclick="CopyToClipboard('tag3006');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag14335" onclick="CopyToClipboard('tag14335');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/21c1cfafcb1f054b70c918d83789e39b72d08f00" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27987165917" target="_blank">2026-06-22 22:05:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5891" onclick="CopyToClipboard('tag5891');return false;" class="tag-decoration">release</div><div id="tag27114" onclick="CopyToClipboard('tag27114');return false;" class="tag-decoration">release-61fbe12</div><div id="tag7312" onclick="CopyToClipboard('tag7312');return false;" class="tag-decoration">release-1.5.6</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">release-v1</div><div id="tag28611" onclick="CopyToClipboard('tag28611');return false;" class="tag-decoration">release-v1.5</div><div id="tag19165" onclick="CopyToClipboard('tag19165');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/61fbe12f4635a8170afed0b031a1aa6f7b2c0f7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/27915487932" target="_blank">2026-06-21 19:46:34</a></td></tr>
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
