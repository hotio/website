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
<tr><td><div id="tag25181" onclick="CopyToClipboard('tag25181');return false;" class="tag-decoration">nightly</div><div id="tag11163" onclick="CopyToClipboard('tag11163');return false;" class="tag-decoration">nightly-5b84d25</div><div id="tag14039" onclick="CopyToClipboard('tag14039');return false;" class="tag-decoration">nightly-01a01578173c8c0061c1caf8b56c5eabedc34836</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/5b84d2592da0fcd749fe7a8003f854cc14f77e21" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21243858670" target="_blank">2026-01-22 09:51:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21889" onclick="CopyToClipboard('tag21889');return false;" class="tag-decoration">release</div><div id="tag15656" onclick="CopyToClipboard('tag15656');return false;" class="tag-decoration">release-210adb8</div><div id="tag25944" onclick="CopyToClipboard('tag25944');return false;" class="tag-decoration">release-4.6.5</div><div id="tag8392" onclick="CopyToClipboard('tag8392');return false;" class="tag-decoration">release-v4</div><div id="tag6455" onclick="CopyToClipboard('tag6455');return false;" class="tag-decoration">release-v4.6</div><div id="tag16002" onclick="CopyToClipboard('tag16002');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/210adb8dab0465232238584f590d132a3dc0248c" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21243859278" target="_blank">2026-01-22 09:51:46</a></td></tr>
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
