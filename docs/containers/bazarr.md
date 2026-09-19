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
<tr><td><div id="tag14259" onclick="CopyToClipboard('tag14259');return false;" class="tag-decoration">nightly</div><div id="tag27912" onclick="CopyToClipboard('tag27912');return false;" class="tag-decoration">nightly-6d53637</div><div id="tag7785" onclick="CopyToClipboard('tag7785');return false;" class="tag-decoration">nightly-1.6.2-beta.1</div><div id="tag12636" onclick="CopyToClipboard('tag12636');return false;" class="tag-decoration">nightly-v1</div><div id="tag24312" onclick="CopyToClipboard('tag24312');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag7356" onclick="CopyToClipboard('tag7356');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6d53637dac8e70f77f4103d1c3f145bf6927b487" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35434167074" target="_blank">2026-09-19 09:14:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29071" onclick="CopyToClipboard('tag29071');return false;" class="tag-decoration">release</div><div id="tag14837" onclick="CopyToClipboard('tag14837');return false;" class="tag-decoration">release-fd8b15f</div><div id="tag25783" onclick="CopyToClipboard('tag25783');return false;" class="tag-decoration">release-1.6.1</div><div id="tag31836" onclick="CopyToClipboard('tag31836');return false;" class="tag-decoration">release-v1</div><div id="tag22888" onclick="CopyToClipboard('tag22888');return false;" class="tag-decoration">release-v1.6</div><div id="tag22072" onclick="CopyToClipboard('tag22072');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/fd8b15f2e164107f90981341159dd82c54980c95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35378397170" target="_blank">2026-09-18 18:08:08</a></td></tr>
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
