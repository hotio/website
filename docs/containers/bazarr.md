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
<tr><td><div id="tag2404" onclick="CopyToClipboard('tag2404');return false;" class="tag-decoration">nightly</div><div id="tag18224" onclick="CopyToClipboard('tag18224');return false;" class="tag-decoration">nightly-990a7a7</div><div id="tag8245" onclick="CopyToClipboard('tag8245');return false;" class="tag-decoration">nightly-1.6.2-beta.3</div><div id="tag9648" onclick="CopyToClipboard('tag9648');return false;" class="tag-decoration">nightly-v1</div><div id="tag2010" onclick="CopyToClipboard('tag2010');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag30542" onclick="CopyToClipboard('tag30542');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/990a7a7291a02d1b1ab549d7917b75430b02f9b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35588885575" target="_blank">2026-09-21 10:27:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23359" onclick="CopyToClipboard('tag23359');return false;" class="tag-decoration">release</div><div id="tag31329" onclick="CopyToClipboard('tag31329');return false;" class="tag-decoration">release-fd8b15f</div><div id="tag17694" onclick="CopyToClipboard('tag17694');return false;" class="tag-decoration">release-1.6.1</div><div id="tag27825" onclick="CopyToClipboard('tag27825');return false;" class="tag-decoration">release-v1</div><div id="tag6332" onclick="CopyToClipboard('tag6332');return false;" class="tag-decoration">release-v1.6</div><div id="tag4052" onclick="CopyToClipboard('tag4052');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/fd8b15f2e164107f90981341159dd82c54980c95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35378397170" target="_blank">2026-09-18 18:08:08</a></td></tr>
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
