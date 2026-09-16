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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21559" onclick="CopyToClipboard('tag21559');return false;" class="tag-decoration">release</div><div id="tag6893" onclick="CopyToClipboard('tag6893');return false;" class="tag-decoration">release-9e9d9ae</div><div id="tag30359" onclick="CopyToClipboard('tag30359');return false;" class="tag-decoration">release-8.9.0</div><div id="tag9276" onclick="CopyToClipboard('tag9276');return false;" class="tag-decoration">release-v8</div><div id="tag305" onclick="CopyToClipboard('tag305');return false;" class="tag-decoration">release-v8.9</div><div id="tag3836" onclick="CopyToClipboard('tag3836');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9e9d9ae27809bce0f150cb0e7d8b9cc384c8a69a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35150262248" target="_blank">2026-09-16 21:03:59</a></td></tr>
<tr><td><div id="tag11058" onclick="CopyToClipboard('tag11058');return false;" class="tag-decoration">testing</div><div id="tag9395" onclick="CopyToClipboard('tag9395');return false;" class="tag-decoration">testing-6637f2b</div><div id="tag24126" onclick="CopyToClipboard('tag24126');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag21652" onclick="CopyToClipboard('tag21652');return false;" class="tag-decoration">testing-v8</div><div id="tag826" onclick="CopyToClipboard('tag826');return false;" class="tag-decoration">testing-v8.9</div><div id="tag7613" onclick="CopyToClipboard('tag7613');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/6637f2b929f2518f54043d3f2242c3f118dfa7f3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35150256982" target="_blank">2026-09-16 21:03:55</a></td></tr>
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
