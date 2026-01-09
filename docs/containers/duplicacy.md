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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18940" onclick="CopyToClipboard('tag18940');return false;" class="tag-decoration">release</div><div id="tag31226" onclick="CopyToClipboard('tag31226');return false;" class="tag-decoration">release-1.8.0</div><div id="tag13341" onclick="CopyToClipboard('tag13341');return false;" class="tag-decoration">release-0013b19</div><div id="tag31330" onclick="CopyToClipboard('tag31330');return false;" class="tag-decoration">release-v1</div><div id="tag5873" onclick="CopyToClipboard('tag5873');return false;" class="tag-decoration">release-v1.8</div><div id="tag18883" onclick="CopyToClipboard('tag18883');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/0013b1944906ae8659a71766c2b98db36bdf2358" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20850330144" target="_blank">2026-01-09 11:22:39</a></td></tr>
<tr><td><div id="tag19896" onclick="CopyToClipboard('tag19896');return false;" class="tag-decoration">testing</div><div id="tag21396" onclick="CopyToClipboard('tag21396');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag27041" onclick="CopyToClipboard('tag27041');return false;" class="tag-decoration">testing-03bd788</div><div id="tag16996" onclick="CopyToClipboard('tag16996');return false;" class="tag-decoration">testing-v1</div><div id="tag24750" onclick="CopyToClipboard('tag24750');return false;" class="tag-decoration">testing-v1.8</div><div id="tag26607" onclick="CopyToClipboard('tag26607');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/03bd788edd2caf720e8e4aa95a17455e0e7f7d04" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20850330423" target="_blank">2026-01-09 11:22:41</a></td></tr>
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
