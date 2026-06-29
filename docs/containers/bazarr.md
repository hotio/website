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
<tr><td><div id="tag31092" onclick="CopyToClipboard('tag31092');return false;" class="tag-decoration">nightly</div><div id="tag10933" onclick="CopyToClipboard('tag10933');return false;" class="tag-decoration">nightly-ccf9027</div><div id="tag19341" onclick="CopyToClipboard('tag19341');return false;" class="tag-decoration">nightly-1.5.7-beta.65</div><div id="tag28480" onclick="CopyToClipboard('tag28480');return false;" class="tag-decoration">nightly-v1</div><div id="tag22063" onclick="CopyToClipboard('tag22063');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag22434" onclick="CopyToClipboard('tag22434');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/ccf9027ecb6e30cda84b24faf1356bd19d26a4c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28391244949" target="_blank">2026-06-29 17:39:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31094" onclick="CopyToClipboard('tag31094');return false;" class="tag-decoration">release</div><div id="tag30489" onclick="CopyToClipboard('tag30489');return false;" class="tag-decoration">release-017b4d3</div><div id="tag7781" onclick="CopyToClipboard('tag7781');return false;" class="tag-decoration">release-1.5.6</div><div id="tag5342" onclick="CopyToClipboard('tag5342');return false;" class="tag-decoration">release-v1</div><div id="tag17217" onclick="CopyToClipboard('tag17217');return false;" class="tag-decoration">release-v1.5</div><div id="tag7671" onclick="CopyToClipboard('tag7671');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/017b4d319a3f6cb528b8f2bd8ab9f911b8a6aa50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28391242685" target="_blank">2026-06-29 17:39:34</a></td></tr>
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
