---
hide:
  - toc
title: hotio/slskd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25007" onclick="CopyToClipboard('tag25007');return false;" class="tag-decoration">nightly</div><div id="tag26153" onclick="CopyToClipboard('tag26153');return false;" class="tag-decoration">nightly-cf989fe</div><div id="tag19405" onclick="CopyToClipboard('tag19405');return false;" class="tag-decoration">nightly-0.26.2.65534-a4cce04d</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/cf989fe65cd5e0a388d3b88167ce7433096b6e70" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/40161755085" target="_blank">2026-10-25 04:24:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9281" onclick="CopyToClipboard('tag9281');return false;" class="tag-decoration">release</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">release-52f7e4a</div><div id="tag21361" onclick="CopyToClipboard('tag21361');return false;" class="tag-decoration">release-0.26.2</div><div id="tag14033" onclick="CopyToClipboard('tag14033');return false;" class="tag-decoration">release-v0</div><div id="tag14861" onclick="CopyToClipboard('tag14861');return false;" class="tag-decoration">release-v0.26</div><div id="tag16597" onclick="CopyToClipboard('tag16597');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/52f7e4a13a28fa129ec208fbb46eeca77fa73333" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/40081799996" target="_blank">2026-10-24 09:24:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
