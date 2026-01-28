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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7612" onclick="CopyToClipboard('tag7612');return false;" class="tag-decoration">release</div><div id="tag10748" onclick="CopyToClipboard('tag10748');return false;" class="tag-decoration">release-d9e0e7f</div><div id="tag26529" onclick="CopyToClipboard('tag26529');return false;" class="tag-decoration">release-0.24.957</div><div id="tag8817" onclick="CopyToClipboard('tag8817');return false;" class="tag-decoration">release-v0</div><div id="tag25474" onclick="CopyToClipboard('tag25474');return false;" class="tag-decoration">release-v0.24</div><div id="tag17077" onclick="CopyToClipboard('tag17077');return false;" class="tag-decoration">release-v0.24.957</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d9e0e7fc4297d89cfcc9c8a9954286437e59cf81" target="_blank">Version update: 0.24.955 => 0.24.957</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21443455890" target="_blank">2026-01-28 15:04:58</a></td></tr>
<tr><td><div id="tag24375" onclick="CopyToClipboard('tag24375');return false;" class="tag-decoration">testing</div><div id="tag22775" onclick="CopyToClipboard('tag22775');return false;" class="tag-decoration">testing-f3aeef1</div><div id="tag32364" onclick="CopyToClipboard('tag32364');return false;" class="tag-decoration">testing-0.24.955</div><div id="tag13568" onclick="CopyToClipboard('tag13568');return false;" class="tag-decoration">testing-v0</div><div id="tag4358" onclick="CopyToClipboard('tag4358');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27339" onclick="CopyToClipboard('tag27339');return false;" class="tag-decoration">testing-v0.24.955</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f3aeef1752425b30b153333fc19c983d97558f1d" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21428842089" target="_blank">2026-01-28 07:14:26</a></td></tr>
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
