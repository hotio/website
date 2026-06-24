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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30464" onclick="CopyToClipboard('tag30464');return false;" class="tag-decoration">release</div><div id="tag24607" onclick="CopyToClipboard('tag24607');return false;" class="tag-decoration">release-f875bef</div><div id="tag15218" onclick="CopyToClipboard('tag15218');return false;" class="tag-decoration">release-8.8.4</div><div id="tag17934" onclick="CopyToClipboard('tag17934');return false;" class="tag-decoration">release-v8</div><div id="tag10623" onclick="CopyToClipboard('tag10623');return false;" class="tag-decoration">release-v8.8</div><div id="tag21895" onclick="CopyToClipboard('tag21895');return false;" class="tag-decoration">release-v8.8.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f875bef7d121f9694f55624a7fad935988aace23" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28113095035" target="_blank">2026-06-24 16:20:07</a></td></tr>
<tr><td><div id="tag5774" onclick="CopyToClipboard('tag5774');return false;" class="tag-decoration">testing</div><div id="tag6911" onclick="CopyToClipboard('tag6911');return false;" class="tag-decoration">testing-45f97f7</div><div id="tag24651" onclick="CopyToClipboard('tag24651');return false;" class="tag-decoration">testing-8.8.4</div><div id="tag10525" onclick="CopyToClipboard('tag10525');return false;" class="tag-decoration">testing-v8</div><div id="tag24215" onclick="CopyToClipboard('tag24215');return false;" class="tag-decoration">testing-v8.8</div><div id="tag14980" onclick="CopyToClipboard('tag14980');return false;" class="tag-decoration">testing-v8.8.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/45f97f75a242805a1589c44dd019524fd9697ccd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28113100833" target="_blank">2026-06-24 16:20:12</a></td></tr>
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
