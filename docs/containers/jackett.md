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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17389" onclick="CopyToClipboard('tag17389');return false;" class="tag-decoration">release</div><div id="tag24266" onclick="CopyToClipboard('tag24266');return false;" class="tag-decoration">release-b630ff3</div><div id="tag9041" onclick="CopyToClipboard('tag9041');return false;" class="tag-decoration">release-0.24.2826</div><div id="tag354" onclick="CopyToClipboard('tag354');return false;" class="tag-decoration">release-v0</div><div id="tag30574" onclick="CopyToClipboard('tag30574');return false;" class="tag-decoration">release-v0.24</div><div id="tag12986" onclick="CopyToClipboard('tag12986');return false;" class="tag-decoration">release-v0.24.2826</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b630ff34be2b777c78f8c867b3970ee4591329bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38223537378" target="_blank">2026-10-12 08:26:01</a></td></tr>
<tr><td><div id="tag18658" onclick="CopyToClipboard('tag18658');return false;" class="tag-decoration">testing</div><div id="tag11620" onclick="CopyToClipboard('tag11620');return false;" class="tag-decoration">testing-8ada31d</div><div id="tag23284" onclick="CopyToClipboard('tag23284');return false;" class="tag-decoration">testing-0.24.2826</div><div id="tag4001" onclick="CopyToClipboard('tag4001');return false;" class="tag-decoration">testing-v0</div><div id="tag27779" onclick="CopyToClipboard('tag27779');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2737" onclick="CopyToClipboard('tag2737');return false;" class="tag-decoration">testing-v0.24.2826</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8ada31d50fa994a537ab536f6a6961796ee6cba5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38223556718" target="_blank">2026-10-12 08:26:13</a></td></tr>
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
