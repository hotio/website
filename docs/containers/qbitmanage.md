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
<tr><td><div id="tag12623" onclick="CopyToClipboard('tag12623');return false;" class="tag-decoration">nightly</div><div id="tag26598" onclick="CopyToClipboard('tag26598');return false;" class="tag-decoration">nightly-6aafba4bec8663d73ee63e2431df71256db1aaba</div><div id="tag16687" onclick="CopyToClipboard('tag16687');return false;" class="tag-decoration">nightly-171f896</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/171f896ddcb65eb71ec3c26518b746b6720f6c60" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20842475030" target="_blank">2026-01-09 05:40:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14625" onclick="CopyToClipboard('tag14625');return false;" class="tag-decoration">release</div><div id="tag640" onclick="CopyToClipboard('tag640');return false;" class="tag-decoration">release-4.6.5</div><div id="tag18510" onclick="CopyToClipboard('tag18510');return false;" class="tag-decoration">release-59e7767</div><div id="tag14640" onclick="CopyToClipboard('tag14640');return false;" class="tag-decoration">release-v4</div><div id="tag20270" onclick="CopyToClipboard('tag20270');return false;" class="tag-decoration">release-v4.6</div><div id="tag32408" onclick="CopyToClipboard('tag32408');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/59e7767e19e7415e8fd85b7bce5f1bd409e47bb9" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20842475007" target="_blank">2026-01-09 05:40:56</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

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
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
