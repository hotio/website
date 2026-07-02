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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24743" onclick="CopyToClipboard('tag24743');return false;" class="tag-decoration">release</div><div id="tag22925" onclick="CopyToClipboard('tag22925');return false;" class="tag-decoration">release-e5f52b8</div><div id="tag18261" onclick="CopyToClipboard('tag18261');return false;" class="tag-decoration">release-2.17.2</div><div id="tag17412" onclick="CopyToClipboard('tag17412');return false;" class="tag-decoration">release-v2</div><div id="tag30862" onclick="CopyToClipboard('tag30862');return false;" class="tag-decoration">release-v2.17</div><div id="tag5802" onclick="CopyToClipboard('tag5802');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/e5f52b8908e4454c78da928dfdfd6e0c942428b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28595729178" target="_blank">2026-07-02 13:57:37</a></td></tr>
<tr><td><div id="tag32287" onclick="CopyToClipboard('tag32287');return false;" class="tag-decoration">testing</div><div id="tag19384" onclick="CopyToClipboard('tag19384');return false;" class="tag-decoration">testing-98802d2</div><div id="tag1702" onclick="CopyToClipboard('tag1702');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag175" onclick="CopyToClipboard('tag175');return false;" class="tag-decoration">testing-v2</div><div id="tag5630" onclick="CopyToClipboard('tag5630');return false;" class="tag-decoration">testing-v2.17</div><div id="tag31936" onclick="CopyToClipboard('tag31936');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/98802d2cd4d951741c0cd51d167f2c4ee751841b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28595726187" target="_blank">2026-07-02 13:57:34</a></td></tr>
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
