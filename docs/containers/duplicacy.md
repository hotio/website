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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18864" onclick="CopyToClipboard('tag18864');return false;" class="tag-decoration">release</div><div id="tag13184" onclick="CopyToClipboard('tag13184');return false;" class="tag-decoration">release-1.8.0</div><div id="tag16610" onclick="CopyToClipboard('tag16610');return false;" class="tag-decoration">release-fb080bf</div><div id="tag19250" onclick="CopyToClipboard('tag19250');return false;" class="tag-decoration">release-v1</div><div id="tag4260" onclick="CopyToClipboard('tag4260');return false;" class="tag-decoration">release-v1.8</div><div id="tag29488" onclick="CopyToClipboard('tag29488');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/fb080bfa94f19d4d4c1cc5e00e0029f747156530" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20898158324" target="_blank">2026-01-11 16:17:08</a></td></tr>
<tr><td><div id="tag11979" onclick="CopyToClipboard('tag11979');return false;" class="tag-decoration">testing</div><div id="tag6220" onclick="CopyToClipboard('tag6220');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag23096" onclick="CopyToClipboard('tag23096');return false;" class="tag-decoration">testing-02e13d1</div><div id="tag23318" onclick="CopyToClipboard('tag23318');return false;" class="tag-decoration">testing-v1</div><div id="tag11899" onclick="CopyToClipboard('tag11899');return false;" class="tag-decoration">testing-v1.8</div><div id="tag25214" onclick="CopyToClipboard('tag25214');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/02e13d137db546acf8bd4ecdbbb4bb0624e56d82" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20898158450" target="_blank">2026-01-11 16:17:09</a></td></tr>
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
