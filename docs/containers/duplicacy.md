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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24919" onclick="CopyToClipboard('tag24919');return false;" class="tag-decoration">release</div><div id="tag25856" onclick="CopyToClipboard('tag25856');return false;" class="tag-decoration">release-df410ff</div><div id="tag21695" onclick="CopyToClipboard('tag21695');return false;" class="tag-decoration">release-1.8.3</div><div id="tag9182" onclick="CopyToClipboard('tag9182');return false;" class="tag-decoration">release-v1</div><div id="tag23362" onclick="CopyToClipboard('tag23362');return false;" class="tag-decoration">release-v1.8</div><div id="tag30019" onclick="CopyToClipboard('tag30019');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/df410ff1e69ad26fe1d4b1874e71b82e4a0704d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/35253605023" target="_blank">2026-09-17 17:34:48</a></td></tr>
<tr><td><div id="tag26668" onclick="CopyToClipboard('tag26668');return false;" class="tag-decoration">testing</div><div id="tag6982" onclick="CopyToClipboard('tag6982');return false;" class="tag-decoration">testing-a80f6ef</div><div id="tag18160" onclick="CopyToClipboard('tag18160');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag8398" onclick="CopyToClipboard('tag8398');return false;" class="tag-decoration">testing-v1</div><div id="tag7549" onclick="CopyToClipboard('tag7549');return false;" class="tag-decoration">testing-v1.8</div><div id="tag257" onclick="CopyToClipboard('tag257');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/a80f6ef9c66b660992befff80d5d9778a6287d69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/35253609669" target="_blank">2026-09-17 17:34:52</a></td></tr>
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
