---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4131" onclick="CopyToClipboard('tag4131');return false;" class="tag-decoration">release</div><div id="tag14887" onclick="CopyToClipboard('tag14887');return false;" class="tag-decoration">release-715dea6</div><div id="tag29653" onclick="CopyToClipboard('tag29653');return false;" class="tag-decoration">release-0.24.863</div><div id="tag25465" onclick="CopyToClipboard('tag25465');return false;" class="tag-decoration">release-v0</div><div id="tag2317" onclick="CopyToClipboard('tag2317');return false;" class="tag-decoration">release-v0.24</div><div id="tag23922" onclick="CopyToClipboard('tag23922');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/715dea6f786848778ea0b1f0e61095e8202cc1fd" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21065726155" target="_blank">2026-01-16 11:52:19</a></td></tr>
<tr><td><div id="tag13336" onclick="CopyToClipboard('tag13336');return false;" class="tag-decoration">testing</div><div id="tag5874" onclick="CopyToClipboard('tag5874');return false;" class="tag-decoration">testing-ce4632a</div><div id="tag10854" onclick="CopyToClipboard('tag10854');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag7857" onclick="CopyToClipboard('tag7857');return false;" class="tag-decoration">testing-v0</div><div id="tag9342" onclick="CopyToClipboard('tag9342');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13449" onclick="CopyToClipboard('tag13449');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ce4632abcc671d9fb08548982381f99573e21fcd" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21065726563" target="_blank">2026-01-16 11:52:21</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
