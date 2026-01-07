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
<tr><td><div id="tag26995" onclick="CopyToClipboard('tag26995');return false;" class="tag-decoration">nightly</div><div id="tag6022" onclick="CopyToClipboard('tag6022');return false;" class="tag-decoration">nightly-1.5.5-beta.1</div><div id="tag27786" onclick="CopyToClipboard('tag27786');return false;" class="tag-decoration">nightly-c6f3878</div><div id="tag23083" onclick="CopyToClipboard('tag23083');return false;" class="tag-decoration">nightly-v1</div><div id="tag350" onclick="CopyToClipboard('tag350');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag25288" onclick="CopyToClipboard('tag25288');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c6f3878ac99da7589a0bb62e40f294bf65ae2baa" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20770096225" target="_blank">2026-01-07 03:57:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16741" onclick="CopyToClipboard('tag16741');return false;" class="tag-decoration">release</div><div id="tag24792" onclick="CopyToClipboard('tag24792');return false;" class="tag-decoration">release-1.5.4</div><div id="tag30039" onclick="CopyToClipboard('tag30039');return false;" class="tag-decoration">release-4a80df9</div><div id="tag31627" onclick="CopyToClipboard('tag31627');return false;" class="tag-decoration">release-v1</div><div id="tag17000" onclick="CopyToClipboard('tag17000');return false;" class="tag-decoration">release-v1.5</div><div id="tag26182" onclick="CopyToClipboard('tag26182');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/4a80df99b140b53f97c4aa37d39f669c2cc5dce4" target="_blank">Version update: 1.5.3 => 1.5.4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20700327080" target="_blank">2026-01-04 22:50:39</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name bazarr \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

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
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
