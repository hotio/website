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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18484" onclick="CopyToClipboard('tag18484');return false;" class="tag-decoration">v2</div><div id="tag11345" onclick="CopyToClipboard('tag11345');return false;" class="tag-decoration">v2-708fe0c</div><div id="tag24962" onclick="CopyToClipboard('tag24962');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag31972" onclick="CopyToClipboard('tag31972');return false;" class="tag-decoration">v2-v2</div><div id="tag11368" onclick="CopyToClipboard('tag11368');return false;" class="tag-decoration">v2-v2.2</div><div id="tag2062" onclick="CopyToClipboard('tag2062');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/708fe0ccacf65faa0432f75d254d222b105e9a8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297339382" target="_blank">2026-09-18 01:56:24</a></td></tr>
<tr><td><div id="tag17868" onclick="CopyToClipboard('tag17868');return false;" class="tag-decoration">v2-develop</div><div id="tag4111" onclick="CopyToClipboard('tag4111');return false;" class="tag-decoration">v2-develop-c473b7a</div><div id="tag22748" onclick="CopyToClipboard('tag22748');return false;" class="tag-decoration">v2-develop-2.2.0-develop.376</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25304" onclick="CopyToClipboard('tag25304');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26202" onclick="CopyToClipboard('tag26202');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c473b7a10b9b5cdded12bf560c050832a189d4e7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35316845715" target="_blank">2026-09-18 06:53:05</a></td></tr>
<tr><td><div id="tag32677" onclick="CopyToClipboard('tag32677');return false;" class="tag-decoration">v3</div><div id="tag19120" onclick="CopyToClipboard('tag19120');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag20405" onclick="CopyToClipboard('tag20405');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag5148" onclick="CopyToClipboard('tag5148');return false;" class="tag-decoration">v3-v3</div><div id="tag8317" onclick="CopyToClipboard('tag8317');return false;" class="tag-decoration">v3-v3.6</div><div id="tag26736" onclick="CopyToClipboard('tag26736');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag8877" onclick="CopyToClipboard('tag8877');return false;" class="tag-decoration">v3-develop</div><div id="tag28711" onclick="CopyToClipboard('tag28711');return false;" class="tag-decoration">v3-develop-bb62399</div><div id="tag30363" onclick="CopyToClipboard('tag30363');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1661</div><div id="tag11813" onclick="CopyToClipboard('tag11813');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag253" onclick="CopyToClipboard('tag253');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag26640" onclick="CopyToClipboard('tag26640');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bb62399fbee96d923e3be1b2a72c8ac46d52f7e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297350918" target="_blank">2026-09-18 01:56:34</a></td></tr>
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
