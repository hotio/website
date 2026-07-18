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
<tr><td><div id="tag16910" onclick="CopyToClipboard('tag16910');return false;" class="tag-decoration">nightly</div><div id="tag24841" onclick="CopyToClipboard('tag24841');return false;" class="tag-decoration">nightly-c761d82</div><div id="tag300" onclick="CopyToClipboard('tag300');return false;" class="tag-decoration">nightly-1.6.1-beta.4</div><div id="tag2989" onclick="CopyToClipboard('tag2989');return false;" class="tag-decoration">nightly-v1</div><div id="tag5474" onclick="CopyToClipboard('tag5474');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag7110" onclick="CopyToClipboard('tag7110');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c761d82f08e53bece8bfd086b276c476db7808fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29651106390" target="_blank">2026-07-18 16:00:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24835" onclick="CopyToClipboard('tag24835');return false;" class="tag-decoration">release</div><div id="tag26748" onclick="CopyToClipboard('tag26748');return false;" class="tag-decoration">release-76d96da</div><div id="tag24444" onclick="CopyToClipboard('tag24444');return false;" class="tag-decoration">release-1.6.0</div><div id="tag22622" onclick="CopyToClipboard('tag22622');return false;" class="tag-decoration">release-v1</div><div id="tag16112" onclick="CopyToClipboard('tag16112');return false;" class="tag-decoration">release-v1.6</div><div id="tag5208" onclick="CopyToClipboard('tag5208');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/76d96da98d3a421c88a0d765d16d9a8f96fd4ee2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29356479015" target="_blank">2026-07-14 18:05:51</a></td></tr>
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
