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
<tr><td><div id="tag4762" onclick="CopyToClipboard('tag4762');return false;" class="tag-decoration">nightly</div><div id="tag8997" onclick="CopyToClipboard('tag8997');return false;" class="tag-decoration">nightly-dae4325</div><div id="tag32274" onclick="CopyToClipboard('tag32274');return false;" class="tag-decoration">nightly-3b8f6bd94c4f9efddd5f517ee9a0f1b22b285abd</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/dae43253034e635e3f72bc78544be59264437a5e" target="_blank">Version update: d8448ba37ecf7749b4d75356b33be471ac6c8fdd => 3b8f6bd94c4f9efddd5f517ee9a0f1b22b285abd</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22506733883" target="_blank">2026-02-27 22:44:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13607" onclick="CopyToClipboard('tag13607');return false;" class="tag-decoration">release</div><div id="tag1704" onclick="CopyToClipboard('tag1704');return false;" class="tag-decoration">release-e21e90e</div><div id="tag12824" onclick="CopyToClipboard('tag12824');return false;" class="tag-decoration">release-0.30.1</div><div id="tag31966" onclick="CopyToClipboard('tag31966');return false;" class="tag-decoration">release-v0</div><div id="tag16774" onclick="CopyToClipboard('tag16774');return false;" class="tag-decoration">release-v0.30</div><div id="tag29934" onclick="CopyToClipboard('tag29934');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e21e90e74befea5a0ff6361f4d3a0007d9a46558" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22292141128" target="_blank">2026-02-23 03:44:34</a></td></tr>
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
