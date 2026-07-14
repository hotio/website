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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12584" onclick="CopyToClipboard('tag12584');return false;" class="tag-decoration">v2</div><div id="tag28262" onclick="CopyToClipboard('tag28262');return false;" class="tag-decoration">v2-632fb9e</div><div id="tag16405" onclick="CopyToClipboard('tag16405');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6713" onclick="CopyToClipboard('tag6713');return false;" class="tag-decoration">v2-v2</div><div id="tag32305" onclick="CopyToClipboard('tag32305');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24268" onclick="CopyToClipboard('tag24268');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/632fb9ea6b0ab4d2b56c6eda018d51ac5d16db60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568972" target="_blank">2026-07-08 21:57:03</a></td></tr>
<tr><td><div id="tag1299" onclick="CopyToClipboard('tag1299');return false;" class="tag-decoration">v2-develop</div><div id="tag16678" onclick="CopyToClipboard('tag16678');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag7555" onclick="CopyToClipboard('tag7555');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag14400" onclick="CopyToClipboard('tag14400');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12816" onclick="CopyToClipboard('tag12816');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31030" onclick="CopyToClipboard('tag31030');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag20966" onclick="CopyToClipboard('tag20966');return false;" class="tag-decoration">v3</div><div id="tag12421" onclick="CopyToClipboard('tag12421');return false;" class="tag-decoration">v3-e0ef204</div><div id="tag549" onclick="CopyToClipboard('tag549');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag29287" onclick="CopyToClipboard('tag29287');return false;" class="tag-decoration">v3-v3</div><div id="tag9784" onclick="CopyToClipboard('tag9784');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23531" onclick="CopyToClipboard('tag23531');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e0ef204e031cbdf4b3fe866663d102abb69d6df5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202625" target="_blank">2026-07-14 07:01:44</a></td></tr>
<tr><td><div id="tag18722" onclick="CopyToClipboard('tag18722');return false;" class="tag-decoration">v3-develop</div><div id="tag32047" onclick="CopyToClipboard('tag32047');return false;" class="tag-decoration">v3-develop-19d55f6</div><div id="tag26247" onclick="CopyToClipboard('tag26247');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag28729" onclick="CopyToClipboard('tag28729');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24591" onclick="CopyToClipboard('tag24591');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26887" onclick="CopyToClipboard('tag26887');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/19d55f6f26274cfbe06e1a4c62616324f68f811b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313206389" target="_blank">2026-07-14 07:01:48</a></td></tr>
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
