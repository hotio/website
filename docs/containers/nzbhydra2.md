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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag49" onclick="CopyToClipboard('tag49');return false;" class="tag-decoration">release</div><div id="tag19007" onclick="CopyToClipboard('tag19007');return false;" class="tag-decoration">release-8d983a4</div><div id="tag16271" onclick="CopyToClipboard('tag16271');return false;" class="tag-decoration">release-8.3.0</div><div id="tag25225" onclick="CopyToClipboard('tag25225');return false;" class="tag-decoration">release-v8</div><div id="tag22020" onclick="CopyToClipboard('tag22020');return false;" class="tag-decoration">release-v8.3</div><div id="tag28193" onclick="CopyToClipboard('tag28193');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8d983a4fc58f5ca0c7ab219df88553843901b34e" target="_blank">Upstream update: noblevpn-021f848 => noblevpn-2aef811</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21246757540" target="_blank">2026-01-22 11:29:08</a></td></tr>
<tr><td><div id="tag28934" onclick="CopyToClipboard('tag28934');return false;" class="tag-decoration">testing</div><div id="tag6317" onclick="CopyToClipboard('tag6317');return false;" class="tag-decoration">testing-063d366</div><div id="tag19343" onclick="CopyToClipboard('tag19343');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag20580" onclick="CopyToClipboard('tag20580');return false;" class="tag-decoration">testing-v8</div><div id="tag17037" onclick="CopyToClipboard('tag17037');return false;" class="tag-decoration">testing-v8.3</div><div id="tag28032" onclick="CopyToClipboard('tag28032');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/063d3666f3b8e4f178123e3d954654a23e666e3c" target="_blank">Upstream update: noblevpn-021f848 => noblevpn-2aef811</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21246758113" target="_blank">2026-01-22 11:29:10</a></td></tr>
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
