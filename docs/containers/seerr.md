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
<tr><td><div id="tag28422" onclick="CopyToClipboard('tag28422');return false;" class="tag-decoration">nightly</div><div id="tag1164" onclick="CopyToClipboard('tag1164');return false;" class="tag-decoration">nightly-4ca0ebc</div><div id="tag28352" onclick="CopyToClipboard('tag28352');return false;" class="tag-decoration">nightly-8ccd0f624530035089998e76b57a627f58c7eb7f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/4ca0ebcc0d81e98114a811eb8630702171cb3a9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29937740006" target="_blank">2026-07-22 16:22:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28217" onclick="CopyToClipboard('tag28217');return false;" class="tag-decoration">release</div><div id="tag19612" onclick="CopyToClipboard('tag19612');return false;" class="tag-decoration">release-141b813</div><div id="tag18340" onclick="CopyToClipboard('tag18340');return false;" class="tag-decoration">release-3.3.0</div><div id="tag21255" onclick="CopyToClipboard('tag21255');return false;" class="tag-decoration">release-v3</div><div id="tag1747" onclick="CopyToClipboard('tag1747');return false;" class="tag-decoration">release-v3.3</div><div id="tag240" onclick="CopyToClipboard('tag240');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/141b8133bc9ef2ae4a8c24eeaff795129d5e7330" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29681390598" target="_blank">2026-07-19 09:20:08</a></td></tr>
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
