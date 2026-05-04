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
<tr><td><div id="tag29665" onclick="CopyToClipboard('tag29665');return false;" class="tag-decoration">nightly</div><div id="tag14908" onclick="CopyToClipboard('tag14908');return false;" class="tag-decoration">nightly-a46b1e9</div><div id="tag23964" onclick="CopyToClipboard('tag23964');return false;" class="tag-decoration">nightly-5267611472d758139b4d28a63b7635779333fd16</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a46b1e99ffb30a991a205b9d4ec8a3455f8af944" target="_blank">Version update: 550c3bce430e69c33235c41a15cad4665e22b35e => 5267611472d758139b4d28a63b7635779333fd16</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25344979037" target="_blank">2026-05-04 21:39:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26444" onclick="CopyToClipboard('tag26444');return false;" class="tag-decoration">release</div><div id="tag15601" onclick="CopyToClipboard('tag15601');return false;" class="tag-decoration">release-9c55a41</div><div id="tag31721" onclick="CopyToClipboard('tag31721');return false;" class="tag-decoration">release-3.2.0</div><div id="tag22607" onclick="CopyToClipboard('tag22607');return false;" class="tag-decoration">release-v3</div><div id="tag1502" onclick="CopyToClipboard('tag1502');return false;" class="tag-decoration">release-v3.2</div><div id="tag32189" onclick="CopyToClipboard('tag32189');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
