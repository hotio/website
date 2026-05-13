---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26209" onclick="CopyToClipboard('tag26209');return false;" class="tag-decoration">nightly</div><div id="tag14871" onclick="CopyToClipboard('tag14871');return false;" class="tag-decoration">nightly-5ff1920</div><div id="tag21242" onclick="CopyToClipboard('tag21242');return false;" class="tag-decoration">nightly-7aa1470ce6a2a56d4bb7a92d14f4c72cb065b746</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/5ff1920c23c0d0647a20d464573b5f291839dec6" target="_blank">Version update: cf8720515c98130436fa321fc8498b3b1df38772 => 7aa1470ce6a2a56d4bb7a92d14f4c72cb065b746</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25802303935" target="_blank">2026-05-13 13:30:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16266" onclick="CopyToClipboard('tag16266');return false;" class="tag-decoration">release</div><div id="tag21176" onclick="CopyToClipboard('tag21176');return false;" class="tag-decoration">release-515b38f</div><div id="tag19917" onclick="CopyToClipboard('tag19917');return false;" class="tag-decoration">release-3.2.0</div><div id="tag14245" onclick="CopyToClipboard('tag14245');return false;" class="tag-decoration">release-v3</div><div id="tag19861" onclick="CopyToClipboard('tag19861');return false;" class="tag-decoration">release-v3.2</div><div id="tag31724" onclick="CopyToClipboard('tag31724');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/515b38fe138874f893bf72af5f6e90d4e0996d96" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25715025698" target="_blank">2026-05-12 05:18:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
