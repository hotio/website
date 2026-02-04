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
<tr><td><div id="tag8872" onclick="CopyToClipboard('tag8872');return false;" class="tag-decoration">nightly</div><div id="tag24993" onclick="CopyToClipboard('tag24993');return false;" class="tag-decoration">nightly-e4b4a9a</div><div id="tag2778" onclick="CopyToClipboard('tag2778');return false;" class="tag-decoration">nightly-b5de30a295ffb855000940e69e8d2047416f869a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e4b4a9afe30094c2ea10361c50e160f553c694a3" target="_blank">Version update: 88eb46380c1f05ecd1e8cac632d503b6b1a5070f => b5de30a295ffb855000940e69e8d2047416f869a</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21661861348" target="_blank">2026-02-04 07:00:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1344" onclick="CopyToClipboard('tag1344');return false;" class="tag-decoration">release</div><div id="tag19656" onclick="CopyToClipboard('tag19656');return false;" class="tag-decoration">release-ed4f6db</div><div id="tag6960" onclick="CopyToClipboard('tag6960');return false;" class="tag-decoration">release-0.30.1</div><div id="tag27300" onclick="CopyToClipboard('tag27300');return false;" class="tag-decoration">release-v0</div><div id="tag12732" onclick="CopyToClipboard('tag12732');return false;" class="tag-decoration">release-v0.30</div><div id="tag20534" onclick="CopyToClipboard('tag20534');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ed4f6db1cfee934d14f039af289874ba72299767" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21428872957" target="_blank">2026-01-28 07:15:35</a></td></tr>
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
