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
<tr><td><div id="tag12088" onclick="CopyToClipboard('tag12088');return false;" class="tag-decoration">nightly</div><div id="tag5523" onclick="CopyToClipboard('tag5523');return false;" class="tag-decoration">nightly-9c751a3</div><div id="tag15803" onclick="CopyToClipboard('tag15803');return false;" class="tag-decoration">nightly-adaadee368320897656cb1e2b2df01a0cb53c549</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9c751a3571aa29df331f8efd768125cf12b18bc0" target="_blank">Version update: bede849fa64d959a5f515ae44c99735a72aa463d => adaadee368320897656cb1e2b2df01a0cb53c549</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22086040331" target="_blank">2026-02-17 04:33:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17426" onclick="CopyToClipboard('tag17426');return false;" class="tag-decoration">release</div><div id="tag18337" onclick="CopyToClipboard('tag18337');return false;" class="tag-decoration">release-a1dee42</div><div id="tag13957" onclick="CopyToClipboard('tag13957');return false;" class="tag-decoration">release-0.30.1</div><div id="tag23082" onclick="CopyToClipboard('tag23082');return false;" class="tag-decoration">release-v0</div><div id="tag4723" onclick="CopyToClipboard('tag4723');return false;" class="tag-decoration">release-v0.30</div><div id="tag29729" onclick="CopyToClipboard('tag29729');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/a1dee42206d8045b966881a4f68854c995f552d6" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21901704553" target="_blank">2026-02-11 10:35:58</a></td></tr>
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
