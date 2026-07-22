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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9364" onclick="CopyToClipboard('tag9364');return false;" class="tag-decoration">release</div><div id="tag15575" onclick="CopyToClipboard('tag15575');return false;" class="tag-decoration">release-84bf7af</div><div id="tag14521" onclick="CopyToClipboard('tag14521');return false;" class="tag-decoration">release-8.9.0</div><div id="tag18906" onclick="CopyToClipboard('tag18906');return false;" class="tag-decoration">release-v8</div><div id="tag22805" onclick="CopyToClipboard('tag22805');return false;" class="tag-decoration">release-v8.9</div><div id="tag5812" onclick="CopyToClipboard('tag5812');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/84bf7af0393f0d079726d04d1a9f11137af4411a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29941969912" target="_blank">2026-07-22 17:21:10</a></td></tr>
<tr><td><div id="tag12861" onclick="CopyToClipboard('tag12861');return false;" class="tag-decoration">testing</div><div id="tag760" onclick="CopyToClipboard('tag760');return false;" class="tag-decoration">testing-002835f</div><div id="tag15448" onclick="CopyToClipboard('tag15448');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag4472" onclick="CopyToClipboard('tag4472');return false;" class="tag-decoration">testing-v8</div><div id="tag2673" onclick="CopyToClipboard('tag2673');return false;" class="tag-decoration">testing-v8.9</div><div id="tag26296" onclick="CopyToClipboard('tag26296');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/002835f30c14f3efed8c6c1fd6afc693a9bbaee9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29957825967" target="_blank">2026-07-22 21:05:23</a></td></tr>
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
