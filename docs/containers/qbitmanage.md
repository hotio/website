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
<tr><td><div id="tag16629" onclick="CopyToClipboard('tag16629');return false;" class="tag-decoration">nightly</div><div id="tag10800" onclick="CopyToClipboard('tag10800');return false;" class="tag-decoration">nightly-6aafba4bec8663d73ee63e2431df71256db1aaba</div><div id="tag5170" onclick="CopyToClipboard('tag5170');return false;" class="tag-decoration">nightly-afa32d2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/afa32d282e0ec6a959b7bab2cfbf8cc1896650fc" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20845763578" target="_blank">2026-01-09 08:22:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6075" onclick="CopyToClipboard('tag6075');return false;" class="tag-decoration">release</div><div id="tag1261" onclick="CopyToClipboard('tag1261');return false;" class="tag-decoration">release-4.6.5</div><div id="tag18008" onclick="CopyToClipboard('tag18008');return false;" class="tag-decoration">release-3676bcb</div><div id="tag30058" onclick="CopyToClipboard('tag30058');return false;" class="tag-decoration">release-v4</div><div id="tag26804" onclick="CopyToClipboard('tag26804');return false;" class="tag-decoration">release-v4.6</div><div id="tag10998" onclick="CopyToClipboard('tag10998');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/3676bcb6757e0b0657febcc5c566efb72e28b9e6" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20845763801" target="_blank">2026-01-09 08:22:26</a></td></tr>
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
