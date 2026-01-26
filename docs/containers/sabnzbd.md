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
<tr><td><div id="tag8553" onclick="CopyToClipboard('tag8553');return false;" class="tag-decoration">nightly</div><div id="tag31588" onclick="CopyToClipboard('tag31588');return false;" class="tag-decoration">nightly-7f876d3</div><div id="tag23569" onclick="CopyToClipboard('tag23569');return false;" class="tag-decoration">nightly-a4de70496713ea705ee275b3c75df1b499b90dbb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7f876d33ec9c54114afbb728bebb614407727431" target="_blank">Version update: f4b73cf9ec210338d52842a91f6d43fcb2658edd => a4de70496713ea705ee275b3c75df1b499b90dbb</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21369636029" target="_blank">2026-01-26 18:43:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11259" onclick="CopyToClipboard('tag11259');return false;" class="tag-decoration">release</div><div id="tag23846" onclick="CopyToClipboard('tag23846');return false;" class="tag-decoration">release-9fe17d2</div><div id="tag13847" onclick="CopyToClipboard('tag13847');return false;" class="tag-decoration">release-4.5.5</div><div id="tag25827" onclick="CopyToClipboard('tag25827');return false;" class="tag-decoration">release-v4</div><div id="tag1614" onclick="CopyToClipboard('tag1614');return false;" class="tag-decoration">release-v4.5</div><div id="tag21393" onclick="CopyToClipboard('tag21393');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9fe17d263a677e133380a75b7f672e943c6b7036" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180383" target="_blank">2026-01-26 10:20:52</a></td></tr>
<tr><td><div id="tag15640" onclick="CopyToClipboard('tag15640');return false;" class="tag-decoration">testing</div><div id="tag5701" onclick="CopyToClipboard('tag5701');return false;" class="tag-decoration">testing-19cee80</div><div id="tag26728" onclick="CopyToClipboard('tag26728');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/19cee80b87c845e69aa5fb0889ebe9250fbddcb7" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180971" target="_blank">2026-01-26 10:20:54</a></td></tr>
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
