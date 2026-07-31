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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28907" onclick="CopyToClipboard('tag28907');return false;" class="tag-decoration">release</div><div id="tag1683" onclick="CopyToClipboard('tag1683');return false;" class="tag-decoration">release-57e6734</div><div id="tag11772" onclick="CopyToClipboard('tag11772');return false;" class="tag-decoration">release-0.24.2304</div><div id="tag8801" onclick="CopyToClipboard('tag8801');return false;" class="tag-decoration">release-v0</div><div id="tag3048" onclick="CopyToClipboard('tag3048');return false;" class="tag-decoration">release-v0.24</div><div id="tag16361" onclick="CopyToClipboard('tag16361');return false;" class="tag-decoration">release-v0.24.2304</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/57e67346fc8f74ba407209de063849aae8635322" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30608221005" target="_blank">2026-07-31 05:57:18</a></td></tr>
<tr><td><div id="tag24541" onclick="CopyToClipboard('tag24541');return false;" class="tag-decoration">testing</div><div id="tag17462" onclick="CopyToClipboard('tag17462');return false;" class="tag-decoration">testing-91bd7df</div><div id="tag20797" onclick="CopyToClipboard('tag20797');return false;" class="tag-decoration">testing-0.24.2304</div><div id="tag30441" onclick="CopyToClipboard('tag30441');return false;" class="tag-decoration">testing-v0</div><div id="tag1090" onclick="CopyToClipboard('tag1090');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9575" onclick="CopyToClipboard('tag9575');return false;" class="tag-decoration">testing-v0.24.2304</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/91bd7dfd2a17400bbb0b5d0fe140146b3c0a96db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30608224115" target="_blank">2026-07-31 05:57:22</a></td></tr>
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
