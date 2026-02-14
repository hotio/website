---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25314" onclick="CopyToClipboard('tag25314');return false;" class="tag-decoration">release</div><div id="tag7921" onclick="CopyToClipboard('tag7921');return false;" class="tag-decoration">release-2d81f0b</div><div id="tag32721" onclick="CopyToClipboard('tag32721');return false;" class="tag-decoration">release-8.5.1</div><div id="tag8146" onclick="CopyToClipboard('tag8146');return false;" class="tag-decoration">release-v8</div><div id="tag7024" onclick="CopyToClipboard('tag7024');return false;" class="tag-decoration">release-v8.5</div><div id="tag19243" onclick="CopyToClipboard('tag19243');return false;" class="tag-decoration">release-v8.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2d81f0b35bd9fddd8c3390f8b61ef90a28ab42d4" target="_blank">Version update: 8.5.0 => 8.5.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/22019943750" target="_blank">2026-02-14 15:36:23</a></td></tr>
<tr><td><div id="tag26027" onclick="CopyToClipboard('tag26027');return false;" class="tag-decoration">testing</div><div id="tag29624" onclick="CopyToClipboard('tag29624');return false;" class="tag-decoration">testing-ec75f66</div><div id="tag19037" onclick="CopyToClipboard('tag19037');return false;" class="tag-decoration">testing-8.5.0</div><div id="tag6086" onclick="CopyToClipboard('tag6086');return false;" class="tag-decoration">testing-v8</div><div id="tag16072" onclick="CopyToClipboard('tag16072');return false;" class="tag-decoration">testing-v8.5</div><div id="tag20712" onclick="CopyToClipboard('tag20712');return false;" class="tag-decoration">testing-v8.5.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ec75f669fca5ab3b10c71b57ed9cf44fb1a19d84" target="_blank">Version update: 8.4.1 => 8.5.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21960578799" target="_blank">2026-02-12 19:10:17</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
