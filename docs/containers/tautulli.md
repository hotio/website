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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29894" onclick="CopyToClipboard('tag29894');return false;" class="tag-decoration">release</div><div id="tag22462" onclick="CopyToClipboard('tag22462');return false;" class="tag-decoration">release-b828585</div><div id="tag9600" onclick="CopyToClipboard('tag9600');return false;" class="tag-decoration">release-2.18.2</div><div id="tag2562" onclick="CopyToClipboard('tag2562');return false;" class="tag-decoration">release-v2</div><div id="tag5143" onclick="CopyToClipboard('tag5143');return false;" class="tag-decoration">release-v2.18</div><div id="tag14975" onclick="CopyToClipboard('tag14975');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/b828585dd7c1f49295461037e4b89802a6234db5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42312729136" target="_blank">2026-11-06 23:33:41</a></td></tr>
<tr><td><div id="tag1330" onclick="CopyToClipboard('tag1330');return false;" class="tag-decoration">testing</div><div id="tag30351" onclick="CopyToClipboard('tag30351');return false;" class="tag-decoration">testing-69a58cf</div><div id="tag30594" onclick="CopyToClipboard('tag30594');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag1451" onclick="CopyToClipboard('tag1451');return false;" class="tag-decoration">testing-v2</div><div id="tag23247" onclick="CopyToClipboard('tag23247');return false;" class="tag-decoration">testing-v2.18</div><div id="tag3808" onclick="CopyToClipboard('tag3808');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/69a58cfb8cca5817e0b0290016f5a9a0dfdf220c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42312730960" target="_blank">2026-11-06 23:33:42</a></td></tr>
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
