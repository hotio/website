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
<tr><td><div id="tag22114" onclick="CopyToClipboard('tag22114');return false;" class="tag-decoration">nightly</div><div id="tag6060" onclick="CopyToClipboard('tag6060');return false;" class="tag-decoration">nightly-06390e9</div><div id="tag7636" onclick="CopyToClipboard('tag7636');return false;" class="tag-decoration">nightly-6.1.1.10317</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/06390e9612e9f2dfca0934b229b1c66a56c72616" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/22292133143" target="_blank">2026-02-23 03:44:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23543" onclick="CopyToClipboard('tag23543');return false;" class="tag-decoration">release</div><div id="tag3301" onclick="CopyToClipboard('tag3301');return false;" class="tag-decoration">release-211a269</div><div id="tag15154" onclick="CopyToClipboard('tag15154');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/211a26908b83d8f9a3b36c3039db0d169fc69172" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/22292134158" target="_blank">2026-02-23 03:44:09</a></td></tr>
<tr><td><div id="tag13029" onclick="CopyToClipboard('tag13029');return false;" class="tag-decoration">testing</div><div id="tag7824" onclick="CopyToClipboard('tag7824');return false;" class="tag-decoration">testing-01923f0</div><div id="tag29938" onclick="CopyToClipboard('tag29938');return false;" class="tag-decoration">testing-6.1.1.10317</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/01923f08949e59b099bc1ecafa4c5838c7f3cf3a" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21428862915" target="_blank">2026-01-28 07:15:13</a></td></tr>
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
