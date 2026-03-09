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
<tr><td><div id="tag1851" onclick="CopyToClipboard('tag1851');return false;" class="tag-decoration">nightly</div><div id="tag20676" onclick="CopyToClipboard('tag20676');return false;" class="tag-decoration">nightly-a403496</div><div id="tag8455" onclick="CopyToClipboard('tag8455');return false;" class="tag-decoration">nightly-cacaf36347fa0ef707be17963d462a3e024dc335</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a403496ab1c66fbe8679220bc591c130393349cb" target="_blank">Version update: 74a8f2e5d59ad70f2e7cd676fdf02537f03d6457 => cacaf36347fa0ef707be17963d462a3e024dc335</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22876621397" target="_blank">2026-03-09 21:56:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16853" onclick="CopyToClipboard('tag16853');return false;" class="tag-decoration">release</div><div id="tag4873" onclick="CopyToClipboard('tag4873');return false;" class="tag-decoration">release-e21e90e</div><div id="tag29614" onclick="CopyToClipboard('tag29614');return false;" class="tag-decoration">release-0.30.1</div><div id="tag32051" onclick="CopyToClipboard('tag32051');return false;" class="tag-decoration">release-v0</div><div id="tag14476" onclick="CopyToClipboard('tag14476');return false;" class="tag-decoration">release-v0.30</div><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e21e90e74befea5a0ff6361f4d3a0007d9a46558" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22292141128" target="_blank">2026-02-23 03:44:34</a></td></tr>
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
