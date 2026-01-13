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
<tr><td><div id="tag14981" onclick="CopyToClipboard('tag14981');return false;" class="tag-decoration">nightly</div><div id="tag31525" onclick="CopyToClipboard('tag31525');return false;" class="tag-decoration">nightly-4f73a9e</div><div id="tag846" onclick="CopyToClipboard('tag846');return false;" class="tag-decoration">nightly-6049b21d22bbb0bd032560071a7ae495cd0b763d</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/4f73a9e3e336cbab838deb9d8874afa5a686f351" target="_blank">Version update: deada580e521b9ac1766ae3b69c2db0cef4df968 => 6049b21d22bbb0bd032560071a7ae495cd0b763d</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20945600972" target="_blank">2026-01-13 05:15:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25724" onclick="CopyToClipboard('tag25724');return false;" class="tag-decoration">release</div><div id="tag13137" onclick="CopyToClipboard('tag13137');return false;" class="tag-decoration">release-0.30.1</div><div id="tag19081" onclick="CopyToClipboard('tag19081');return false;" class="tag-decoration">release-3fa5ed5</div><div id="tag28776" onclick="CopyToClipboard('tag28776');return false;" class="tag-decoration">release-v0</div><div id="tag3803" onclick="CopyToClipboard('tag3803');return false;" class="tag-decoration">release-v0.30</div><div id="tag6273" onclick="CopyToClipboard('tag6273');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3fa5ed559cc234a1ea206fb097359dcbb25a23a8" target="_blank">Upstream update: noblevpn-b820b9e => noblevpn-6a934c2</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20898167800" target="_blank">2026-01-11 16:17:53</a></td></tr>
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
