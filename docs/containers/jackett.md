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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13899" onclick="CopyToClipboard('tag13899');return false;" class="tag-decoration">release</div><div id="tag19916" onclick="CopyToClipboard('tag19916');return false;" class="tag-decoration">release-ca8f0a3</div><div id="tag2550" onclick="CopyToClipboard('tag2550');return false;" class="tag-decoration">release-0.24.2014</div><div id="tag8620" onclick="CopyToClipboard('tag8620');return false;" class="tag-decoration">release-v0</div><div id="tag25581" onclick="CopyToClipboard('tag25581');return false;" class="tag-decoration">release-v0.24</div><div id="tag11636" onclick="CopyToClipboard('tag11636');return false;" class="tag-decoration">release-v0.24.2014</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ca8f0a36b40e266a780068b66e30d1228ff902dd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26937018529" target="_blank">2026-06-04 07:18:30</a></td></tr>
<tr><td><div id="tag17809" onclick="CopyToClipboard('tag17809');return false;" class="tag-decoration">testing</div><div id="tag1636" onclick="CopyToClipboard('tag1636');return false;" class="tag-decoration">testing-a570d68</div><div id="tag14939" onclick="CopyToClipboard('tag14939');return false;" class="tag-decoration">testing-0.24.2014</div><div id="tag23529" onclick="CopyToClipboard('tag23529');return false;" class="tag-decoration">testing-v0</div><div id="tag2930" onclick="CopyToClipboard('tag2930');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24508" onclick="CopyToClipboard('tag24508');return false;" class="tag-decoration">testing-v0.24.2014</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a570d681d29dc48b8fabdfc1a5137c07e5a50ae0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26937018979" target="_blank">2026-06-04 07:18:30</a></td></tr>
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
