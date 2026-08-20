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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3562" onclick="CopyToClipboard('tag3562');return false;" class="tag-decoration">release</div><div id="tag22347" onclick="CopyToClipboard('tag22347');return false;" class="tag-decoration">release-f733c26</div><div id="tag14256" onclick="CopyToClipboard('tag14256');return false;" class="tag-decoration">release-0.24.2419</div><div id="tag1902" onclick="CopyToClipboard('tag1902');return false;" class="tag-decoration">release-v0</div><div id="tag3034" onclick="CopyToClipboard('tag3034');return false;" class="tag-decoration">release-v0.24</div><div id="tag28305" onclick="CopyToClipboard('tag28305');return false;" class="tag-decoration">release-v0.24.2419</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f733c26ddbb473c4278d7fb1a9fe9037325e233c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32329005490" target="_blank">2026-08-20 03:39:14</a></td></tr>
<tr><td><div id="tag10024" onclick="CopyToClipboard('tag10024');return false;" class="tag-decoration">testing</div><div id="tag6227" onclick="CopyToClipboard('tag6227');return false;" class="tag-decoration">testing-1e7c39c</div><div id="tag25565" onclick="CopyToClipboard('tag25565');return false;" class="tag-decoration">testing-0.24.2419</div><div id="tag11753" onclick="CopyToClipboard('tag11753');return false;" class="tag-decoration">testing-v0</div><div id="tag31412" onclick="CopyToClipboard('tag31412');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30197" onclick="CopyToClipboard('tag30197');return false;" class="tag-decoration">testing-v0.24.2419</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1e7c39ca3414941f51124de1c34e21288700c316" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32329009708" target="_blank">2026-08-20 03:39:19</a></td></tr>
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
