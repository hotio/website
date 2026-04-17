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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6932" onclick="CopyToClipboard('tag6932');return false;" class="tag-decoration">release</div><div id="tag28154" onclick="CopyToClipboard('tag28154');return false;" class="tag-decoration">release-1d1b108</div><div id="tag19479" onclick="CopyToClipboard('tag19479');return false;" class="tag-decoration">release-0.24.1608</div><div id="tag26987" onclick="CopyToClipboard('tag26987');return false;" class="tag-decoration">release-v0</div><div id="tag13169" onclick="CopyToClipboard('tag13169');return false;" class="tag-decoration">release-v0.24</div><div id="tag9162" onclick="CopyToClipboard('tag9162');return false;" class="tag-decoration">release-v0.24.1608</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1d1b1082741fa0f8c2b08af997a5c15f581a39f2" target="_blank">Version update: 0.24.1601 => 0.24.1608</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24498833146" target="_blank">2026-04-16 07:55:21</a></td></tr>
<tr><td><div id="tag7200" onclick="CopyToClipboard('tag7200');return false;" class="tag-decoration">testing</div><div id="tag6600" onclick="CopyToClipboard('tag6600');return false;" class="tag-decoration">testing-b96098e</div><div id="tag26342" onclick="CopyToClipboard('tag26342');return false;" class="tag-decoration">testing-0.24.1608</div><div id="tag14615" onclick="CopyToClipboard('tag14615');return false;" class="tag-decoration">testing-v0</div><div id="tag25655" onclick="CopyToClipboard('tag25655');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30140" onclick="CopyToClipboard('tag30140');return false;" class="tag-decoration">testing-v0.24.1608</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b96098eb337652d89b2337d3c139e4c4eb5b8922" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24552123968" target="_blank">2026-04-17 06:53:52</a></td></tr>
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
