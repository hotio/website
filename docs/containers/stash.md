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
<tr><td><div id="tag29592" onclick="CopyToClipboard('tag29592');return false;" class="tag-decoration">nightly</div><div id="tag11421" onclick="CopyToClipboard('tag11421');return false;" class="tag-decoration">nightly-3c1b781</div><div id="tag24259" onclick="CopyToClipboard('tag24259');return false;" class="tag-decoration">nightly-405c67de7edc0c59c14b4f1faf21141e5039a3e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/3c1b78151ec675cbbc15e74bbfd904eda62e6562" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27634095016" target="_blank">2026-06-16 16:55:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18688" onclick="CopyToClipboard('tag18688');return false;" class="tag-decoration">release</div><div id="tag25214" onclick="CopyToClipboard('tag25214');return false;" class="tag-decoration">release-9604b57</div><div id="tag11212" onclick="CopyToClipboard('tag11212');return false;" class="tag-decoration">release-0.31.1</div><div id="tag7633" onclick="CopyToClipboard('tag7633');return false;" class="tag-decoration">release-v0</div><div id="tag19797" onclick="CopyToClipboard('tag19797');return false;" class="tag-decoration">release-v0.31</div><div id="tag31876" onclick="CopyToClipboard('tag31876');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/9604b576cb41b3aae94b502992525f4f8aa6269f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27634100842" target="_blank">2026-06-16 16:55:52</a></td></tr>
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
