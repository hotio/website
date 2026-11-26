---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag5799" onclick="CopyToClipboard('tag5799');return false;" class="tag-decoration">nightly</div><div id="tag24749" onclick="CopyToClipboard('tag24749');return false;" class="tag-decoration">nightly-8883342</div><div id="tag14284" onclick="CopyToClipboard('tag14284');return false;" class="tag-decoration">nightly-4d6ab70ae453bf14f5f4ab103b829ec03b57d927</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/888334262fef10e141a6a4a0d84e36311b251d28" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45827816892" target="_blank">2026-11-26 13:18:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32620" onclick="CopyToClipboard('tag32620');return false;" class="tag-decoration">release</div><div id="tag12103" onclick="CopyToClipboard('tag12103');return false;" class="tag-decoration">release-7203c9a</div><div id="tag18840" onclick="CopyToClipboard('tag18840');return false;" class="tag-decoration">release-0.32.0</div><div id="tag10402" onclick="CopyToClipboard('tag10402');return false;" class="tag-decoration">release-v0</div><div id="tag3711" onclick="CopyToClipboard('tag3711');return false;" class="tag-decoration">release-v0.32</div><div id="tag19845" onclick="CopyToClipboard('tag19845');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/7203c9ac39eec9d5b773617706e6c0025313f51c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45747751430" target="_blank">2026-11-26 03:15:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
