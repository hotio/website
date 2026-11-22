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
<tr><td><div id="tag13579" onclick="CopyToClipboard('tag13579');return false;" class="tag-decoration">nightly</div><div id="tag1936" onclick="CopyToClipboard('tag1936');return false;" class="tag-decoration">nightly-37a88cf</div><div id="tag29418" onclick="CopyToClipboard('tag29418');return false;" class="tag-decoration">nightly-1.6.3-beta.38</div><div id="tag31503" onclick="CopyToClipboard('tag31503');return false;" class="tag-decoration">nightly-v1</div><div id="tag2636" onclick="CopyToClipboard('tag2636');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17008" onclick="CopyToClipboard('tag17008');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/37a88cf6d26ad0b8e94d4ec80a8fa3b54b6f980c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45014472725" target="_blank">2026-11-22 10:51:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5544" onclick="CopyToClipboard('tag5544');return false;" class="tag-decoration">release</div><div id="tag31619" onclick="CopyToClipboard('tag31619');return false;" class="tag-decoration">release-20e929f</div><div id="tag31697" onclick="CopyToClipboard('tag31697');return false;" class="tag-decoration">release-1.6.2</div><div id="tag10826" onclick="CopyToClipboard('tag10826');return false;" class="tag-decoration">release-v1</div><div id="tag9828" onclick="CopyToClipboard('tag9828');return false;" class="tag-decoration">release-v1.6</div><div id="tag28275" onclick="CopyToClipboard('tag28275');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/20e929f938d582662e98d270da3cb86872c5c0ea" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/44010492551" target="_blank">2026-11-17 03:28:44</a></td></tr>
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
