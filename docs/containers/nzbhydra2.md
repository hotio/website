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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15803" onclick="CopyToClipboard('tag15803');return false;" class="tag-decoration">release</div><div id="tag28956" onclick="CopyToClipboard('tag28956');return false;" class="tag-decoration">release-8dacc55</div><div id="tag32559" onclick="CopyToClipboard('tag32559');return false;" class="tag-decoration">release-8.8.4</div><div id="tag13351" onclick="CopyToClipboard('tag13351');return false;" class="tag-decoration">release-v8</div><div id="tag11705" onclick="CopyToClipboard('tag11705');return false;" class="tag-decoration">release-v8.8</div><div id="tag32703" onclick="CopyToClipboard('tag32703');return false;" class="tag-decoration">release-v8.8.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8dacc55d01ed93b58972f2a5d12240ca6597b419" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27840948083" target="_blank">2026-06-19 17:55:17</a></td></tr>
<tr><td><div id="tag16532" onclick="CopyToClipboard('tag16532');return false;" class="tag-decoration">testing</div><div id="tag859" onclick="CopyToClipboard('tag859');return false;" class="tag-decoration">testing-45f97f7</div><div id="tag22673" onclick="CopyToClipboard('tag22673');return false;" class="tag-decoration">testing-8.8.4</div><div id="tag20256" onclick="CopyToClipboard('tag20256');return false;" class="tag-decoration">testing-v8</div><div id="tag4370" onclick="CopyToClipboard('tag4370');return false;" class="tag-decoration">testing-v8.8</div><div id="tag16395" onclick="CopyToClipboard('tag16395');return false;" class="tag-decoration">testing-v8.8.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/45f97f75a242805a1589c44dd019524fd9697ccd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28113100833" target="_blank">2026-06-24 16:20:12</a></td></tr>
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
