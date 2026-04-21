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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25550" onclick="CopyToClipboard('tag25550');return false;" class="tag-decoration">release</div><div id="tag8697" onclick="CopyToClipboard('tag8697');return false;" class="tag-decoration">release-b5d280a</div><div id="tag16447" onclick="CopyToClipboard('tag16447');return false;" class="tag-decoration">release-0.24.1641</div><div id="tag5931" onclick="CopyToClipboard('tag5931');return false;" class="tag-decoration">release-v0</div><div id="tag18142" onclick="CopyToClipboard('tag18142');return false;" class="tag-decoration">release-v0.24</div><div id="tag26542" onclick="CopyToClipboard('tag26542');return false;" class="tag-decoration">release-v0.24.1641</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b5d280ae7b7626ed38efc372718f0388b1782099" target="_blank">Version update: 0.24.1632 => 0.24.1641</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24709282121" target="_blank">2026-04-21 07:14:48</a></td></tr>
<tr><td><div id="tag12935" onclick="CopyToClipboard('tag12935');return false;" class="tag-decoration">testing</div><div id="tag10781" onclick="CopyToClipboard('tag10781');return false;" class="tag-decoration">testing-a35f25c</div><div id="tag22869" onclick="CopyToClipboard('tag22869');return false;" class="tag-decoration">testing-0.24.1632</div><div id="tag9978" onclick="CopyToClipboard('tag9978');return false;" class="tag-decoration">testing-v0</div><div id="tag7494" onclick="CopyToClipboard('tag7494');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24336" onclick="CopyToClipboard('tag24336');return false;" class="tag-decoration">testing-v0.24.1632</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a35f25cbee48c41cc6bfeb63025ce5b44e9ae185" target="_blank">Version update: 0.24.1622 => 0.24.1632</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24650994783" target="_blank">2026-04-20 06:01:31</a></td></tr>
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
