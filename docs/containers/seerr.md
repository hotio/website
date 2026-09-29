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
<tr><td><div id="tag21809" onclick="CopyToClipboard('tag21809');return false;" class="tag-decoration">nightly</div><div id="tag22308" onclick="CopyToClipboard('tag22308');return false;" class="tag-decoration">nightly-78a66bb</div><div id="tag4629" onclick="CopyToClipboard('tag4629');return false;" class="tag-decoration">nightly-e9590629b8215676a352ec2413d7c8ee7e6974df</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/78a66bbce48cc14507f22b591d01c84d4fe07895" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36591062122" target="_blank">2026-09-29 15:33:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9006" onclick="CopyToClipboard('tag9006');return false;" class="tag-decoration">release</div><div id="tag12731" onclick="CopyToClipboard('tag12731');return false;" class="tag-decoration">release-20410e6</div><div id="tag21521" onclick="CopyToClipboard('tag21521');return false;" class="tag-decoration">release-3.5.0</div><div id="tag18350" onclick="CopyToClipboard('tag18350');return false;" class="tag-decoration">release-v3</div><div id="tag2130" onclick="CopyToClipboard('tag2130');return false;" class="tag-decoration">release-v3.5</div><div id="tag18895" onclick="CopyToClipboard('tag18895');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/20410e6f6a6afd132d3e3abc4f503bcd64adb5e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36362292209" target="_blank">2026-09-28 00:27:26</a></td></tr>
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
