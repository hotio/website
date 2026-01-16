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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25662" onclick="CopyToClipboard('tag25662');return false;" class="tag-decoration">release</div><div id="tag14759" onclick="CopyToClipboard('tag14759');return false;" class="tag-decoration">release-9e30a03</div><div id="tag15777" onclick="CopyToClipboard('tag15777');return false;" class="tag-decoration">release-0.24.863</div><div id="tag22782" onclick="CopyToClipboard('tag22782');return false;" class="tag-decoration">release-v0</div><div id="tag23652" onclick="CopyToClipboard('tag23652');return false;" class="tag-decoration">release-v0.24</div><div id="tag20099" onclick="CopyToClipboard('tag20099');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9e30a036018a5910bf23f8934fbac87786c76a38" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21064889573" target="_blank">2026-01-16 11:18:11</a></td></tr>
<tr><td><div id="tag9430" onclick="CopyToClipboard('tag9430');return false;" class="tag-decoration">testing</div><div id="tag285" onclick="CopyToClipboard('tag285');return false;" class="tag-decoration">testing-f0fac9b</div><div id="tag31694" onclick="CopyToClipboard('tag31694');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag19568" onclick="CopyToClipboard('tag19568');return false;" class="tag-decoration">testing-v0</div><div id="tag19869" onclick="CopyToClipboard('tag19869');return false;" class="tag-decoration">testing-v0.24</div><div id="tag26540" onclick="CopyToClipboard('tag26540');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f0fac9ba820bd30be700c07711b5333316c756ce" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21063277562" target="_blank">2026-01-16 10:17:02</a></td></tr>
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
