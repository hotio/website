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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18288" onclick="CopyToClipboard('tag18288');return false;" class="tag-decoration">release</div><div id="tag29896" onclick="CopyToClipboard('tag29896');return false;" class="tag-decoration">release-2b1cc05</div><div id="tag29974" onclick="CopyToClipboard('tag29974');return false;" class="tag-decoration">release-0.24.1205</div><div id="tag28906" onclick="CopyToClipboard('tag28906');return false;" class="tag-decoration">release-v0</div><div id="tag22588" onclick="CopyToClipboard('tag22588');return false;" class="tag-decoration">release-v0.24</div><div id="tag30811" onclick="CopyToClipboard('tag30811');return false;" class="tag-decoration">release-v0.24.1205</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2b1cc05c7f76574c6fd61f79d650199c02f452ef" target="_blank">Version update: 0.24.1193 => 0.24.1205</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22386167806" target="_blank">2026-02-25 07:08:09</a></td></tr>
<tr><td><div id="tag26628" onclick="CopyToClipboard('tag26628');return false;" class="tag-decoration">testing</div><div id="tag22248" onclick="CopyToClipboard('tag22248');return false;" class="tag-decoration">testing-dabcdfd</div><div id="tag269" onclick="CopyToClipboard('tag269');return false;" class="tag-decoration">testing-0.24.1218</div><div id="tag31368" onclick="CopyToClipboard('tag31368');return false;" class="tag-decoration">testing-v0</div><div id="tag20735" onclick="CopyToClipboard('tag20735');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25849" onclick="CopyToClipboard('tag25849');return false;" class="tag-decoration">testing-v0.24.1218</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/dabcdfd4860bb96cc2f76d4d33c33d5121f73a23" target="_blank">Version update: 0.24.1205 => 0.24.1218</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22430270385" target="_blank">2026-02-26 06:13:24</a></td></tr>
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
