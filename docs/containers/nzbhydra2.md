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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10232" onclick="CopyToClipboard('tag10232');return false;" class="tag-decoration">release</div><div id="tag10523" onclick="CopyToClipboard('tag10523');return false;" class="tag-decoration">release-5759d2c</div><div id="tag16487" onclick="CopyToClipboard('tag16487');return false;" class="tag-decoration">release-8.7.0</div><div id="tag25193" onclick="CopyToClipboard('tag25193');return false;" class="tag-decoration">release-v8</div><div id="tag17689" onclick="CopyToClipboard('tag17689');return false;" class="tag-decoration">release-v8.7</div><div id="tag7482" onclick="CopyToClipboard('tag7482');return false;" class="tag-decoration">release-v8.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5759d2cdbb32d0c42a0065813134c37d5c56b3b8" target="_blank">Version update: 8.6.0 => 8.7.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24637176526" target="_blank">2026-04-19 19:24:54</a></td></tr>
<tr><td><div id="tag32487" onclick="CopyToClipboard('tag32487');return false;" class="tag-decoration">testing</div><div id="tag3657" onclick="CopyToClipboard('tag3657');return false;" class="tag-decoration">testing-afc1145</div><div id="tag27068" onclick="CopyToClipboard('tag27068');return false;" class="tag-decoration">testing-8.7.0</div><div id="tag30871" onclick="CopyToClipboard('tag30871');return false;" class="tag-decoration">testing-v8</div><div id="tag20604" onclick="CopyToClipboard('tag20604');return false;" class="tag-decoration">testing-v8.7</div><div id="tag24420" onclick="CopyToClipboard('tag24420');return false;" class="tag-decoration">testing-v8.7.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/afc1145275235d909a66231f6d74dd6774bd9334" target="_blank">Version update: 8.6.0 => 8.7.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24637176974" target="_blank">2026-04-19 19:24:56</a></td></tr>
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
