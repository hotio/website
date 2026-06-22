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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15917" onclick="CopyToClipboard('tag15917');return false;" class="tag-decoration">release</div><div id="tag15451" onclick="CopyToClipboard('tag15451');return false;" class="tag-decoration">release-7e71a4c</div><div id="tag18073" onclick="CopyToClipboard('tag18073');return false;" class="tag-decoration">release-2.17.2</div><div id="tag30826" onclick="CopyToClipboard('tag30826');return false;" class="tag-decoration">release-v2</div><div id="tag19522" onclick="CopyToClipboard('tag19522');return false;" class="tag-decoration">release-v2.17</div><div id="tag6265" onclick="CopyToClipboard('tag6265');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7e71a4cd71e6a673edaa8fea2a5e6ac15f3dc37c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27988336480" target="_blank">2026-06-22 22:28:41</a></td></tr>
<tr><td><div id="tag1723" onclick="CopyToClipboard('tag1723');return false;" class="tag-decoration">testing</div><div id="tag19543" onclick="CopyToClipboard('tag19543');return false;" class="tag-decoration">testing-24815d9</div><div id="tag27024" onclick="CopyToClipboard('tag27024');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag8712" onclick="CopyToClipboard('tag8712');return false;" class="tag-decoration">testing-v2</div><div id="tag27093" onclick="CopyToClipboard('tag27093');return false;" class="tag-decoration">testing-v2.17</div><div id="tag16054" onclick="CopyToClipboard('tag16054');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/24815d98de54c72a51368e32a20a5c2566dae102" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27917338837" target="_blank">2026-06-21 21:00:50</a></td></tr>
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
