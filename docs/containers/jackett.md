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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31103" onclick="CopyToClipboard('tag31103');return false;" class="tag-decoration">release</div><div id="tag8669" onclick="CopyToClipboard('tag8669');return false;" class="tag-decoration">release-5a38d7d</div><div id="tag10824" onclick="CopyToClipboard('tag10824');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag32167" onclick="CopyToClipboard('tag32167');return false;" class="tag-decoration">release-v0</div><div id="tag2063" onclick="CopyToClipboard('tag2063');return false;" class="tag-decoration">release-v0.24</div><div id="tag21216" onclick="CopyToClipboard('tag21216');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5a38d7dcb63ecf95b94ef854f8c9306ce1ebfe27" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25700447532" target="_blank">2026-05-11 22:14:05</a></td></tr>
<tr><td><div id="tag26129" onclick="CopyToClipboard('tag26129');return false;" class="tag-decoration">testing</div><div id="tag28149" onclick="CopyToClipboard('tag28149');return false;" class="tag-decoration">testing-95ec96d</div><div id="tag17673" onclick="CopyToClipboard('tag17673');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag16556" onclick="CopyToClipboard('tag16556');return false;" class="tag-decoration">testing-v0</div><div id="tag10394" onclick="CopyToClipboard('tag10394');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13370" onclick="CopyToClipboard('tag13370');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/95ec96daf83a69d79cee9cd563d4bcabe6b92d99" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25700450934" target="_blank">2026-05-11 22:14:10</a></td></tr>
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
