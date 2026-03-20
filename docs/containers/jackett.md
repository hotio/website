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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1108" onclick="CopyToClipboard('tag1108');return false;" class="tag-decoration">release</div><div id="tag24099" onclick="CopyToClipboard('tag24099');return false;" class="tag-decoration">release-55be235</div><div id="tag12563" onclick="CopyToClipboard('tag12563');return false;" class="tag-decoration">release-0.24.1419</div><div id="tag27288" onclick="CopyToClipboard('tag27288');return false;" class="tag-decoration">release-v0</div><div id="tag10111" onclick="CopyToClipboard('tag10111');return false;" class="tag-decoration">release-v0.24</div><div id="tag24549" onclick="CopyToClipboard('tag24549');return false;" class="tag-decoration">release-v0.24.1419</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/55be2355e25afb762bbcc7bc87296c4364870289" target="_blank">Version update: 0.24.1412 => 0.24.1419</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23331274158" target="_blank">2026-03-20 06:07:24</a></td></tr>
<tr><td><div id="tag30060" onclick="CopyToClipboard('tag30060');return false;" class="tag-decoration">testing</div><div id="tag27631" onclick="CopyToClipboard('tag27631');return false;" class="tag-decoration">testing-bf5cc35</div><div id="tag15016" onclick="CopyToClipboard('tag15016');return false;" class="tag-decoration">testing-0.24.1419</div><div id="tag32429" onclick="CopyToClipboard('tag32429');return false;" class="tag-decoration">testing-v0</div><div id="tag5401" onclick="CopyToClipboard('tag5401');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25598" onclick="CopyToClipboard('tag25598');return false;" class="tag-decoration">testing-v0.24.1419</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bf5cc3576663b25cbed4527781c34faa380fa62b" target="_blank">Version update: 0.24.1412 => 0.24.1419</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23331274610" target="_blank">2026-03-20 06:07:26</a></td></tr>
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
