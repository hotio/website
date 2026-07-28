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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23734" onclick="CopyToClipboard('tag23734');return false;" class="tag-decoration">release</div><div id="tag1407" onclick="CopyToClipboard('tag1407');return false;" class="tag-decoration">release-ef33b3c</div><div id="tag29391" onclick="CopyToClipboard('tag29391');return false;" class="tag-decoration">release-2.17.2</div><div id="tag16734" onclick="CopyToClipboard('tag16734');return false;" class="tag-decoration">release-v2</div><div id="tag16915" onclick="CopyToClipboard('tag16915');return false;" class="tag-decoration">release-v2.17</div><div id="tag18444" onclick="CopyToClipboard('tag18444');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ef33b3c5dcd242dc273d1b4bde585a176260213d" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29681451355" target="_blank">2026-07-19 09:22:07</a></td></tr>
<tr><td><div id="tag4912" onclick="CopyToClipboard('tag4912');return false;" class="tag-decoration">testing</div><div id="tag26627" onclick="CopyToClipboard('tag26627');return false;" class="tag-decoration">testing-b0ce813</div><div id="tag10800" onclick="CopyToClipboard('tag10800');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag21338" onclick="CopyToClipboard('tag21338');return false;" class="tag-decoration">testing-v2</div><div id="tag403" onclick="CopyToClipboard('tag403');return false;" class="tag-decoration">testing-v2.17</div><div id="tag15830" onclick="CopyToClipboard('tag15830');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b0ce81325279aa6b0182ed046ec0c077f4082683" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/30375827529" target="_blank">2026-07-28 15:56:20</a></td></tr>
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
