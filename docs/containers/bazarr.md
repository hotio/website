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
<tr><td><div id="tag26084" onclick="CopyToClipboard('tag26084');return false;" class="tag-decoration">nightly</div><div id="tag25109" onclick="CopyToClipboard('tag25109');return false;" class="tag-decoration">nightly-af266a3</div><div id="tag3648" onclick="CopyToClipboard('tag3648');return false;" class="tag-decoration">nightly-1.5.7-beta.47</div><div id="tag5690" onclick="CopyToClipboard('tag5690');return false;" class="tag-decoration">nightly-v1</div><div id="tag9962" onclick="CopyToClipboard('tag9962');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag8786" onclick="CopyToClipboard('tag8786');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/af266a3238a6bb0ea6e5cffa606ca4d72d7d1001" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26680255437" target="_blank">2026-05-30 09:21:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3720" onclick="CopyToClipboard('tag3720');return false;" class="tag-decoration">release</div><div id="tag26275" onclick="CopyToClipboard('tag26275');return false;" class="tag-decoration">release-ac04902</div><div id="tag982" onclick="CopyToClipboard('tag982');return false;" class="tag-decoration">release-1.5.6</div><div id="tag8728" onclick="CopyToClipboard('tag8728');return false;" class="tag-decoration">release-v1</div><div id="tag24718" onclick="CopyToClipboard('tag24718');return false;" class="tag-decoration">release-v1.5</div><div id="tag7070" onclick="CopyToClipboard('tag7070');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/ac0490216de9395a0fc018cc3025ef7abd3e382c" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26000356944" target="_blank">2026-05-17 19:22:43</a></td></tr>
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
