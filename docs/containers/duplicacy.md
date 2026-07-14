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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7774" onclick="CopyToClipboard('tag7774');return false;" class="tag-decoration">release</div><div id="tag19334" onclick="CopyToClipboard('tag19334');return false;" class="tag-decoration">release-81aad75</div><div id="tag10955" onclick="CopyToClipboard('tag10955');return false;" class="tag-decoration">release-1.8.3</div><div id="tag30942" onclick="CopyToClipboard('tag30942');return false;" class="tag-decoration">release-v1</div><div id="tag24658" onclick="CopyToClipboard('tag24658');return false;" class="tag-decoration">release-v1.8</div><div id="tag3477" onclick="CopyToClipboard('tag3477');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/81aad75e05236e9bd0fe99cc35d393eebe7e1eaa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/29308469154" target="_blank">2026-07-14 05:24:50</a></td></tr>
<tr><td><div id="tag27795" onclick="CopyToClipboard('tag27795');return false;" class="tag-decoration">testing</div><div id="tag2107" onclick="CopyToClipboard('tag2107');return false;" class="tag-decoration">testing-0b6c6b8</div><div id="tag7919" onclick="CopyToClipboard('tag7919');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag24205" onclick="CopyToClipboard('tag24205');return false;" class="tag-decoration">testing-v1</div><div id="tag16784" onclick="CopyToClipboard('tag16784');return false;" class="tag-decoration">testing-v1.8</div><div id="tag9893" onclick="CopyToClipboard('tag9893');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/0b6c6b8ac1e78486ce72e7ee926c3b36288311bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/29316164433" target="_blank">2026-07-14 07:54:43</a></td></tr>
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
