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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3128" onclick="CopyToClipboard('tag3128');return false;" class="tag-decoration">v2</div><div id="tag25518" onclick="CopyToClipboard('tag25518');return false;" class="tag-decoration">v2-ca7e047</div><div id="tag27686" onclick="CopyToClipboard('tag27686');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17475" onclick="CopyToClipboard('tag17475');return false;" class="tag-decoration">v2-v2</div><div id="tag3512" onclick="CopyToClipboard('tag3512');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9249" onclick="CopyToClipboard('tag9249');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ca7e047a52ec0c871fe6a5bf28604746fe48ba54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767601700" target="_blank">2026-09-30 19:43:00</a></td></tr>
<tr><td><div id="tag28945" onclick="CopyToClipboard('tag28945');return false;" class="tag-decoration">v2-develop</div><div id="tag23157" onclick="CopyToClipboard('tag23157');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag22685" onclick="CopyToClipboard('tag22685');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag16879" onclick="CopyToClipboard('tag16879');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29177" onclick="CopyToClipboard('tag29177');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15968" onclick="CopyToClipboard('tag15968');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag9747" onclick="CopyToClipboard('tag9747');return false;" class="tag-decoration">v3</div><div id="tag4711" onclick="CopyToClipboard('tag4711');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag22624" onclick="CopyToClipboard('tag22624');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag12603" onclick="CopyToClipboard('tag12603');return false;" class="tag-decoration">v3-v3</div><div id="tag3216" onclick="CopyToClipboard('tag3216');return false;" class="tag-decoration">v3-v3.6</div><div id="tag13522" onclick="CopyToClipboard('tag13522');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag10530" onclick="CopyToClipboard('tag10530');return false;" class="tag-decoration">v3-develop</div><div id="tag4655" onclick="CopyToClipboard('tag4655');return false;" class="tag-decoration">v3-develop-b9acaac</div><div id="tag11018" onclick="CopyToClipboard('tag11018');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag83" onclick="CopyToClipboard('tag83');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15976" onclick="CopyToClipboard('tag15976');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag6447" onclick="CopyToClipboard('tag6447');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b9acaac1defc2c9f44d2cd8f720530ac23671845" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36929015366" target="_blank">2026-10-01 21:29:23</a></td></tr>
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
