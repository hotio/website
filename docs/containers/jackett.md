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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3237" onclick="CopyToClipboard('tag3237');return false;" class="tag-decoration">release</div><div id="tag6372" onclick="CopyToClipboard('tag6372');return false;" class="tag-decoration">release-1e3890b</div><div id="tag26729" onclick="CopyToClipboard('tag26729');return false;" class="tag-decoration">release-0.24.2793</div><div id="tag17832" onclick="CopyToClipboard('tag17832');return false;" class="tag-decoration">release-v0</div><div id="tag11558" onclick="CopyToClipboard('tag11558');return false;" class="tag-decoration">release-v0.24</div><div id="tag13955" onclick="CopyToClipboard('tag13955');return false;" class="tag-decoration">release-v0.24.2793</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1e3890b317a6969bba8c7ea70da9264d8c256c7d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37300266391" target="_blank">2026-10-05 11:01:21</a></td></tr>
<tr><td><div id="tag17754" onclick="CopyToClipboard('tag17754');return false;" class="tag-decoration">testing</div><div id="tag24562" onclick="CopyToClipboard('tag24562');return false;" class="tag-decoration">testing-23ccc02</div><div id="tag29203" onclick="CopyToClipboard('tag29203');return false;" class="tag-decoration">testing-0.24.2793</div><div id="tag23206" onclick="CopyToClipboard('tag23206');return false;" class="tag-decoration">testing-v0</div><div id="tag17673" onclick="CopyToClipboard('tag17673');return false;" class="tag-decoration">testing-v0.24</div><div id="tag709" onclick="CopyToClipboard('tag709');return false;" class="tag-decoration">testing-v0.24.2793</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/23ccc021368fd5a1826b887e005e8954f5df3cce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37300276797" target="_blank">2026-10-05 11:01:27</a></td></tr>
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
