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
<tr><td><div id="tag15252" onclick="CopyToClipboard('tag15252');return false;" class="tag-decoration">nightly</div><div id="tag16814" onclick="CopyToClipboard('tag16814');return false;" class="tag-decoration">nightly-1ce2df3</div><div id="tag16792" onclick="CopyToClipboard('tag16792');return false;" class="tag-decoration">nightly-2.5.0.5422</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/1ce2df3da86eb2ff704a7f523f537d367d1734c5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27914699264" target="_blank">2026-06-21 19:14:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1931" onclick="CopyToClipboard('tag1931');return false;" class="tag-decoration">release</div><div id="tag1490" onclick="CopyToClipboard('tag1490');return false;" class="tag-decoration">release-fbc4c5c</div><div id="tag1499" onclick="CopyToClipboard('tag1499');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fbc4c5cc5bf4b173c51b1827414d7453985f7c47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27871066654" target="_blank">2026-06-20 12:23:11</a></td></tr>
<tr><td><div id="tag17128" onclick="CopyToClipboard('tag17128');return false;" class="tag-decoration">testing</div><div id="tag22802" onclick="CopyToClipboard('tag22802');return false;" class="tag-decoration">testing-f4483e5</div><div id="tag29333" onclick="CopyToClipboard('tag29333');return false;" class="tag-decoration">testing-2.4.0.5397</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/f4483e52b3006ec6307977ce8c32df2234020cee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27914699692" target="_blank">2026-06-21 19:14:38</a></td></tr>
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
