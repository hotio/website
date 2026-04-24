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
<tr><td><div id="tag9611" onclick="CopyToClipboard('tag9611');return false;" class="tag-decoration">nightly</div><div id="tag29358" onclick="CopyToClipboard('tag29358');return false;" class="tag-decoration">nightly-8ef6359</div><div id="tag14297" onclick="CopyToClipboard('tag14297');return false;" class="tag-decoration">nightly-8e1e7f39a85baa204375141c526f7aeec96c552e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/8ef63590d0fcabc91d3bcfb81892bf0914847f24" target="_blank">Version update: f078da85f52c6ec36b095bee4112c8cf10b8e64e => 8e1e7f39a85baa204375141c526f7aeec96c552e</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24899400774" target="_blank">2026-04-24 16:07:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6265" onclick="CopyToClipboard('tag6265');return false;" class="tag-decoration">release</div><div id="tag18431" onclick="CopyToClipboard('tag18431');return false;" class="tag-decoration">release-9c55a41</div><div id="tag24812" onclick="CopyToClipboard('tag24812');return false;" class="tag-decoration">release-3.2.0</div><div id="tag13187" onclick="CopyToClipboard('tag13187');return false;" class="tag-decoration">release-v3</div><div id="tag19245" onclick="CopyToClipboard('tag19245');return false;" class="tag-decoration">release-v3.2</div><div id="tag28214" onclick="CopyToClipboard('tag28214');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
