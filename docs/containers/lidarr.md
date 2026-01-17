---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7807" onclick="CopyToClipboard('tag7807');return false;" class="tag-decoration">nightly</div><div id="tag11918" onclick="CopyToClipboard('tag11918');return false;" class="tag-decoration">nightly-0e7a401</div><div id="tag27922" onclick="CopyToClipboard('tag27922');return false;" class="tag-decoration">nightly-3.1.2.4902</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/0e7a4014db3d772acd3a83a9d5f8e963de774152" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21090390687" target="_blank">2026-01-17 07:01:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11647" onclick="CopyToClipboard('tag11647');return false;" class="tag-decoration">release</div><div id="tag12578" onclick="CopyToClipboard('tag12578');return false;" class="tag-decoration">release-3c8f185</div><div id="tag16545" onclick="CopyToClipboard('tag16545');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/3c8f18596464fbdb54a07e574adad6ac2c5d44e6" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21065729298" target="_blank">2026-01-16 11:52:27</a></td></tr>
<tr><td><div id="tag2005" onclick="CopyToClipboard('tag2005');return false;" class="tag-decoration">testing</div><div id="tag2736" onclick="CopyToClipboard('tag2736');return false;" class="tag-decoration">testing-d6c5c4e</div><div id="tag22943" onclick="CopyToClipboard('tag22943');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/d6c5c4e0b896aa4475eca1a3692fe17b86e71803" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21065730053" target="_blank">2026-01-16 11:52:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
