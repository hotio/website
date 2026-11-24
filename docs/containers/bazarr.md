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
<tr><td><div id="tag23190" onclick="CopyToClipboard('tag23190');return false;" class="tag-decoration">nightly</div><div id="tag28296" onclick="CopyToClipboard('tag28296');return false;" class="tag-decoration">nightly-1227fff</div><div id="tag18397" onclick="CopyToClipboard('tag18397');return false;" class="tag-decoration">nightly-1.6.3-beta.39</div><div id="tag1765" onclick="CopyToClipboard('tag1765');return false;" class="tag-decoration">nightly-v1</div><div id="tag9336" onclick="CopyToClipboard('tag9336');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag29446" onclick="CopyToClipboard('tag29446');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1227fff1248b1b577a4687955f6c10e440500938" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45331771207" target="_blank">2026-11-24 05:13:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24936" onclick="CopyToClipboard('tag24936');return false;" class="tag-decoration">release</div><div id="tag23706" onclick="CopyToClipboard('tag23706');return false;" class="tag-decoration">release-448b31a</div><div id="tag13392" onclick="CopyToClipboard('tag13392');return false;" class="tag-decoration">release-1.6.2</div><div id="tag5394" onclick="CopyToClipboard('tag5394');return false;" class="tag-decoration">release-v1</div><div id="tag19043" onclick="CopyToClipboard('tag19043');return false;" class="tag-decoration">release-v1.6</div><div id="tag11673" onclick="CopyToClipboard('tag11673');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/448b31a108396a5707b01b573b5ffba6eaff6ded" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45331771645" target="_blank">2026-11-24 05:13:25</a></td></tr>
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
