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
<tr><td><div id="tag32125" onclick="CopyToClipboard('tag32125');return false;" class="tag-decoration">nightly</div><div id="tag27767" onclick="CopyToClipboard('tag27767');return false;" class="tag-decoration">nightly-90e5224</div><div id="tag14904" onclick="CopyToClipboard('tag14904');return false;" class="tag-decoration">nightly-7872029ffa07d040d94982797c942fa5ac4a1c20</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/90e522434a33d315083e9aa318702ddb211524a1" target="_blank">Version update: b4fab0ac48732b3e3cb20d571f6fd8a0edac120d => 7872029ffa07d040d94982797c942fa5ac4a1c20</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23134030438" target="_blank">2026-03-16 08:14:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20865" onclick="CopyToClipboard('tag20865');return false;" class="tag-decoration">release</div><div id="tag28635" onclick="CopyToClipboard('tag28635');return false;" class="tag-decoration">release-e21e90e</div><div id="tag10002" onclick="CopyToClipboard('tag10002');return false;" class="tag-decoration">release-0.30.1</div><div id="tag1534" onclick="CopyToClipboard('tag1534');return false;" class="tag-decoration">release-v0</div><div id="tag27952" onclick="CopyToClipboard('tag27952');return false;" class="tag-decoration">release-v0.30</div><div id="tag604" onclick="CopyToClipboard('tag604');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e21e90e74befea5a0ff6361f4d3a0007d9a46558" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22292141128" target="_blank">2026-02-23 03:44:34</a></td></tr>
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
