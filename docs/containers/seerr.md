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
<tr><td><div id="tag8308" onclick="CopyToClipboard('tag8308');return false;" class="tag-decoration">nightly</div><div id="tag14426" onclick="CopyToClipboard('tag14426');return false;" class="tag-decoration">nightly-65bb41c</div><div id="tag9491" onclick="CopyToClipboard('tag9491');return false;" class="tag-decoration">nightly-ab1837c7a540c4a75bdc8e0bb099fb8c97ac200b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/65bb41cc820fcc0ff57f145fef2a64163701a2b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/44307547117" target="_blank">2026-11-18 12:49:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26542" onclick="CopyToClipboard('tag26542');return false;" class="tag-decoration">release</div><div id="tag15573" onclick="CopyToClipboard('tag15573');return false;" class="tag-decoration">release-01def42</div><div id="tag23027" onclick="CopyToClipboard('tag23027');return false;" class="tag-decoration">release-3.5.2</div><div id="tag1587" onclick="CopyToClipboard('tag1587');return false;" class="tag-decoration">release-v3</div><div id="tag26060" onclick="CopyToClipboard('tag26060');return false;" class="tag-decoration">release-v3.5</div><div id="tag18914" onclick="CopyToClipboard('tag18914');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/01def42c59a2351ced3a757e0263feabd3a2b6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/43275363722" target="_blank">2026-11-12 18:00:40</a></td></tr>
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
