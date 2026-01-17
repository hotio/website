---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27836" onclick="CopyToClipboard('tag27836');return false;" class="tag-decoration">nightly</div><div id="tag2155" onclick="CopyToClipboard('tag2155');return false;" class="tag-decoration">nightly-79eb5c8</div><div id="tag22041" onclick="CopyToClipboard('tag22041');return false;" class="tag-decoration">nightly-3d4fabfbdfc991385a943aaefa754e7d2b259a7b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/79eb5c8ee6cbd48a810781ddec88b42106e90248" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090397907" target="_blank">2026-01-17 07:01:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26597" onclick="CopyToClipboard('tag26597');return false;" class="tag-decoration">release</div><div id="tag24657" onclick="CopyToClipboard('tag24657');return false;" class="tag-decoration">release-87ae7a0</div><div id="tag29190" onclick="CopyToClipboard('tag29190');return false;" class="tag-decoration">release-4.5.5</div><div id="tag21406" onclick="CopyToClipboard('tag21406');return false;" class="tag-decoration">release-v4</div><div id="tag16364" onclick="CopyToClipboard('tag16364');return false;" class="tag-decoration">release-v4.5</div><div id="tag7499" onclick="CopyToClipboard('tag7499');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/87ae7a0bc79caabd5bf61c5df2056003b459d9dd" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21065741530" target="_blank">2026-01-16 11:52:56</a></td></tr>
<tr><td><div id="tag12945" onclick="CopyToClipboard('tag12945');return false;" class="tag-decoration">testing</div><div id="tag22735" onclick="CopyToClipboard('tag22735');return false;" class="tag-decoration">testing-2af2225</div><div id="tag24915" onclick="CopyToClipboard('tag24915');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2af22256351a3bec28330abda45f4e50027a1baa" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21090398251" target="_blank">2026-01-17 07:01:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
