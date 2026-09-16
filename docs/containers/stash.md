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
<tr><td><div id="tag11355" onclick="CopyToClipboard('tag11355');return false;" class="tag-decoration">nightly</div><div id="tag12512" onclick="CopyToClipboard('tag12512');return false;" class="tag-decoration">nightly-41a609a</div><div id="tag14579" onclick="CopyToClipboard('tag14579');return false;" class="tag-decoration">nightly-b872e360f05963f59d45605d1e638de88511dc47</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/41a609abe851c4248da861ac646f59c242e3c925" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/35067879559" target="_blank">2026-09-16 07:18:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19911" onclick="CopyToClipboard('tag19911');return false;" class="tag-decoration">release</div><div id="tag24617" onclick="CopyToClipboard('tag24617');return false;" class="tag-decoration">release-4128eae</div><div id="tag8275" onclick="CopyToClipboard('tag8275');return false;" class="tag-decoration">release-0.31.1</div><div id="tag29871" onclick="CopyToClipboard('tag29871');return false;" class="tag-decoration">release-v0</div><div id="tag951" onclick="CopyToClipboard('tag951');return false;" class="tag-decoration">release-v0.31</div><div id="tag27103" onclick="CopyToClipboard('tag27103');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/4128eae6a8b3e8ca049722325a03a19cce325e1b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/35067837055" target="_blank">2026-09-16 07:18:10</a></td></tr>
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
