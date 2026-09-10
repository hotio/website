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
<tr><td><div id="tag288" onclick="CopyToClipboard('tag288');return false;" class="tag-decoration">nightly</div><div id="tag13529" onclick="CopyToClipboard('tag13529');return false;" class="tag-decoration">nightly-ae4f198</div><div id="tag20611" onclick="CopyToClipboard('tag20611');return false;" class="tag-decoration">nightly-1.6.1-beta.40</div><div id="tag17849" onclick="CopyToClipboard('tag17849');return false;" class="tag-decoration">nightly-v1</div><div id="tag28392" onclick="CopyToClipboard('tag28392');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5199" onclick="CopyToClipboard('tag5199');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/ae4f198c450d6f4bbc4b5d75e8c8347a852e0de7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34482306340" target="_blank">2026-09-10 13:23:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22190" onclick="CopyToClipboard('tag22190');return false;" class="tag-decoration">release</div><div id="tag19697" onclick="CopyToClipboard('tag19697');return false;" class="tag-decoration">release-d880afd</div><div id="tag16539" onclick="CopyToClipboard('tag16539');return false;" class="tag-decoration">release-1.6.0</div><div id="tag445" onclick="CopyToClipboard('tag445');return false;" class="tag-decoration">release-v1</div><div id="tag12834" onclick="CopyToClipboard('tag12834');return false;" class="tag-decoration">release-v1.6</div><div id="tag1870" onclick="CopyToClipboard('tag1870');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/d880afda15d6ad7ebd6e3c92e2ae5bf39a7af097" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34482296782" target="_blank">2026-09-10 13:22:59</a></td></tr>
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
