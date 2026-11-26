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
<tr><td><div id="tag10119" onclick="CopyToClipboard('tag10119');return false;" class="tag-decoration">nightly</div><div id="tag22898" onclick="CopyToClipboard('tag22898');return false;" class="tag-decoration">nightly-a1d7f11</div><div id="tag7601" onclick="CopyToClipboard('tag7601');return false;" class="tag-decoration">nightly-111ef4b1933e9477371482d98fd82ab35a132ffd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a1d7f11d48d0f221d101425fab7a983c151077f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/45843143467" target="_blank">2026-11-26 14:51:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28226" onclick="CopyToClipboard('tag28226');return false;" class="tag-decoration">release</div><div id="tag11768" onclick="CopyToClipboard('tag11768');return false;" class="tag-decoration">release-e90bea6</div><div id="tag26425" onclick="CopyToClipboard('tag26425');return false;" class="tag-decoration">release-3.5.2</div><div id="tag5839" onclick="CopyToClipboard('tag5839');return false;" class="tag-decoration">release-v3</div><div id="tag15611" onclick="CopyToClipboard('tag15611');return false;" class="tag-decoration">release-v3.5</div><div id="tag2222" onclick="CopyToClipboard('tag2222');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/e90bea67ac5f5daf0d74eefd6e3267b75a10587e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/45757401992" target="_blank">2026-11-26 04:47:12</a></td></tr>
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
