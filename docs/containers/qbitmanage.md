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
<tr><td><div id="tag17198" onclick="CopyToClipboard('tag17198');return false;" class="tag-decoration">nightly</div><div id="tag21954" onclick="CopyToClipboard('tag21954');return false;" class="tag-decoration">nightly-a71bcec</div><div id="tag1846" onclick="CopyToClipboard('tag1846');return false;" class="tag-decoration">nightly-a34fce7ef7fc70b0c9229c938eb253fa657de3a3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/a71bcec55e517b30a2a18d8c0e3a5ab7e548bc48" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559753844" target="_blank">2026-10-07 01:58:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24512" onclick="CopyToClipboard('tag24512');return false;" class="tag-decoration">release</div><div id="tag3780" onclick="CopyToClipboard('tag3780');return false;" class="tag-decoration">release-d8ab7f6</div><div id="tag31924" onclick="CopyToClipboard('tag31924');return false;" class="tag-decoration">release-4.13.0</div><div id="tag14817" onclick="CopyToClipboard('tag14817');return false;" class="tag-decoration">release-v4</div><div id="tag2234" onclick="CopyToClipboard('tag2234');return false;" class="tag-decoration">release-v4.13</div><div id="tag3461" onclick="CopyToClipboard('tag3461');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d8ab7f65fc441f9879a9ed0f272cb80b76728bec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559729935" target="_blank">2026-10-07 01:58:39</a></td></tr>
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
