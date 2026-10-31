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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12622" onclick="CopyToClipboard('tag12622');return false;" class="tag-decoration">release</div><div id="tag18302" onclick="CopyToClipboard('tag18302');return false;" class="tag-decoration">release-8894c19</div><div id="tag13955" onclick="CopyToClipboard('tag13955');return false;" class="tag-decoration">release-0.24.2981</div><div id="tag23846" onclick="CopyToClipboard('tag23846');return false;" class="tag-decoration">release-v0</div><div id="tag26125" onclick="CopyToClipboard('tag26125');return false;" class="tag-decoration">release-v0.24</div><div id="tag28875" onclick="CopyToClipboard('tag28875');return false;" class="tag-decoration">release-v0.24.2981</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8894c1940e6185620769ca22d1b21646a7942ecd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41182003754" target="_blank">2026-10-31 07:47:47</a></td></tr>
<tr><td><div id="tag19412" onclick="CopyToClipboard('tag19412');return false;" class="tag-decoration">testing</div><div id="tag6166" onclick="CopyToClipboard('tag6166');return false;" class="tag-decoration">testing-f9c51cd</div><div id="tag22812" onclick="CopyToClipboard('tag22812');return false;" class="tag-decoration">testing-0.24.2977</div><div id="tag3978" onclick="CopyToClipboard('tag3978');return false;" class="tag-decoration">testing-v0</div><div id="tag590" onclick="CopyToClipboard('tag590');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18683" onclick="CopyToClipboard('tag18683');return false;" class="tag-decoration">testing-v0.24.2977</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f9c51cdd5b1d105e649e295d0cf004a1af9c84ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41042145251" target="_blank">2026-10-30 10:37:47</a></td></tr>
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
