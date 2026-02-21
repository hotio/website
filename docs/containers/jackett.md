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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12224" onclick="CopyToClipboard('tag12224');return false;" class="tag-decoration">release</div><div id="tag7283" onclick="CopyToClipboard('tag7283');return false;" class="tag-decoration">release-e0e142b</div><div id="tag22962" onclick="CopyToClipboard('tag22962');return false;" class="tag-decoration">release-0.24.1174</div><div id="tag21344" onclick="CopyToClipboard('tag21344');return false;" class="tag-decoration">release-v0</div><div id="tag9895" onclick="CopyToClipboard('tag9895');return false;" class="tag-decoration">release-v0.24</div><div id="tag17298" onclick="CopyToClipboard('tag17298');return false;" class="tag-decoration">release-v0.24.1174</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e0e142b9ab7382e348fad6d7d2e5807b4eab2ff1" target="_blank">Version update: 0.24.1167 => 0.24.1174</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22251924341" target="_blank">2026-02-21 06:24:25</a></td></tr>
<tr><td><div id="tag15984" onclick="CopyToClipboard('tag15984');return false;" class="tag-decoration">testing</div><div id="tag22716" onclick="CopyToClipboard('tag22716');return false;" class="tag-decoration">testing-bb39121</div><div id="tag28029" onclick="CopyToClipboard('tag28029');return false;" class="tag-decoration">testing-0.24.1174</div><div id="tag18734" onclick="CopyToClipboard('tag18734');return false;" class="tag-decoration">testing-v0</div><div id="tag1100" onclick="CopyToClipboard('tag1100');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24680" onclick="CopyToClipboard('tag24680');return false;" class="tag-decoration">testing-v0.24.1174</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bb3912150ad44ab1dcb592eb4b6b0180abcd6c36" target="_blank">Version update: 0.24.1167 => 0.24.1174</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22251924648" target="_blank">2026-02-21 06:24:28</a></td></tr>
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
