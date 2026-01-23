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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27005" onclick="CopyToClipboard('tag27005');return false;" class="tag-decoration">release</div><div id="tag30603" onclick="CopyToClipboard('tag30603');return false;" class="tag-decoration">release-78296fc</div><div id="tag21419" onclick="CopyToClipboard('tag21419');return false;" class="tag-decoration">release-0.24.903</div><div id="tag20306" onclick="CopyToClipboard('tag20306');return false;" class="tag-decoration">release-v0</div><div id="tag2074" onclick="CopyToClipboard('tag2074');return false;" class="tag-decoration">release-v0.24</div><div id="tag9220" onclick="CopyToClipboard('tag9220');return false;" class="tag-decoration">release-v0.24.903</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/78296fc33c353e1904748d26c89ca6167d01e923" target="_blank">Version update: 0.24.900 => 0.24.903</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21276280297" target="_blank">2026-01-23 05:57:09</a></td></tr>
<tr><td><div id="tag8298" onclick="CopyToClipboard('tag8298');return false;" class="tag-decoration">testing</div><div id="tag32493" onclick="CopyToClipboard('tag32493');return false;" class="tag-decoration">testing-d4a8ab1</div><div id="tag31853" onclick="CopyToClipboard('tag31853');return false;" class="tag-decoration">testing-0.24.900</div><div id="tag21857" onclick="CopyToClipboard('tag21857');return false;" class="tag-decoration">testing-v0</div><div id="tag2822" onclick="CopyToClipboard('tag2822');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20923" onclick="CopyToClipboard('tag20923');return false;" class="tag-decoration">testing-v0.24.900</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d4a8ab1580a649a58953cb82acd32ef84a01f76f" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21246750498" target="_blank">2026-01-22 11:28:54</a></td></tr>
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
