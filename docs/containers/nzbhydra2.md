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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29399" onclick="CopyToClipboard('tag29399');return false;" class="tag-decoration">release</div><div id="tag4093" onclick="CopyToClipboard('tag4093');return false;" class="tag-decoration">release-1822206</div><div id="tag15880" onclick="CopyToClipboard('tag15880');return false;" class="tag-decoration">release-8.9.0</div><div id="tag5770" onclick="CopyToClipboard('tag5770');return false;" class="tag-decoration">release-v8</div><div id="tag28760" onclick="CopyToClipboard('tag28760');return false;" class="tag-decoration">release-v8.9</div><div id="tag16613" onclick="CopyToClipboard('tag16613');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/18222062e099513941d8c492b2caaff6a40d3a82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30558702750" target="_blank">2026-07-30 15:50:59</a></td></tr>
<tr><td><div id="tag7088" onclick="CopyToClipboard('tag7088');return false;" class="tag-decoration">testing</div><div id="tag23458" onclick="CopyToClipboard('tag23458');return false;" class="tag-decoration">testing-3dc791a</div><div id="tag7828" onclick="CopyToClipboard('tag7828');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag26608" onclick="CopyToClipboard('tag26608');return false;" class="tag-decoration">testing-v8</div><div id="tag18568" onclick="CopyToClipboard('tag18568');return false;" class="tag-decoration">testing-v8.9</div><div id="tag11879" onclick="CopyToClipboard('tag11879');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3dc791a7bc8896a15a92464e9ac15a1e0dbbfc5e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30558698681" target="_blank">2026-07-30 15:50:55</a></td></tr>
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
