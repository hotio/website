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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16068" onclick="CopyToClipboard('tag16068');return false;" class="tag-decoration">release</div><div id="tag30625" onclick="CopyToClipboard('tag30625');return false;" class="tag-decoration">release-ee033e6</div><div id="tag9816" onclick="CopyToClipboard('tag9816');return false;" class="tag-decoration">release-8.9.0</div><div id="tag4691" onclick="CopyToClipboard('tag4691');return false;" class="tag-decoration">release-v8</div><div id="tag23764" onclick="CopyToClipboard('tag23764');return false;" class="tag-decoration">release-v8.9</div><div id="tag26642" onclick="CopyToClipboard('tag26642');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ee033e615321f3857b4913df29dd88cecfe95e12" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29779131541" target="_blank">2026-07-20 21:10:23</a></td></tr>
<tr><td><div id="tag16914" onclick="CopyToClipboard('tag16914');return false;" class="tag-decoration">testing</div><div id="tag7687" onclick="CopyToClipboard('tag7687');return false;" class="tag-decoration">testing-10eeb14</div><div id="tag17128" onclick="CopyToClipboard('tag17128');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag5084" onclick="CopyToClipboard('tag5084');return false;" class="tag-decoration">testing-v8</div><div id="tag11862" onclick="CopyToClipboard('tag11862');return false;" class="tag-decoration">testing-v8.9</div><div id="tag8482" onclick="CopyToClipboard('tag8482');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/10eeb14835316a1c6046e15a51ebbfbe26ad6336" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29942043519" target="_blank">2026-07-22 17:22:12</a></td></tr>
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
