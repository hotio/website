---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22092" onclick="CopyToClipboard('tag22092');return false;" class="tag-decoration">nightly</div><div id="tag27977" onclick="CopyToClipboard('tag27977');return false;" class="tag-decoration">nightly-fe6b2c9</div><div id="tag11809" onclick="CopyToClipboard('tag11809');return false;" class="tag-decoration">nightly-2.5.0.5422</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/fe6b2c9d48e77df1f4b2003f5b735adf1a032d50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27871066192" target="_blank">2026-06-20 12:23:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7544" onclick="CopyToClipboard('tag7544');return false;" class="tag-decoration">release</div><div id="tag22112" onclick="CopyToClipboard('tag22112');return false;" class="tag-decoration">release-fbc4c5c</div><div id="tag1584" onclick="CopyToClipboard('tag1584');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fbc4c5cc5bf4b173c51b1827414d7453985f7c47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27871066654" target="_blank">2026-06-20 12:23:11</a></td></tr>
<tr><td><div id="tag9356" onclick="CopyToClipboard('tag9356');return false;" class="tag-decoration">testing</div><div id="tag2330" onclick="CopyToClipboard('tag2330');return false;" class="tag-decoration">testing-282a984</div><div id="tag216" onclick="CopyToClipboard('tag216');return false;" class="tag-decoration">testing-2.4.0.5397</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/282a984983f6f3b889a1473dee2c0555dfb17075" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27271389319" target="_blank">2026-06-10 10:55:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
