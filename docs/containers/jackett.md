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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6761" onclick="CopyToClipboard('tag6761');return false;" class="tag-decoration">release</div><div id="tag13743" onclick="CopyToClipboard('tag13743');return false;" class="tag-decoration">release-9b834f6</div><div id="tag28867" onclick="CopyToClipboard('tag28867');return false;" class="tag-decoration">release-0.24.2451</div><div id="tag7463" onclick="CopyToClipboard('tag7463');return false;" class="tag-decoration">release-v0</div><div id="tag15660" onclick="CopyToClipboard('tag15660');return false;" class="tag-decoration">release-v0.24</div><div id="tag32753" onclick="CopyToClipboard('tag32753');return false;" class="tag-decoration">release-v0.24.2451</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9b834f65909c65ce5aacc29ddc773139e5ef3f1b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32622920019" target="_blank">2026-08-23 06:26:10</a></td></tr>
<tr><td><div id="tag19321" onclick="CopyToClipboard('tag19321');return false;" class="tag-decoration">testing</div><div id="tag16426" onclick="CopyToClipboard('tag16426');return false;" class="tag-decoration">testing-5dc74fd</div><div id="tag10181" onclick="CopyToClipboard('tag10181');return false;" class="tag-decoration">testing-0.24.2451</div><div id="tag30726" onclick="CopyToClipboard('tag30726');return false;" class="tag-decoration">testing-v0</div><div id="tag5893" onclick="CopyToClipboard('tag5893');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24243" onclick="CopyToClipboard('tag24243');return false;" class="tag-decoration">testing-v0.24.2451</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5dc74fd1d92e70f3d5f40ba6ff7e98b930104917" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32622919849" target="_blank">2026-08-23 06:26:10</a></td></tr>
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
