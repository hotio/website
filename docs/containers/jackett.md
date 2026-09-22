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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29356" onclick="CopyToClipboard('tag29356');return false;" class="tag-decoration">release</div><div id="tag29671" onclick="CopyToClipboard('tag29671');return false;" class="tag-decoration">release-3ff8496</div><div id="tag7676" onclick="CopyToClipboard('tag7676');return false;" class="tag-decoration">release-0.24.2631</div><div id="tag22322" onclick="CopyToClipboard('tag22322');return false;" class="tag-decoration">release-v0</div><div id="tag7580" onclick="CopyToClipboard('tag7580');return false;" class="tag-decoration">release-v0.24</div><div id="tag10188" onclick="CopyToClipboard('tag10188');return false;" class="tag-decoration">release-v0.24.2631</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3ff84968abc8825bd069412d2bad014cd31cefb7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35594705883" target="_blank">2026-09-21 11:33:37</a></td></tr>
<tr><td><div id="tag10979" onclick="CopyToClipboard('tag10979');return false;" class="tag-decoration">testing</div><div id="tag14357" onclick="CopyToClipboard('tag14357');return false;" class="tag-decoration">testing-566fef4</div><div id="tag2696" onclick="CopyToClipboard('tag2696');return false;" class="tag-decoration">testing-0.24.2644</div><div id="tag30587" onclick="CopyToClipboard('tag30587');return false;" class="tag-decoration">testing-v0</div><div id="tag2705" onclick="CopyToClipboard('tag2705');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12710" onclick="CopyToClipboard('tag12710');return false;" class="tag-decoration">testing-v0.24.2644</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/566fef4ae88b8537db44a1ebf4fd7eaed2a845f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35717189273" target="_blank">2026-09-22 10:39:29</a></td></tr>
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
