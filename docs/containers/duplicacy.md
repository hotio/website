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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26039" onclick="CopyToClipboard('tag26039');return false;" class="tag-decoration">release</div><div id="tag21675" onclick="CopyToClipboard('tag21675');return false;" class="tag-decoration">release-ed52507</div><div id="tag6403" onclick="CopyToClipboard('tag6403');return false;" class="tag-decoration">release-1.8.0</div><div id="tag5865" onclick="CopyToClipboard('tag5865');return false;" class="tag-decoration">release-v1</div><div id="tag8965" onclick="CopyToClipboard('tag8965');return false;" class="tag-decoration">release-v1.8</div><div id="tag13875" onclick="CopyToClipboard('tag13875');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/ed5250715d738e515047c0c61ac45d7d61ed2cc6" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21063275324" target="_blank">2026-01-16 10:16:57</a></td></tr>
<tr><td><div id="tag20695" onclick="CopyToClipboard('tag20695');return false;" class="tag-decoration">testing</div><div id="tag1281" onclick="CopyToClipboard('tag1281');return false;" class="tag-decoration">testing-285e7ef</div><div id="tag6039" onclick="CopyToClipboard('tag6039');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag30031" onclick="CopyToClipboard('tag30031');return false;" class="tag-decoration">testing-v1</div><div id="tag30882" onclick="CopyToClipboard('tag30882');return false;" class="tag-decoration">testing-v1.8</div><div id="tag31613" onclick="CopyToClipboard('tag31613');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/285e7efaf5e2ff52383dd8e9c1927d26ebeef187" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/21063276108" target="_blank">2026-01-16 10:16:58</a></td></tr>
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
