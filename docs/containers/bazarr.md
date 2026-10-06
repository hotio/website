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
<tr><td><div id="tag6557" onclick="CopyToClipboard('tag6557');return false;" class="tag-decoration">nightly</div><div id="tag13662" onclick="CopyToClipboard('tag13662');return false;" class="tag-decoration">nightly-36e1966</div><div id="tag18719" onclick="CopyToClipboard('tag18719');return false;" class="tag-decoration">nightly-1.6.3-beta.5</div><div id="tag5581" onclick="CopyToClipboard('tag5581');return false;" class="tag-decoration">nightly-v1</div><div id="tag467" onclick="CopyToClipboard('tag467');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag19785" onclick="CopyToClipboard('tag19785');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/36e1966e560386d9478edb98588ead264efd4ad8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37395139365" target="_blank">2026-10-06 00:39:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21032" onclick="CopyToClipboard('tag21032');return false;" class="tag-decoration">release</div><div id="tag8729" onclick="CopyToClipboard('tag8729');return false;" class="tag-decoration">release-e5016dd</div><div id="tag22899" onclick="CopyToClipboard('tag22899');return false;" class="tag-decoration">release-1.6.2</div><div id="tag25397" onclick="CopyToClipboard('tag25397');return false;" class="tag-decoration">release-v1</div><div id="tag18457" onclick="CopyToClipboard('tag18457');return false;" class="tag-decoration">release-v1.6</div><div id="tag27800" onclick="CopyToClipboard('tag27800');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e5016dd1a27ea4ec5a06284ff663fdb65505507b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36929977788" target="_blank">2026-10-01 21:38:06</a></td></tr>
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
