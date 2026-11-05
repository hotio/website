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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1091" onclick="CopyToClipboard('tag1091');return false;" class="tag-decoration">release</div><div id="tag6958" onclick="CopyToClipboard('tag6958');return false;" class="tag-decoration">release-10bde5f</div><div id="tag19949" onclick="CopyToClipboard('tag19949');return false;" class="tag-decoration">release-2.18.2</div><div id="tag11618" onclick="CopyToClipboard('tag11618');return false;" class="tag-decoration">release-v2</div><div id="tag22450" onclick="CopyToClipboard('tag22450');return false;" class="tag-decoration">release-v2.18</div><div id="tag7017" onclick="CopyToClipboard('tag7017');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/10bde5fd58c83e646e737987ef3bea9f2d065166" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42132627153" target="_blank">2026-11-05 23:52:01</a></td></tr>
<tr><td><div id="tag28890" onclick="CopyToClipboard('tag28890');return false;" class="tag-decoration">testing</div><div id="tag23692" onclick="CopyToClipboard('tag23692');return false;" class="tag-decoration">testing-0927188</div><div id="tag13989" onclick="CopyToClipboard('tag13989');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag4402" onclick="CopyToClipboard('tag4402');return false;" class="tag-decoration">testing-v2</div><div id="tag16703" onclick="CopyToClipboard('tag16703');return false;" class="tag-decoration">testing-v2.18</div><div id="tag17090" onclick="CopyToClipboard('tag17090');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/09271888d3baf94c4f9038c1928e033a92a370cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42132624605" target="_blank">2026-11-05 23:52:00</a></td></tr>
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
