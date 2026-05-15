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
<tr><td><div id="tag29438" onclick="CopyToClipboard('tag29438');return false;" class="tag-decoration">nightly</div><div id="tag6674" onclick="CopyToClipboard('tag6674');return false;" class="tag-decoration">nightly-374e464</div><div id="tag3540" onclick="CopyToClipboard('tag3540');return false;" class="tag-decoration">nightly-1.5.7-beta.38</div><div id="tag13513" onclick="CopyToClipboard('tag13513');return false;" class="tag-decoration">nightly-v1</div><div id="tag23092" onclick="CopyToClipboard('tag23092');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag23595" onclick="CopyToClipboard('tag23595');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/374e464186d10cab86d86de38302a17f5cce79fa" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25915971267" target="_blank">2026-05-15 11:42:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10129" onclick="CopyToClipboard('tag10129');return false;" class="tag-decoration">release</div><div id="tag14504" onclick="CopyToClipboard('tag14504');return false;" class="tag-decoration">release-03ef50b</div><div id="tag15621" onclick="CopyToClipboard('tag15621');return false;" class="tag-decoration">release-1.5.6</div><div id="tag31782" onclick="CopyToClipboard('tag31782');return false;" class="tag-decoration">release-v1</div><div id="tag16004" onclick="CopyToClipboard('tag16004');return false;" class="tag-decoration">release-v1.5</div><div id="tag24687" onclick="CopyToClipboard('tag24687');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/03ef50b432adb224dbc221c6c483934e32833e3f" target="_blank"></a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25916178059" target="_blank">2026-05-14 19:50:23</a></td></tr>
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
