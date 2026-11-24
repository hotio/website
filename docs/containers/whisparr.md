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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25597" onclick="CopyToClipboard('tag25597');return false;" class="tag-decoration">v2</div><div id="tag1054" onclick="CopyToClipboard('tag1054');return false;" class="tag-decoration">v2-0a9521c</div><div id="tag14403" onclick="CopyToClipboard('tag14403');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag29175" onclick="CopyToClipboard('tag29175');return false;" class="tag-decoration">v2-v2</div><div id="tag19251" onclick="CopyToClipboard('tag19251');return false;" class="tag-decoration">v2-v2.3</div><div id="tag3456" onclick="CopyToClipboard('tag3456');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0a9521c2ce0dcffe8eb338eb16b83b7a31beb82f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304243110" target="_blank">2026-11-24 01:19:54</a></td></tr>
<tr><td><div id="tag21624" onclick="CopyToClipboard('tag21624');return false;" class="tag-decoration">v2-develop</div><div id="tag13620" onclick="CopyToClipboard('tag13620');return false;" class="tag-decoration">v2-develop-174c47c</div><div id="tag19917" onclick="CopyToClipboard('tag19917');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag32191" onclick="CopyToClipboard('tag32191');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16915" onclick="CopyToClipboard('tag16915');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag15585" onclick="CopyToClipboard('tag15585');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/174c47ca2300594f263955e22c187e40977fbb21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386947754" target="_blank">2026-11-24 11:44:29</a></td></tr>
<tr><td><div id="tag15128" onclick="CopyToClipboard('tag15128');return false;" class="tag-decoration">v3</div><div id="tag13680" onclick="CopyToClipboard('tag13680');return false;" class="tag-decoration">v3-57a16ad</div><div id="tag21185" onclick="CopyToClipboard('tag21185');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag14939" onclick="CopyToClipboard('tag14939');return false;" class="tag-decoration">v3-v3</div><div id="tag8068" onclick="CopyToClipboard('tag8068');return false;" class="tag-decoration">v3-v3.6</div><div id="tag12550" onclick="CopyToClipboard('tag12550');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/57a16ad727b9c42b6aefaeb3fe938d4bc1c07b3a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304116863" target="_blank">2026-11-24 01:18:53</a></td></tr>
<tr><td><div id="tag9746" onclick="CopyToClipboard('tag9746');return false;" class="tag-decoration">v3-develop</div><div id="tag29688" onclick="CopyToClipboard('tag29688');return false;" class="tag-decoration">v3-develop-71adccf</div><div id="tag11783" onclick="CopyToClipboard('tag11783');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag12337" onclick="CopyToClipboard('tag12337');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10793" onclick="CopyToClipboard('tag10793');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag13209" onclick="CopyToClipboard('tag13209');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/71adccf0ad4f02baef2151c60c61f587e030a481" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386950302" target="_blank">2026-11-24 11:44:30</a></td></tr>
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
