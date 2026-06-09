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
<tr><td><div id="tag32237" onclick="CopyToClipboard('tag32237');return false;" class="tag-decoration">nightly</div><div id="tag22448" onclick="CopyToClipboard('tag22448');return false;" class="tag-decoration">nightly-2d2f004</div><div id="tag27975" onclick="CopyToClipboard('tag27975');return false;" class="tag-decoration">nightly-6e9ba06e88d283c4c5c409c9fdac6d74ed8feaa1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2d2f0041adbf67f3956b76485ea1b6d11232f1be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27203000705" target="_blank">2026-06-09 11:27:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22189" onclick="CopyToClipboard('tag22189');return false;" class="tag-decoration">release</div><div id="tag13261" onclick="CopyToClipboard('tag13261');return false;" class="tag-decoration">release-8ed8b88</div><div id="tag11375" onclick="CopyToClipboard('tag11375');return false;" class="tag-decoration">release-3.3.0</div><div id="tag456" onclick="CopyToClipboard('tag456');return false;" class="tag-decoration">release-v3</div><div id="tag31532" onclick="CopyToClipboard('tag31532');return false;" class="tag-decoration">release-v3.3</div><div id="tag15075" onclick="CopyToClipboard('tag15075');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8ed8b883d8ab9f624270b81ee78d703379f2a160" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26818360701" target="_blank">2026-06-02 12:01:23</a></td></tr>
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
