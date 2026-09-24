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
<tr><td><div id="tag28021" onclick="CopyToClipboard('tag28021');return false;" class="tag-decoration">nightly</div><div id="tag6226" onclick="CopyToClipboard('tag6226');return false;" class="tag-decoration">nightly-1ceac14</div><div id="tag7305" onclick="CopyToClipboard('tag7305');return false;" class="tag-decoration">nightly-1.6.2-beta.5</div><div id="tag28431" onclick="CopyToClipboard('tag28431');return false;" class="tag-decoration">nightly-v1</div><div id="tag32729" onclick="CopyToClipboard('tag32729');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag26361" onclick="CopyToClipboard('tag26361');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1ceac14354cb6d0e49b980cde1809ca14c2e7bfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35941935156" target="_blank">2026-09-24 01:12:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18751" onclick="CopyToClipboard('tag18751');return false;" class="tag-decoration">release</div><div id="tag18768" onclick="CopyToClipboard('tag18768');return false;" class="tag-decoration">release-f91467e</div><div id="tag26722" onclick="CopyToClipboard('tag26722');return false;" class="tag-decoration">release-1.6.1</div><div id="tag13144" onclick="CopyToClipboard('tag13144');return false;" class="tag-decoration">release-v1</div><div id="tag22396" onclick="CopyToClipboard('tag22396');return false;" class="tag-decoration">release-v1.6</div><div id="tag6654" onclick="CopyToClipboard('tag6654');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f91467e5f3970657c3e6a3f96f109a7ac60cb373" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35941936311" target="_blank">2026-09-24 01:12:56</a></td></tr>
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
