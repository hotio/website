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
<tr><td><div id="tag20018" onclick="CopyToClipboard('tag20018');return false;" class="tag-decoration">nightly</div><div id="tag26306" onclick="CopyToClipboard('tag26306');return false;" class="tag-decoration">nightly-2c59289</div><div id="tag7761" onclick="CopyToClipboard('tag7761');return false;" class="tag-decoration">nightly-d50bdad17a6927833b70bee705218b38ba9e0b81</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2c59289aa8325ff5dbc07bbb71808924af1d577a" target="_blank">Version update: 428fc4fb7d24d970f786151dba001ab7fe6eba61 => d50bdad17a6927833b70bee705218b38ba9e0b81</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25003646041" target="_blank">2026-04-27 15:19:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21617" onclick="CopyToClipboard('tag21617');return false;" class="tag-decoration">release</div><div id="tag14012" onclick="CopyToClipboard('tag14012');return false;" class="tag-decoration">release-9c55a41</div><div id="tag21812" onclick="CopyToClipboard('tag21812');return false;" class="tag-decoration">release-3.2.0</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">release-v3</div><div id="tag561" onclick="CopyToClipboard('tag561');return false;" class="tag-decoration">release-v3.2</div><div id="tag23140" onclick="CopyToClipboard('tag23140');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
