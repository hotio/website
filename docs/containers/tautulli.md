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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6563" onclick="CopyToClipboard('tag6563');return false;" class="tag-decoration">release</div><div id="tag16807" onclick="CopyToClipboard('tag16807');return false;" class="tag-decoration">release-9f4eb4c</div><div id="tag22867" onclick="CopyToClipboard('tag22867');return false;" class="tag-decoration">release-2.18.0</div><div id="tag21140" onclick="CopyToClipboard('tag21140');return false;" class="tag-decoration">release-v2</div><div id="tag24748" onclick="CopyToClipboard('tag24748');return false;" class="tag-decoration">release-v2.18</div><div id="tag32137" onclick="CopyToClipboard('tag32137');return false;" class="tag-decoration">release-v2.18.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/9f4eb4c9adacc2509d6cd4d3457a161394cbb631" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32871461152" target="_blank">2026-08-25 16:21:17</a></td></tr>
<tr><td><div id="tag1514" onclick="CopyToClipboard('tag1514');return false;" class="tag-decoration">testing</div><div id="tag24208" onclick="CopyToClipboard('tag24208');return false;" class="tag-decoration">testing-37fab40</div><div id="tag30037" onclick="CopyToClipboard('tag30037');return false;" class="tag-decoration">testing-2.18.0</div><div id="tag30647" onclick="CopyToClipboard('tag30647');return false;" class="tag-decoration">testing-v2</div><div id="tag9249" onclick="CopyToClipboard('tag9249');return false;" class="tag-decoration">testing-v2.18</div><div id="tag21057" onclick="CopyToClipboard('tag21057');return false;" class="tag-decoration">testing-v2.18.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/37fab401787963b113f3f970deeb8f7e4b8dc1e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32871458010" target="_blank">2026-08-25 16:21:14</a></td></tr>
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
