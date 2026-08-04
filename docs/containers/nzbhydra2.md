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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30224" onclick="CopyToClipboard('tag30224');return false;" class="tag-decoration">release</div><div id="tag30843" onclick="CopyToClipboard('tag30843');return false;" class="tag-decoration">release-b9b84b4</div><div id="tag10457" onclick="CopyToClipboard('tag10457');return false;" class="tag-decoration">release-8.9.0</div><div id="tag5940" onclick="CopyToClipboard('tag5940');return false;" class="tag-decoration">release-v8</div><div id="tag29261" onclick="CopyToClipboard('tag29261');return false;" class="tag-decoration">release-v8.9</div><div id="tag27344" onclick="CopyToClipboard('tag27344');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b9b84b41c19af113be604ba2890486b3b3950d24" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30888550667" target="_blank">2026-08-04 07:37:16</a></td></tr>
<tr><td><div id="tag7833" onclick="CopyToClipboard('tag7833');return false;" class="tag-decoration">testing</div><div id="tag22185" onclick="CopyToClipboard('tag22185');return false;" class="tag-decoration">testing-c9d1dd0</div><div id="tag14385" onclick="CopyToClipboard('tag14385');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag30663" onclick="CopyToClipboard('tag30663');return false;" class="tag-decoration">testing-v8</div><div id="tag6343" onclick="CopyToClipboard('tag6343');return false;" class="tag-decoration">testing-v8.9</div><div id="tag11659" onclick="CopyToClipboard('tag11659');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c9d1dd063adf2afc409a6d741af01f62f3e0661d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30888538519" target="_blank">2026-08-04 07:37:05</a></td></tr>
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
