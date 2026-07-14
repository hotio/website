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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30164" onclick="CopyToClipboard('tag30164');return false;" class="tag-decoration">v2</div><div id="tag5995" onclick="CopyToClipboard('tag5995');return false;" class="tag-decoration">v2-4b8693f</div><div id="tag23965" onclick="CopyToClipboard('tag23965');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag28304" onclick="CopyToClipboard('tag28304');return false;" class="tag-decoration">v2-v2</div><div id="tag16933" onclick="CopyToClipboard('tag16933');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21390" onclick="CopyToClipboard('tag21390');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/4b8693f8158e7d29fdc2fb89930befbf1b68e5f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313207046" target="_blank">2026-07-14 07:01:49</a></td></tr>
<tr><td><div id="tag6661" onclick="CopyToClipboard('tag6661');return false;" class="tag-decoration">v2-develop</div><div id="tag13279" onclick="CopyToClipboard('tag13279');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag24190" onclick="CopyToClipboard('tag24190');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag16635" onclick="CopyToClipboard('tag16635');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23930" onclick="CopyToClipboard('tag23930');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3841" onclick="CopyToClipboard('tag3841');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag14434" onclick="CopyToClipboard('tag14434');return false;" class="tag-decoration">v3</div><div id="tag10093" onclick="CopyToClipboard('tag10093');return false;" class="tag-decoration">v3-e0ef204</div><div id="tag5464" onclick="CopyToClipboard('tag5464');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag15661" onclick="CopyToClipboard('tag15661');return false;" class="tag-decoration">v3-v3</div><div id="tag3434" onclick="CopyToClipboard('tag3434');return false;" class="tag-decoration">v3-v3.3</div><div id="tag503" onclick="CopyToClipboard('tag503');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e0ef204e031cbdf4b3fe866663d102abb69d6df5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202625" target="_blank">2026-07-14 07:01:44</a></td></tr>
<tr><td><div id="tag19793" onclick="CopyToClipboard('tag19793');return false;" class="tag-decoration">v3-develop</div><div id="tag24482" onclick="CopyToClipboard('tag24482');return false;" class="tag-decoration">v3-develop-19d55f6</div><div id="tag28110" onclick="CopyToClipboard('tag28110');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag8780" onclick="CopyToClipboard('tag8780');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26974" onclick="CopyToClipboard('tag26974');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag10244" onclick="CopyToClipboard('tag10244');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/19d55f6f26274cfbe06e1a4c62616324f68f811b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313206389" target="_blank">2026-07-14 07:01:48</a></td></tr>
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
