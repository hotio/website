---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27210" onclick="CopyToClipboard('tag27210');return false;" class="tag-decoration">release</div><div id="tag7953" onclick="CopyToClipboard('tag7953');return false;" class="tag-decoration">release-14a7b00</div><div id="tag23715" onclick="CopyToClipboard('tag23715');return false;" class="tag-decoration">release-0.25.48</div><div id="tag1764" onclick="CopyToClipboard('tag1764');return false;" class="tag-decoration">release-v0</div><div id="tag23111" onclick="CopyToClipboard('tag23111');return false;" class="tag-decoration">release-v0.25</div><div id="tag85" onclick="CopyToClipboard('tag85');return false;" class="tag-decoration">release-v0.25.48</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/14a7b00050f03c497f0167d8da604725daecd14a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/46016678283" target="_blank">2026-11-27 14:31:17</a></td></tr>
<tr><td><div id="tag23954" onclick="CopyToClipboard('tag23954');return false;" class="tag-decoration">testing</div><div id="tag10944" onclick="CopyToClipboard('tag10944');return false;" class="tag-decoration">testing-d65cd2f</div><div id="tag10755" onclick="CopyToClipboard('tag10755');return false;" class="tag-decoration">testing-0.25.40</div><div id="tag5993" onclick="CopyToClipboard('tag5993');return false;" class="tag-decoration">testing-v0</div><div id="tag16672" onclick="CopyToClipboard('tag16672');return false;" class="tag-decoration">testing-v0.25</div><div id="tag17344" onclick="CopyToClipboard('tag17344');return false;" class="tag-decoration">testing-v0.25.40</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d65cd2fea00a81e8cfd0be35e884247f576abc20" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45828680327" target="_blank">2026-11-26 13:23:26</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
