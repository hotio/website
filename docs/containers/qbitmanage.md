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
<tr><td><div id="tag12199" onclick="CopyToClipboard('tag12199');return false;" class="tag-decoration">nightly</div><div id="tag21051" onclick="CopyToClipboard('tag21051');return false;" class="tag-decoration">nightly-58ea2e9</div><div id="tag17121" onclick="CopyToClipboard('tag17121');return false;" class="tag-decoration">nightly-87e50e95bdd0fdb5d019d76003dd76a9db268dee</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/58ea2e9bd06d8460b7664b6de174f3258020ebd1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/33352394832" target="_blank">2026-08-31 02:59:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12080" onclick="CopyToClipboard('tag12080');return false;" class="tag-decoration">release</div><div id="tag21102" onclick="CopyToClipboard('tag21102');return false;" class="tag-decoration">release-da17bbb</div><div id="tag22530" onclick="CopyToClipboard('tag22530');return false;" class="tag-decoration">release-4.12.0</div><div id="tag12308" onclick="CopyToClipboard('tag12308');return false;" class="tag-decoration">release-v4</div><div id="tag17882" onclick="CopyToClipboard('tag17882');return false;" class="tag-decoration">release-v4.12</div><div id="tag10912" onclick="CopyToClipboard('tag10912');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/da17bbbf136cc7a9ed2defecf4b966451cacb12e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32917093523" target="_blank">2026-08-26 00:57:00</a></td></tr>
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
