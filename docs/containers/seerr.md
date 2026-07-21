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
<tr><td><div id="tag24571" onclick="CopyToClipboard('tag24571');return false;" class="tag-decoration">nightly</div><div id="tag31436" onclick="CopyToClipboard('tag31436');return false;" class="tag-decoration">nightly-8993e54</div><div id="tag32617" onclick="CopyToClipboard('tag32617');return false;" class="tag-decoration">nightly-46d80335991cc7c5a9e1c501e274f5a90a6c07c9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/8993e54d4c11ae33cb7d89a014292dac74cba33b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29798975337" target="_blank">2026-07-21 03:36:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31688" onclick="CopyToClipboard('tag31688');return false;" class="tag-decoration">release</div><div id="tag10778" onclick="CopyToClipboard('tag10778');return false;" class="tag-decoration">release-141b813</div><div id="tag1938" onclick="CopyToClipboard('tag1938');return false;" class="tag-decoration">release-3.3.0</div><div id="tag5063" onclick="CopyToClipboard('tag5063');return false;" class="tag-decoration">release-v3</div><div id="tag19648" onclick="CopyToClipboard('tag19648');return false;" class="tag-decoration">release-v3.3</div><div id="tag8015" onclick="CopyToClipboard('tag8015');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/141b8133bc9ef2ae4a8c24eeaff795129d5e7330" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29681390598" target="_blank">2026-07-19 09:20:08</a></td></tr>
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
