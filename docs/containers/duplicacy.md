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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7975" onclick="CopyToClipboard('tag7975');return false;" class="tag-decoration">release</div><div id="tag13748" onclick="CopyToClipboard('tag13748');return false;" class="tag-decoration">release-16ea05c</div><div id="tag23774" onclick="CopyToClipboard('tag23774');return false;" class="tag-decoration">release-1.8.3</div><div id="tag23800" onclick="CopyToClipboard('tag23800');return false;" class="tag-decoration">release-v1</div><div id="tag9050" onclick="CopyToClipboard('tag9050');return false;" class="tag-decoration">release-v1.8</div><div id="tag11217" onclick="CopyToClipboard('tag11217');return false;" class="tag-decoration">release-v1.8.3</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/16ea05c6d415a7a958ee4b30c8c867dbd82c141f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/39135113312" target="_blank">2026-10-18 14:14:38</a></td></tr>
<tr><td><div id="tag1524" onclick="CopyToClipboard('tag1524');return false;" class="tag-decoration">testing</div><div id="tag29124" onclick="CopyToClipboard('tag29124');return false;" class="tag-decoration">testing-cc04b59</div><div id="tag12211" onclick="CopyToClipboard('tag12211');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag21109" onclick="CopyToClipboard('tag21109');return false;" class="tag-decoration">testing-v1</div><div id="tag3669" onclick="CopyToClipboard('tag3669');return false;" class="tag-decoration">testing-v1.8</div><div id="tag15093" onclick="CopyToClipboard('tag15093');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/cc04b590e40c6dff12609fa369d48baae2efb6a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/37559886737" target="_blank">2026-10-07 02:00:32</a></td></tr>
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
