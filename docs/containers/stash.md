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
<tr><td><div id="tag2856" onclick="CopyToClipboard('tag2856');return false;" class="tag-decoration">nightly</div><div id="tag31162" onclick="CopyToClipboard('tag31162');return false;" class="tag-decoration">nightly-9b709ef61457b9efb38cdb7f6f8401595855947a</div><div id="tag10483" onclick="CopyToClipboard('tag10483');return false;" class="tag-decoration">nightly-61ab168</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/61ab1687f6d5a0d99e979a4bcad9ef250767cfbd" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20842480941" target="_blank">2026-01-09 05:41:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26565" onclick="CopyToClipboard('tag26565');return false;" class="tag-decoration">release</div><div id="tag32573" onclick="CopyToClipboard('tag32573');return false;" class="tag-decoration">release-0.30.1</div><div id="tag19131" onclick="CopyToClipboard('tag19131');return false;" class="tag-decoration">release-f07d47e</div><div id="tag15819" onclick="CopyToClipboard('tag15819');return false;" class="tag-decoration">release-v0</div><div id="tag15468" onclick="CopyToClipboard('tag15468');return false;" class="tag-decoration">release-v0.30</div><div id="tag26012" onclick="CopyToClipboard('tag26012');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/f07d47ed2e8b7988012fa6e264fd36abad7de582" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20842480963" target="_blank">2026-01-09 05:41:14</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
