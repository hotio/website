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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29589" onclick="CopyToClipboard('tag29589');return false;" class="tag-decoration">release</div><div id="tag684" onclick="CopyToClipboard('tag684');return false;" class="tag-decoration">release-e521154</div><div id="tag17947" onclick="CopyToClipboard('tag17947');return false;" class="tag-decoration">release-0.24.1822</div><div id="tag2795" onclick="CopyToClipboard('tag2795');return false;" class="tag-decoration">release-v0</div><div id="tag21391" onclick="CopyToClipboard('tag21391');return false;" class="tag-decoration">release-v0.24</div><div id="tag31777" onclick="CopyToClipboard('tag31777');return false;" class="tag-decoration">release-v0.24.1822</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e521154c9a05e36db68b1573c39d152681ac6b09" target="_blank">Version update: 0.24.1816 => 0.24.1822</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25476925072" target="_blank">2026-05-07 04:59:21</a></td></tr>
<tr><td><div id="tag349" onclick="CopyToClipboard('tag349');return false;" class="tag-decoration">testing</div><div id="tag3869" onclick="CopyToClipboard('tag3869');return false;" class="tag-decoration">testing-16a4e0a</div><div id="tag3917" onclick="CopyToClipboard('tag3917');return false;" class="tag-decoration">testing-0.24.1816</div><div id="tag17352" onclick="CopyToClipboard('tag17352');return false;" class="tag-decoration">testing-v0</div><div id="tag19019" onclick="CopyToClipboard('tag19019');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28318" onclick="CopyToClipboard('tag28318');return false;" class="tag-decoration">testing-v0.24.1816</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/16a4e0a7bc11410ddfaec7517b194c54afb79806" target="_blank">Version update: 0.24.1815 => 0.24.1816</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25422631878" target="_blank">2026-05-06 07:39:45</a></td></tr>
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
