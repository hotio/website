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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31642" onclick="CopyToClipboard('tag31642');return false;" class="tag-decoration">release</div><div id="tag7088" onclick="CopyToClipboard('tag7088');return false;" class="tag-decoration">release-92b31d6</div><div id="tag23979" onclick="CopyToClipboard('tag23979');return false;" class="tag-decoration">release-8.5.0</div><div id="tag27682" onclick="CopyToClipboard('tag27682');return false;" class="tag-decoration">release-v8</div><div id="tag19022" onclick="CopyToClipboard('tag19022');return false;" class="tag-decoration">release-v8.5</div><div id="tag26851" onclick="CopyToClipboard('tag26851');return false;" class="tag-decoration">release-v8.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/92b31d62d765195eff063fcd7de1d3212d7682f5" target="_blank">Version update: 8.4.1 => 8.5.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21960578034" target="_blank">2026-02-12 19:10:16</a></td></tr>
<tr><td><div id="tag22010" onclick="CopyToClipboard('tag22010');return false;" class="tag-decoration">testing</div><div id="tag25638" onclick="CopyToClipboard('tag25638');return false;" class="tag-decoration">testing-c4ae2fc</div><div id="tag10967" onclick="CopyToClipboard('tag10967');return false;" class="tag-decoration">testing-8.4.1</div><div id="tag8970" onclick="CopyToClipboard('tag8970');return false;" class="tag-decoration">testing-v8</div><div id="tag5199" onclick="CopyToClipboard('tag5199');return false;" class="tag-decoration">testing-v8.4</div><div id="tag2485" onclick="CopyToClipboard('tag2485');return false;" class="tag-decoration">testing-v8.4.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c4ae2fcba1d9b9b089172490386ac2b6f49542c3" target="_blank">Version update: 8.4.0 => 8.4.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21559797213" target="_blank">2026-02-01 08:38:56</a></td></tr>
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
