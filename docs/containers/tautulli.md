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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20241" onclick="CopyToClipboard('tag20241');return false;" class="tag-decoration">release</div><div id="tag28114" onclick="CopyToClipboard('tag28114');return false;" class="tag-decoration">release-ef33b3c</div><div id="tag8791" onclick="CopyToClipboard('tag8791');return false;" class="tag-decoration">release-2.17.2</div><div id="tag17115" onclick="CopyToClipboard('tag17115');return false;" class="tag-decoration">release-v2</div><div id="tag12461" onclick="CopyToClipboard('tag12461');return false;" class="tag-decoration">release-v2.17</div><div id="tag28359" onclick="CopyToClipboard('tag28359');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ef33b3c5dcd242dc273d1b4bde585a176260213d" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29681451355" target="_blank">2026-07-19 09:22:07</a></td></tr>
<tr><td><div id="tag15337" onclick="CopyToClipboard('tag15337');return false;" class="tag-decoration">testing</div><div id="tag30514" onclick="CopyToClipboard('tag30514');return false;" class="tag-decoration">testing-9988db2</div><div id="tag7386" onclick="CopyToClipboard('tag7386');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag3548" onclick="CopyToClipboard('tag3548');return false;" class="tag-decoration">testing-v2</div><div id="tag6904" onclick="CopyToClipboard('tag6904');return false;" class="tag-decoration">testing-v2.17</div><div id="tag27359" onclick="CopyToClipboard('tag27359');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/9988db262836589821abd419dd0de86a1666dd66" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29681458600" target="_blank">2026-07-19 09:22:21</a></td></tr>
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
