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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31139" onclick="CopyToClipboard('tag31139');return false;" class="tag-decoration">release</div><div id="tag30686" onclick="CopyToClipboard('tag30686');return false;" class="tag-decoration">release-80bafac</div><div id="tag833" onclick="CopyToClipboard('tag833');return false;" class="tag-decoration">release-0.24.1905</div><div id="tag6844" onclick="CopyToClipboard('tag6844');return false;" class="tag-decoration">release-v0</div><div id="tag28012" onclick="CopyToClipboard('tag28012');return false;" class="tag-decoration">release-v0.24</div><div id="tag10530" onclick="CopyToClipboard('tag10530');return false;" class="tag-decoration">release-v0.24.1905</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/80bafac9a97d537f1d5d7f50a778c05293f7d4b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26146074093" target="_blank">2026-05-20 06:42:26</a></td></tr>
<tr><td><div id="tag15236" onclick="CopyToClipboard('tag15236');return false;" class="tag-decoration">testing</div><div id="tag20770" onclick="CopyToClipboard('tag20770');return false;" class="tag-decoration">testing-2128173</div><div id="tag28838" onclick="CopyToClipboard('tag28838');return false;" class="tag-decoration">testing-0.24.1894</div><div id="tag3762" onclick="CopyToClipboard('tag3762');return false;" class="tag-decoration">testing-v0</div><div id="tag26042" onclick="CopyToClipboard('tag26042');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27001" onclick="CopyToClipboard('tag27001');return false;" class="tag-decoration">testing-v0.24.1894</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/21281734815ed8003928abae7f67439d0dbdc1e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26083297727" target="_blank">2026-05-19 07:38:16</a></td></tr>
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
