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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9494" onclick="CopyToClipboard('tag9494');return false;" class="tag-decoration">release</div><div id="tag675" onclick="CopyToClipboard('tag675');return false;" class="tag-decoration">release-8140349</div><div id="tag4623" onclick="CopyToClipboard('tag4623');return false;" class="tag-decoration">release-0.24.3081</div><div id="tag14864" onclick="CopyToClipboard('tag14864');return false;" class="tag-decoration">release-v0</div><div id="tag14724" onclick="CopyToClipboard('tag14724');return false;" class="tag-decoration">release-v0.24</div><div id="tag21911" onclick="CopyToClipboard('tag21911');return false;" class="tag-decoration">release-v0.24.3081</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8140349a8009e910fa1c3c955806d70e22d5e9b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44276626229" target="_blank">2026-11-18 09:30:52</a></td></tr>
<tr><td><div id="tag12728" onclick="CopyToClipboard('tag12728');return false;" class="tag-decoration">testing</div><div id="tag14641" onclick="CopyToClipboard('tag14641');return false;" class="tag-decoration">testing-5381957</div><div id="tag21759" onclick="CopyToClipboard('tag21759');return false;" class="tag-decoration">testing-0.24.3081</div><div id="tag25826" onclick="CopyToClipboard('tag25826');return false;" class="tag-decoration">testing-v0</div><div id="tag17902" onclick="CopyToClipboard('tag17902');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20550" onclick="CopyToClipboard('tag20550');return false;" class="tag-decoration">testing-v0.24.3081</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5381957cdf702f9e8c3d6b99b951e650ac3a0ba5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44276625799" target="_blank">2026-11-18 09:30:51</a></td></tr>
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
