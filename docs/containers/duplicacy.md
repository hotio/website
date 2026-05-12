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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29535" onclick="CopyToClipboard('tag29535');return false;" class="tag-decoration">release</div><div id="tag9051" onclick="CopyToClipboard('tag9051');return false;" class="tag-decoration">release-b1f7611</div><div id="tag17548" onclick="CopyToClipboard('tag17548');return false;" class="tag-decoration">release-1.8.3</div><div id="tag7137" onclick="CopyToClipboard('tag7137');return false;" class="tag-decoration">release-v1</div><div id="tag5345" onclick="CopyToClipboard('tag5345');return false;" class="tag-decoration">release-v1.8</div><div id="tag13894" onclick="CopyToClipboard('tag13894');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/b1f7611dbc984b9ebaee22990414b76ec2deade0" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/25708362299" target="_blank">2026-05-12 01:50:45</a></td></tr>
<tr><td><div id="tag12284" onclick="CopyToClipboard('tag12284');return false;" class="tag-decoration">testing</div><div id="tag22171" onclick="CopyToClipboard('tag22171');return false;" class="tag-decoration">testing-0915821</div><div id="tag16107" onclick="CopyToClipboard('tag16107');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag7200" onclick="CopyToClipboard('tag7200');return false;" class="tag-decoration">testing-v1</div><div id="tag5251" onclick="CopyToClipboard('tag5251');return false;" class="tag-decoration">testing-v1.8</div><div id="tag5267" onclick="CopyToClipboard('tag5267');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/0915821ff083e7549c31cd5f635232ea98ff5d55" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/25707129544" target="_blank">2026-05-12 01:13:58</a></td></tr>
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
