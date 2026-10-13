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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18675" onclick="CopyToClipboard('tag18675');return false;" class="tag-decoration">release</div><div id="tag13300" onclick="CopyToClipboard('tag13300');return false;" class="tag-decoration">release-8721635</div><div id="tag24634" onclick="CopyToClipboard('tag24634');return false;" class="tag-decoration">release-0.24.2830</div><div id="tag22128" onclick="CopyToClipboard('tag22128');return false;" class="tag-decoration">release-v0</div><div id="tag30755" onclick="CopyToClipboard('tag30755');return false;" class="tag-decoration">release-v0.24</div><div id="tag31923" onclick="CopyToClipboard('tag31923');return false;" class="tag-decoration">release-v0.24.2830</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/87216352342d71530b67cab8d34b82242fe56664" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38371417910" target="_blank">2026-10-13 08:45:06</a></td></tr>
<tr><td><div id="tag26630" onclick="CopyToClipboard('tag26630');return false;" class="tag-decoration">testing</div><div id="tag16958" onclick="CopyToClipboard('tag16958');return false;" class="tag-decoration">testing-14c3a5e</div><div id="tag23414" onclick="CopyToClipboard('tag23414');return false;" class="tag-decoration">testing-0.24.2830</div><div id="tag27898" onclick="CopyToClipboard('tag27898');return false;" class="tag-decoration">testing-v0</div><div id="tag11792" onclick="CopyToClipboard('tag11792');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10160" onclick="CopyToClipboard('tag10160');return false;" class="tag-decoration">testing-v0.24.2830</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/14c3a5e756cff653ac2f52d77d14e999c4e5dc5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38371426361" target="_blank">2026-10-13 08:45:11</a></td></tr>
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
