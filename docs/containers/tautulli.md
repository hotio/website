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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20625" onclick="CopyToClipboard('tag20625');return false;" class="tag-decoration">release</div><div id="tag12969" onclick="CopyToClipboard('tag12969');return false;" class="tag-decoration">release-dcf6e6e</div><div id="tag12003" onclick="CopyToClipboard('tag12003');return false;" class="tag-decoration">release-2.18.2</div><div id="tag23737" onclick="CopyToClipboard('tag23737');return false;" class="tag-decoration">release-v2</div><div id="tag22152" onclick="CopyToClipboard('tag22152');return false;" class="tag-decoration">release-v2.18</div><div id="tag26022" onclick="CopyToClipboard('tag26022');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/dcf6e6e90fa0ece12de22b37c3e4660bac4f27d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40228883566" target="_blank">2026-10-25 20:02:31</a></td></tr>
<tr><td><div id="tag28184" onclick="CopyToClipboard('tag28184');return false;" class="tag-decoration">testing</div><div id="tag22139" onclick="CopyToClipboard('tag22139');return false;" class="tag-decoration">testing-d692981</div><div id="tag27060" onclick="CopyToClipboard('tag27060');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag23072" onclick="CopyToClipboard('tag23072');return false;" class="tag-decoration">testing-v2</div><div id="tag370" onclick="CopyToClipboard('tag370');return false;" class="tag-decoration">testing-v2.18</div><div id="tag1474" onclick="CopyToClipboard('tag1474');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/d6929810ea06fb7fd5abb91225e19505d3a8cc5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40074977071" target="_blank">2026-10-24 07:39:06</a></td></tr>
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
