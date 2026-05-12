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
<tr><td><div id="tag24209" onclick="CopyToClipboard('tag24209');return false;" class="tag-decoration">nightly</div><div id="tag31411" onclick="CopyToClipboard('tag31411');return false;" class="tag-decoration">nightly-93acbe6</div><div id="tag20387" onclick="CopyToClipboard('tag20387');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag13340" onclick="CopyToClipboard('tag13340');return false;" class="tag-decoration">nightly-v1</div><div id="tag27441" onclick="CopyToClipboard('tag27441');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag115" onclick="CopyToClipboard('tag115');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/93acbe673b6eb5e6c0399d7947e0f7e6035705eb" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25714895270" target="_blank">2026-05-12 05:14:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27953" onclick="CopyToClipboard('tag27953');return false;" class="tag-decoration">release</div><div id="tag4601" onclick="CopyToClipboard('tag4601');return false;" class="tag-decoration">release-4d2a56d</div><div id="tag26827" onclick="CopyToClipboard('tag26827');return false;" class="tag-decoration">release-1.5.6</div><div id="tag18266" onclick="CopyToClipboard('tag18266');return false;" class="tag-decoration">release-v1</div><div id="tag32476" onclick="CopyToClipboard('tag32476');return false;" class="tag-decoration">release-v1.5</div><div id="tag21595" onclick="CopyToClipboard('tag21595');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/4d2a56de57975f7e3f015e0f6bad4b0b3e50b8db" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25708353740" target="_blank">2026-05-12 01:50:30</a></td></tr>
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
