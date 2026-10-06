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
<tr><td><div id="tag7184" onclick="CopyToClipboard('tag7184');return false;" class="tag-decoration">nightly</div><div id="tag30995" onclick="CopyToClipboard('tag30995');return false;" class="tag-decoration">nightly-6e1b383</div><div id="tag13510" onclick="CopyToClipboard('tag13510');return false;" class="tag-decoration">nightly-a34fce7ef7fc70b0c9229c938eb253fa657de3a3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6e1b3838dfe244b3a906659b318b8ab7b4a531b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37413522834" target="_blank">2026-10-06 04:23:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32464" onclick="CopyToClipboard('tag32464');return false;" class="tag-decoration">release</div><div id="tag28023" onclick="CopyToClipboard('tag28023');return false;" class="tag-decoration">release-9e5390c</div><div id="tag30853" onclick="CopyToClipboard('tag30853');return false;" class="tag-decoration">release-4.13.0</div><div id="tag11135" onclick="CopyToClipboard('tag11135');return false;" class="tag-decoration">release-v4</div><div id="tag13367" onclick="CopyToClipboard('tag13367');return false;" class="tag-decoration">release-v4.13</div><div id="tag5353" onclick="CopyToClipboard('tag5353');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9e5390cda86de72e6bea805f60d98f9aa0f389b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37413522783" target="_blank">2026-10-06 04:23:57</a></td></tr>
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
