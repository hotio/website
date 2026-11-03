---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1947" onclick="CopyToClipboard('tag1947');return false;" class="tag-decoration">v2</div><div id="tag5571" onclick="CopyToClipboard('tag5571');return false;" class="tag-decoration">v2-0faf6e6</div><div id="tag17773" onclick="CopyToClipboard('tag17773');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag12612" onclick="CopyToClipboard('tag12612');return false;" class="tag-decoration">v2-v2</div><div id="tag2194" onclick="CopyToClipboard('tag2194');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27336" onclick="CopyToClipboard('tag27336');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0faf6e66f559dd5a4cb1617df7488d9ee90bc656" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559589572" target="_blank">2026-11-03 01:24:52</a></td></tr>
<tr><td><div id="tag25869" onclick="CopyToClipboard('tag25869');return false;" class="tag-decoration">v2-develop</div><div id="tag23286" onclick="CopyToClipboard('tag23286');return false;" class="tag-decoration">v2-develop-f407b94</div><div id="tag15215" onclick="CopyToClipboard('tag15215');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag27524" onclick="CopyToClipboard('tag27524');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2637" onclick="CopyToClipboard('tag2637');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31892" onclick="CopyToClipboard('tag31892');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f407b949c2be6cfd6b3ed760a49b941c87fa2122" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559574877" target="_blank">2026-11-03 01:24:45</a></td></tr>
<tr><td><div id="tag14459" onclick="CopyToClipboard('tag14459');return false;" class="tag-decoration">v3</div><div id="tag32688" onclick="CopyToClipboard('tag32688');return false;" class="tag-decoration">v3-5285acd</div><div id="tag31309" onclick="CopyToClipboard('tag31309');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag16867" onclick="CopyToClipboard('tag16867');return false;" class="tag-decoration">v3-v3</div><div id="tag2144" onclick="CopyToClipboard('tag2144');return false;" class="tag-decoration">v3-v3.6</div><div id="tag31645" onclick="CopyToClipboard('tag31645');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5285acde4988cf37122482b615a53aa0516ea421" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559580759" target="_blank">2026-11-03 01:24:48</a></td></tr>
<tr><td><div id="tag30581" onclick="CopyToClipboard('tag30581');return false;" class="tag-decoration">v3-develop</div><div id="tag7931" onclick="CopyToClipboard('tag7931');return false;" class="tag-decoration">v3-develop-19569cb</div><div id="tag30487" onclick="CopyToClipboard('tag30487');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag18190" onclick="CopyToClipboard('tag18190');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15645" onclick="CopyToClipboard('tag15645');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag27199" onclick="CopyToClipboard('tag27199');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/19569cb2ad0b8b9b40b71061561002246f0fc10c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559582510" target="_blank">2026-11-03 01:24:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
