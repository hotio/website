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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6471" onclick="CopyToClipboard('tag6471');return false;" class="tag-decoration">v2</div><div id="tag22652" onclick="CopyToClipboard('tag22652');return false;" class="tag-decoration">v2-42357df</div><div id="tag28763" onclick="CopyToClipboard('tag28763');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag24618" onclick="CopyToClipboard('tag24618');return false;" class="tag-decoration">v2-v2</div><div id="tag13990" onclick="CopyToClipboard('tag13990');return false;" class="tag-decoration">v2-v2.2</div><div id="tag22510" onclick="CopyToClipboard('tag22510');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/42357dfa0fea1b225bb5809241bcc84d4d9e6c31" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044493" target="_blank">2026-06-20 12:22:14</a></td></tr>
<tr><td><div id="tag27642" onclick="CopyToClipboard('tag27642');return false;" class="tag-decoration">v2-develop</div><div id="tag9295" onclick="CopyToClipboard('tag9295');return false;" class="tag-decoration">v2-develop-f64ac48</div><div id="tag16961" onclick="CopyToClipboard('tag16961');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag32724" onclick="CopyToClipboard('tag32724');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3490" onclick="CopyToClipboard('tag3490');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag14284" onclick="CopyToClipboard('tag14284');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f64ac48a72fbdf6652759632b7a57bdf82c0f4e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044517" target="_blank">2026-06-20 12:22:14</a></td></tr>
<tr><td><div id="tag8868" onclick="CopyToClipboard('tag8868');return false;" class="tag-decoration">v3</div><div id="tag3268" onclick="CopyToClipboard('tag3268');return false;" class="tag-decoration">v3-35020e8</div><div id="tag5032" onclick="CopyToClipboard('tag5032');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag25772" onclick="CopyToClipboard('tag25772');return false;" class="tag-decoration">v3-v3</div><div id="tag18316" onclick="CopyToClipboard('tag18316');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11386" onclick="CopyToClipboard('tag11386');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/35020e8b65d3a5e5b7ed1a4fe977151ac70ee907" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044900" target="_blank">2026-06-20 12:22:15</a></td></tr>
<tr><td><div id="tag31113" onclick="CopyToClipboard('tag31113');return false;" class="tag-decoration">v3-develop</div><div id="tag23331" onclick="CopyToClipboard('tag23331');return false;" class="tag-decoration">v3-develop-e59f96a</div><div id="tag28612" onclick="CopyToClipboard('tag28612');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag31323" onclick="CopyToClipboard('tag31323');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15201" onclick="CopyToClipboard('tag15201');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4360" onclick="CopyToClipboard('tag4360');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e59f96ac3e0f69aed628cbf72b8da9b28d797292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871042544" target="_blank">2026-06-20 12:22:09</a></td></tr>
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
