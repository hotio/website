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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14512" onclick="CopyToClipboard('tag14512');return false;" class="tag-decoration">release</div><div id="tag23310" onclick="CopyToClipboard('tag23310');return false;" class="tag-decoration">release-b29cf01</div><div id="tag7441" onclick="CopyToClipboard('tag7441');return false;" class="tag-decoration">release-0.24.2079</div><div id="tag31672" onclick="CopyToClipboard('tag31672');return false;" class="tag-decoration">release-v0</div><div id="tag6054" onclick="CopyToClipboard('tag6054');return false;" class="tag-decoration">release-v0.24</div><div id="tag12757" onclick="CopyToClipboard('tag12757');return false;" class="tag-decoration">release-v0.24.2079</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b29cf01fc372e693016970b60c1b6f188fe483fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27752233436" target="_blank">2026-06-18 10:08:22</a></td></tr>
<tr><td><div id="tag29897" onclick="CopyToClipboard('tag29897');return false;" class="tag-decoration">testing</div><div id="tag12425" onclick="CopyToClipboard('tag12425');return false;" class="tag-decoration">testing-635a54f</div><div id="tag10329" onclick="CopyToClipboard('tag10329');return false;" class="tag-decoration">testing-0.24.2080</div><div id="tag30841" onclick="CopyToClipboard('tag30841');return false;" class="tag-decoration">testing-v0</div><div id="tag25026" onclick="CopyToClipboard('tag25026');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29744" onclick="CopyToClipboard('tag29744');return false;" class="tag-decoration">testing-v0.24.2080</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/635a54fd8a6954907d997235c575b04bc441ba1a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27816129594" target="_blank">2026-06-19 09:00:03</a></td></tr>
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
