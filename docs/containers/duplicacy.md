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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20103" onclick="CopyToClipboard('tag20103');return false;" class="tag-decoration">release</div><div id="tag19082" onclick="CopyToClipboard('tag19082');return false;" class="tag-decoration">release-79cb0c3</div><div id="tag6205" onclick="CopyToClipboard('tag6205');return false;" class="tag-decoration">release-1.8.0</div><div id="tag29071" onclick="CopyToClipboard('tag29071');return false;" class="tag-decoration">release-v1</div><div id="tag10223" onclick="CopyToClipboard('tag10223');return false;" class="tag-decoration">release-v1.8</div><div id="tag9726" onclick="CopyToClipboard('tag9726');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/79cb0c304a2d375e998025f1fc21936ca9f4d1c2" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21064888302" target="_blank">2026-01-16 11:18:09</a></td></tr>
<tr><td><div id="tag30809" onclick="CopyToClipboard('tag30809');return false;" class="tag-decoration">testing</div><div id="tag27843" onclick="CopyToClipboard('tag27843');return false;" class="tag-decoration">testing-96af544</div><div id="tag31110" onclick="CopyToClipboard('tag31110');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag19287" onclick="CopyToClipboard('tag19287');return false;" class="tag-decoration">testing-v1</div><div id="tag13244" onclick="CopyToClipboard('tag13244');return false;" class="tag-decoration">testing-v1.8</div><div id="tag11755" onclick="CopyToClipboard('tag11755');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/96af544f6d501101aac582d4338225d0d0c4ddf5" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21065725488" target="_blank">2026-01-16 11:52:18</a></td></tr>
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
