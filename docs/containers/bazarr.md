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
<tr><td><div id="tag28573" onclick="CopyToClipboard('tag28573');return false;" class="tag-decoration">nightly</div><div id="tag29794" onclick="CopyToClipboard('tag29794');return false;" class="tag-decoration">nightly-74ec955</div><div id="tag20105" onclick="CopyToClipboard('tag20105');return false;" class="tag-decoration">nightly-1.6.3-beta.20</div><div id="tag1274" onclick="CopyToClipboard('tag1274');return false;" class="tag-decoration">nightly-v1</div><div id="tag20970" onclick="CopyToClipboard('tag20970');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag14296" onclick="CopyToClipboard('tag14296');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/74ec9551ee73ad0810f8e6409949b24a5e779ee3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40222880535" target="_blank">2026-10-25 18:46:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag944" onclick="CopyToClipboard('tag944');return false;" class="tag-decoration">release</div><div id="tag17812" onclick="CopyToClipboard('tag17812');return false;" class="tag-decoration">release-a5be34b</div><div id="tag15031" onclick="CopyToClipboard('tag15031');return false;" class="tag-decoration">release-1.6.2</div><div id="tag4478" onclick="CopyToClipboard('tag4478');return false;" class="tag-decoration">release-v1</div><div id="tag21836" onclick="CopyToClipboard('tag21836');return false;" class="tag-decoration">release-v1.6</div><div id="tag23964" onclick="CopyToClipboard('tag23964');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a5be34b43235076c5ee545e7cc9adb8d9a71b183" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40222887841" target="_blank">2026-10-25 18:47:02</a></td></tr>
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
