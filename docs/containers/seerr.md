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
<tr><td><div id="tag20013" onclick="CopyToClipboard('tag20013');return false;" class="tag-decoration">nightly</div><div id="tag31610" onclick="CopyToClipboard('tag31610');return false;" class="tag-decoration">nightly-22326c6</div><div id="tag5437" onclick="CopyToClipboard('tag5437');return false;" class="tag-decoration">nightly-bd491c7e7ecf7d249da532f8fe9b82456ed6e42e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/22326c6fa0720fcdbd4d5b30c5fb30faebaa51e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/30550594091" target="_blank">2026-07-30 14:12:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24740" onclick="CopyToClipboard('tag24740');return false;" class="tag-decoration">release</div><div id="tag8318" onclick="CopyToClipboard('tag8318');return false;" class="tag-decoration">release-33d172f</div><div id="tag16503" onclick="CopyToClipboard('tag16503');return false;" class="tag-decoration">release-3.4.1</div><div id="tag4342" onclick="CopyToClipboard('tag4342');return false;" class="tag-decoration">release-v3</div><div id="tag23028" onclick="CopyToClipboard('tag23028');return false;" class="tag-decoration">release-v3.4</div><div id="tag25679" onclick="CopyToClipboard('tag25679');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/33d172f167189d527e9e4cd5f110d9534b35a53b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/30537578784" target="_blank">2026-07-30 11:11:16</a></td></tr>
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
