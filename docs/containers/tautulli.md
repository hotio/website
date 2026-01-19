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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17467" onclick="CopyToClipboard('tag17467');return false;" class="tag-decoration">release</div><div id="tag18996" onclick="CopyToClipboard('tag18996');return false;" class="tag-decoration">release-7ff5f28</div><div id="tag30663" onclick="CopyToClipboard('tag30663');return false;" class="tag-decoration">release-2.16.0</div><div id="tag871" onclick="CopyToClipboard('tag871');return false;" class="tag-decoration">release-v2</div><div id="tag8514" onclick="CopyToClipboard('tag8514');return false;" class="tag-decoration">release-v2.16</div><div id="tag5011" onclick="CopyToClipboard('tag5011');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7ff5f2883a268386c5ebe3684d88117f4243d2f0" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21132239957" target="_blank">2026-01-19 09:31:14</a></td></tr>
<tr><td><div id="tag27188" onclick="CopyToClipboard('tag27188');return false;" class="tag-decoration">testing</div><div id="tag25071" onclick="CopyToClipboard('tag25071');return false;" class="tag-decoration">testing-c8d9b71</div><div id="tag31846" onclick="CopyToClipboard('tag31846');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag23073" onclick="CopyToClipboard('tag23073');return false;" class="tag-decoration">testing-v2</div><div id="tag18454" onclick="CopyToClipboard('tag18454');return false;" class="tag-decoration">testing-v2.16</div><div id="tag25315" onclick="CopyToClipboard('tag25315');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/c8d9b71ab4ada13ee81e63c0b238795ca27ba2ad" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21132240345" target="_blank">2026-01-19 09:31:15</a></td></tr>
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
