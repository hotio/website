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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17212" onclick="CopyToClipboard('tag17212');return false;" class="tag-decoration">release</div><div id="tag540" onclick="CopyToClipboard('tag540');return false;" class="tag-decoration">release-fa10d8e</div><div id="tag26645" onclick="CopyToClipboard('tag26645');return false;" class="tag-decoration">release-1.8.3</div><div id="tag6620" onclick="CopyToClipboard('tag6620');return false;" class="tag-decoration">release-v1</div><div id="tag852" onclick="CopyToClipboard('tag852');return false;" class="tag-decoration">release-v1.8</div><div id="tag11218" onclick="CopyToClipboard('tag11218');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/fa10d8e056bd0815d2e97eadea9640ee103a480b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/36761052880" target="_blank">2026-09-30 18:47:03</a></td></tr>
<tr><td><div id="tag22768" onclick="CopyToClipboard('tag22768');return false;" class="tag-decoration">testing</div><div id="tag9118" onclick="CopyToClipboard('tag9118');return false;" class="tag-decoration">testing-a2ea4d9</div><div id="tag3740" onclick="CopyToClipboard('tag3740');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag5200" onclick="CopyToClipboard('tag5200');return false;" class="tag-decoration">testing-v1</div><div id="tag22066" onclick="CopyToClipboard('tag22066');return false;" class="tag-decoration">testing-v1.8</div><div id="tag15621" onclick="CopyToClipboard('tag15621');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/a2ea4d90520513e1edc27ee905e0c3705507990f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/36924315391" target="_blank">2026-10-01 20:48:48</a></td></tr>
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
