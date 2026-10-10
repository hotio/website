---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31866" onclick="CopyToClipboard('tag31866');return false;" class="tag-decoration">release</div><div id="tag8207" onclick="CopyToClipboard('tag8207');return false;" class="tag-decoration">release-af190fe</div><div id="tag27404" onclick="CopyToClipboard('tag27404');return false;" class="tag-decoration">release-0.24.2813</div><div id="tag29618" onclick="CopyToClipboard('tag29618');return false;" class="tag-decoration">release-v0</div><div id="tag19964" onclick="CopyToClipboard('tag19964');return false;" class="tag-decoration">release-v0.24</div><div id="tag7997" onclick="CopyToClipboard('tag7997');return false;" class="tag-decoration">release-v0.24.2813</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/af190fe65f2d11796bed35640ef554f387fd7319" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38044434880" target="_blank">2026-10-10 10:18:16</a></td></tr>
<tr><td><div id="tag27567" onclick="CopyToClipboard('tag27567');return false;" class="tag-decoration">testing</div><div id="tag1076" onclick="CopyToClipboard('tag1076');return false;" class="tag-decoration">testing-b794e89</div><div id="tag13095" onclick="CopyToClipboard('tag13095');return false;" class="tag-decoration">testing-0.24.2813</div><div id="tag19118" onclick="CopyToClipboard('tag19118');return false;" class="tag-decoration">testing-v0</div><div id="tag17512" onclick="CopyToClipboard('tag17512');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15606" onclick="CopyToClipboard('tag15606');return false;" class="tag-decoration">testing-v0.24.2813</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b794e891d2e7887df27ade13564d839aef606a95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38044431765" target="_blank">2026-10-10 10:18:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
