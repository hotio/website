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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9050" onclick="CopyToClipboard('tag9050');return false;" class="tag-decoration">release</div><div id="tag23846" onclick="CopyToClipboard('tag23846');return false;" class="tag-decoration">release-5bdf7b3</div><div id="tag5540" onclick="CopyToClipboard('tag5540');return false;" class="tag-decoration">release-2.18.2</div><div id="tag24678" onclick="CopyToClipboard('tag24678');return false;" class="tag-decoration">release-v2</div><div id="tag29686" onclick="CopyToClipboard('tag29686');return false;" class="tag-decoration">release-v2.18</div><div id="tag29170" onclick="CopyToClipboard('tag29170');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/5bdf7b323c551f5b8aa5a72bbeed782d6e0d2870" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/39138212807" target="_blank">2026-10-18 14:56:11</a></td></tr>
<tr><td><div id="tag1375" onclick="CopyToClipboard('tag1375');return false;" class="tag-decoration">testing</div><div id="tag31845" onclick="CopyToClipboard('tag31845');return false;" class="tag-decoration">testing-02ef582</div><div id="tag23252" onclick="CopyToClipboard('tag23252');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag23386" onclick="CopyToClipboard('tag23386');return false;" class="tag-decoration">testing-v2</div><div id="tag27128" onclick="CopyToClipboard('tag27128');return false;" class="tag-decoration">testing-v2.18</div><div id="tag19290" onclick="CopyToClipboard('tag19290');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/02ef58229dc08e02b4328601d0984f7d81580f98" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/39138210815" target="_blank">2026-10-18 14:56:10</a></td></tr>
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
