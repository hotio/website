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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3914" onclick="CopyToClipboard('tag3914');return false;" class="tag-decoration">v2</div><div id="tag29279" onclick="CopyToClipboard('tag29279');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag572" onclick="CopyToClipboard('tag572');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17814" onclick="CopyToClipboard('tag17814');return false;" class="tag-decoration">v2-v2</div><div id="tag4381" onclick="CopyToClipboard('tag4381');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30986" onclick="CopyToClipboard('tag30986');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag29062" onclick="CopyToClipboard('tag29062');return false;" class="tag-decoration">v2-develop</div><div id="tag22112" onclick="CopyToClipboard('tag22112');return false;" class="tag-decoration">v2-develop-d1d04e9</div><div id="tag21832" onclick="CopyToClipboard('tag21832');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag25875" onclick="CopyToClipboard('tag25875');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3155" onclick="CopyToClipboard('tag3155');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13994" onclick="CopyToClipboard('tag13994');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1d04e99cd78fd6cfe11edb32abf58c2b10e7e88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33332982242" target="_blank">2026-08-30 20:12:10</a></td></tr>
<tr><td><div id="tag5401" onclick="CopyToClipboard('tag5401');return false;" class="tag-decoration">v3</div><div id="tag25599" onclick="CopyToClipboard('tag25599');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag26309" onclick="CopyToClipboard('tag26309');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag6197" onclick="CopyToClipboard('tag6197');return false;" class="tag-decoration">v3-v3</div><div id="tag26273" onclick="CopyToClipboard('tag26273');return false;" class="tag-decoration">v3-v3.4</div><div id="tag30647" onclick="CopyToClipboard('tag30647');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag11656" onclick="CopyToClipboard('tag11656');return false;" class="tag-decoration">v3-develop</div><div id="tag16211" onclick="CopyToClipboard('tag16211');return false;" class="tag-decoration">v3-develop-c160c5c</div><div id="tag29714" onclick="CopyToClipboard('tag29714');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1416</div><div id="tag25609" onclick="CopyToClipboard('tag25609');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21798" onclick="CopyToClipboard('tag21798');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag20409" onclick="CopyToClipboard('tag20409');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c160c5c4572ab31e87242c27f642af063bcff097" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33439977744" target="_blank">2026-08-31 21:10:34</a></td></tr>
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
