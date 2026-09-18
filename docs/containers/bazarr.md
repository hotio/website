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
<tr><td><div id="tag22781" onclick="CopyToClipboard('tag22781');return false;" class="tag-decoration">nightly</div><div id="tag8534" onclick="CopyToClipboard('tag8534');return false;" class="tag-decoration">nightly-9329583</div><div id="tag9838" onclick="CopyToClipboard('tag9838');return false;" class="tag-decoration">nightly-1.6.2-beta.0</div><div id="tag18188" onclick="CopyToClipboard('tag18188');return false;" class="tag-decoration">nightly-v1</div><div id="tag1098" onclick="CopyToClipboard('tag1098');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag13517" onclick="CopyToClipboard('tag13517');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9329583d0508ac9f9d7f754b2ac33d5515d276db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35378378914" target="_blank">2026-09-18 18:07:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1912" onclick="CopyToClipboard('tag1912');return false;" class="tag-decoration">release</div><div id="tag18850" onclick="CopyToClipboard('tag18850');return false;" class="tag-decoration">release-fd8b15f</div><div id="tag24123" onclick="CopyToClipboard('tag24123');return false;" class="tag-decoration">release-1.6.1</div><div id="tag22028" onclick="CopyToClipboard('tag22028');return false;" class="tag-decoration">release-v1</div><div id="tag13595" onclick="CopyToClipboard('tag13595');return false;" class="tag-decoration">release-v1.6</div><div id="tag1417" onclick="CopyToClipboard('tag1417');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/fd8b15f2e164107f90981341159dd82c54980c95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35378397170" target="_blank">2026-09-18 18:08:08</a></td></tr>
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
