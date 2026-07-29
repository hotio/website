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
<tr><td><div id="tag8493" onclick="CopyToClipboard('tag8493');return false;" class="tag-decoration">nightly</div><div id="tag18314" onclick="CopyToClipboard('tag18314');return false;" class="tag-decoration">nightly-013bc47</div><div id="tag17737" onclick="CopyToClipboard('tag17737');return false;" class="tag-decoration">nightly-1.6.1-beta.10</div><div id="tag16924" onclick="CopyToClipboard('tag16924');return false;" class="tag-decoration">nightly-v1</div><div id="tag14139" onclick="CopyToClipboard('tag14139');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag9252" onclick="CopyToClipboard('tag9252');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/013bc47ff2e02f361fc9ea3592f69eb998b7f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30440511530" target="_blank">2026-07-29 09:39:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12730" onclick="CopyToClipboard('tag12730');return false;" class="tag-decoration">release</div><div id="tag17343" onclick="CopyToClipboard('tag17343');return false;" class="tag-decoration">release-7120114</div><div id="tag29040" onclick="CopyToClipboard('tag29040');return false;" class="tag-decoration">release-1.6.0</div><div id="tag8903" onclick="CopyToClipboard('tag8903');return false;" class="tag-decoration">release-v1</div><div id="tag12047" onclick="CopyToClipboard('tag12047');return false;" class="tag-decoration">release-v1.6</div><div id="tag24748" onclick="CopyToClipboard('tag24748');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/71201143906eefebb2e76a51047810d776a4fd03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30379470005" target="_blank">2026-07-28 16:41:56</a></td></tr>
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
