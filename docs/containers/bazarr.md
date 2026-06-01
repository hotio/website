---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6281" onclick="CopyToClipboard('tag6281');return false;" class="tag-decoration">nightly</div><div id="tag31676" onclick="CopyToClipboard('tag31676');return false;" class="tag-decoration">nightly-2f50061</div><div id="tag16160" onclick="CopyToClipboard('tag16160');return false;" class="tag-decoration">nightly-1.5.7-beta.49</div><div id="tag24627" onclick="CopyToClipboard('tag24627');return false;" class="tag-decoration">nightly-v1</div><div id="tag13036" onclick="CopyToClipboard('tag13036');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag6976" onclick="CopyToClipboard('tag6976');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/2f50061f8adee8e030432b2f126562861dc7eb6f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26749136628" target="_blank">2026-06-01 10:22:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7544" onclick="CopyToClipboard('tag7544');return false;" class="tag-decoration">release</div><div id="tag14574" onclick="CopyToClipboard('tag14574');return false;" class="tag-decoration">release-a2f0a5c</div><div id="tag27587" onclick="CopyToClipboard('tag27587');return false;" class="tag-decoration">release-1.5.6</div><div id="tag7174" onclick="CopyToClipboard('tag7174');return false;" class="tag-decoration">release-v1</div><div id="tag12824" onclick="CopyToClipboard('tag12824');return false;" class="tag-decoration">release-v1.5</div><div id="tag29689" onclick="CopyToClipboard('tag29689');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a2f0a5cfef502abadb1e000e878a3c633b1b2a76" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26710768166" target="_blank">2026-05-31 11:00:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
