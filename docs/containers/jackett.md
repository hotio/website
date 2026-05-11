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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14447" onclick="CopyToClipboard('tag14447');return false;" class="tag-decoration">release</div><div id="tag21144" onclick="CopyToClipboard('tag21144');return false;" class="tag-decoration">release-bca3470</div><div id="tag28713" onclick="CopyToClipboard('tag28713');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag23441" onclick="CopyToClipboard('tag23441');return false;" class="tag-decoration">release-v0</div><div id="tag1070" onclick="CopyToClipboard('tag1070');return false;" class="tag-decoration">release-v0.24</div><div id="tag27497" onclick="CopyToClipboard('tag27497');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bca3470e5fbdd959e4abbced2489f52660ab35ce" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25701773849" target="_blank">2026-05-11 22:45:31</a></td></tr>
<tr><td><div id="tag3136" onclick="CopyToClipboard('tag3136');return false;" class="tag-decoration">testing</div><div id="tag18698" onclick="CopyToClipboard('tag18698');return false;" class="tag-decoration">testing-95ec96d</div><div id="tag29760" onclick="CopyToClipboard('tag29760');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag13049" onclick="CopyToClipboard('tag13049');return false;" class="tag-decoration">testing-v0</div><div id="tag18014" onclick="CopyToClipboard('tag18014');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13338" onclick="CopyToClipboard('tag13338');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/95ec96daf83a69d79cee9cd563d4bcabe6b92d99" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25700450934" target="_blank">2026-05-11 22:14:10</a></td></tr>
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
