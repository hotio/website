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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8054" onclick="CopyToClipboard('tag8054');return false;" class="tag-decoration">release</div><div id="tag3475" onclick="CopyToClipboard('tag3475');return false;" class="tag-decoration">release-9f4eb4c</div><div id="tag19893" onclick="CopyToClipboard('tag19893');return false;" class="tag-decoration">release-2.18.0</div><div id="tag29801" onclick="CopyToClipboard('tag29801');return false;" class="tag-decoration">release-v2</div><div id="tag9743" onclick="CopyToClipboard('tag9743');return false;" class="tag-decoration">release-v2.18</div><div id="tag1595" onclick="CopyToClipboard('tag1595');return false;" class="tag-decoration">release-v2.18.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/9f4eb4c9adacc2509d6cd4d3457a161394cbb631" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32871461152" target="_blank">2026-08-25 16:21:17</a></td></tr>
<tr><td><div id="tag13567" onclick="CopyToClipboard('tag13567');return false;" class="tag-decoration">testing</div><div id="tag19677" onclick="CopyToClipboard('tag19677');return false;" class="tag-decoration">testing-05464b9</div><div id="tag19805" onclick="CopyToClipboard('tag19805');return false;" class="tag-decoration">testing-2.18.0</div><div id="tag9816" onclick="CopyToClipboard('tag9816');return false;" class="tag-decoration">testing-v2</div><div id="tag18386" onclick="CopyToClipboard('tag18386');return false;" class="tag-decoration">testing-v2.18</div><div id="tag20696" onclick="CopyToClipboard('tag20696');return false;" class="tag-decoration">testing-v2.18.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/05464b951204f1d6c3eb3b59dc91f62fc95dc08f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32922094428" target="_blank">2026-08-26 02:16:07</a></td></tr>
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
