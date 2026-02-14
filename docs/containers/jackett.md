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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7744" onclick="CopyToClipboard('tag7744');return false;" class="tag-decoration">release</div><div id="tag25051" onclick="CopyToClipboard('tag25051');return false;" class="tag-decoration">release-5de71ad</div><div id="tag24689" onclick="CopyToClipboard('tag24689');return false;" class="tag-decoration">release-0.24.1113</div><div id="tag23061" onclick="CopyToClipboard('tag23061');return false;" class="tag-decoration">release-v0</div><div id="tag21086" onclick="CopyToClipboard('tag21086');return false;" class="tag-decoration">release-v0.24</div><div id="tag3911" onclick="CopyToClipboard('tag3911');return false;" class="tag-decoration">release-v0.24.1113</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5de71adeeb6393aadfc0456847db1a11ab959915" target="_blank">Version update: 0.24.1109 => 0.24.1113</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22021834930" target="_blank">2026-02-14 18:00:17</a></td></tr>
<tr><td><div id="tag8994" onclick="CopyToClipboard('tag8994');return false;" class="tag-decoration">testing</div><div id="tag30244" onclick="CopyToClipboard('tag30244');return false;" class="tag-decoration">testing-aaeb190</div><div id="tag7768" onclick="CopyToClipboard('tag7768');return false;" class="tag-decoration">testing-0.24.1113</div><div id="tag8458" onclick="CopyToClipboard('tag8458');return false;" class="tag-decoration">testing-v0</div><div id="tag15740" onclick="CopyToClipboard('tag15740');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31888" onclick="CopyToClipboard('tag31888');return false;" class="tag-decoration">testing-v0.24.1113</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/aaeb190162ddcd0a832ae862ee03bd866ec8dd01" target="_blank">Version update: 0.24.1109 => 0.24.1113</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22021835343" target="_blank">2026-02-14 18:00:18</a></td></tr>
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
