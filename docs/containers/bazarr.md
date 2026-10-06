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
<tr><td><div id="tag16437" onclick="CopyToClipboard('tag16437');return false;" class="tag-decoration">nightly</div><div id="tag28563" onclick="CopyToClipboard('tag28563');return false;" class="tag-decoration">nightly-f13f1cc</div><div id="tag25583" onclick="CopyToClipboard('tag25583');return false;" class="tag-decoration">nightly-1.6.3-beta.6</div><div id="tag11140" onclick="CopyToClipboard('tag11140');return false;" class="tag-decoration">nightly-v1</div><div id="tag26626" onclick="CopyToClipboard('tag26626');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag2857" onclick="CopyToClipboard('tag2857');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f13f1cce0238f67a1d0a69ac38090b33da445bc1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37482482031" target="_blank">2026-10-06 14:51:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22650" onclick="CopyToClipboard('tag22650');return false;" class="tag-decoration">release</div><div id="tag10554" onclick="CopyToClipboard('tag10554');return false;" class="tag-decoration">release-ccb7daf</div><div id="tag8126" onclick="CopyToClipboard('tag8126');return false;" class="tag-decoration">release-1.6.2</div><div id="tag29177" onclick="CopyToClipboard('tag29177');return false;" class="tag-decoration">release-v1</div><div id="tag3052" onclick="CopyToClipboard('tag3052');return false;" class="tag-decoration">release-v1.6</div><div id="tag16143" onclick="CopyToClipboard('tag16143');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/ccb7dafbbcffdf82ce310ad7027fcba5c62988c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37395119293" target="_blank">2026-10-06 00:39:07</a></td></tr>
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
