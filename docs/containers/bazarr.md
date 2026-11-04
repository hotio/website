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
<tr><td><div id="tag1931" onclick="CopyToClipboard('tag1931');return false;" class="tag-decoration">nightly</div><div id="tag19263" onclick="CopyToClipboard('tag19263');return false;" class="tag-decoration">nightly-6054fa9</div><div id="tag9893" onclick="CopyToClipboard('tag9893');return false;" class="tag-decoration">nightly-1.6.3-beta.26</div><div id="tag157" onclick="CopyToClipboard('tag157');return false;" class="tag-decoration">nightly-v1</div><div id="tag1958" onclick="CopyToClipboard('tag1958');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag31649" onclick="CopyToClipboard('tag31649');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6054fa9ed77d7a5b09f8c11a0a493b4879cd5f23" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/41803541231" target="_blank">2026-11-04 08:57:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25339" onclick="CopyToClipboard('tag25339');return false;" class="tag-decoration">release</div><div id="tag23162" onclick="CopyToClipboard('tag23162');return false;" class="tag-decoration">release-d8aefb9</div><div id="tag21467" onclick="CopyToClipboard('tag21467');return false;" class="tag-decoration">release-1.6.2</div><div id="tag5007" onclick="CopyToClipboard('tag5007');return false;" class="tag-decoration">release-v1</div><div id="tag29740" onclick="CopyToClipboard('tag29740');return false;" class="tag-decoration">release-v1.6</div><div id="tag32481" onclick="CopyToClipboard('tag32481');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/d8aefb90956bb9a27906a4e3b6ef24fafccba070" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/41933066051" target="_blank">2026-11-04 23:21:24</a></td></tr>
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
