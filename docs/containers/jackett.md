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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31762" onclick="CopyToClipboard('tag31762');return false;" class="tag-decoration">release</div><div id="tag17167" onclick="CopyToClipboard('tag17167');return false;" class="tag-decoration">release-ecf354b</div><div id="tag1000" onclick="CopyToClipboard('tag1000');return false;" class="tag-decoration">release-0.24.1109</div><div id="tag27630" onclick="CopyToClipboard('tag27630');return false;" class="tag-decoration">release-v0</div><div id="tag28564" onclick="CopyToClipboard('tag28564');return false;" class="tag-decoration">release-v0.24</div><div id="tag16402" onclick="CopyToClipboard('tag16402');return false;" class="tag-decoration">release-v0.24.1109</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ecf354b6ff2d6bafaa594c7703210e189c24b691" target="_blank">Version update: 0.24.1103 => 0.24.1109</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22013056373" target="_blank">2026-02-14 06:53:46</a></td></tr>
<tr><td><div id="tag21274" onclick="CopyToClipboard('tag21274');return false;" class="tag-decoration">testing</div><div id="tag23203" onclick="CopyToClipboard('tag23203');return false;" class="tag-decoration">testing-aaeb190</div><div id="tag12910" onclick="CopyToClipboard('tag12910');return false;" class="tag-decoration">testing-0.24.1113</div><div id="tag11486" onclick="CopyToClipboard('tag11486');return false;" class="tag-decoration">testing-v0</div><div id="tag6641" onclick="CopyToClipboard('tag6641');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12103" onclick="CopyToClipboard('tag12103');return false;" class="tag-decoration">testing-v0.24.1113</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/aaeb190162ddcd0a832ae862ee03bd866ec8dd01" target="_blank">Version update: 0.24.1109 => 0.24.1113</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22021835343" target="_blank">2026-02-14 18:00:18</a></td></tr>
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
