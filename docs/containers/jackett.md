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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21930" onclick="CopyToClipboard('tag21930');return false;" class="tag-decoration">release</div><div id="tag203" onclick="CopyToClipboard('tag203');return false;" class="tag-decoration">release-fcca691</div><div id="tag29101" onclick="CopyToClipboard('tag29101');return false;" class="tag-decoration">release-0.24.1806</div><div id="tag24882" onclick="CopyToClipboard('tag24882');return false;" class="tag-decoration">release-v0</div><div id="tag3094" onclick="CopyToClipboard('tag3094');return false;" class="tag-decoration">release-v0.24</div><div id="tag16276" onclick="CopyToClipboard('tag16276');return false;" class="tag-decoration">release-v0.24.1806</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fcca69127df8b3010f8baf657916325533b4ea05" target="_blank">Version update: 0.24.1795 => 0.24.1806</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25153272715" target="_blank">2026-04-30 07:34:04</a></td></tr>
<tr><td><div id="tag12089" onclick="CopyToClipboard('tag12089');return false;" class="tag-decoration">testing</div><div id="tag13854" onclick="CopyToClipboard('tag13854');return false;" class="tag-decoration">testing-4c483c1</div><div id="tag2594" onclick="CopyToClipboard('tag2594');return false;" class="tag-decoration">testing-0.24.1806</div><div id="tag16367" onclick="CopyToClipboard('tag16367');return false;" class="tag-decoration">testing-v0</div><div id="tag22505" onclick="CopyToClipboard('tag22505');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22214" onclick="CopyToClipboard('tag22214');return false;" class="tag-decoration">testing-v0.24.1806</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4c483c17510cd1f216b7c22b5b1409c8b4c86329" target="_blank">Version update: 0.24.1795 => 0.24.1806</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25153273789" target="_blank">2026-04-30 07:34:06</a></td></tr>
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
