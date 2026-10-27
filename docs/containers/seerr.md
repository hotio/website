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
<tr><td><div id="tag514" onclick="CopyToClipboard('tag514');return false;" class="tag-decoration">nightly</div><div id="tag12631" onclick="CopyToClipboard('tag12631');return false;" class="tag-decoration">nightly-74d5516</div><div id="tag4669" onclick="CopyToClipboard('tag4669');return false;" class="tag-decoration">nightly-84eae6727cbd57f280232ec3761b4878b513af98</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/74d5516942a587df53b2f164b57c3b3c00abb085" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/40519030186" target="_blank">2026-10-27 14:13:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1236" onclick="CopyToClipboard('tag1236');return false;" class="tag-decoration">release</div><div id="tag15687" onclick="CopyToClipboard('tag15687');return false;" class="tag-decoration">release-b4a65e7</div><div id="tag28408" onclick="CopyToClipboard('tag28408');return false;" class="tag-decoration">release-3.5.1</div><div id="tag18900" onclick="CopyToClipboard('tag18900');return false;" class="tag-decoration">release-v3</div><div id="tag11915" onclick="CopyToClipboard('tag11915');return false;" class="tag-decoration">release-v3.5</div><div id="tag10993" onclick="CopyToClipboard('tag10993');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b4a65e7f94116b83996c5f8d5d1db2bf636a48b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/40220442177" target="_blank">2026-10-25 18:16:13</a></td></tr>
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
