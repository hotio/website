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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15211" onclick="CopyToClipboard('tag15211');return false;" class="tag-decoration">release</div><div id="tag24097" onclick="CopyToClipboard('tag24097');return false;" class="tag-decoration">release-1cbfc58</div><div id="tag29665" onclick="CopyToClipboard('tag29665');return false;" class="tag-decoration">release-1.8.0</div><div id="tag8401" onclick="CopyToClipboard('tag8401');return false;" class="tag-decoration">release-v1</div><div id="tag1520" onclick="CopyToClipboard('tag1520');return false;" class="tag-decoration">release-v1.8</div><div id="tag8535" onclick="CopyToClipboard('tag8535');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/1cbfc581a4345fd682e81ad55bbd8777b3f86833" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21200254191" target="_blank">2026-01-21 06:57:10</a></td></tr>
<tr><td><div id="tag18864" onclick="CopyToClipboard('tag18864');return false;" class="tag-decoration">testing</div><div id="tag31477" onclick="CopyToClipboard('tag31477');return false;" class="tag-decoration">testing-e35fcaa</div><div id="tag31024" onclick="CopyToClipboard('tag31024');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag25528" onclick="CopyToClipboard('tag25528');return false;" class="tag-decoration">testing-v1</div><div id="tag6400" onclick="CopyToClipboard('tag6400');return false;" class="tag-decoration">testing-v1.8</div><div id="tag30322" onclick="CopyToClipboard('tag30322');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/e35fcaa0b6afda760f19413a41c2dd96988d2e23" target="_blank">Upstream update: alpinevpn-7f0f6dc => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21198326800" target="_blank">2026-01-21 05:24:04</a></td></tr>
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
