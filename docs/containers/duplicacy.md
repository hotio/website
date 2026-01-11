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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11469" onclick="CopyToClipboard('tag11469');return false;" class="tag-decoration">release</div><div id="tag18384" onclick="CopyToClipboard('tag18384');return false;" class="tag-decoration">release-1.8.0</div><div id="tag13397" onclick="CopyToClipboard('tag13397');return false;" class="tag-decoration">release-fb080bf</div><div id="tag14020" onclick="CopyToClipboard('tag14020');return false;" class="tag-decoration">release-v1</div><div id="tag2942" onclick="CopyToClipboard('tag2942');return false;" class="tag-decoration">release-v1.8</div><div id="tag5340" onclick="CopyToClipboard('tag5340');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/fb080bfa94f19d4d4c1cc5e00e0029f747156530" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20898158324" target="_blank">2026-01-11 16:17:08</a></td></tr>
<tr><td><div id="tag27549" onclick="CopyToClipboard('tag27549');return false;" class="tag-decoration">testing</div><div id="tag31832" onclick="CopyToClipboard('tag31832');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag3301" onclick="CopyToClipboard('tag3301');return false;" class="tag-decoration">testing-18f3ae3</div><div id="tag24987" onclick="CopyToClipboard('tag24987');return false;" class="tag-decoration">testing-v1</div><div id="tag29651" onclick="CopyToClipboard('tag29651');return false;" class="tag-decoration">testing-v1.8</div><div id="tag16169" onclick="CopyToClipboard('tag16169');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/18f3ae3150b33ce4d63a37874160c06b2a580e11" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20895139690" target="_blank">2026-01-11 12:28:45</a></td></tr>
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
