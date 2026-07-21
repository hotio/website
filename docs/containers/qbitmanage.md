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
<tr><td><div id="tag12304" onclick="CopyToClipboard('tag12304');return false;" class="tag-decoration">nightly</div><div id="tag20128" onclick="CopyToClipboard('tag20128');return false;" class="tag-decoration">nightly-5a11461</div><div id="tag29386" onclick="CopyToClipboard('tag29386');return false;" class="tag-decoration">nightly-16353fbb63f5ba23e4458ad374a9a6935c1c5820</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/5a114610345b3c4d2534b10d1333cce3f1ad115a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29794968404" target="_blank">2026-07-21 02:06:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29033" onclick="CopyToClipboard('tag29033');return false;" class="tag-decoration">release</div><div id="tag32291" onclick="CopyToClipboard('tag32291');return false;" class="tag-decoration">release-99f3ef6</div><div id="tag10592" onclick="CopyToClipboard('tag10592');return false;" class="tag-decoration">release-4.10.0</div><div id="tag16853" onclick="CopyToClipboard('tag16853');return false;" class="tag-decoration">release-v4</div><div id="tag17094" onclick="CopyToClipboard('tag17094');return false;" class="tag-decoration">release-v4.10</div><div id="tag7639" onclick="CopyToClipboard('tag7639');return false;" class="tag-decoration">release-v4.10.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/99f3ef6d114e0f3c162bccd4e51bb8b0226372b0" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29681307989" target="_blank">2026-07-19 09:17:13</a></td></tr>
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
