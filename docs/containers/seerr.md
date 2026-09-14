---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag17289" onclick="CopyToClipboard('tag17289');return false;" class="tag-decoration">nightly</div><div id="tag9567" onclick="CopyToClipboard('tag9567');return false;" class="tag-decoration">nightly-3c48a5a</div><div id="tag7279" onclick="CopyToClipboard('tag7279');return false;" class="tag-decoration">nightly-abe2f3bb805429c4318afbc6f1684ce94c2d1e8e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/3c48a5a56ecc76355c506c535745cacb2c94ec5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34833203176" target="_blank">2026-09-14 10:26:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2518" onclick="CopyToClipboard('tag2518');return false;" class="tag-decoration">release</div><div id="tag15627" onclick="CopyToClipboard('tag15627');return false;" class="tag-decoration">release-b885ae7</div><div id="tag30900" onclick="CopyToClipboard('tag30900');return false;" class="tag-decoration">release-3.4.1</div><div id="tag8348" onclick="CopyToClipboard('tag8348');return false;" class="tag-decoration">release-v3</div><div id="tag4661" onclick="CopyToClipboard('tag4661');return false;" class="tag-decoration">release-v3.4</div><div id="tag19361" onclick="CopyToClipboard('tag19361');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b885ae71bdeef8335a5c09a51aad83816cb80df6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34482806043" target="_blank">2026-09-10 13:27:54</a></td></tr>
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
