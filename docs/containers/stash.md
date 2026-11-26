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
<tr><td><div id="tag24632" onclick="CopyToClipboard('tag24632');return false;" class="tag-decoration">nightly</div><div id="tag16524" onclick="CopyToClipboard('tag16524');return false;" class="tag-decoration">nightly-baf4144</div><div id="tag20665" onclick="CopyToClipboard('tag20665');return false;" class="tag-decoration">nightly-53d33680a1dce9e9ca645021eda762e51d5196f2</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/baf4144ce1bbb493f16a0ff0d0a5116db3e0abf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45693329853" target="_blank">2026-11-25 20:16:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26381" onclick="CopyToClipboard('tag26381');return false;" class="tag-decoration">release</div><div id="tag32726" onclick="CopyToClipboard('tag32726');return false;" class="tag-decoration">release-7203c9a</div><div id="tag11809" onclick="CopyToClipboard('tag11809');return false;" class="tag-decoration">release-0.32.0</div><div id="tag29305" onclick="CopyToClipboard('tag29305');return false;" class="tag-decoration">release-v0</div><div id="tag29241" onclick="CopyToClipboard('tag29241');return false;" class="tag-decoration">release-v0.32</div><div id="tag22401" onclick="CopyToClipboard('tag22401');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/7203c9ac39eec9d5b773617706e6c0025313f51c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45747751430" target="_blank">2026-11-26 03:15:28</a></td></tr>
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
