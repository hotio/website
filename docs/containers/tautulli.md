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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17643" onclick="CopyToClipboard('tag17643');return false;" class="tag-decoration">release</div><div id="tag3977" onclick="CopyToClipboard('tag3977');return false;" class="tag-decoration">release-c36b5ad</div><div id="tag9779" onclick="CopyToClipboard('tag9779');return false;" class="tag-decoration">release-2.17.2</div><div id="tag19408" onclick="CopyToClipboard('tag19408');return false;" class="tag-decoration">release-v2</div><div id="tag16536" onclick="CopyToClipboard('tag16536');return false;" class="tag-decoration">release-v2.17</div><div id="tag29265" onclick="CopyToClipboard('tag29265');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/c36b5adb6a09a0ae32cbf7fdb2c0b0d5bc9f8e47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29313143096" target="_blank">2026-07-14 07:00:40</a></td></tr>
<tr><td><div id="tag11398" onclick="CopyToClipboard('tag11398');return false;" class="tag-decoration">testing</div><div id="tag25618" onclick="CopyToClipboard('tag25618');return false;" class="tag-decoration">testing-faa0819</div><div id="tag26568" onclick="CopyToClipboard('tag26568');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag14018" onclick="CopyToClipboard('tag14018');return false;" class="tag-decoration">testing-v2</div><div id="tag18178" onclick="CopyToClipboard('tag18178');return false;" class="tag-decoration">testing-v2.17</div><div id="tag2753" onclick="CopyToClipboard('tag2753');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/faa08190de9a36fe360d786a0cc691817ccd55c4" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28988688753" target="_blank">2026-07-09 01:58:14</a></td></tr>
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
