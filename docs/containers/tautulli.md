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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3630" onclick="CopyToClipboard('tag3630');return false;" class="tag-decoration">release</div><div id="tag9302" onclick="CopyToClipboard('tag9302');return false;" class="tag-decoration">release-64471d7</div><div id="tag31126" onclick="CopyToClipboard('tag31126');return false;" class="tag-decoration">release-2.18.2</div><div id="tag31902" onclick="CopyToClipboard('tag31902');return false;" class="tag-decoration">release-v2</div><div id="tag7696" onclick="CopyToClipboard('tag7696');return false;" class="tag-decoration">release-v2.18</div><div id="tag953" onclick="CopyToClipboard('tag953');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/64471d716578500853c24265ed6b3e20dafac7a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/39703216904" target="_blank">2026-10-22 01:01:18</a></td></tr>
<tr><td><div id="tag6019" onclick="CopyToClipboard('tag6019');return false;" class="tag-decoration">testing</div><div id="tag23738" onclick="CopyToClipboard('tag23738');return false;" class="tag-decoration">testing-d692981</div><div id="tag10822" onclick="CopyToClipboard('tag10822');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag6543" onclick="CopyToClipboard('tag6543');return false;" class="tag-decoration">testing-v2</div><div id="tag25618" onclick="CopyToClipboard('tag25618');return false;" class="tag-decoration">testing-v2.18</div><div id="tag11780" onclick="CopyToClipboard('tag11780');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/d6929810ea06fb7fd5abb91225e19505d3a8cc5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40074977071" target="_blank">2026-10-24 07:39:06</a></td></tr>
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
