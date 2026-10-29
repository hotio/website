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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28219" onclick="CopyToClipboard('tag28219');return false;" class="tag-decoration">release</div><div id="tag21963" onclick="CopyToClipboard('tag21963');return false;" class="tag-decoration">release-5ccb668</div><div id="tag3262" onclick="CopyToClipboard('tag3262');return false;" class="tag-decoration">release-0.24.2961</div><div id="tag24772" onclick="CopyToClipboard('tag24772');return false;" class="tag-decoration">release-v0</div><div id="tag2060" onclick="CopyToClipboard('tag2060');return false;" class="tag-decoration">release-v0.24</div><div id="tag4988" onclick="CopyToClipboard('tag4988');return false;" class="tag-decoration">release-v0.24.2961</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5ccb66821510589b4420274a4e3e51dbca16c4b6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40838224785" target="_blank">2026-10-29 07:52:23</a></td></tr>
<tr><td><div id="tag19448" onclick="CopyToClipboard('tag19448');return false;" class="tag-decoration">testing</div><div id="tag8360" onclick="CopyToClipboard('tag8360');return false;" class="tag-decoration">testing-41e40a9</div><div id="tag11920" onclick="CopyToClipboard('tag11920');return false;" class="tag-decoration">testing-0.24.2961</div><div id="tag2374" onclick="CopyToClipboard('tag2374');return false;" class="tag-decoration">testing-v0</div><div id="tag12325" onclick="CopyToClipboard('tag12325');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4226" onclick="CopyToClipboard('tag4226');return false;" class="tag-decoration">testing-v0.24.2961</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/41e40a9373efa99b12b8faa96c936e85b4d7f120" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40838225764" target="_blank">2026-10-29 07:52:25</a></td></tr>
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
