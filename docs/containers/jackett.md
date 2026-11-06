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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27771" onclick="CopyToClipboard('tag27771');return false;" class="tag-decoration">release</div><div id="tag25904" onclick="CopyToClipboard('tag25904');return false;" class="tag-decoration">release-12782fa</div><div id="tag10594" onclick="CopyToClipboard('tag10594');return false;" class="tag-decoration">release-0.24.3021</div><div id="tag27" onclick="CopyToClipboard('tag27');return false;" class="tag-decoration">release-v0</div><div id="tag30458" onclick="CopyToClipboard('tag30458');return false;" class="tag-decoration">release-v0.24</div><div id="tag24056" onclick="CopyToClipboard('tag24056');return false;" class="tag-decoration">release-v0.24.3021</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/12782fa4fa97e3478f225878797dd486c46294f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42305744413" target="_blank">2026-11-06 22:34:25</a></td></tr>
<tr><td><div id="tag20334" onclick="CopyToClipboard('tag20334');return false;" class="tag-decoration">testing</div><div id="tag5423" onclick="CopyToClipboard('tag5423');return false;" class="tag-decoration">testing-6288b0e</div><div id="tag22377" onclick="CopyToClipboard('tag22377');return false;" class="tag-decoration">testing-0.24.3021</div><div id="tag9480" onclick="CopyToClipboard('tag9480');return false;" class="tag-decoration">testing-v0</div><div id="tag24533" onclick="CopyToClipboard('tag24533');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15730" onclick="CopyToClipboard('tag15730');return false;" class="tag-decoration">testing-v0.24.3021</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6288b0e75001881e9ef14164e090b657d067ea35" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42305735707" target="_blank">2026-11-06 22:34:20</a></td></tr>
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
