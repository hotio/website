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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16003" onclick="CopyToClipboard('tag16003');return false;" class="tag-decoration">release</div><div id="tag29833" onclick="CopyToClipboard('tag29833');return false;" class="tag-decoration">release-c36b5ad</div><div id="tag9394" onclick="CopyToClipboard('tag9394');return false;" class="tag-decoration">release-2.17.2</div><div id="tag5221" onclick="CopyToClipboard('tag5221');return false;" class="tag-decoration">release-v2</div><div id="tag29214" onclick="CopyToClipboard('tag29214');return false;" class="tag-decoration">release-v2.17</div><div id="tag17169" onclick="CopyToClipboard('tag17169');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/c36b5adb6a09a0ae32cbf7fdb2c0b0d5bc9f8e47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29313143096" target="_blank">2026-07-14 07:00:40</a></td></tr>
<tr><td><div id="tag5286" onclick="CopyToClipboard('tag5286');return false;" class="tag-decoration">testing</div><div id="tag25877" onclick="CopyToClipboard('tag25877');return false;" class="tag-decoration">testing-77fadc2</div><div id="tag23436" onclick="CopyToClipboard('tag23436');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag16254" onclick="CopyToClipboard('tag16254');return false;" class="tag-decoration">testing-v2</div><div id="tag13873" onclick="CopyToClipboard('tag13873');return false;" class="tag-decoration">testing-v2.17</div><div id="tag19276" onclick="CopyToClipboard('tag19276');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/77fadc25f7a88921349eed44cddfc39fe2d5755a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29320331111" target="_blank">2026-07-14 09:04:04</a></td></tr>
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
