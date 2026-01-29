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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26231" onclick="CopyToClipboard('tag26231');return false;" class="tag-decoration">release</div><div id="tag15629" onclick="CopyToClipboard('tag15629');return false;" class="tag-decoration">release-ffd0e21</div><div id="tag94" onclick="CopyToClipboard('tag94');return false;" class="tag-decoration">release-0.24.980</div><div id="tag562" onclick="CopyToClipboard('tag562');return false;" class="tag-decoration">release-v0</div><div id="tag1035" onclick="CopyToClipboard('tag1035');return false;" class="tag-decoration">release-v0.24</div><div id="tag1037" onclick="CopyToClipboard('tag1037');return false;" class="tag-decoration">release-v0.24.980</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ffd0e21cc22f1ad67db9ad93b1e8ca0a16573f69" target="_blank">Version update: 0.24.957 => 0.24.980</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21466928638" target="_blank">2026-01-29 05:32:58</a></td></tr>
<tr><td><div id="tag2163" onclick="CopyToClipboard('tag2163');return false;" class="tag-decoration">testing</div><div id="tag26313" onclick="CopyToClipboard('tag26313');return false;" class="tag-decoration">testing-7421196</div><div id="tag24705" onclick="CopyToClipboard('tag24705');return false;" class="tag-decoration">testing-0.24.957</div><div id="tag20501" onclick="CopyToClipboard('tag20501');return false;" class="tag-decoration">testing-v0</div><div id="tag9224" onclick="CopyToClipboard('tag9224');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2918" onclick="CopyToClipboard('tag2918');return false;" class="tag-decoration">testing-v0.24.957</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7421196df5ce6f5028d17e3df535065fd710dccb" target="_blank">Version update: 0.24.955 => 0.24.957</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21443498938" target="_blank">2026-01-28 15:05:00</a></td></tr>
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
