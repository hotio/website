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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5514" onclick="CopyToClipboard('tag5514');return false;" class="tag-decoration">release</div><div id="tag28483" onclick="CopyToClipboard('tag28483');return false;" class="tag-decoration">release-1.8.0</div><div id="tag3991" onclick="CopyToClipboard('tag3991');return false;" class="tag-decoration">release-c67dcd3</div><div id="tag5052" onclick="CopyToClipboard('tag5052');return false;" class="tag-decoration">release-v1</div><div id="tag16245" onclick="CopyToClipboard('tag16245');return false;" class="tag-decoration">release-v1.8</div><div id="tag30575" onclick="CopyToClipboard('tag30575');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/c67dcd37819faec3a4d549449aaddd6847e9c8a5" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20842468890" target="_blank">2026-01-09 05:40:35</a></td></tr>
<tr><td><div id="tag7189" onclick="CopyToClipboard('tag7189');return false;" class="tag-decoration">testing</div><div id="tag10139" onclick="CopyToClipboard('tag10139');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag23261" onclick="CopyToClipboard('tag23261');return false;" class="tag-decoration">testing-94990da</div><div id="tag3769" onclick="CopyToClipboard('tag3769');return false;" class="tag-decoration">testing-v1</div><div id="tag31311" onclick="CopyToClipboard('tag31311');return false;" class="tag-decoration">testing-v1.8</div><div id="tag24328" onclick="CopyToClipboard('tag24328');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/94990da86f6250f8b99f3b9f6fa8862b6b8c4d26" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20770098089" target="_blank">2026-01-07 03:57:17</a></td></tr>
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
