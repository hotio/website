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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2757" onclick="CopyToClipboard('tag2757');return false;" class="tag-decoration">release</div><div id="tag8564" onclick="CopyToClipboard('tag8564');return false;" class="tag-decoration">release-d5a0d98</div><div id="tag8133" onclick="CopyToClipboard('tag8133');return false;" class="tag-decoration">release-0.24.1813</div><div id="tag10844" onclick="CopyToClipboard('tag10844');return false;" class="tag-decoration">release-v0</div><div id="tag2988" onclick="CopyToClipboard('tag2988');return false;" class="tag-decoration">release-v0.24</div><div id="tag5905" onclick="CopyToClipboard('tag5905');return false;" class="tag-decoration">release-v0.24.1813</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d5a0d981320de628216e02f9125f436cbf0c42da" target="_blank">Version update: 0.24.1807 => 0.24.1813</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25245851493" target="_blank">2026-05-02 06:30:49</a></td></tr>
<tr><td><div id="tag28706" onclick="CopyToClipboard('tag28706');return false;" class="tag-decoration">testing</div><div id="tag13725" onclick="CopyToClipboard('tag13725');return false;" class="tag-decoration">testing-67c6192</div><div id="tag23493" onclick="CopyToClipboard('tag23493');return false;" class="tag-decoration">testing-0.24.1807</div><div id="tag4534" onclick="CopyToClipboard('tag4534');return false;" class="tag-decoration">testing-v0</div><div id="tag26155" onclick="CopyToClipboard('tag26155');return false;" class="tag-decoration">testing-v0.24</div><div id="tag890" onclick="CopyToClipboard('tag890');return false;" class="tag-decoration">testing-v0.24.1807</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/67c61925af1148dba162192fec1338a4f59f6ebe" target="_blank">Version update: 0.24.1806 => 0.24.1807</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25206189565" target="_blank">2026-05-01 07:13:40</a></td></tr>
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
