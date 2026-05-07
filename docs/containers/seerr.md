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
<tr><td><div id="tag1534" onclick="CopyToClipboard('tag1534');return false;" class="tag-decoration">nightly</div><div id="tag8293" onclick="CopyToClipboard('tag8293');return false;" class="tag-decoration">nightly-fc12bd7</div><div id="tag32059" onclick="CopyToClipboard('tag32059');return false;" class="tag-decoration">nightly-f093c697235f46bf0a34c896e4a21b971caf606c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/fc12bd76bc23bf66acee86181d1cb31624e5612e" target="_blank">Version update: 9b7b50bff6f4031ec49c85320e68ab927c9ab282 => f093c697235f46bf0a34c896e4a21b971caf606c</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25520821638" target="_blank">2026-05-07 20:39:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28818" onclick="CopyToClipboard('tag28818');return false;" class="tag-decoration">release</div><div id="tag31260" onclick="CopyToClipboard('tag31260');return false;" class="tag-decoration">release-9c55a41</div><div id="tag29228" onclick="CopyToClipboard('tag29228');return false;" class="tag-decoration">release-3.2.0</div><div id="tag9486" onclick="CopyToClipboard('tag9486');return false;" class="tag-decoration">release-v3</div><div id="tag18829" onclick="CopyToClipboard('tag18829');return false;" class="tag-decoration">release-v3.2</div><div id="tag9169" onclick="CopyToClipboard('tag9169');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
