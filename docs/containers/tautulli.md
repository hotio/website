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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10037" onclick="CopyToClipboard('tag10037');return false;" class="tag-decoration">release</div><div id="tag20942" onclick="CopyToClipboard('tag20942');return false;" class="tag-decoration">release-938f7cc</div><div id="tag11939" onclick="CopyToClipboard('tag11939');return false;" class="tag-decoration">release-2.17.1</div><div id="tag13959" onclick="CopyToClipboard('tag13959');return false;" class="tag-decoration">release-v2</div><div id="tag18711" onclick="CopyToClipboard('tag18711');return false;" class="tag-decoration">release-v2.17</div><div id="tag13878" onclick="CopyToClipboard('tag13878');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/938f7cc95dd8b002a5ee53256f683db552059477" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25605066174" target="_blank">2026-05-09 15:44:20</a></td></tr>
<tr><td><div id="tag26921" onclick="CopyToClipboard('tag26921');return false;" class="tag-decoration">testing</div><div id="tag15868" onclick="CopyToClipboard('tag15868');return false;" class="tag-decoration">testing-a9816b7</div><div id="tag6277" onclick="CopyToClipboard('tag6277');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag22264" onclick="CopyToClipboard('tag22264');return false;" class="tag-decoration">testing-v2</div><div id="tag31886" onclick="CopyToClipboard('tag31886');return false;" class="tag-decoration">testing-v2.17</div><div id="tag12572" onclick="CopyToClipboard('tag12572');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a9816b714b4c78e3eb82793619eca4fa4e0568a0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25605066503" target="_blank">2026-05-09 15:44:21</a></td></tr>
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
