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
<tr><td><div id="tag2244" onclick="CopyToClipboard('tag2244');return false;" class="tag-decoration">nightly</div><div id="tag9802" onclick="CopyToClipboard('tag9802');return false;" class="tag-decoration">nightly-3f7d022</div><div id="tag11647" onclick="CopyToClipboard('tag11647');return false;" class="tag-decoration">nightly-6fa7473dbb3bc0a44fd47748435f53a3480cc4da</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/3f7d022ab8f5c3590669539204eaad5b3d729a2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34954909917" target="_blank">2026-09-15 09:52:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7571" onclick="CopyToClipboard('tag7571');return false;" class="tag-decoration">release</div><div id="tag19885" onclick="CopyToClipboard('tag19885');return false;" class="tag-decoration">release-e3826e6</div><div id="tag30848" onclick="CopyToClipboard('tag30848');return false;" class="tag-decoration">release-3.4.1</div><div id="tag3624" onclick="CopyToClipboard('tag3624');return false;" class="tag-decoration">release-v3</div><div id="tag27865" onclick="CopyToClipboard('tag27865');return false;" class="tag-decoration">release-v3.4</div><div id="tag19071" onclick="CopyToClipboard('tag19071');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/e3826e6ef42bce4af9a7ef846062a5a4c2b41df9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34954906860" target="_blank">2026-09-15 09:52:24</a></td></tr>
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
