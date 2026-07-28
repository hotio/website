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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17183" onclick="CopyToClipboard('tag17183');return false;" class="tag-decoration">release</div><div id="tag25601" onclick="CopyToClipboard('tag25601');return false;" class="tag-decoration">release-7fa8052</div><div id="tag17711" onclick="CopyToClipboard('tag17711');return false;" class="tag-decoration">release-1.8.3</div><div id="tag10710" onclick="CopyToClipboard('tag10710');return false;" class="tag-decoration">release-v1</div><div id="tag19419" onclick="CopyToClipboard('tag19419');return false;" class="tag-decoration">release-v1.8</div><div id="tag5265" onclick="CopyToClipboard('tag5265');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/7fa805279594969a13620128dd3c2b33ced04f2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/30376381010" target="_blank">2026-07-28 16:03:01</a></td></tr>
<tr><td><div id="tag18613" onclick="CopyToClipboard('tag18613');return false;" class="tag-decoration">testing</div><div id="tag17292" onclick="CopyToClipboard('tag17292');return false;" class="tag-decoration">testing-1367923</div><div id="tag27683" onclick="CopyToClipboard('tag27683');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag20779" onclick="CopyToClipboard('tag20779');return false;" class="tag-decoration">testing-v1</div><div id="tag4436" onclick="CopyToClipboard('tag4436');return false;" class="tag-decoration">testing-v1.8</div><div id="tag672" onclick="CopyToClipboard('tag672');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/13679230ba2027c68e2f411741bfbcd8f2b57cf0" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/29681075435" target="_blank">2026-07-19 09:09:19</a></td></tr>
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
