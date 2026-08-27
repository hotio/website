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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32712" onclick="CopyToClipboard('tag32712');return false;" class="tag-decoration">v2</div><div id="tag26444" onclick="CopyToClipboard('tag26444');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag1231" onclick="CopyToClipboard('tag1231');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15963" onclick="CopyToClipboard('tag15963');return false;" class="tag-decoration">v2-v2</div><div id="tag14186" onclick="CopyToClipboard('tag14186');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32438" onclick="CopyToClipboard('tag32438');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag15017" onclick="CopyToClipboard('tag15017');return false;" class="tag-decoration">v2-develop</div><div id="tag14185" onclick="CopyToClipboard('tag14185');return false;" class="tag-decoration">v2-develop-6eba42b</div><div id="tag19724" onclick="CopyToClipboard('tag19724');return false;" class="tag-decoration">v2-develop-2.2.0-develop.262</div><div id="tag3420" onclick="CopyToClipboard('tag3420');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22558" onclick="CopyToClipboard('tag22558');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10808" onclick="CopyToClipboard('tag10808');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6eba42b6316668da538ec7017f054bd498df0e32" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33113805811" target="_blank">2026-08-27 20:32:16</a></td></tr>
<tr><td><div id="tag13465" onclick="CopyToClipboard('tag13465');return false;" class="tag-decoration">v3</div><div id="tag4173" onclick="CopyToClipboard('tag4173');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag20689" onclick="CopyToClipboard('tag20689');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag10274" onclick="CopyToClipboard('tag10274');return false;" class="tag-decoration">v3-v3</div><div id="tag14715" onclick="CopyToClipboard('tag14715');return false;" class="tag-decoration">v3-v3.3</div><div id="tag28291" onclick="CopyToClipboard('tag28291');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag22848" onclick="CopyToClipboard('tag22848');return false;" class="tag-decoration">v3-develop</div><div id="tag26863" onclick="CopyToClipboard('tag26863');return false;" class="tag-decoration">v3-develop-e381cdf</div><div id="tag16323" onclick="CopyToClipboard('tag16323');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1310</div><div id="tag31612" onclick="CopyToClipboard('tag31612');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12022" onclick="CopyToClipboard('tag12022');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5861" onclick="CopyToClipboard('tag5861');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e381cdfeedf5795afa1c086bcc7fb7a619437518" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33113811549" target="_blank">2026-08-27 20:32:21</a></td></tr>
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
