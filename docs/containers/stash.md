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
<tr><td><div id="tag31543" onclick="CopyToClipboard('tag31543');return false;" class="tag-decoration">nightly</div><div id="tag31976" onclick="CopyToClipboard('tag31976');return false;" class="tag-decoration">nightly-38693b5</div><div id="tag30143" onclick="CopyToClipboard('tag30143');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/38693b5d41c08afd04ed6f160f8b355d8a529934" target="_blank">Version update: ed3a2393667a3a9ea63fb40ec09c66717ca086f1 => 5b3785f16490e8bd603dbe71915a6233379e72e1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21050341647" target="_blank">2026-01-15 23:45:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4237" onclick="CopyToClipboard('tag4237');return false;" class="tag-decoration">release</div><div id="tag31571" onclick="CopyToClipboard('tag31571');return false;" class="tag-decoration">release-19e0a8e</div><div id="tag9996" onclick="CopyToClipboard('tag9996');return false;" class="tag-decoration">release-0.30.1</div><div id="tag25867" onclick="CopyToClipboard('tag25867');return false;" class="tag-decoration">release-v0</div><div id="tag5125" onclick="CopyToClipboard('tag5125');return false;" class="tag-decoration">release-v0.30</div><div id="tag9905" onclick="CopyToClipboard('tag9905');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/19e0a8e1b470bf931ad0ee396c1fdcc5ff491087" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20991149745" target="_blank">2026-01-14 10:39:32</a></td></tr>
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
