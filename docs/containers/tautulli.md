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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26552" onclick="CopyToClipboard('tag26552');return false;" class="tag-decoration">release</div><div id="tag32537" onclick="CopyToClipboard('tag32537');return false;" class="tag-decoration">release-0a38e25</div><div id="tag28816" onclick="CopyToClipboard('tag28816');return false;" class="tag-decoration">release-2.16.0</div><div id="tag20512" onclick="CopyToClipboard('tag20512');return false;" class="tag-decoration">release-v2</div><div id="tag6902" onclick="CopyToClipboard('tag6902');return false;" class="tag-decoration">release-v2.16</div><div id="tag26244" onclick="CopyToClipboard('tag26244');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/0a38e250482cf25e1bf9259957375db6f1542178" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21246779612" target="_blank">2026-01-22 11:29:55</a></td></tr>
<tr><td><div id="tag8477" onclick="CopyToClipboard('tag8477');return false;" class="tag-decoration">testing</div><div id="tag3831" onclick="CopyToClipboard('tag3831');return false;" class="tag-decoration">testing-a3311bc</div><div id="tag19074" onclick="CopyToClipboard('tag19074');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag11102" onclick="CopyToClipboard('tag11102');return false;" class="tag-decoration">testing-v2</div><div id="tag16248" onclick="CopyToClipboard('tag16248');return false;" class="tag-decoration">testing-v2.16</div><div id="tag26652" onclick="CopyToClipboard('tag26652');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a3311bcf5533d1ddc34db5e5c8ca13c08d0859c0" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21322464375" target="_blank">2026-01-24 22:15:30</a></td></tr>
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
