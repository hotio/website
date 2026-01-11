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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4329" onclick="CopyToClipboard('tag4329');return false;" class="tag-decoration">release</div><div id="tag20531" onclick="CopyToClipboard('tag20531');return false;" class="tag-decoration">release-1.8.0</div><div id="tag15857" onclick="CopyToClipboard('tag15857');return false;" class="tag-decoration">release-0aeae22</div><div id="tag19149" onclick="CopyToClipboard('tag19149');return false;" class="tag-decoration">release-v1</div><div id="tag10509" onclick="CopyToClipboard('tag10509');return false;" class="tag-decoration">release-v1.8</div><div id="tag8002" onclick="CopyToClipboard('tag8002');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/0aeae22a646e8d43eb5d3d89b59d0af9c67aa7d5" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20892084149" target="_blank">2026-01-11 08:19:23</a></td></tr>
<tr><td><div id="tag10286" onclick="CopyToClipboard('tag10286');return false;" class="tag-decoration">testing</div><div id="tag11041" onclick="CopyToClipboard('tag11041');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag26383" onclick="CopyToClipboard('tag26383');return false;" class="tag-decoration">testing-f3d619f</div><div id="tag7068" onclick="CopyToClipboard('tag7068');return false;" class="tag-decoration">testing-v1</div><div id="tag30042" onclick="CopyToClipboard('tag30042');return false;" class="tag-decoration">testing-v1.8</div><div id="tag24003" onclick="CopyToClipboard('tag24003');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/f3d619f91a74d51427ce8befe0c7651bfe88e9ea" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20892084187" target="_blank">2026-01-11 08:19:24</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_cache>:/cache \
        -v /<host_folder_logs>:/logs \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/duplicacy
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_cache>:/cache
          - /<host_folder_logs>:/logs
          - /<host_folder_data>:/data
    ```

If you don't want to enter your password every time you restart the container, you can set the environment variable `DWE_PASSWORD` with your password or starting with version 1.4.1 a file `/config/keyring` will be created that stores your password encryted if you click the checkmark on the login page.

--8<-- "includes/wireguard.md"
