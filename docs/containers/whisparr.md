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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30801" onclick="CopyToClipboard('tag30801');return false;" class="tag-decoration">v2</div><div id="tag9134" onclick="CopyToClipboard('tag9134');return false;" class="tag-decoration">v2-1a7f2a5</div><div id="tag23631" onclick="CopyToClipboard('tag23631');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag19641" onclick="CopyToClipboard('tag19641');return false;" class="tag-decoration">v2-v2</div><div id="tag19600" onclick="CopyToClipboard('tag19600');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13380" onclick="CopyToClipboard('tag13380');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1a7f2a543ee73fcd51a52f8f93eff1e03dc3fc43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596997482" target="_blank">2026-10-27 22:43:39</a></td></tr>
<tr><td><div id="tag25142" onclick="CopyToClipboard('tag25142');return false;" class="tag-decoration">v2-develop</div><div id="tag10608" onclick="CopyToClipboard('tag10608');return false;" class="tag-decoration">v2-develop-f407b94</div><div id="tag11180" onclick="CopyToClipboard('tag11180');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag22836" onclick="CopyToClipboard('tag22836');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8491" onclick="CopyToClipboard('tag8491');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15777" onclick="CopyToClipboard('tag15777');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f407b949c2be6cfd6b3ed760a49b941c87fa2122" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559574877" target="_blank">2026-11-03 01:24:45</a></td></tr>
<tr><td><div id="tag24180" onclick="CopyToClipboard('tag24180');return false;" class="tag-decoration">v3</div><div id="tag4827" onclick="CopyToClipboard('tag4827');return false;" class="tag-decoration">v3-dd51edb</div><div id="tag20774" onclick="CopyToClipboard('tag20774');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag15399" onclick="CopyToClipboard('tag15399');return false;" class="tag-decoration">v3-v3</div><div id="tag12984" onclick="CopyToClipboard('tag12984');return false;" class="tag-decoration">v3-v3.6</div><div id="tag10006" onclick="CopyToClipboard('tag10006');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/dd51edbca0b157b2687ddac7a20f8e7e1c6f28d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40617637014" target="_blank">2026-10-28 01:52:45</a></td></tr>
<tr><td><div id="tag31251" onclick="CopyToClipboard('tag31251');return false;" class="tag-decoration">v3-develop</div><div id="tag6902" onclick="CopyToClipboard('tag6902');return false;" class="tag-decoration">v3-develop-d6274e6</div><div id="tag25076" onclick="CopyToClipboard('tag25076');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag159" onclick="CopyToClipboard('tag159');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5834" onclick="CopyToClipboard('tag5834');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag3349" onclick="CopyToClipboard('tag3349');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d6274e6cc6d6bb2a18411070f2dba903f9bccc8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596998526" target="_blank">2026-10-27 22:43:39</a></td></tr>
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
