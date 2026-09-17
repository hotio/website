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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26099" onclick="CopyToClipboard('tag26099');return false;" class="tag-decoration">release</div><div id="tag14407" onclick="CopyToClipboard('tag14407');return false;" class="tag-decoration">release-20bfd08</div><div id="tag14879" onclick="CopyToClipboard('tag14879');return false;" class="tag-decoration">release-0.24.2601</div><div id="tag14730" onclick="CopyToClipboard('tag14730');return false;" class="tag-decoration">release-v0</div><div id="tag14878" onclick="CopyToClipboard('tag14878');return false;" class="tag-decoration">release-v0.24</div><div id="tag17587" onclick="CopyToClipboard('tag17587');return false;" class="tag-decoration">release-v0.24.2601</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/20bfd0866438c2416c79e4c11361e3c869980e76" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35072075707" target="_blank">2026-09-16 08:07:24</a></td></tr>
<tr><td><div id="tag25166" onclick="CopyToClipboard('tag25166');return false;" class="tag-decoration">testing</div><div id="tag20774" onclick="CopyToClipboard('tag20774');return false;" class="tag-decoration">testing-601e98d</div><div id="tag28501" onclick="CopyToClipboard('tag28501');return false;" class="tag-decoration">testing-0.24.2605</div><div id="tag32272" onclick="CopyToClipboard('tag32272');return false;" class="tag-decoration">testing-v0</div><div id="tag7415" onclick="CopyToClipboard('tag7415');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24345" onclick="CopyToClipboard('tag24345');return false;" class="tag-decoration">testing-v0.24.2605</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/601e98dd0dc79b83e67c21f2d709cd25bc78006a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35198548697" target="_blank">2026-09-17 08:13:36</a></td></tr>
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
