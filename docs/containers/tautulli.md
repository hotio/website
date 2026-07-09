---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24558" onclick="CopyToClipboard('tag24558');return false;" class="tag-decoration">release</div><div id="tag7937" onclick="CopyToClipboard('tag7937');return false;" class="tag-decoration">release-690bd06</div><div id="tag2746" onclick="CopyToClipboard('tag2746');return false;" class="tag-decoration">release-2.17.2</div><div id="tag16459" onclick="CopyToClipboard('tag16459');return false;" class="tag-decoration">release-v2</div><div id="tag294" onclick="CopyToClipboard('tag294');return false;" class="tag-decoration">release-v2.17</div><div id="tag5487" onclick="CopyToClipboard('tag5487');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/690bd06cf8953ad0d399d0464659125de29c5a8d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28988687270" target="_blank">2026-07-09 01:58:11</a></td></tr>
<tr><td><div id="tag26701" onclick="CopyToClipboard('tag26701');return false;" class="tag-decoration">testing</div><div id="tag4506" onclick="CopyToClipboard('tag4506');return false;" class="tag-decoration">testing-faa0819</div><div id="tag10274" onclick="CopyToClipboard('tag10274');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag4620" onclick="CopyToClipboard('tag4620');return false;" class="tag-decoration">testing-v2</div><div id="tag17335" onclick="CopyToClipboard('tag17335');return false;" class="tag-decoration">testing-v2.17</div><div id="tag10396" onclick="CopyToClipboard('tag10396');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/faa08190de9a36fe360d786a0cc691817ccd55c4" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28988688753" target="_blank">2026-07-09 01:58:14</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
