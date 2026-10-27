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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26733" onclick="CopyToClipboard('tag26733');return false;" class="tag-decoration">release</div><div id="tag21182" onclick="CopyToClipboard('tag21182');return false;" class="tag-decoration">release-41edbf5</div><div id="tag21514" onclick="CopyToClipboard('tag21514');return false;" class="tag-decoration">release-0.24.2934</div><div id="tag32097" onclick="CopyToClipboard('tag32097');return false;" class="tag-decoration">release-v0</div><div id="tag31610" onclick="CopyToClipboard('tag31610');return false;" class="tag-decoration">release-v0.24</div><div id="tag11753" onclick="CopyToClipboard('tag11753');return false;" class="tag-decoration">release-v0.24.2934</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/41edbf565c2ef0403598b9ee9986e0bd12aa1aa7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40566226065" target="_blank">2026-10-27 19:07:20</a></td></tr>
<tr><td><div id="tag22484" onclick="CopyToClipboard('tag22484');return false;" class="tag-decoration">testing</div><div id="tag1128" onclick="CopyToClipboard('tag1128');return false;" class="tag-decoration">testing-56f9dd1</div><div id="tag7206" onclick="CopyToClipboard('tag7206');return false;" class="tag-decoration">testing-0.24.2934</div><div id="tag7201" onclick="CopyToClipboard('tag7201');return false;" class="tag-decoration">testing-v0</div><div id="tag25935" onclick="CopyToClipboard('tag25935');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28744" onclick="CopyToClipboard('tag28744');return false;" class="tag-decoration">testing-v0.24.2934</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/56f9dd101e2bfa003fbb6aedd25e076380ec0be5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40566230303" target="_blank">2026-10-27 19:07:21</a></td></tr>
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
