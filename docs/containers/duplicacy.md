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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27195" onclick="CopyToClipboard('tag27195');return false;" class="tag-decoration">release</div><div id="tag14161" onclick="CopyToClipboard('tag14161');return false;" class="tag-decoration">release-04ddd63</div><div id="tag28176" onclick="CopyToClipboard('tag28176');return false;" class="tag-decoration">release-1.8.0</div><div id="tag15438" onclick="CopyToClipboard('tag15438');return false;" class="tag-decoration">release-v1</div><div id="tag21713" onclick="CopyToClipboard('tag21713');return false;" class="tag-decoration">release-v1.8</div><div id="tag27290" onclick="CopyToClipboard('tag27290');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/04ddd639e0e58f24bc3a9d8f14ad945412aab413" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21244685079" target="_blank">2026-01-22 10:18:40</a></td></tr>
<tr><td><div id="tag11853" onclick="CopyToClipboard('tag11853');return false;" class="tag-decoration">testing</div><div id="tag9955" onclick="CopyToClipboard('tag9955');return false;" class="tag-decoration">testing-86ce89c</div><div id="tag2563" onclick="CopyToClipboard('tag2563');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag32289" onclick="CopyToClipboard('tag32289');return false;" class="tag-decoration">testing-v1</div><div id="tag2050" onclick="CopyToClipboard('tag2050');return false;" class="tag-decoration">testing-v1.8</div><div id="tag13208" onclick="CopyToClipboard('tag13208');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/86ce89c2b7834ce6a01a32daad0b42a13cb548e4" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21244686061" target="_blank">2026-01-22 10:18:42</a></td></tr>
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
