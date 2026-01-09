---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7585" onclick="CopyToClipboard('tag7585');return false;" class="tag-decoration">nightly</div><div id="tag972" onclick="CopyToClipboard('tag972');return false;" class="tag-decoration">nightly-6.1.1.10317</div><div id="tag25251" onclick="CopyToClipboard('tag25251');return false;" class="tag-decoration">nightly-ec87cab</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/ec87cab751e78944cf1bbb14b5a1c4c076bc03db" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20850346109" target="_blank">2026-01-09 11:23:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23792" onclick="CopyToClipboard('tag23792');return false;" class="tag-decoration">release</div><div id="tag18442" onclick="CopyToClipboard('tag18442');return false;" class="tag-decoration">release-6.0.4.10291</div><div id="tag25871" onclick="CopyToClipboard('tag25871');return false;" class="tag-decoration">release-7b356a3</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7b356a363aa7161ed37f5e4deffb73d75f29e936" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20845766242" target="_blank">2026-01-09 08:22:32</a></td></tr>
<tr><td><div id="tag3783" onclick="CopyToClipboard('tag3783');return false;" class="tag-decoration">testing</div><div id="tag20900" onclick="CopyToClipboard('tag20900');return false;" class="tag-decoration">testing-6.1.1.10317</div><div id="tag21588" onclick="CopyToClipboard('tag21588');return false;" class="tag-decoration">testing-519c125</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/519c1254d776dc7fa265a6a90016f99213e9a325" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20850348039" target="_blank">2026-01-09 11:23:21</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
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
