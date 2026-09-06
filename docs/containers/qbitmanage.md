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
<tr><td><div id="tag6751" onclick="CopyToClipboard('tag6751');return false;" class="tag-decoration">nightly</div><div id="tag20348" onclick="CopyToClipboard('tag20348');return false;" class="tag-decoration">nightly-0b94b1f</div><div id="tag32405" onclick="CopyToClipboard('tag32405');return false;" class="tag-decoration">nightly-3669b8f3ada3bed9286a627f7c42f350d53c5f06</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/0b94b1fd0a3cd47cac0bcd049bb4076632c88170" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34037476236" target="_blank">2026-09-06 13:53:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11790" onclick="CopyToClipboard('tag11790');return false;" class="tag-decoration">release</div><div id="tag25264" onclick="CopyToClipboard('tag25264');return false;" class="tag-decoration">release-de727d1</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">release-4.13.0</div><div id="tag31563" onclick="CopyToClipboard('tag31563');return false;" class="tag-decoration">release-v4</div><div id="tag25038" onclick="CopyToClipboard('tag25038');return false;" class="tag-decoration">release-v4.13</div><div id="tag19237" onclick="CopyToClipboard('tag19237');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/de727d15066551345a1141310106fa3c9f137515" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/33916858001" target="_blank">2026-09-04 20:33:54</a></td></tr>
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
