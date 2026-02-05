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
<tr><td><div id="tag5923" onclick="CopyToClipboard('tag5923');return false;" class="tag-decoration">nightly</div><div id="tag2040" onclick="CopyToClipboard('tag2040');return false;" class="tag-decoration">nightly-a76dd5b</div><div id="tag29012" onclick="CopyToClipboard('tag29012');return false;" class="tag-decoration">nightly-f629191b282aae08e315e47f5f7432b2333176e2</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a76dd5b9dec177ae74409030a94e45d3b5e760e9" target="_blank">Version update: 9eda7c2f602db5a26e53f405c2f8299211f7911a => f629191b282aae08e315e47f5f7432b2333176e2</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21697296813" target="_blank">2026-02-05 03:12:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4537" onclick="CopyToClipboard('tag4537');return false;" class="tag-decoration">release</div><div id="tag31460" onclick="CopyToClipboard('tag31460');return false;" class="tag-decoration">release-ed4f6db</div><div id="tag3118" onclick="CopyToClipboard('tag3118');return false;" class="tag-decoration">release-0.30.1</div><div id="tag8732" onclick="CopyToClipboard('tag8732');return false;" class="tag-decoration">release-v0</div><div id="tag12066" onclick="CopyToClipboard('tag12066');return false;" class="tag-decoration">release-v0.30</div><div id="tag24658" onclick="CopyToClipboard('tag24658');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ed4f6db1cfee934d14f039af289874ba72299767" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21428872957" target="_blank">2026-01-28 07:15:35</a></td></tr>
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
