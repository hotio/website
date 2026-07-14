---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3743" onclick="CopyToClipboard('tag3743');return false;" class="tag-decoration">nightly</div><div id="tag26482" onclick="CopyToClipboard('tag26482');return false;" class="tag-decoration">nightly-55e5e6b</div><div id="tag21869" onclick="CopyToClipboard('tag21869');return false;" class="tag-decoration">nightly-5ae70d05e1ee123b3cda43153ed415754fd8e816</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/55e5e6b7bcd4b270d5f8f22466c8cfe4c52ff5fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29361823953" target="_blank">2026-07-14 19:26:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22059" onclick="CopyToClipboard('tag22059');return false;" class="tag-decoration">release</div><div id="tag14985" onclick="CopyToClipboard('tag14985');return false;" class="tag-decoration">release-9be6ffc</div><div id="tag24504" onclick="CopyToClipboard('tag24504');return false;" class="tag-decoration">release-3.3.0</div><div id="tag3753" onclick="CopyToClipboard('tag3753');return false;" class="tag-decoration">release-v3</div><div id="tag29504" onclick="CopyToClipboard('tag29504');return false;" class="tag-decoration">release-v3.3</div><div id="tag12101" onclick="CopyToClipboard('tag12101');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9be6ffcbbd7f5c3a52b06ac4c27ec411841a626c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29320587308" target="_blank">2026-07-14 09:08:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
