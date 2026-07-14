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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15462" onclick="CopyToClipboard('tag15462');return false;" class="tag-decoration">v2</div><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">v2-4b8693f</div><div id="tag26560" onclick="CopyToClipboard('tag26560');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2101" onclick="CopyToClipboard('tag2101');return false;" class="tag-decoration">v2-v2</div><div id="tag22226" onclick="CopyToClipboard('tag22226');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27190" onclick="CopyToClipboard('tag27190');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/4b8693f8158e7d29fdc2fb89930befbf1b68e5f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313207046" target="_blank">2026-07-14 07:01:49</a></td></tr>
<tr><td><div id="tag25665" onclick="CopyToClipboard('tag25665');return false;" class="tag-decoration">v2-develop</div><div id="tag20567" onclick="CopyToClipboard('tag20567');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag32303" onclick="CopyToClipboard('tag32303');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag4876" onclick="CopyToClipboard('tag4876');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13701" onclick="CopyToClipboard('tag13701');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1364" onclick="CopyToClipboard('tag1364');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag5967" onclick="CopyToClipboard('tag5967');return false;" class="tag-decoration">v3</div><div id="tag22882" onclick="CopyToClipboard('tag22882');return false;" class="tag-decoration">v3-96c927c</div><div id="tag26560" onclick="CopyToClipboard('tag26560');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag24468" onclick="CopyToClipboard('tag24468');return false;" class="tag-decoration">v3-v3</div><div id="tag29146" onclick="CopyToClipboard('tag29146');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23798" onclick="CopyToClipboard('tag23798');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/96c927c999444dcf3e635c4d14a11fabf4836ba2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322796800" target="_blank">2026-07-14 09:43:58</a></td></tr>
<tr><td><div id="tag6209" onclick="CopyToClipboard('tag6209');return false;" class="tag-decoration">v3-develop</div><div id="tag18130" onclick="CopyToClipboard('tag18130');return false;" class="tag-decoration">v3-develop-1fe24a7</div><div id="tag3490" onclick="CopyToClipboard('tag3490');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag628" onclick="CopyToClipboard('tag628');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19245" onclick="CopyToClipboard('tag19245');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag15873" onclick="CopyToClipboard('tag15873');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1fe24a7eeac6d1d326d33796a187ee07348e87eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801683" target="_blank">2026-07-14 09:44:03</a></td></tr>
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
