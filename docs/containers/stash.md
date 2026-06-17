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
<tr><td><div id="tag31788" onclick="CopyToClipboard('tag31788');return false;" class="tag-decoration">nightly</div><div id="tag25997" onclick="CopyToClipboard('tag25997');return false;" class="tag-decoration">nightly-3d5c3f4</div><div id="tag24683" onclick="CopyToClipboard('tag24683');return false;" class="tag-decoration">nightly-405c67de7edc0c59c14b4f1faf21141e5039a3e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/3d5c3f4eb8256eff16dcb4b70082d26082d6290a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27695973229" target="_blank">2026-06-17 14:22:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29664" onclick="CopyToClipboard('tag29664');return false;" class="tag-decoration">release</div><div id="tag29693" onclick="CopyToClipboard('tag29693');return false;" class="tag-decoration">release-1252542</div><div id="tag3469" onclick="CopyToClipboard('tag3469');return false;" class="tag-decoration">release-0.31.1</div><div id="tag13123" onclick="CopyToClipboard('tag13123');return false;" class="tag-decoration">release-v0</div><div id="tag4569" onclick="CopyToClipboard('tag4569');return false;" class="tag-decoration">release-v0.31</div><div id="tag16089" onclick="CopyToClipboard('tag16089');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1252542d9150de2ac0df05c18a71e934281209e2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27695984105" target="_blank">2026-06-17 14:22:11</a></td></tr>
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
