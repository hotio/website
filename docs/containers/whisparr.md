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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10336" onclick="CopyToClipboard('tag10336');return false;" class="tag-decoration">v2</div><div id="tag16065" onclick="CopyToClipboard('tag16065');return false;" class="tag-decoration">v2-c75114f</div><div id="tag10395" onclick="CopyToClipboard('tag10395');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag10557" onclick="CopyToClipboard('tag10557');return false;" class="tag-decoration">v2-v2</div><div id="tag7638" onclick="CopyToClipboard('tag7638');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13245" onclick="CopyToClipboard('tag13245');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c75114fed8467f31908ecd749daa2c815a431553" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928997579" target="_blank">2026-10-01 21:29:11</a></td></tr>
<tr><td><div id="tag28847" onclick="CopyToClipboard('tag28847');return false;" class="tag-decoration">v2-develop</div><div id="tag9947" onclick="CopyToClipboard('tag9947');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag16487" onclick="CopyToClipboard('tag16487');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag18799" onclick="CopyToClipboard('tag18799');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14455" onclick="CopyToClipboard('tag14455');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16644" onclick="CopyToClipboard('tag16644');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag23042" onclick="CopyToClipboard('tag23042');return false;" class="tag-decoration">v3</div><div id="tag10917" onclick="CopyToClipboard('tag10917');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag7141" onclick="CopyToClipboard('tag7141');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag15844" onclick="CopyToClipboard('tag15844');return false;" class="tag-decoration">v3-v3</div><div id="tag31032" onclick="CopyToClipboard('tag31032');return false;" class="tag-decoration">v3-v3.6</div><div id="tag22077" onclick="CopyToClipboard('tag22077');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag23835" onclick="CopyToClipboard('tag23835');return false;" class="tag-decoration">v3-develop</div><div id="tag6734" onclick="CopyToClipboard('tag6734');return false;" class="tag-decoration">v3-develop-b9acaac</div><div id="tag10290" onclick="CopyToClipboard('tag10290');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag19523" onclick="CopyToClipboard('tag19523');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30309" onclick="CopyToClipboard('tag30309');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10362" onclick="CopyToClipboard('tag10362');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b9acaac1defc2c9f44d2cd8f720530ac23671845" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36929015366" target="_blank">2026-10-01 21:29:23</a></td></tr>
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
