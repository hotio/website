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
<tr><td><div id="tag10715" onclick="CopyToClipboard('tag10715');return false;" class="tag-decoration">nightly</div><div id="tag8676" onclick="CopyToClipboard('tag8676');return false;" class="tag-decoration">nightly-ce48e6b</div><div id="tag21207" onclick="CopyToClipboard('tag21207');return false;" class="tag-decoration">nightly-6.4.4.10698</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/ce48e6b79fa95531a9ca3523130a57a35fcb9ce9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35472753514" target="_blank">2026-09-19 22:14:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22364" onclick="CopyToClipboard('tag22364');return false;" class="tag-decoration">release</div><div id="tag15378" onclick="CopyToClipboard('tag15378');return false;" class="tag-decoration">release-9748c63</div><div id="tag26529" onclick="CopyToClipboard('tag26529');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/9748c63003e59cf0fbe4e37bc12f832e4f9dae16" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35371304663" target="_blank">2026-09-18 16:55:17</a></td></tr>
<tr><td><div id="tag32303" onclick="CopyToClipboard('tag32303');return false;" class="tag-decoration">testing</div><div id="tag29340" onclick="CopyToClipboard('tag29340');return false;" class="tag-decoration">testing-db39a2f</div><div id="tag178" onclick="CopyToClipboard('tag178');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/db39a2ff0597e437bf21c927cd97e8a618540e4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35371312737" target="_blank">2026-09-18 16:55:23</a></td></tr>
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
