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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3196" onclick="CopyToClipboard('tag3196');return false;" class="tag-decoration">release</div><div id="tag23428" onclick="CopyToClipboard('tag23428');return false;" class="tag-decoration">release-1.8.0</div><div id="tag2652" onclick="CopyToClipboard('tag2652');return false;" class="tag-decoration">release-1b164c8</div><div id="tag9659" onclick="CopyToClipboard('tag9659');return false;" class="tag-decoration">release-v1</div><div id="tag12927" onclick="CopyToClipboard('tag12927');return false;" class="tag-decoration">release-v1.8</div><div id="tag13371" onclick="CopyToClipboard('tag13371');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/1b164c8e7f2602730d5de88592cf979520bcdb23" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20844844174" target="_blank">2026-01-09 07:41:23</a></td></tr>
<tr><td><div id="tag19904" onclick="CopyToClipboard('tag19904');return false;" class="tag-decoration">testing</div><div id="tag20013" onclick="CopyToClipboard('tag20013');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag20688" onclick="CopyToClipboard('tag20688');return false;" class="tag-decoration">testing-016d603</div><div id="tag8584" onclick="CopyToClipboard('tag8584');return false;" class="tag-decoration">testing-v1</div><div id="tag5066" onclick="CopyToClipboard('tag5066');return false;" class="tag-decoration">testing-v1.8</div><div id="tag25967" onclick="CopyToClipboard('tag25967');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/016d6032486b4cddda3bd2e9529cdebaa7146aff" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20844831547" target="_blank">2026-01-09 07:40:44</a></td></tr>
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
