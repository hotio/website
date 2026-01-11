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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15804" onclick="CopyToClipboard('tag15804');return false;" class="tag-decoration">release</div><div id="tag7862" onclick="CopyToClipboard('tag7862');return false;" class="tag-decoration">release-1.8.0</div><div id="tag7298" onclick="CopyToClipboard('tag7298');return false;" class="tag-decoration">release-0aeae22</div><div id="tag6931" onclick="CopyToClipboard('tag6931');return false;" class="tag-decoration">release-v1</div><div id="tag1503" onclick="CopyToClipboard('tag1503');return false;" class="tag-decoration">release-v1.8</div><div id="tag22439" onclick="CopyToClipboard('tag22439');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/0aeae22a646e8d43eb5d3d89b59d0af9c67aa7d5" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20892084149" target="_blank">2026-01-11 08:19:23</a></td></tr>
<tr><td><div id="tag29825" onclick="CopyToClipboard('tag29825');return false;" class="tag-decoration">testing</div><div id="tag12760" onclick="CopyToClipboard('tag12760');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag6136" onclick="CopyToClipboard('tag6136');return false;" class="tag-decoration">testing-03bd788</div><div id="tag5234" onclick="CopyToClipboard('tag5234');return false;" class="tag-decoration">testing-v1</div><div id="tag23737" onclick="CopyToClipboard('tag23737');return false;" class="tag-decoration">testing-v1.8</div><div id="tag28940" onclick="CopyToClipboard('tag28940');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/03bd788edd2caf720e8e4aa95a17455e0e7f7d04" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20850330423" target="_blank">2026-01-09 11:22:41</a></td></tr>
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
