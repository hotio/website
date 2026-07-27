---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19894" onclick="CopyToClipboard('tag19894');return false;" class="tag-decoration">release</div><div id="tag25585" onclick="CopyToClipboard('tag25585');return false;" class="tag-decoration">release-a96fcb9</div><div id="tag32491" onclick="CopyToClipboard('tag32491');return false;" class="tag-decoration">release-0.24.2268</div><div id="tag22247" onclick="CopyToClipboard('tag22247');return false;" class="tag-decoration">release-v0</div><div id="tag32705" onclick="CopyToClipboard('tag32705');return false;" class="tag-decoration">release-v0.24</div><div id="tag16133" onclick="CopyToClipboard('tag16133');return false;" class="tag-decoration">release-v0.24.2268</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a96fcb9e488d5a1a0fc9017bef4505ff6d4273d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30194148759" target="_blank">2026-07-26 08:10:46</a></td></tr>
<tr><td><div id="tag29966" onclick="CopyToClipboard('tag29966');return false;" class="tag-decoration">testing</div><div id="tag9415" onclick="CopyToClipboard('tag9415');return false;" class="tag-decoration">testing-580c44d</div><div id="tag30965" onclick="CopyToClipboard('tag30965');return false;" class="tag-decoration">testing-0.24.2277</div><div id="tag9281" onclick="CopyToClipboard('tag9281');return false;" class="tag-decoration">testing-v0</div><div id="tag31556" onclick="CopyToClipboard('tag31556');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25074" onclick="CopyToClipboard('tag25074');return false;" class="tag-decoration">testing-v0.24.2277</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/580c44d6a50501940aa58e2045e1d4bfe9531f5d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30242372021" target="_blank">2026-07-27 06:19:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
