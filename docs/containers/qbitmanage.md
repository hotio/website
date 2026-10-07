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
<tr><td><div id="tag21019" onclick="CopyToClipboard('tag21019');return false;" class="tag-decoration">nightly</div><div id="tag28177" onclick="CopyToClipboard('tag28177');return false;" class="tag-decoration">nightly-1d501b2</div><div id="tag24312" onclick="CopyToClipboard('tag24312');return false;" class="tag-decoration">nightly-a34fce7ef7fc70b0c9229c938eb253fa657de3a3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/1d501b2ea8df598e0828eaad1fd01991cb3dcce2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37506105898" target="_blank">2026-10-06 17:46:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5168" onclick="CopyToClipboard('tag5168');return false;" class="tag-decoration">release</div><div id="tag12809" onclick="CopyToClipboard('tag12809');return false;" class="tag-decoration">release-d8ab7f6</div><div id="tag30033" onclick="CopyToClipboard('tag30033');return false;" class="tag-decoration">release-4.13.0</div><div id="tag12727" onclick="CopyToClipboard('tag12727');return false;" class="tag-decoration">release-v4</div><div id="tag157" onclick="CopyToClipboard('tag157');return false;" class="tag-decoration">release-v4.13</div><div id="tag7077" onclick="CopyToClipboard('tag7077');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d8ab7f65fc441f9879a9ed0f272cb80b76728bec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559729935" target="_blank">2026-10-07 01:58:39</a></td></tr>
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
