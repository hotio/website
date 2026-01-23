---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7434" onclick="CopyToClipboard('tag7434');return false;" class="tag-decoration">nightly</div><div id="tag24100" onclick="CopyToClipboard('tag24100');return false;" class="tag-decoration">nightly-65ddae7</div><div id="tag5539" onclick="CopyToClipboard('tag5539');return false;" class="tag-decoration">nightly-9a61071bcba1fe75a08bd741406ea36fefe846ab</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/65ddae7d26f653e9d8f4c2c05349ca53b79865cd" target="_blank">Version update: 01a01578173c8c0061c1caf8b56c5eabedc34836 => 9a61071bcba1fe75a08bd741406ea36fefe846ab</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21286954303" target="_blank">2026-01-23 12:57:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28829" onclick="CopyToClipboard('tag28829');return false;" class="tag-decoration">release</div><div id="tag14691" onclick="CopyToClipboard('tag14691');return false;" class="tag-decoration">release-f05eda1</div><div id="tag30211" onclick="CopyToClipboard('tag30211');return false;" class="tag-decoration">release-4.6.5</div><div id="tag10975" onclick="CopyToClipboard('tag10975');return false;" class="tag-decoration">release-v4</div><div id="tag32252" onclick="CopyToClipboard('tag32252');return false;" class="tag-decoration">release-v4.6</div><div id="tag17567" onclick="CopyToClipboard('tag17567');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/f05eda162a28e40c35b2f07929101d0204fb3c51" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21246765921" target="_blank">2026-01-22 11:29:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
