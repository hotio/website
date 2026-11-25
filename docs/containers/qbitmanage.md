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
<tr><td><div id="tag18151" onclick="CopyToClipboard('tag18151');return false;" class="tag-decoration">nightly</div><div id="tag21163" onclick="CopyToClipboard('tag21163');return false;" class="tag-decoration">nightly-fe708f9</div><div id="tag4799" onclick="CopyToClipboard('tag4799');return false;" class="tag-decoration">nightly-3954eabbd64c049d387cac1a49dabfdf83f396f1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/fe708f9318cc2b5f81685fa8716c425c67ee1880" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45536215021" target="_blank">2026-11-25 02:54:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31084" onclick="CopyToClipboard('tag31084');return false;" class="tag-decoration">release</div><div id="tag5315" onclick="CopyToClipboard('tag5315');return false;" class="tag-decoration">release-37be5f1</div><div id="tag20101" onclick="CopyToClipboard('tag20101');return false;" class="tag-decoration">release-4.15.0</div><div id="tag32296" onclick="CopyToClipboard('tag32296');return false;" class="tag-decoration">release-v4</div><div id="tag25428" onclick="CopyToClipboard('tag25428');return false;" class="tag-decoration">release-v4.15</div><div id="tag4432" onclick="CopyToClipboard('tag4432');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/37be5f13c769977944cd7742eb2f5876e67918c8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45536212944" target="_blank">2026-11-25 02:54:08</a></td></tr>
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
