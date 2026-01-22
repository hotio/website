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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6021" onclick="CopyToClipboard('tag6021');return false;" class="tag-decoration">release</div><div id="tag23044" onclick="CopyToClipboard('tag23044');return false;" class="tag-decoration">release-7d471c4</div><div id="tag29187" onclick="CopyToClipboard('tag29187');return false;" class="tag-decoration">release-2.16.0</div><div id="tag31481" onclick="CopyToClipboard('tag31481');return false;" class="tag-decoration">release-v2</div><div id="tag11286" onclick="CopyToClipboard('tag11286');return false;" class="tag-decoration">release-v2.16</div><div id="tag32158" onclick="CopyToClipboard('tag32158');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7d471c44ece72b024922cfd1fdec8638a820c46a" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21243878196" target="_blank">2026-01-22 09:52:22</a></td></tr>
<tr><td><div id="tag28399" onclick="CopyToClipboard('tag28399');return false;" class="tag-decoration">testing</div><div id="tag15922" onclick="CopyToClipboard('tag15922');return false;" class="tag-decoration">testing-2dbeabc</div><div id="tag26326" onclick="CopyToClipboard('tag26326');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag6324" onclick="CopyToClipboard('tag6324');return false;" class="tag-decoration">testing-v2</div><div id="tag25652" onclick="CopyToClipboard('tag25652');return false;" class="tag-decoration">testing-v2.16</div><div id="tag5875" onclick="CopyToClipboard('tag5875');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/2dbeabc86874c950d45fbb189beb9de0946e22a3" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21243879126" target="_blank">2026-01-22 09:52:24</a></td></tr>
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
