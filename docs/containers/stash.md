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
<tr><td><div id="tag6405" onclick="CopyToClipboard('tag6405');return false;" class="tag-decoration">nightly</div><div id="tag8229" onclick="CopyToClipboard('tag8229');return false;" class="tag-decoration">nightly-7edb7f2</div><div id="tag21589" onclick="CopyToClipboard('tag21589');return false;" class="tag-decoration">nightly-e7d33c9bd131f1f5d781b850de30735943fa1195</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7edb7f2a3fd617c7b9b0749fd39e48b78fd20ee2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/37656091736" target="_blank">2026-10-07 17:03:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7760" onclick="CopyToClipboard('tag7760');return false;" class="tag-decoration">release</div><div id="tag5726" onclick="CopyToClipboard('tag5726');return false;" class="tag-decoration">release-b464363</div><div id="tag28810" onclick="CopyToClipboard('tag28810');return false;" class="tag-decoration">release-0.31.1</div><div id="tag12439" onclick="CopyToClipboard('tag12439');return false;" class="tag-decoration">release-v0</div><div id="tag18153" onclick="CopyToClipboard('tag18153');return false;" class="tag-decoration">release-v0.31</div><div id="tag29262" onclick="CopyToClipboard('tag29262');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b464363568527f9b59d484eb30d2b06cb4a2231f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/37656070527" target="_blank">2026-10-07 17:03:34</a></td></tr>
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
