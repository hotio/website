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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30625" onclick="CopyToClipboard('tag30625');return false;" class="tag-decoration">release</div><div id="tag13059" onclick="CopyToClipboard('tag13059');return false;" class="tag-decoration">release-78296fc</div><div id="tag32446" onclick="CopyToClipboard('tag32446');return false;" class="tag-decoration">release-0.24.903</div><div id="tag1559" onclick="CopyToClipboard('tag1559');return false;" class="tag-decoration">release-v0</div><div id="tag6754" onclick="CopyToClipboard('tag6754');return false;" class="tag-decoration">release-v0.24</div><div id="tag21327" onclick="CopyToClipboard('tag21327');return false;" class="tag-decoration">release-v0.24.903</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/78296fc33c353e1904748d26c89ca6167d01e923" target="_blank">Version update: 0.24.900 => 0.24.903</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21276280297" target="_blank">2026-01-23 05:57:09</a></td></tr>
<tr><td><div id="tag667" onclick="CopyToClipboard('tag667');return false;" class="tag-decoration">testing</div><div id="tag16564" onclick="CopyToClipboard('tag16564');return false;" class="tag-decoration">testing-7e9a6b6</div><div id="tag23096" onclick="CopyToClipboard('tag23096');return false;" class="tag-decoration">testing-0.24.912</div><div id="tag16231" onclick="CopyToClipboard('tag16231');return false;" class="tag-decoration">testing-v0</div><div id="tag26491" onclick="CopyToClipboard('tag26491');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3529" onclick="CopyToClipboard('tag3529');return false;" class="tag-decoration">testing-v0.24.912</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7e9a6b6065fccf1be244f65626c1476d4c704d28" target="_blank">Version update: 0.24.903 => 0.24.912</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21310834065" target="_blank">2026-01-24 06:38:21</a></td></tr>
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
