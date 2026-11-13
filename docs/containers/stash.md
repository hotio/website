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
<tr><td><div id="tag13255" onclick="CopyToClipboard('tag13255');return false;" class="tag-decoration">nightly</div><div id="tag25119" onclick="CopyToClipboard('tag25119');return false;" class="tag-decoration">nightly-bf8e65f</div><div id="tag19059" onclick="CopyToClipboard('tag19059');return false;" class="tag-decoration">nightly-47057616fe9da0cf38cfa8c39ab160e5441eeafc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/bf8e65fdc6583fe237452e3389a74a89e80faf2c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43350620560" target="_blank">2026-11-13 02:13:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10815" onclick="CopyToClipboard('tag10815');return false;" class="tag-decoration">release</div><div id="tag4044" onclick="CopyToClipboard('tag4044');return false;" class="tag-decoration">release-aa08ddb</div><div id="tag5042" onclick="CopyToClipboard('tag5042');return false;" class="tag-decoration">release-0.32.0</div><div id="tag25724" onclick="CopyToClipboard('tag25724');return false;" class="tag-decoration">release-v0</div><div id="tag21496" onclick="CopyToClipboard('tag21496');return false;" class="tag-decoration">release-v0.32</div><div id="tag20179" onclick="CopyToClipboard('tag20179');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/aa08ddbfda385a957b8850f9f4602caa8dc0da0c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43350640936" target="_blank">2026-11-13 02:13:41</a></td></tr>
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
