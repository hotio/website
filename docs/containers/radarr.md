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
<tr><td><div id="tag607" onclick="CopyToClipboard('tag607');return false;" class="tag-decoration">nightly</div><div id="tag13886" onclick="CopyToClipboard('tag13886');return false;" class="tag-decoration">nightly-6.1.1.10317</div><div id="tag4688" onclick="CopyToClipboard('tag4688');return false;" class="tag-decoration">nightly-9b5a051</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/9b5a051a7da17761b178b9e6567433af44bdb794" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20845765581" target="_blank">2026-01-09 08:22:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3484" onclick="CopyToClipboard('tag3484');return false;" class="tag-decoration">release</div><div id="tag27796" onclick="CopyToClipboard('tag27796');return false;" class="tag-decoration">release-6.0.4.10291</div><div id="tag18678" onclick="CopyToClipboard('tag18678');return false;" class="tag-decoration">release-df8f12e</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/df8f12e35c2c7fa772a97a6b4ad64878a6a370df" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20842476957" target="_blank">2026-01-09 05:41:02</a></td></tr>
<tr><td><div id="tag5473" onclick="CopyToClipboard('tag5473');return false;" class="tag-decoration">testing</div><div id="tag6550" onclick="CopyToClipboard('tag6550');return false;" class="tag-decoration">testing-6.1.1.10317</div><div id="tag32196" onclick="CopyToClipboard('tag32196');return false;" class="tag-decoration">testing-92933d4</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/92933d4a7c1d0ac709bdd3f509ae8c3cc8bfaca5" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20842477224" target="_blank">2026-01-09 05:41:03</a></td></tr>
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
