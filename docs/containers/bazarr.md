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
<tr><td><div id="tag27622" onclick="CopyToClipboard('tag27622');return false;" class="tag-decoration">nightly</div><div id="tag7236" onclick="CopyToClipboard('tag7236');return false;" class="tag-decoration">nightly-3b49170</div><div id="tag22327" onclick="CopyToClipboard('tag22327');return false;" class="tag-decoration">nightly-1.6.3-beta.0</div><div id="tag25981" onclick="CopyToClipboard('tag25981');return false;" class="tag-decoration">nightly-v1</div><div id="tag9873" onclick="CopyToClipboard('tag9873');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5671" onclick="CopyToClipboard('tag5671');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3b4917045186c053b950dfda284ac864fa3ae3a0" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36677892670" target="_blank">2026-09-30 06:22:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21176" onclick="CopyToClipboard('tag21176');return false;" class="tag-decoration">release</div><div id="tag18597" onclick="CopyToClipboard('tag18597');return false;" class="tag-decoration">release-274c1e6</div><div id="tag10581" onclick="CopyToClipboard('tag10581');return false;" class="tag-decoration">release-1.6.2</div><div id="tag21077" onclick="CopyToClipboard('tag21077');return false;" class="tag-decoration">release-v1</div><div id="tag24457" onclick="CopyToClipboard('tag24457');return false;" class="tag-decoration">release-v1.6</div><div id="tag5210" onclick="CopyToClipboard('tag5210');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/274c1e601e3b9a769a5c07e2c4b0683abd39819a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36677893264" target="_blank">2026-09-30 06:22:25</a></td></tr>
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
