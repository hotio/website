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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3156" onclick="CopyToClipboard('tag3156');return false;" class="tag-decoration">release</div><div id="tag18162" onclick="CopyToClipboard('tag18162');return false;" class="tag-decoration">release-48bf2bd</div><div id="tag14352" onclick="CopyToClipboard('tag14352');return false;" class="tag-decoration">release-0.24.1008</div><div id="tag4967" onclick="CopyToClipboard('tag4967');return false;" class="tag-decoration">release-v0</div><div id="tag10115" onclick="CopyToClipboard('tag10115');return false;" class="tag-decoration">release-v0.24</div><div id="tag10452" onclick="CopyToClipboard('tag10452');return false;" class="tag-decoration">release-v0.24.1008</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/48bf2bd2808535bbe25e4736fc82e2dae490f726" target="_blank">Version update: 0.24.1003 => 0.24.1008</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21579467503" target="_blank">2026-02-02 06:15:07</a></td></tr>
<tr><td><div id="tag23693" onclick="CopyToClipboard('tag23693');return false;" class="tag-decoration">testing</div><div id="tag25358" onclick="CopyToClipboard('tag25358');return false;" class="tag-decoration">testing-65c7b5f</div><div id="tag532" onclick="CopyToClipboard('tag532');return false;" class="tag-decoration">testing-0.24.1012</div><div id="tag8705" onclick="CopyToClipboard('tag8705');return false;" class="tag-decoration">testing-v0</div><div id="tag21860" onclick="CopyToClipboard('tag21860');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22980" onclick="CopyToClipboard('tag22980');return false;" class="tag-decoration">testing-v0.24.1012</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/65c7b5f30b0f988707235bed6d00307e2217ffcd" target="_blank">Version update: 0.24.1008 => 0.24.1012</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21587674037" target="_blank">2026-02-02 11:07:50</a></td></tr>
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
