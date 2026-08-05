---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13371" onclick="CopyToClipboard('tag13371');return false;" class="tag-decoration">nightly</div><div id="tag22865" onclick="CopyToClipboard('tag22865');return false;" class="tag-decoration">nightly-0504505</div><div id="tag27550" onclick="CopyToClipboard('tag27550');return false;" class="tag-decoration">nightly-6.4.2.10565</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/05045057767c76fe8114321790d6f56a49fb11d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/31043789825" target="_blank">2026-08-05 20:22:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7836" onclick="CopyToClipboard('tag7836');return false;" class="tag-decoration">release</div><div id="tag18824" onclick="CopyToClipboard('tag18824');return false;" class="tag-decoration">release-0a7257e</div><div id="tag7536" onclick="CopyToClipboard('tag7536');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/0a7257e0a861472d960d88e8ce47358902de7e5b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/30376434949" target="_blank">2026-07-28 16:03:41</a></td></tr>
<tr><td><div id="tag11921" onclick="CopyToClipboard('tag11921');return false;" class="tag-decoration">testing</div><div id="tag32120" onclick="CopyToClipboard('tag32120');return false;" class="tag-decoration">testing-c4a4743</div><div id="tag10054" onclick="CopyToClipboard('tag10054');return false;" class="tag-decoration">testing-6.4.1.10545</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/c4a4743f6ddfc47308e41eca893a91d1f63bbfe5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/30943203884" target="_blank">2026-08-04 19:25:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
