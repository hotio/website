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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32372" onclick="CopyToClipboard('tag32372');return false;" class="tag-decoration">release</div><div id="tag17001" onclick="CopyToClipboard('tag17001');return false;" class="tag-decoration">release-f46e7c0</div><div id="tag9367" onclick="CopyToClipboard('tag9367');return false;" class="tag-decoration">release-0.25.24</div><div id="tag11208" onclick="CopyToClipboard('tag11208');return false;" class="tag-decoration">release-v0</div><div id="tag15288" onclick="CopyToClipboard('tag15288');return false;" class="tag-decoration">release-v0.25</div><div id="tag30004" onclick="CopyToClipboard('tag30004');return false;" class="tag-decoration">release-v0.25.24</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f46e7c0a3868148d001b570ca9994d501664bd29" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45024908566" target="_blank">2026-11-22 12:57:04</a></td></tr>
<tr><td><div id="tag14690" onclick="CopyToClipboard('tag14690');return false;" class="tag-decoration">testing</div><div id="tag10589" onclick="CopyToClipboard('tag10589');return false;" class="tag-decoration">testing-1813d4b</div><div id="tag8549" onclick="CopyToClipboard('tag8549');return false;" class="tag-decoration">testing-0.25.28</div><div id="tag17330" onclick="CopyToClipboard('tag17330');return false;" class="tag-decoration">testing-v0</div><div id="tag10465" onclick="CopyToClipboard('tag10465');return false;" class="tag-decoration">testing-v0.25</div><div id="tag24472" onclick="CopyToClipboard('tag24472');return false;" class="tag-decoration">testing-v0.25.28</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1813d4be530e8ee88220e044dec161f9ba6b6583" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45152306344" target="_blank">2026-11-23 10:01:35</a></td></tr>
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
