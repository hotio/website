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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28973" onclick="CopyToClipboard('tag28973');return false;" class="tag-decoration">release</div><div id="tag14430" onclick="CopyToClipboard('tag14430');return false;" class="tag-decoration">release-bfd43e7</div><div id="tag30618" onclick="CopyToClipboard('tag30618');return false;" class="tag-decoration">release-2.17.2</div><div id="tag18330" onclick="CopyToClipboard('tag18330');return false;" class="tag-decoration">release-v2</div><div id="tag744" onclick="CopyToClipboard('tag744');return false;" class="tag-decoration">release-v2.17</div><div id="tag15101" onclick="CopyToClipboard('tag15101');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/bfd43e733709d19bc97627481762c7e577a41416" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27872377443" target="_blank">2026-06-20 13:19:18</a></td></tr>
<tr><td><div id="tag1935" onclick="CopyToClipboard('tag1935');return false;" class="tag-decoration">testing</div><div id="tag22054" onclick="CopyToClipboard('tag22054');return false;" class="tag-decoration">testing-67ff6f2</div><div id="tag22265" onclick="CopyToClipboard('tag22265');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag31557" onclick="CopyToClipboard('tag31557');return false;" class="tag-decoration">testing-v2</div><div id="tag3102" onclick="CopyToClipboard('tag3102');return false;" class="tag-decoration">testing-v2.17</div><div id="tag32645" onclick="CopyToClipboard('tag32645');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/67ff6f2d369186d70e0cc9d5069c17d36d14d47f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27872377490" target="_blank">2026-06-20 13:19:18</a></td></tr>
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
