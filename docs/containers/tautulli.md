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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6427" onclick="CopyToClipboard('tag6427');return false;" class="tag-decoration">release</div><div id="tag20819" onclick="CopyToClipboard('tag20819');return false;" class="tag-decoration">release-1d2c117</div><div id="tag25583" onclick="CopyToClipboard('tag25583');return false;" class="tag-decoration">release-2.18.1</div><div id="tag19780" onclick="CopyToClipboard('tag19780');return false;" class="tag-decoration">release-v2</div><div id="tag25783" onclick="CopyToClipboard('tag25783');return false;" class="tag-decoration">release-v2.18</div><div id="tag8979" onclick="CopyToClipboard('tag8979');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/1d2c1173a12d0cf099f946835c45f41c786f5ef2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33919463053" target="_blank">2026-09-04 21:05:39</a></td></tr>
<tr><td><div id="tag8763" onclick="CopyToClipboard('tag8763');return false;" class="tag-decoration">testing</div><div id="tag27062" onclick="CopyToClipboard('tag27062');return false;" class="tag-decoration">testing-104892a</div><div id="tag23231" onclick="CopyToClipboard('tag23231');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag1958" onclick="CopyToClipboard('tag1958');return false;" class="tag-decoration">testing-v2</div><div id="tag22650" onclick="CopyToClipboard('tag22650');return false;" class="tag-decoration">testing-v2.18</div><div id="tag19927" onclick="CopyToClipboard('tag19927');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/104892ada86521150b20414003c72f243734bb19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/34426218301" target="_blank">2026-09-10 01:37:24</a></td></tr>
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
