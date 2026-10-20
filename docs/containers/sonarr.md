---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3369" onclick="CopyToClipboard('tag3369');return false;" class="tag-decoration">nightly</div><div id="tag27937" onclick="CopyToClipboard('tag27937');return false;" class="tag-decoration">nightly-37e8146</div><div id="tag31502" onclick="CopyToClipboard('tag31502');return false;" class="tag-decoration">nightly-5.0.0.2701</div></td><td>develop/v5-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/37e8146f77f00d7c41c3c1f5aab3f03da29bacfe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/39505185141" target="_blank">2026-10-20 22:03:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11684" onclick="CopyToClipboard('tag11684');return false;" class="tag-decoration">release</div><div id="tag22847" onclick="CopyToClipboard('tag22847');return false;" class="tag-decoration">release-a4f9bf6</div><div id="tag18832" onclick="CopyToClipboard('tag18832');return false;" class="tag-decoration">release-4.0.20.3014</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/a4f9bf65e403237813cde276a8a255c295d48103" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/39505179277" target="_blank">2026-10-20 22:02:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
