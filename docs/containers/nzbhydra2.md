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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27158" onclick="CopyToClipboard('tag27158');return false;" class="tag-decoration">release</div><div id="tag1881" onclick="CopyToClipboard('tag1881');return false;" class="tag-decoration">release-be69724</div><div id="tag24781" onclick="CopyToClipboard('tag24781');return false;" class="tag-decoration">release-9.0.3</div><div id="tag8053" onclick="CopyToClipboard('tag8053');return false;" class="tag-decoration">release-v9</div><div id="tag352" onclick="CopyToClipboard('tag352');return false;" class="tag-decoration">release-v9.0</div><div id="tag287" onclick="CopyToClipboard('tag287');return false;" class="tag-decoration">release-v9.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/be6972475ba4b16aca583a11a4a6792b153040b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35638586688" target="_blank">2026-09-21 18:28:16</a></td></tr>
<tr><td><div id="tag29458" onclick="CopyToClipboard('tag29458');return false;" class="tag-decoration">testing</div><div id="tag7767" onclick="CopyToClipboard('tag7767');return false;" class="tag-decoration">testing-8eba249</div><div id="tag5706" onclick="CopyToClipboard('tag5706');return false;" class="tag-decoration">testing-9.0.2</div><div id="tag32103" onclick="CopyToClipboard('tag32103');return false;" class="tag-decoration">testing-v9</div><div id="tag19796" onclick="CopyToClipboard('tag19796');return false;" class="tag-decoration">testing-v9.0</div><div id="tag30682" onclick="CopyToClipboard('tag30682');return false;" class="tag-decoration">testing-v9.0.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8eba2492303602b4edd5c6f2ee51aebb90155720" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35505605295" target="_blank">2026-09-20 10:37:42</a></td></tr>
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
