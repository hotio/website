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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23525" onclick="CopyToClipboard('tag23525');return false;" class="tag-decoration">release</div><div id="tag28210" onclick="CopyToClipboard('tag28210');return false;" class="tag-decoration">release-7d471c4</div><div id="tag1627" onclick="CopyToClipboard('tag1627');return false;" class="tag-decoration">release-2.16.0</div><div id="tag7272" onclick="CopyToClipboard('tag7272');return false;" class="tag-decoration">release-v2</div><div id="tag23487" onclick="CopyToClipboard('tag23487');return false;" class="tag-decoration">release-v2.16</div><div id="tag2122" onclick="CopyToClipboard('tag2122');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7d471c44ece72b024922cfd1fdec8638a820c46a" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21243878196" target="_blank">2026-01-22 09:52:22</a></td></tr>
<tr><td><div id="tag28948" onclick="CopyToClipboard('tag28948');return false;" class="tag-decoration">testing</div><div id="tag6067" onclick="CopyToClipboard('tag6067');return false;" class="tag-decoration">testing-1cda73a</div><div id="tag8304" onclick="CopyToClipboard('tag8304');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag8232" onclick="CopyToClipboard('tag8232');return false;" class="tag-decoration">testing-v2</div><div id="tag2526" onclick="CopyToClipboard('tag2526');return false;" class="tag-decoration">testing-v2.16</div><div id="tag19076" onclick="CopyToClipboard('tag19076');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/1cda73aafa1f32900d1b80bbd00024fdb2d0beea" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21237959450" target="_blank">2026-01-22 06:03:39</a></td></tr>
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
