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
<tr><td><div id="tag6260" onclick="CopyToClipboard('tag6260');return false;" class="tag-decoration">nightly</div><div id="tag29617" onclick="CopyToClipboard('tag29617');return false;" class="tag-decoration">nightly-90f46f2</div><div id="tag29047" onclick="CopyToClipboard('tag29047');return false;" class="tag-decoration">nightly-7a76142ae337ce27779109b2b47bdc14883e93b9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/90f46f206a9ccb1e0cd6876a5a234efe30fef0b6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34728703530" target="_blank">2026-09-13 00:43:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19779" onclick="CopyToClipboard('tag19779');return false;" class="tag-decoration">release</div><div id="tag19537" onclick="CopyToClipboard('tag19537');return false;" class="tag-decoration">release-b885ae7</div><div id="tag27968" onclick="CopyToClipboard('tag27968');return false;" class="tag-decoration">release-3.4.1</div><div id="tag19420" onclick="CopyToClipboard('tag19420');return false;" class="tag-decoration">release-v3</div><div id="tag32200" onclick="CopyToClipboard('tag32200');return false;" class="tag-decoration">release-v3.4</div><div id="tag6087" onclick="CopyToClipboard('tag6087');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b885ae71bdeef8335a5c09a51aad83816cb80df6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34482806043" target="_blank">2026-09-10 13:27:54</a></td></tr>
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
