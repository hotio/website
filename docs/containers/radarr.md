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
<tr><td><div id="tag25230" onclick="CopyToClipboard('tag25230');return false;" class="tag-decoration">nightly</div><div id="tag9028" onclick="CopyToClipboard('tag9028');return false;" class="tag-decoration">nightly-bba2fb5</div><div id="tag29030" onclick="CopyToClipboard('tag29030');return false;" class="tag-decoration">nightly-6.1.1.10317</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/bba2fb5cb0f594a683f4eb9b97ce898572d99950" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21065738172" target="_blank">2026-01-16 11:52:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27345" onclick="CopyToClipboard('tag27345');return false;" class="tag-decoration">release</div><div id="tag937" onclick="CopyToClipboard('tag937');return false;" class="tag-decoration">release-4dc7c0a</div><div id="tag7256" onclick="CopyToClipboard('tag7256');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/4dc7c0a95c86813af50711175590d1aa3f1d3a1a" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21065739085" target="_blank">2026-01-16 11:52:49</a></td></tr>
<tr><td><div id="tag21947" onclick="CopyToClipboard('tag21947');return false;" class="tag-decoration">testing</div><div id="tag11946" onclick="CopyToClipboard('tag11946');return false;" class="tag-decoration">testing-5519ee5</div><div id="tag10904" onclick="CopyToClipboard('tag10904');return false;" class="tag-decoration">testing-6.1.1.10317</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/5519ee504733472b7ef0430f67b937210999d5a4" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21064906556" target="_blank">2026-01-16 11:18:50</a></td></tr>
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
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
