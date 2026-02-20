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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4588" onclick="CopyToClipboard('tag4588');return false;" class="tag-decoration">release</div><div id="tag29035" onclick="CopyToClipboard('tag29035');return false;" class="tag-decoration">release-7d1e8b9</div><div id="tag1561" onclick="CopyToClipboard('tag1561');return false;" class="tag-decoration">release-0.24.1167</div><div id="tag7935" onclick="CopyToClipboard('tag7935');return false;" class="tag-decoration">release-v0</div><div id="tag1204" onclick="CopyToClipboard('tag1204');return false;" class="tag-decoration">release-v0.24</div><div id="tag2308" onclick="CopyToClipboard('tag2308');return false;" class="tag-decoration">release-v0.24.1167</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7d1e8b9699e820964b181c539ac47b96090f462c" target="_blank">Version update: 0.24.1157 => 0.24.1167</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22213331646" target="_blank">2026-02-20 06:01:57</a></td></tr>
<tr><td><div id="tag15393" onclick="CopyToClipboard('tag15393');return false;" class="tag-decoration">testing</div><div id="tag23567" onclick="CopyToClipboard('tag23567');return false;" class="tag-decoration">testing-73d9dfa</div><div id="tag13550" onclick="CopyToClipboard('tag13550');return false;" class="tag-decoration">testing-0.24.1167</div><div id="tag23804" onclick="CopyToClipboard('tag23804');return false;" class="tag-decoration">testing-v0</div><div id="tag7777" onclick="CopyToClipboard('tag7777');return false;" class="tag-decoration">testing-v0.24</div><div id="tag26822" onclick="CopyToClipboard('tag26822');return false;" class="tag-decoration">testing-v0.24.1167</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/73d9dfac675aec4a0477c0f467479f0e2c90d329" target="_blank">Version update: 0.24.1157 => 0.24.1167</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22213332011" target="_blank">2026-02-20 06:01:59</a></td></tr>
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
