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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24751" onclick="CopyToClipboard('tag24751');return false;" class="tag-decoration">release</div><div id="tag30895" onclick="CopyToClipboard('tag30895');return false;" class="tag-decoration">release-c92eb30</div><div id="tag32253" onclick="CopyToClipboard('tag32253');return false;" class="tag-decoration">release-2.18.2</div><div id="tag11284" onclick="CopyToClipboard('tag11284');return false;" class="tag-decoration">release-v2</div><div id="tag17425" onclick="CopyToClipboard('tag17425');return false;" class="tag-decoration">release-v2.18</div><div id="tag9375" onclick="CopyToClipboard('tag9375');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/c92eb30116f17c6cf8d00ea79a802d485d3f3c80" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/36767336714" target="_blank">2026-09-30 19:40:43</a></td></tr>
<tr><td><div id="tag6054" onclick="CopyToClipboard('tag6054');return false;" class="tag-decoration">testing</div><div id="tag26151" onclick="CopyToClipboard('tag26151');return false;" class="tag-decoration">testing-1eb30a2</div><div id="tag10142" onclick="CopyToClipboard('tag10142');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag13865" onclick="CopyToClipboard('tag13865');return false;" class="tag-decoration">testing-v2</div><div id="tag19117" onclick="CopyToClipboard('tag19117');return false;" class="tag-decoration">testing-v2.18</div><div id="tag21135" onclick="CopyToClipboard('tag21135');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/1eb30a270a3203930a1f95146645505ac74be1cf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/36767341359" target="_blank">2026-09-30 19:40:46</a></td></tr>
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
