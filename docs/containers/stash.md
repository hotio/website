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
<tr><td><div id="tag32735" onclick="CopyToClipboard('tag32735');return false;" class="tag-decoration">nightly</div><div id="tag7963" onclick="CopyToClipboard('tag7963');return false;" class="tag-decoration">nightly-80b8bc5</div><div id="tag8405" onclick="CopyToClipboard('tag8405');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/80b8bc52241dfacc20fe72376da997177fb2b6b8" target="_blank">Upstream update: noblevpn-83546e7 => noblevpn-aac85c0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21325108160" target="_blank">2026-01-25 01:55:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6320" onclick="CopyToClipboard('tag6320');return false;" class="tag-decoration">release</div><div id="tag14838" onclick="CopyToClipboard('tag14838');return false;" class="tag-decoration">release-165c262</div><div id="tag23940" onclick="CopyToClipboard('tag23940');return false;" class="tag-decoration">release-0.30.1</div><div id="tag12505" onclick="CopyToClipboard('tag12505');return false;" class="tag-decoration">release-v0</div><div id="tag21183" onclick="CopyToClipboard('tag21183');return false;" class="tag-decoration">release-v0.30</div><div id="tag10561" onclick="CopyToClipboard('tag10561');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/165c262a8bd1cdf1e19c19bdae99eb0761afd5e5" target="_blank">Upstream update: noblevpn-aac85c0 => noblevpn-8ba830a</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21354185241" target="_blank">2026-01-26 10:21:02</a></td></tr>
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
