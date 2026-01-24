---
hide:
  - toc
title: hotio/duplicacy
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/duplicacy){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/duplicacy){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://duplicacy.com){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23268" onclick="CopyToClipboard('tag23268');return false;" class="tag-decoration">release</div><div id="tag1532" onclick="CopyToClipboard('tag1532');return false;" class="tag-decoration">release-93c2792</div><div id="tag21336" onclick="CopyToClipboard('tag21336');return false;" class="tag-decoration">release-1.8.0</div><div id="tag18987" onclick="CopyToClipboard('tag18987');return false;" class="tag-decoration">release-v1</div><div id="tag18742" onclick="CopyToClipboard('tag18742');return false;" class="tag-decoration">release-v1.8</div><div id="tag32361" onclick="CopyToClipboard('tag32361');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/93c27926585333c907225e8d6b6809b3f433914f" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21246748644" target="_blank">2026-01-22 11:28:49</a></td></tr>
<tr><td><div id="tag26416" onclick="CopyToClipboard('tag26416');return false;" class="tag-decoration">testing</div><div id="tag26907" onclick="CopyToClipboard('tag26907');return false;" class="tag-decoration">testing-429541b</div><div id="tag24376" onclick="CopyToClipboard('tag24376');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag11883" onclick="CopyToClipboard('tag11883');return false;" class="tag-decoration">testing-v1</div><div id="tag25287" onclick="CopyToClipboard('tag25287');return false;" class="tag-decoration">testing-v1.8</div><div id="tag32374" onclick="CopyToClipboard('tag32374');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/429541b52d3cb47f5a2fc5885c3100a12fff40c4" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21322447592" target="_blank">2026-01-24 22:14:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="duplicacy" \
        --hostname="duplicacy" \
        -p 3875:3875 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="3875/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_cache>:/cache \
        -v /<host_folder_logs>:/logs \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/duplicacy
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      duplicacy:
        container_name: duplicacy
        hostname: duplicacy
        image: ghcr.io/hotio/duplicacy
        ports:
          - "3875:3875"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=3875/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_cache>:/cache
          - /<host_folder_logs>:/logs
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

If you don't want to enter your password every time you restart the container, you can set the environment variable `DWE_PASSWORD` with your password or starting with version 1.4.1 a file `/config/keyring` will be created that stores your password encryted if you click the checkmark on the login page.

--8<-- "includes/wireguard.md"
