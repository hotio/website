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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3696" onclick="CopyToClipboard('tag3696');return false;" class="tag-decoration">release</div><div id="tag23217" onclick="CopyToClipboard('tag23217');return false;" class="tag-decoration">release-024a88f</div><div id="tag18273" onclick="CopyToClipboard('tag18273');return false;" class="tag-decoration">release-0.24.1502</div><div id="tag11769" onclick="CopyToClipboard('tag11769');return false;" class="tag-decoration">release-v0</div><div id="tag20143" onclick="CopyToClipboard('tag20143');return false;" class="tag-decoration">release-v0.24</div><div id="tag6247" onclick="CopyToClipboard('tag6247');return false;" class="tag-decoration">release-v0.24.1502</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/024a88f7e1b2e2f9f4dcddb7b1028604d1e070d0" target="_blank">Version update: 0.24.1489 => 0.24.1502</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23782741083" target="_blank">2026-03-31 05:54:43</a></td></tr>
<tr><td><div id="tag17900" onclick="CopyToClipboard('tag17900');return false;" class="tag-decoration">testing</div><div id="tag18113" onclick="CopyToClipboard('tag18113');return false;" class="tag-decoration">testing-8e55922</div><div id="tag25833" onclick="CopyToClipboard('tag25833');return false;" class="tag-decoration">testing-0.24.1502</div><div id="tag22952" onclick="CopyToClipboard('tag22952');return false;" class="tag-decoration">testing-v0</div><div id="tag8888" onclick="CopyToClipboard('tag8888');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19730" onclick="CopyToClipboard('tag19730');return false;" class="tag-decoration">testing-v0.24.1502</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8e55922925e9a801c7f230a0e20641710a632ff1" target="_blank">Version update: 0.24.1489 => 0.24.1502</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23782741627" target="_blank">2026-03-31 05:54:44</a></td></tr>
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
