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
<tr><td><div id="tag19693" onclick="CopyToClipboard('tag19693');return false;" class="tag-decoration">nightly</div><div id="tag29049" onclick="CopyToClipboard('tag29049');return false;" class="tag-decoration">nightly-cf3235e</div><div id="tag913" onclick="CopyToClipboard('tag913');return false;" class="tag-decoration">nightly-aacb049d96057aa6cc4f893ba938a50c24938cb2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/cf3235e00f7d86bed41470bfa344e065586279f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26335886567" target="_blank">2026-05-23 14:56:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12586" onclick="CopyToClipboard('tag12586');return false;" class="tag-decoration">release</div><div id="tag28317" onclick="CopyToClipboard('tag28317');return false;" class="tag-decoration">release-4874b25</div><div id="tag18201" onclick="CopyToClipboard('tag18201');return false;" class="tag-decoration">release-4.7.1</div><div id="tag25562" onclick="CopyToClipboard('tag25562');return false;" class="tag-decoration">release-v4</div><div id="tag5729" onclick="CopyToClipboard('tag5729');return false;" class="tag-decoration">release-v4.7</div><div id="tag16064" onclick="CopyToClipboard('tag16064');return false;" class="tag-decoration">release-v4.7.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/4874b2585abfaed2cec1e25fe676e50d5b2e8de9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26042656704" target="_blank">2026-05-18 15:18:08</a></td></tr>
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
