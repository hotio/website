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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11200" onclick="CopyToClipboard('tag11200');return false;" class="tag-decoration">release</div><div id="tag2055" onclick="CopyToClipboard('tag2055');return false;" class="tag-decoration">release-4e4a800</div><div id="tag29972" onclick="CopyToClipboard('tag29972');return false;" class="tag-decoration">release-0.24.1795</div><div id="tag17499" onclick="CopyToClipboard('tag17499');return false;" class="tag-decoration">release-v0</div><div id="tag23922" onclick="CopyToClipboard('tag23922');return false;" class="tag-decoration">release-v0.24</div><div id="tag19378" onclick="CopyToClipboard('tag19378');return false;" class="tag-decoration">release-v0.24.1795</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4e4a8006af414af897b657196bc0adf20501cc16" target="_blank">Version update: 0.24.1789 => 0.24.1795</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25096282955" target="_blank">2026-04-29 07:26:53</a></td></tr>
<tr><td><div id="tag15143" onclick="CopyToClipboard('tag15143');return false;" class="tag-decoration">testing</div><div id="tag16282" onclick="CopyToClipboard('tag16282');return false;" class="tag-decoration">testing-4c483c1</div><div id="tag17614" onclick="CopyToClipboard('tag17614');return false;" class="tag-decoration">testing-0.24.1806</div><div id="tag9310" onclick="CopyToClipboard('tag9310');return false;" class="tag-decoration">testing-v0</div><div id="tag14552" onclick="CopyToClipboard('tag14552');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7027" onclick="CopyToClipboard('tag7027');return false;" class="tag-decoration">testing-v0.24.1806</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4c483c17510cd1f216b7c22b5b1409c8b4c86329" target="_blank">Version update: 0.24.1795 => 0.24.1806</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25153273789" target="_blank">2026-04-30 07:34:06</a></td></tr>
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
