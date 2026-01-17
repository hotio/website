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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20602" onclick="CopyToClipboard('tag20602');return false;" class="tag-decoration">release</div><div id="tag11912" onclick="CopyToClipboard('tag11912');return false;" class="tag-decoration">release-6ec3e2d</div><div id="tag232" onclick="CopyToClipboard('tag232');return false;" class="tag-decoration">release-2.16.0</div><div id="tag1944" onclick="CopyToClipboard('tag1944');return false;" class="tag-decoration">release-v2</div><div id="tag12609" onclick="CopyToClipboard('tag12609');return false;" class="tag-decoration">release-v2.16</div><div id="tag20935" onclick="CopyToClipboard('tag20935');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/6ec3e2dfebc5d4f2e8d3bac05b0a7976c3c9d82b" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21090400450" target="_blank">2026-01-17 07:01:56</a></td></tr>
<tr><td><div id="tag23703" onclick="CopyToClipboard('tag23703');return false;" class="tag-decoration">testing</div><div id="tag15909" onclick="CopyToClipboard('tag15909');return false;" class="tag-decoration">testing-f08b92a</div><div id="tag19845" onclick="CopyToClipboard('tag19845');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag18361" onclick="CopyToClipboard('tag18361');return false;" class="tag-decoration">testing-v2</div><div id="tag25143" onclick="CopyToClipboard('tag25143');return false;" class="tag-decoration">testing-v2.16</div><div id="tag2564" onclick="CopyToClipboard('tag2564');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/f08b92a0db34af24695c7772529288e29d969deb" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21090400667" target="_blank">2026-01-17 07:01:57</a></td></tr>
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
