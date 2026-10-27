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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25330" onclick="CopyToClipboard('tag25330');return false;" class="tag-decoration">release</div><div id="tag23100" onclick="CopyToClipboard('tag23100');return false;" class="tag-decoration">release-071156f</div><div id="tag21850" onclick="CopyToClipboard('tag21850');return false;" class="tag-decoration">release-1.8.3</div><div id="tag15892" onclick="CopyToClipboard('tag15892');return false;" class="tag-decoration">release-v1</div><div id="tag28595" onclick="CopyToClipboard('tag28595');return false;" class="tag-decoration">release-v1.8</div><div id="tag3" onclick="CopyToClipboard('tag3');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/071156f34bf50fe30480d6026a313fecd12a20b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/40549537920" target="_blank">2026-10-27 17:19:44</a></td></tr>
<tr><td><div id="tag16689" onclick="CopyToClipboard('tag16689');return false;" class="tag-decoration">testing</div><div id="tag11977" onclick="CopyToClipboard('tag11977');return false;" class="tag-decoration">testing-c1e2650</div><div id="tag3526" onclick="CopyToClipboard('tag3526');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag10554" onclick="CopyToClipboard('tag10554');return false;" class="tag-decoration">testing-v1</div><div id="tag29964" onclick="CopyToClipboard('tag29964');return false;" class="tag-decoration">testing-v1.8</div><div id="tag4563" onclick="CopyToClipboard('tag4563');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/c1e2650e2323eeee16ff011dfd9822be0434ea6a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/40589318159" target="_blank">2026-10-27 21:44:41</a></td></tr>
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
