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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21060" onclick="CopyToClipboard('tag21060');return false;" class="tag-decoration">release</div><div id="tag13359" onclick="CopyToClipboard('tag13359');return false;" class="tag-decoration">release-77f8154</div><div id="tag7842" onclick="CopyToClipboard('tag7842');return false;" class="tag-decoration">release-2.17.2</div><div id="tag4852" onclick="CopyToClipboard('tag4852');return false;" class="tag-decoration">release-v2</div><div id="tag29668" onclick="CopyToClipboard('tag29668');return false;" class="tag-decoration">release-v2.17</div><div id="tag9551" onclick="CopyToClipboard('tag9551');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/77f81543fbb91fc668be686ac2b9ab8e70f34f73" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28446213990" target="_blank">2026-06-30 13:00:27</a></td></tr>
<tr><td><div id="tag8548" onclick="CopyToClipboard('tag8548');return false;" class="tag-decoration">testing</div><div id="tag2721" onclick="CopyToClipboard('tag2721');return false;" class="tag-decoration">testing-98802d2</div><div id="tag15546" onclick="CopyToClipboard('tag15546');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag12522" onclick="CopyToClipboard('tag12522');return false;" class="tag-decoration">testing-v2</div><div id="tag15310" onclick="CopyToClipboard('tag15310');return false;" class="tag-decoration">testing-v2.17</div><div id="tag10166" onclick="CopyToClipboard('tag10166');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/98802d2cd4d951741c0cd51d167f2c4ee751841b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28595726187" target="_blank">2026-07-02 13:57:34</a></td></tr>
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
