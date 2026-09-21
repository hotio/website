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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25553" onclick="CopyToClipboard('tag25553');return false;" class="tag-decoration">release</div><div id="tag19915" onclick="CopyToClipboard('tag19915');return false;" class="tag-decoration">release-3ff8496</div><div id="tag10624" onclick="CopyToClipboard('tag10624');return false;" class="tag-decoration">release-0.24.2631</div><div id="tag21219" onclick="CopyToClipboard('tag21219');return false;" class="tag-decoration">release-v0</div><div id="tag12502" onclick="CopyToClipboard('tag12502');return false;" class="tag-decoration">release-v0.24</div><div id="tag9341" onclick="CopyToClipboard('tag9341');return false;" class="tag-decoration">release-v0.24.2631</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3ff84968abc8825bd069412d2bad014cd31cefb7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35594705883" target="_blank">2026-09-21 11:33:37</a></td></tr>
<tr><td><div id="tag27707" onclick="CopyToClipboard('tag27707');return false;" class="tag-decoration">testing</div><div id="tag12291" onclick="CopyToClipboard('tag12291');return false;" class="tag-decoration">testing-c8af265</div><div id="tag18208" onclick="CopyToClipboard('tag18208');return false;" class="tag-decoration">testing-0.24.2631</div><div id="tag22" onclick="CopyToClipboard('tag22');return false;" class="tag-decoration">testing-v0</div><div id="tag2275" onclick="CopyToClipboard('tag2275');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16902" onclick="CopyToClipboard('tag16902');return false;" class="tag-decoration">testing-v0.24.2631</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c8af265a585d730bffd36f31200acdea177c61b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35594705881" target="_blank">2026-09-21 11:33:37</a></td></tr>
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
