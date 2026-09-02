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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11759" onclick="CopyToClipboard('tag11759');return false;" class="tag-decoration">v2</div><div id="tag29791" onclick="CopyToClipboard('tag29791');return false;" class="tag-decoration">v2-1879296</div><div id="tag4520" onclick="CopyToClipboard('tag4520');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32394" onclick="CopyToClipboard('tag32394');return false;" class="tag-decoration">v2-v2</div><div id="tag14763" onclick="CopyToClipboard('tag14763');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17381" onclick="CopyToClipboard('tag17381');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1879296a9fd1e316d9a9416686ce4398b7bff5a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580645170" target="_blank">2026-09-02 01:45:31</a></td></tr>
<tr><td><div id="tag27152" onclick="CopyToClipboard('tag27152');return false;" class="tag-decoration">v2-develop</div><div id="tag27183" onclick="CopyToClipboard('tag27183');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag13596" onclick="CopyToClipboard('tag13596');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag1140" onclick="CopyToClipboard('tag1140');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30604" onclick="CopyToClipboard('tag30604');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag345" onclick="CopyToClipboard('tag345');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag9716" onclick="CopyToClipboard('tag9716');return false;" class="tag-decoration">v3</div><div id="tag24273" onclick="CopyToClipboard('tag24273');return false;" class="tag-decoration">v3-31f4dcc</div><div id="tag30801" onclick="CopyToClipboard('tag30801');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag17719" onclick="CopyToClipboard('tag17719');return false;" class="tag-decoration">v3-v3</div><div id="tag7687" onclick="CopyToClipboard('tag7687');return false;" class="tag-decoration">v3-v3.4</div><div id="tag31903" onclick="CopyToClipboard('tag31903');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/31f4dcc00894e834723bfcbd40ff8f4f22ff7003" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580646301" target="_blank">2026-09-02 01:45:32</a></td></tr>
<tr><td><div id="tag30775" onclick="CopyToClipboard('tag30775');return false;" class="tag-decoration">v3-develop</div><div id="tag23395" onclick="CopyToClipboard('tag23395');return false;" class="tag-decoration">v3-develop-fbf4177</div><div id="tag15912" onclick="CopyToClipboard('tag15912');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1449</div><div id="tag3508" onclick="CopyToClipboard('tag3508');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3914" onclick="CopyToClipboard('tag3914');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag13535" onclick="CopyToClipboard('tag13535');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fbf41775a5457cc7e3d8afe02fce49c444cbf78e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33571922288" target="_blank">2026-09-01 23:38:24</a></td></tr>
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
