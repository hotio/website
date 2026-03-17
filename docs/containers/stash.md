---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21849" onclick="CopyToClipboard('tag21849');return false;" class="tag-decoration">nightly</div><div id="tag28618" onclick="CopyToClipboard('tag28618');return false;" class="tag-decoration">nightly-e4835d3</div><div id="tag22914" onclick="CopyToClipboard('tag22914');return false;" class="tag-decoration">nightly-b2179cd7230c21460bf2a057badeefe1ac4174e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e4835d39f7e9f7d962adde3b59e029f48e995886" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23180614551" target="_blank">2026-03-17 05:55:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9501" onclick="CopyToClipboard('tag9501');return false;" class="tag-decoration">release</div><div id="tag9516" onclick="CopyToClipboard('tag9516');return false;" class="tag-decoration">release-35dd95d</div><div id="tag7052" onclick="CopyToClipboard('tag7052');return false;" class="tag-decoration">release-0.30.1</div><div id="tag31095" onclick="CopyToClipboard('tag31095');return false;" class="tag-decoration">release-v0</div><div id="tag5402" onclick="CopyToClipboard('tag5402');return false;" class="tag-decoration">release-v0.30</div><div id="tag4400" onclick="CopyToClipboard('tag4400');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/35dd95deeab435280033c13de52bb51ad6cc4f78" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23180614720" target="_blank">2026-03-17 05:55:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
