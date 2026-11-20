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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30035" onclick="CopyToClipboard('tag30035');return false;" class="tag-decoration">release</div><div id="tag14908" onclick="CopyToClipboard('tag14908');return false;" class="tag-decoration">release-b69986e</div><div id="tag31132" onclick="CopyToClipboard('tag31132');return false;" class="tag-decoration">release-9.3.3</div><div id="tag17584" onclick="CopyToClipboard('tag17584');return false;" class="tag-decoration">release-v9</div><div id="tag6779" onclick="CopyToClipboard('tag6779');return false;" class="tag-decoration">release-v9.3</div><div id="tag18818" onclick="CopyToClipboard('tag18818');return false;" class="tag-decoration">release-v9.3.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b69986e4634870dd5b65105f50aaaa2bfe45c76d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44791440749" target="_blank">2026-11-20 18:17:54</a></td></tr>
<tr><td><div id="tag25222" onclick="CopyToClipboard('tag25222');return false;" class="tag-decoration">testing</div><div id="tag15183" onclick="CopyToClipboard('tag15183');return false;" class="tag-decoration">testing-cceb4c5</div><div id="tag8284" onclick="CopyToClipboard('tag8284');return false;" class="tag-decoration">testing-9.3.3</div><div id="tag11064" onclick="CopyToClipboard('tag11064');return false;" class="tag-decoration">testing-v9</div><div id="tag11907" onclick="CopyToClipboard('tag11907');return false;" class="tag-decoration">testing-v9.3</div><div id="tag27478" onclick="CopyToClipboard('tag27478');return false;" class="tag-decoration">testing-v9.3.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/cceb4c5947f019f1d3c9af0fca27b9dfa4c1d5c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44712657337" target="_blank">2026-11-20 09:40:02</a></td></tr>
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
