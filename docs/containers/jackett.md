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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21206" onclick="CopyToClipboard('tag21206');return false;" class="tag-decoration">release</div><div id="tag16063" onclick="CopyToClipboard('tag16063');return false;" class="tag-decoration">release-f733c26</div><div id="tag7608" onclick="CopyToClipboard('tag7608');return false;" class="tag-decoration">release-0.24.2419</div><div id="tag130" onclick="CopyToClipboard('tag130');return false;" class="tag-decoration">release-v0</div><div id="tag25083" onclick="CopyToClipboard('tag25083');return false;" class="tag-decoration">release-v0.24</div><div id="tag18954" onclick="CopyToClipboard('tag18954');return false;" class="tag-decoration">release-v0.24.2419</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f733c26ddbb473c4278d7fb1a9fe9037325e233c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32329005490" target="_blank">2026-08-20 03:39:14</a></td></tr>
<tr><td><div id="tag16550" onclick="CopyToClipboard('tag16550');return false;" class="tag-decoration">testing</div><div id="tag20297" onclick="CopyToClipboard('tag20297');return false;" class="tag-decoration">testing-7249285</div><div id="tag28097" onclick="CopyToClipboard('tag28097');return false;" class="tag-decoration">testing-0.24.2419</div><div id="tag10408" onclick="CopyToClipboard('tag10408');return false;" class="tag-decoration">testing-v0</div><div id="tag2498" onclick="CopyToClipboard('tag2498');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24231" onclick="CopyToClipboard('tag24231');return false;" class="tag-decoration">testing-v0.24.2419</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7249285a547fe3d0821a308ff7beb0825a79b699" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32223568132" target="_blank">2026-08-19 06:28:35</a></td></tr>
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
