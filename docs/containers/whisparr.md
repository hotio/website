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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7359" onclick="CopyToClipboard('tag7359');return false;" class="tag-decoration">v2</div><div id="tag9914" onclick="CopyToClipboard('tag9914');return false;" class="tag-decoration">v2-63e7882</div><div id="tag17842" onclick="CopyToClipboard('tag17842');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag10349" onclick="CopyToClipboard('tag10349');return false;" class="tag-decoration">v2-v2</div><div id="tag30463" onclick="CopyToClipboard('tag30463');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29028" onclick="CopyToClipboard('tag29028');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/63e78821aa43dd5e648edc9335d6ca0684243dff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114583596" target="_blank">2026-11-05 21:39:11</a></td></tr>
<tr><td><div id="tag6516" onclick="CopyToClipboard('tag6516');return false;" class="tag-decoration">v2-develop</div><div id="tag9655" onclick="CopyToClipboard('tag9655');return false;" class="tag-decoration">v2-develop-417c370</div><div id="tag3311" onclick="CopyToClipboard('tag3311');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag14372" onclick="CopyToClipboard('tag14372');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11928" onclick="CopyToClipboard('tag11928');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6206" onclick="CopyToClipboard('tag6206');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/417c37059b745c3376e20feefd819494aee4acc8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114578605" target="_blank">2026-11-05 21:39:09</a></td></tr>
<tr><td><div id="tag25257" onclick="CopyToClipboard('tag25257');return false;" class="tag-decoration">v3</div><div id="tag18345" onclick="CopyToClipboard('tag18345');return false;" class="tag-decoration">v3-d5fb791</div><div id="tag27634" onclick="CopyToClipboard('tag27634');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag3992" onclick="CopyToClipboard('tag3992');return false;" class="tag-decoration">v3-v3</div><div id="tag4445" onclick="CopyToClipboard('tag4445');return false;" class="tag-decoration">v3-v3.6</div><div id="tag8853" onclick="CopyToClipboard('tag8853');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/d5fb79189392f5038b9b0ea1e1b5a8a137f41587" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114588335" target="_blank">2026-11-05 21:39:13</a></td></tr>
<tr><td><div id="tag4450" onclick="CopyToClipboard('tag4450');return false;" class="tag-decoration">v3-develop</div><div id="tag1302" onclick="CopyToClipboard('tag1302');return false;" class="tag-decoration">v3-develop-3eaacb6</div><div id="tag10469" onclick="CopyToClipboard('tag10469');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag32291" onclick="CopyToClipboard('tag32291');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14530" onclick="CopyToClipboard('tag14530');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag2657" onclick="CopyToClipboard('tag2657');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3eaacb6a0c480bcada289dd5e4daaf6d9095048e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059447392" target="_blank">2026-11-05 15:52:48</a></td></tr>
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
