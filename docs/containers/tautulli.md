---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11753" onclick="CopyToClipboard('tag11753');return false;" class="tag-decoration">release</div><div id="tag10663" onclick="CopyToClipboard('tag10663');return false;" class="tag-decoration">release-7e71a4c</div><div id="tag6125" onclick="CopyToClipboard('tag6125');return false;" class="tag-decoration">release-2.17.2</div><div id="tag30488" onclick="CopyToClipboard('tag30488');return false;" class="tag-decoration">release-v2</div><div id="tag20380" onclick="CopyToClipboard('tag20380');return false;" class="tag-decoration">release-v2.17</div><div id="tag7113" onclick="CopyToClipboard('tag7113');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7e71a4cd71e6a673edaa8fea2a5e6ac15f3dc37c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27988336480" target="_blank">2026-06-22 22:28:41</a></td></tr>
<tr><td><div id="tag7555" onclick="CopyToClipboard('tag7555');return false;" class="tag-decoration">testing</div><div id="tag20722" onclick="CopyToClipboard('tag20722');return false;" class="tag-decoration">testing-7db09e1</div><div id="tag27810" onclick="CopyToClipboard('tag27810');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag14769" onclick="CopyToClipboard('tag14769');return false;" class="tag-decoration">testing-v2</div><div id="tag13750" onclick="CopyToClipboard('tag13750');return false;" class="tag-decoration">testing-v2.17</div><div id="tag6260" onclick="CopyToClipboard('tag6260');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/7db09e146918cf40c900e7aff7f5f1116a8c5ec5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27988334273" target="_blank">2026-06-22 22:28:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
