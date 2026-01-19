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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20014" onclick="CopyToClipboard('tag20014');return false;" class="tag-decoration">release</div><div id="tag22322" onclick="CopyToClipboard('tag22322');return false;" class="tag-decoration">release-c35e632</div><div id="tag32447" onclick="CopyToClipboard('tag32447');return false;" class="tag-decoration">release-2.16.0</div><div id="tag31125" onclick="CopyToClipboard('tag31125');return false;" class="tag-decoration">release-v2</div><div id="tag15441" onclick="CopyToClipboard('tag15441');return false;" class="tag-decoration">release-v2.16</div><div id="tag19080" onclick="CopyToClipboard('tag19080');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/c35e632f49191ca1e8d3a2c75e3c76438d30269b" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21113702653" target="_blank">2026-01-18 14:57:38</a></td></tr>
<tr><td><div id="tag22173" onclick="CopyToClipboard('tag22173');return false;" class="tag-decoration">testing</div><div id="tag14344" onclick="CopyToClipboard('tag14344');return false;" class="tag-decoration">testing-b541cb7</div><div id="tag14147" onclick="CopyToClipboard('tag14147');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag17492" onclick="CopyToClipboard('tag17492');return false;" class="tag-decoration">testing-v2</div><div id="tag18716" onclick="CopyToClipboard('tag18716');return false;" class="tag-decoration">testing-v2.16</div><div id="tag23396" onclick="CopyToClipboard('tag23396');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b541cb7c71c7c961f260659bdd55555b0d4778ee" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21124056663" target="_blank">2026-01-19 03:14:20</a></td></tr>
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
