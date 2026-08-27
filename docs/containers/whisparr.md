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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7607" onclick="CopyToClipboard('tag7607');return false;" class="tag-decoration">v2</div><div id="tag31039" onclick="CopyToClipboard('tag31039');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag5423" onclick="CopyToClipboard('tag5423');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4529" onclick="CopyToClipboard('tag4529');return false;" class="tag-decoration">v2-v2</div><div id="tag24711" onclick="CopyToClipboard('tag24711');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19410" onclick="CopyToClipboard('tag19410');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag1276" onclick="CopyToClipboard('tag1276');return false;" class="tag-decoration">v2-develop</div><div id="tag28633" onclick="CopyToClipboard('tag28633');return false;" class="tag-decoration">v2-develop-559d848</div><div id="tag8167" onclick="CopyToClipboard('tag8167');return false;" class="tag-decoration">v2-develop-2.2.0-develop.235</div><div id="tag4192" onclick="CopyToClipboard('tag4192');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23885" onclick="CopyToClipboard('tag23885');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9988" onclick="CopyToClipboard('tag9988');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/559d848889363bcad765f47ad40e59c39abcfdce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033025659" target="_blank">2026-08-27 02:21:24</a></td></tr>
<tr><td><div id="tag8622" onclick="CopyToClipboard('tag8622');return false;" class="tag-decoration">v3</div><div id="tag9663" onclick="CopyToClipboard('tag9663');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag1818" onclick="CopyToClipboard('tag1818');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag12782" onclick="CopyToClipboard('tag12782');return false;" class="tag-decoration">v3-v3</div><div id="tag24222" onclick="CopyToClipboard('tag24222');return false;" class="tag-decoration">v3-v3.3</div><div id="tag24539" onclick="CopyToClipboard('tag24539');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag12423" onclick="CopyToClipboard('tag12423');return false;" class="tag-decoration">v3-develop</div><div id="tag23271" onclick="CopyToClipboard('tag23271');return false;" class="tag-decoration">v3-develop-889e6e3</div><div id="tag26315" onclick="CopyToClipboard('tag26315');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1290</div><div id="tag16623" onclick="CopyToClipboard('tag16623');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27571" onclick="CopyToClipboard('tag27571');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7624" onclick="CopyToClipboard('tag7624');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/889e6e3be95d828df5a540ceec2d5814a370034f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33001478094" target="_blank">2026-08-26 18:45:42</a></td></tr>
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
