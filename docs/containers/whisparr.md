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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27417" onclick="CopyToClipboard('tag27417');return false;" class="tag-decoration">v2</div><div id="tag8684" onclick="CopyToClipboard('tag8684');return false;" class="tag-decoration">v2-640b6d0</div><div id="tag26194" onclick="CopyToClipboard('tag26194');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag9481" onclick="CopyToClipboard('tag9481');return false;" class="tag-decoration">v2-v2</div><div id="tag347" onclick="CopyToClipboard('tag347');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13600" onclick="CopyToClipboard('tag13600');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/640b6d02dacd2ffb7e9228a830a5ec50e512fa39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498575525" target="_blank">2026-09-01 10:39:59</a></td></tr>
<tr><td><div id="tag28001" onclick="CopyToClipboard('tag28001');return false;" class="tag-decoration">v2-develop</div><div id="tag340" onclick="CopyToClipboard('tag340');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag1675" onclick="CopyToClipboard('tag1675');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag934" onclick="CopyToClipboard('tag934');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18466" onclick="CopyToClipboard('tag18466');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28484" onclick="CopyToClipboard('tag28484');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag7688" onclick="CopyToClipboard('tag7688');return false;" class="tag-decoration">v3</div><div id="tag865" onclick="CopyToClipboard('tag865');return false;" class="tag-decoration">v3-71a470b</div><div id="tag9054" onclick="CopyToClipboard('tag9054');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag30489" onclick="CopyToClipboard('tag30489');return false;" class="tag-decoration">v3-v3</div><div id="tag8766" onclick="CopyToClipboard('tag8766');return false;" class="tag-decoration">v3-v3.4</div><div id="tag15141" onclick="CopyToClipboard('tag15141');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/71a470b9c1ab9c1ffd77fb178503b4332b502d9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524756120" target="_blank">2026-09-01 15:16:45</a></td></tr>
<tr><td><div id="tag21162" onclick="CopyToClipboard('tag21162');return false;" class="tag-decoration">v3-develop</div><div id="tag2069" onclick="CopyToClipboard('tag2069');return false;" class="tag-decoration">v3-develop-47fd5ca</div><div id="tag21647" onclick="CopyToClipboard('tag21647');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag13167" onclick="CopyToClipboard('tag13167');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9194" onclick="CopyToClipboard('tag9194');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag15010" onclick="CopyToClipboard('tag15010');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/47fd5cabf12d2cdd44c13074e487817d7b8c5ce8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498579749" target="_blank">2026-09-01 10:40:02</a></td></tr>
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
