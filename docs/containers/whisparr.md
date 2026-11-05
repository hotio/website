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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4944" onclick="CopyToClipboard('tag4944');return false;" class="tag-decoration">v2</div><div id="tag12680" onclick="CopyToClipboard('tag12680');return false;" class="tag-decoration">v2-63e7882</div><div id="tag22432" onclick="CopyToClipboard('tag22432');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17237" onclick="CopyToClipboard('tag17237');return false;" class="tag-decoration">v2-v2</div><div id="tag26373" onclick="CopyToClipboard('tag26373');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12546" onclick="CopyToClipboard('tag12546');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/63e78821aa43dd5e648edc9335d6ca0684243dff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114583596" target="_blank">2026-11-05 21:39:11</a></td></tr>
<tr><td><div id="tag16044" onclick="CopyToClipboard('tag16044');return false;" class="tag-decoration">v2-develop</div><div id="tag23237" onclick="CopyToClipboard('tag23237');return false;" class="tag-decoration">v2-develop-417c370</div><div id="tag6881" onclick="CopyToClipboard('tag6881');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13068" onclick="CopyToClipboard('tag13068');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5327" onclick="CopyToClipboard('tag5327');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1842" onclick="CopyToClipboard('tag1842');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/417c37059b745c3376e20feefd819494aee4acc8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114578605" target="_blank">2026-11-05 21:39:09</a></td></tr>
<tr><td><div id="tag16750" onclick="CopyToClipboard('tag16750');return false;" class="tag-decoration">v3</div><div id="tag11166" onclick="CopyToClipboard('tag11166');return false;" class="tag-decoration">v3-d5fb791</div><div id="tag24037" onclick="CopyToClipboard('tag24037');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag26206" onclick="CopyToClipboard('tag26206');return false;" class="tag-decoration">v3-v3</div><div id="tag4474" onclick="CopyToClipboard('tag4474');return false;" class="tag-decoration">v3-v3.6</div><div id="tag25788" onclick="CopyToClipboard('tag25788');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/d5fb79189392f5038b9b0ea1e1b5a8a137f41587" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114588335" target="_blank">2026-11-05 21:39:13</a></td></tr>
<tr><td><div id="tag25002" onclick="CopyToClipboard('tag25002');return false;" class="tag-decoration">v3-develop</div><div id="tag21064" onclick="CopyToClipboard('tag21064');return false;" class="tag-decoration">v3-develop-5eddeea</div><div id="tag7119" onclick="CopyToClipboard('tag7119');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag8191" onclick="CopyToClipboard('tag8191');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag23795" onclick="CopyToClipboard('tag23795');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5982" onclick="CopyToClipboard('tag5982');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5eddeea0c4d68928414dbeaaa8da9b9bbe74b424" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114579093" target="_blank">2026-11-05 21:39:09</a></td></tr>
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
