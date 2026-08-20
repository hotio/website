---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9149" onclick="CopyToClipboard('tag9149');return false;" class="tag-decoration">release</div><div id="tag15149" onclick="CopyToClipboard('tag15149');return false;" class="tag-decoration">release-4d7a3eb</div><div id="tag18245" onclick="CopyToClipboard('tag18245');return false;" class="tag-decoration">release-8.9.0</div><div id="tag13091" onclick="CopyToClipboard('tag13091');return false;" class="tag-decoration">release-v8</div><div id="tag11297" onclick="CopyToClipboard('tag11297');return false;" class="tag-decoration">release-v8.9</div><div id="tag10364" onclick="CopyToClipboard('tag10364');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4d7a3eb89a969616c40e8eb7b6dfd66ae5d170a0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32287813566" target="_blank">2026-08-19 18:31:20</a></td></tr>
<tr><td><div id="tag32071" onclick="CopyToClipboard('tag32071');return false;" class="tag-decoration">testing</div><div id="tag9953" onclick="CopyToClipboard('tag9953');return false;" class="tag-decoration">testing-5517ae5</div><div id="tag26847" onclick="CopyToClipboard('tag26847');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag1746" onclick="CopyToClipboard('tag1746');return false;" class="tag-decoration">testing-v8</div><div id="tag15842" onclick="CopyToClipboard('tag15842');return false;" class="tag-decoration">testing-v8.9</div><div id="tag10077" onclick="CopyToClipboard('tag10077');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5517ae5a478eb37ee94850f4e5a353632429b4cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32428431792" target="_blank">2026-08-20 23:23:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
