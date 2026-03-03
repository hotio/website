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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31280" onclick="CopyToClipboard('tag31280');return false;" class="tag-decoration">release</div><div id="tag25553" onclick="CopyToClipboard('tag25553');return false;" class="tag-decoration">release-ef2771b</div><div id="tag15799" onclick="CopyToClipboard('tag15799');return false;" class="tag-decoration">release-0.24.1261</div><div id="tag470" onclick="CopyToClipboard('tag470');return false;" class="tag-decoration">release-v0</div><div id="tag15255" onclick="CopyToClipboard('tag15255');return false;" class="tag-decoration">release-v0.24</div><div id="tag31197" onclick="CopyToClipboard('tag31197');return false;" class="tag-decoration">release-v0.24.1261</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ef2771b93532edbc608acbeb77e193ea918c387d" target="_blank">Version update: 0.24.1247 => 0.24.1261</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22610456774" target="_blank">2026-03-03 05:58:19</a></td></tr>
<tr><td><div id="tag1124" onclick="CopyToClipboard('tag1124');return false;" class="tag-decoration">testing</div><div id="tag1370" onclick="CopyToClipboard('tag1370');return false;" class="tag-decoration">testing-01a1e16</div><div id="tag30586" onclick="CopyToClipboard('tag30586');return false;" class="tag-decoration">testing-0.24.1247</div><div id="tag15729" onclick="CopyToClipboard('tag15729');return false;" class="tag-decoration">testing-v0</div><div id="tag19568" onclick="CopyToClipboard('tag19568');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15836" onclick="CopyToClipboard('tag15836');return false;" class="tag-decoration">testing-v0.24.1247</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/01a1e166d8834cda5450453d719066262f4ee29a" target="_blank">Version update: 0.24.1234 => 0.24.1247</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22564455649" target="_blank">2026-03-02 06:38:04</a></td></tr>
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
