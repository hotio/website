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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1793" onclick="CopyToClipboard('tag1793');return false;" class="tag-decoration">release</div><div id="tag12211" onclick="CopyToClipboard('tag12211');return false;" class="tag-decoration">release-a185ff4</div><div id="tag1067" onclick="CopyToClipboard('tag1067');return false;" class="tag-decoration">release-1.8.3</div><div id="tag14997" onclick="CopyToClipboard('tag14997');return false;" class="tag-decoration">release-v1</div><div id="tag15031" onclick="CopyToClipboard('tag15031');return false;" class="tag-decoration">release-v1.8</div><div id="tag9513" onclick="CopyToClipboard('tag9513');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/a185ff4f44d9aa0c3057d962a260e104ed07057e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/45352913621" target="_blank">2026-11-24 08:04:03</a></td></tr>
<tr><td><div id="tag13886" onclick="CopyToClipboard('tag13886');return false;" class="tag-decoration">testing</div><div id="tag9809" onclick="CopyToClipboard('tag9809');return false;" class="tag-decoration">testing-60a7566</div><div id="tag27617" onclick="CopyToClipboard('tag27617');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag11120" onclick="CopyToClipboard('tag11120');return false;" class="tag-decoration">testing-v1</div><div id="tag13421" onclick="CopyToClipboard('tag13421');return false;" class="tag-decoration">testing-v1.8</div><div id="tag25262" onclick="CopyToClipboard('tag25262');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/60a756629f29351508a185d43205de8191e3581d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/45287473207" target="_blank">2026-11-23 23:17:13</a></td></tr>
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
