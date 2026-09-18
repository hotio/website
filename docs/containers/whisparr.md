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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9261" onclick="CopyToClipboard('tag9261');return false;" class="tag-decoration">v2</div><div id="tag30438" onclick="CopyToClipboard('tag30438');return false;" class="tag-decoration">v2-708fe0c</div><div id="tag11791" onclick="CopyToClipboard('tag11791');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag5300" onclick="CopyToClipboard('tag5300');return false;" class="tag-decoration">v2-v2</div><div id="tag31247" onclick="CopyToClipboard('tag31247');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24069" onclick="CopyToClipboard('tag24069');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/708fe0ccacf65faa0432f75d254d222b105e9a8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297339382" target="_blank">2026-09-18 01:56:24</a></td></tr>
<tr><td><div id="tag22899" onclick="CopyToClipboard('tag22899');return false;" class="tag-decoration">v2-develop</div><div id="tag31373" onclick="CopyToClipboard('tag31373');return false;" class="tag-decoration">v2-develop-c473b7a</div><div id="tag16585" onclick="CopyToClipboard('tag16585');return false;" class="tag-decoration">v2-develop-2.2.0-develop.376</div><div id="tag3710" onclick="CopyToClipboard('tag3710');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2764" onclick="CopyToClipboard('tag2764');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2056" onclick="CopyToClipboard('tag2056');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c473b7a10b9b5cdded12bf560c050832a189d4e7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35316845715" target="_blank">2026-09-18 06:53:05</a></td></tr>
<tr><td><div id="tag17092" onclick="CopyToClipboard('tag17092');return false;" class="tag-decoration">v3</div><div id="tag19844" onclick="CopyToClipboard('tag19844');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag6267" onclick="CopyToClipboard('tag6267');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag24986" onclick="CopyToClipboard('tag24986');return false;" class="tag-decoration">v3-v3</div><div id="tag21818" onclick="CopyToClipboard('tag21818');return false;" class="tag-decoration">v3-v3.6</div><div id="tag14412" onclick="CopyToClipboard('tag14412');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag23134" onclick="CopyToClipboard('tag23134');return false;" class="tag-decoration">v3-develop</div><div id="tag27375" onclick="CopyToClipboard('tag27375');return false;" class="tag-decoration">v3-develop-5f48d3d</div><div id="tag18263" onclick="CopyToClipboard('tag18263');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1674</div><div id="tag24242" onclick="CopyToClipboard('tag24242');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6704" onclick="CopyToClipboard('tag6704');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag16135" onclick="CopyToClipboard('tag16135');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5f48d3d152616a306f52ca6873e467dc1a6768f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35316843486" target="_blank">2026-09-18 06:53:04</a></td></tr>
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
