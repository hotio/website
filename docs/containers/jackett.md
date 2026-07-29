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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2514" onclick="CopyToClipboard('tag2514');return false;" class="tag-decoration">release</div><div id="tag20096" onclick="CopyToClipboard('tag20096');return false;" class="tag-decoration">release-43a8620</div><div id="tag25531" onclick="CopyToClipboard('tag25531');return false;" class="tag-decoration">release-0.24.2292</div><div id="tag5904" onclick="CopyToClipboard('tag5904');return false;" class="tag-decoration">release-v0</div><div id="tag10404" onclick="CopyToClipboard('tag10404');return false;" class="tag-decoration">release-v0.24</div><div id="tag8247" onclick="CopyToClipboard('tag8247');return false;" class="tag-decoration">release-v0.24.2292</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/43a86203576632eb6bac38bc85eb6a1459fe198f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30435373164" target="_blank">2026-07-29 08:24:14</a></td></tr>
<tr><td><div id="tag27897" onclick="CopyToClipboard('tag27897');return false;" class="tag-decoration">testing</div><div id="tag20186" onclick="CopyToClipboard('tag20186');return false;" class="tag-decoration">testing-68e00d3</div><div id="tag18564" onclick="CopyToClipboard('tag18564');return false;" class="tag-decoration">testing-0.24.2292</div><div id="tag28404" onclick="CopyToClipboard('tag28404');return false;" class="tag-decoration">testing-v0</div><div id="tag21799" onclick="CopyToClipboard('tag21799');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22124" onclick="CopyToClipboard('tag22124');return false;" class="tag-decoration">testing-v0.24.2292</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/68e00d387ef4cbd3761a6573241faa1d8bf4367d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30435382211" target="_blank">2026-07-29 08:24:18</a></td></tr>
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
