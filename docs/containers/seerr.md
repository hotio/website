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
<tr><td><div id="tag5412" onclick="CopyToClipboard('tag5412');return false;" class="tag-decoration">nightly</div><div id="tag28113" onclick="CopyToClipboard('tag28113');return false;" class="tag-decoration">nightly-4502003</div><div id="tag23457" onclick="CopyToClipboard('tag23457');return false;" class="tag-decoration">nightly-92f8404326cf6d8b1c3a9412dbfc6011e26f4112</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/450200319d65e76c62ad1a11985762d6b397e000" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32919747684" target="_blank">2026-08-26 01:38:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21831" onclick="CopyToClipboard('tag21831');return false;" class="tag-decoration">release</div><div id="tag17485" onclick="CopyToClipboard('tag17485');return false;" class="tag-decoration">release-86fa62a</div><div id="tag12302" onclick="CopyToClipboard('tag12302');return false;" class="tag-decoration">release-3.4.1</div><div id="tag29972" onclick="CopyToClipboard('tag29972');return false;" class="tag-decoration">release-v3</div><div id="tag19538" onclick="CopyToClipboard('tag19538');return false;" class="tag-decoration">release-v3.4</div><div id="tag18649" onclick="CopyToClipboard('tag18649');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/86fa62a2c771c82c9850d902636e6053b32bb757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32919754861" target="_blank">2026-08-26 01:38:41</a></td></tr>
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
