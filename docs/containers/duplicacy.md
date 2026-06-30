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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29831" onclick="CopyToClipboard('tag29831');return false;" class="tag-decoration">release</div><div id="tag24291" onclick="CopyToClipboard('tag24291');return false;" class="tag-decoration">release-d9b3c40</div><div id="tag3926" onclick="CopyToClipboard('tag3926');return false;" class="tag-decoration">release-1.8.3</div><div id="tag25407" onclick="CopyToClipboard('tag25407');return false;" class="tag-decoration">release-v1</div><div id="tag26111" onclick="CopyToClipboard('tag26111');return false;" class="tag-decoration">release-v1.8</div><div id="tag26885" onclick="CopyToClipboard('tag26885');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/d9b3c4032d7ae1ae6087eef54254b87b699d8363" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/28441657272" target="_blank">2026-06-30 11:42:09</a></td></tr>
<tr><td><div id="tag16383" onclick="CopyToClipboard('tag16383');return false;" class="tag-decoration">testing</div><div id="tag13475" onclick="CopyToClipboard('tag13475');return false;" class="tag-decoration">testing-16833b1</div><div id="tag28855" onclick="CopyToClipboard('tag28855');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag16295" onclick="CopyToClipboard('tag16295');return false;" class="tag-decoration">testing-v1</div><div id="tag29618" onclick="CopyToClipboard('tag29618');return false;" class="tag-decoration">testing-v1.8</div><div id="tag18289" onclick="CopyToClipboard('tag18289');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/16833b13ba8ed98322e9215276739797f9add3e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/28441654845" target="_blank">2026-06-30 11:42:06</a></td></tr>
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
