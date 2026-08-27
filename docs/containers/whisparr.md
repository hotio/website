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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10244" onclick="CopyToClipboard('tag10244');return false;" class="tag-decoration">v2</div><div id="tag10278" onclick="CopyToClipboard('tag10278');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag20850" onclick="CopyToClipboard('tag20850');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag13121" onclick="CopyToClipboard('tag13121');return false;" class="tag-decoration">v2-v2</div><div id="tag13308" onclick="CopyToClipboard('tag13308');return false;" class="tag-decoration">v2-v2.2</div><div id="tag2558" onclick="CopyToClipboard('tag2558');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag4658" onclick="CopyToClipboard('tag4658');return false;" class="tag-decoration">v2-develop</div><div id="tag20890" onclick="CopyToClipboard('tag20890');return false;" class="tag-decoration">v2-develop-d4fc2e9</div><div id="tag11907" onclick="CopyToClipboard('tag11907');return false;" class="tag-decoration">v2-develop-2.2.0-develop.271</div><div id="tag15554" onclick="CopyToClipboard('tag15554');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26271" onclick="CopyToClipboard('tag26271');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18553" onclick="CopyToClipboard('tag18553');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d4fc2e961eac0a055b8757301e6915abe30a3280" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33125826715" target="_blank">2026-08-27 23:18:49</a></td></tr>
<tr><td><div id="tag257" onclick="CopyToClipboard('tag257');return false;" class="tag-decoration">v3</div><div id="tag910" onclick="CopyToClipboard('tag910');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag19710" onclick="CopyToClipboard('tag19710');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag1935" onclick="CopyToClipboard('tag1935');return false;" class="tag-decoration">v3-v3</div><div id="tag844" onclick="CopyToClipboard('tag844');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11650" onclick="CopyToClipboard('tag11650');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag14015" onclick="CopyToClipboard('tag14015');return false;" class="tag-decoration">v3-develop</div><div id="tag16821" onclick="CopyToClipboard('tag16821');return false;" class="tag-decoration">v3-develop-e381cdf</div><div id="tag24958" onclick="CopyToClipboard('tag24958');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1310</div><div id="tag12901" onclick="CopyToClipboard('tag12901');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17734" onclick="CopyToClipboard('tag17734');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag25728" onclick="CopyToClipboard('tag25728');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e381cdfeedf5795afa1c086bcc7fb7a619437518" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33113811549" target="_blank">2026-08-27 20:32:21</a></td></tr>
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
