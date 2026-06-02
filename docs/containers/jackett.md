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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27077" onclick="CopyToClipboard('tag27077');return false;" class="tag-decoration">release</div><div id="tag10545" onclick="CopyToClipboard('tag10545');return false;" class="tag-decoration">release-5802643</div><div id="tag12452" onclick="CopyToClipboard('tag12452');return false;" class="tag-decoration">release-0.24.2000</div><div id="tag3595" onclick="CopyToClipboard('tag3595');return false;" class="tag-decoration">release-v0</div><div id="tag15936" onclick="CopyToClipboard('tag15936');return false;" class="tag-decoration">release-v0.24</div><div id="tag32721" onclick="CopyToClipboard('tag32721');return false;" class="tag-decoration">release-v0.24.2000</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/580264365dff9c2ec4613dbffbde854f66dba2db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26812962599" target="_blank">2026-06-02 10:08:18</a></td></tr>
<tr><td><div id="tag20118" onclick="CopyToClipboard('tag20118');return false;" class="tag-decoration">testing</div><div id="tag23973" onclick="CopyToClipboard('tag23973');return false;" class="tag-decoration">testing-9d036da</div><div id="tag21553" onclick="CopyToClipboard('tag21553');return false;" class="tag-decoration">testing-0.24.2000</div><div id="tag28110" onclick="CopyToClipboard('tag28110');return false;" class="tag-decoration">testing-v0</div><div id="tag29747" onclick="CopyToClipboard('tag29747');return false;" class="tag-decoration">testing-v0.24</div><div id="tag32731" onclick="CopyToClipboard('tag32731');return false;" class="tag-decoration">testing-v0.24.2000</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9d036da77d69c84c5fdd9d81d848afc6d9e2f6b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26812961644" target="_blank">2026-06-02 10:08:18</a></td></tr>
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
