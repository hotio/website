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
<tr><td><div id="tag23717" onclick="CopyToClipboard('tag23717');return false;" class="tag-decoration">nightly</div><div id="tag26153" onclick="CopyToClipboard('tag26153');return false;" class="tag-decoration">nightly-385f161</div><div id="tag24205" onclick="CopyToClipboard('tag24205');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag8465" onclick="CopyToClipboard('tag8465');return false;" class="tag-decoration">nightly-v1</div><div id="tag29128" onclick="CopyToClipboard('tag29128');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag23999" onclick="CopyToClipboard('tag23999');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/385f161d8aafad678ea44c4237fdb247f630aaf3" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25700424798" target="_blank">2026-05-11 22:13:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13070" onclick="CopyToClipboard('tag13070');return false;" class="tag-decoration">release</div><div id="tag6418" onclick="CopyToClipboard('tag6418');return false;" class="tag-decoration">release-0e2dd69</div><div id="tag26362" onclick="CopyToClipboard('tag26362');return false;" class="tag-decoration">release-1.5.6</div><div id="tag18132" onclick="CopyToClipboard('tag18132');return false;" class="tag-decoration">release-v1</div><div id="tag23191" onclick="CopyToClipboard('tag23191');return false;" class="tag-decoration">release-v1.5</div><div id="tag2660" onclick="CopyToClipboard('tag2660');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0e2dd6904fbc2f65323577d52c2db7d1c75bcb68" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25700430269" target="_blank">2026-05-11 22:13:40</a></td></tr>
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
