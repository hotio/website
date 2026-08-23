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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32165" onclick="CopyToClipboard('tag32165');return false;" class="tag-decoration">v2</div><div id="tag32294" onclick="CopyToClipboard('tag32294');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag17953" onclick="CopyToClipboard('tag17953');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5917" onclick="CopyToClipboard('tag5917');return false;" class="tag-decoration">v2-v2</div><div id="tag31505" onclick="CopyToClipboard('tag31505');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10107" onclick="CopyToClipboard('tag10107');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag20258" onclick="CopyToClipboard('tag20258');return false;" class="tag-decoration">v2-develop</div><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag19368" onclick="CopyToClipboard('tag19368');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag23424" onclick="CopyToClipboard('tag23424');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23409" onclick="CopyToClipboard('tag23409');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21743" onclick="CopyToClipboard('tag21743');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag24911" onclick="CopyToClipboard('tag24911');return false;" class="tag-decoration">v3</div><div id="tag22461" onclick="CopyToClipboard('tag22461');return false;" class="tag-decoration">v3-edb7863</div><div id="tag2894" onclick="CopyToClipboard('tag2894');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag29240" onclick="CopyToClipboard('tag29240');return false;" class="tag-decoration">v3-v3</div><div id="tag6398" onclick="CopyToClipboard('tag6398');return false;" class="tag-decoration">v3-v3.3</div><div id="tag24132" onclick="CopyToClipboard('tag24132');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag6789" onclick="CopyToClipboard('tag6789');return false;" class="tag-decoration">v3-develop</div><div id="tag21516" onclick="CopyToClipboard('tag21516');return false;" class="tag-decoration">v3-develop-d88e122</div><div id="tag12438" onclick="CopyToClipboard('tag12438');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1246</div><div id="tag26877" onclick="CopyToClipboard('tag26877');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4837" onclick="CopyToClipboard('tag4837');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7602" onclick="CopyToClipboard('tag7602');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d88e12230f9e32e44707c7cf7ec8621629710e53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32608275494" target="_blank">2026-08-23 00:35:59</a></td></tr>
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
