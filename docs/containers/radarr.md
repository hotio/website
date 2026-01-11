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
<tr><td><div id="tag17189" onclick="CopyToClipboard('tag17189');return false;" class="tag-decoration">nightly</div><div id="tag29146" onclick="CopyToClipboard('tag29146');return false;" class="tag-decoration">nightly-6.1.1.10317</div><div id="tag8162" onclick="CopyToClipboard('tag8162');return false;" class="tag-decoration">nightly-125fbd2</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/125fbd2f2eb070225babb47003c752de1f5bc82c" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20898164136" target="_blank">2026-01-11 16:17:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24719" onclick="CopyToClipboard('tag24719');return false;" class="tag-decoration">release</div><div id="tag32127" onclick="CopyToClipboard('tag32127');return false;" class="tag-decoration">release-6.0.4.10291</div><div id="tag31613" onclick="CopyToClipboard('tag31613');return false;" class="tag-decoration">release-1d6ebdd</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/1d6ebdd22ea2a8e21c384ec21768132fe6dffa02" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20895144966" target="_blank">2026-01-11 12:29:14</a></td></tr>
<tr><td><div id="tag3357" onclick="CopyToClipboard('tag3357');return false;" class="tag-decoration">testing</div><div id="tag22243" onclick="CopyToClipboard('tag22243');return false;" class="tag-decoration">testing-6.1.1.10317</div><div id="tag29219" onclick="CopyToClipboard('tag29219');return false;" class="tag-decoration">testing-cb14d41</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/cb14d410aa163a981194c0369f6c8d360a6493b0" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20895145218" target="_blank">2026-01-11 12:29:15</a></td></tr>
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
