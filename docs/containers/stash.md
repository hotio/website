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
<tr><td><div id="tag4672" onclick="CopyToClipboard('tag4672');return false;" class="tag-decoration">nightly</div><div id="tag25566" onclick="CopyToClipboard('tag25566');return false;" class="tag-decoration">nightly-f92b464</div><div id="tag20996" onclick="CopyToClipboard('tag20996');return false;" class="tag-decoration">nightly-f08b80723d4b65548732b9f1c5f96199e162195b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/f92b46456a8da6254fb7c043be0b44a321e8f123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32481424000" target="_blank">2026-08-21 12:20:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19229" onclick="CopyToClipboard('tag19229');return false;" class="tag-decoration">release</div><div id="tag19101" onclick="CopyToClipboard('tag19101');return false;" class="tag-decoration">release-d4ad27d</div><div id="tag16626" onclick="CopyToClipboard('tag16626');return false;" class="tag-decoration">release-0.31.1</div><div id="tag10727" onclick="CopyToClipboard('tag10727');return false;" class="tag-decoration">release-v0</div><div id="tag11508" onclick="CopyToClipboard('tag11508');return false;" class="tag-decoration">release-v0.31</div><div id="tag30801" onclick="CopyToClipboard('tag30801');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/d4ad27d8fb40d8ef977d1cd62d536eb5ba77c736" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32433132359" target="_blank">2026-08-21 00:33:42</a></td></tr>
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
