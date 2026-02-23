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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23066" onclick="CopyToClipboard('tag23066');return false;" class="tag-decoration">release</div><div id="tag3823" onclick="CopyToClipboard('tag3823');return false;" class="tag-decoration">release-c2a1ba4</div><div id="tag13344" onclick="CopyToClipboard('tag13344');return false;" class="tag-decoration">release-0.24.1184</div><div id="tag17321" onclick="CopyToClipboard('tag17321');return false;" class="tag-decoration">release-v0</div><div id="tag26221" onclick="CopyToClipboard('tag26221');return false;" class="tag-decoration">release-v0.24</div><div id="tag17401" onclick="CopyToClipboard('tag17401');return false;" class="tag-decoration">release-v0.24.1184</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c2a1ba4e7a2dec5392c1f6e1362ed070ae8b881a" target="_blank">Version update: 0.24.1178 => 0.24.1184</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22295084944" target="_blank">2026-02-23 06:17:12</a></td></tr>
<tr><td><div id="tag11947" onclick="CopyToClipboard('tag11947');return false;" class="tag-decoration">testing</div><div id="tag8388" onclick="CopyToClipboard('tag8388');return false;" class="tag-decoration">testing-067b2f3</div><div id="tag16057" onclick="CopyToClipboard('tag16057');return false;" class="tag-decoration">testing-0.24.1184</div><div id="tag2448" onclick="CopyToClipboard('tag2448');return false;" class="tag-decoration">testing-v0</div><div id="tag2978" onclick="CopyToClipboard('tag2978');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11569" onclick="CopyToClipboard('tag11569');return false;" class="tag-decoration">testing-v0.24.1184</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/067b2f3f33be828a89c3657175fa91718b351934" target="_blank">Version update: 0.24.1178 => 0.24.1184</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22295085676" target="_blank">2026-02-23 06:17:15</a></td></tr>
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
