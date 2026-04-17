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
<tr><td><div id="tag18706" onclick="CopyToClipboard('tag18706');return false;" class="tag-decoration">nightly</div><div id="tag18213" onclick="CopyToClipboard('tag18213');return false;" class="tag-decoration">nightly-96ebe2f</div><div id="tag9991" onclick="CopyToClipboard('tag9991');return false;" class="tag-decoration">nightly-cd257bad2aad9545a4764b069134449e6e78320e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/96ebe2ff26b446634540283bb7003388d0d23634" target="_blank">Version update: 7861db4941024ea614fef02eecfa0ddc4e743519 => cd257bad2aad9545a4764b069134449e6e78320e</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24565736895" target="_blank">2026-04-17 12:45:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29159" onclick="CopyToClipboard('tag29159');return false;" class="tag-decoration">release</div><div id="tag28508" onclick="CopyToClipboard('tag28508');return false;" class="tag-decoration">release-9c55a41</div><div id="tag16481" onclick="CopyToClipboard('tag16481');return false;" class="tag-decoration">release-3.2.0</div><div id="tag21139" onclick="CopyToClipboard('tag21139');return false;" class="tag-decoration">release-v3</div><div id="tag6767" onclick="CopyToClipboard('tag6767');return false;" class="tag-decoration">release-v3.2</div><div id="tag10735" onclick="CopyToClipboard('tag10735');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
