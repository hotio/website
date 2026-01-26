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
<tr><td><div id="tag8267" onclick="CopyToClipboard('tag8267');return false;" class="tag-decoration">nightly</div><div id="tag13984" onclick="CopyToClipboard('tag13984');return false;" class="tag-decoration">nightly-bc10533</div><div id="tag12265" onclick="CopyToClipboard('tag12265');return false;" class="tag-decoration">nightly-f4b73cf9ec210338d52842a91f6d43fcb2658edd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/bc1053342eb9a8216815843e4c071da3337a7881" target="_blank">Version update: ddc84542eb78a8021392e66c1554ee0f38a4cc96 => f4b73cf9ec210338d52842a91f6d43fcb2658edd</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354668755" target="_blank">2026-01-26 10:38:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32729" onclick="CopyToClipboard('tag32729');return false;" class="tag-decoration">release</div><div id="tag7718" onclick="CopyToClipboard('tag7718');return false;" class="tag-decoration">release-9fe17d2</div><div id="tag27105" onclick="CopyToClipboard('tag27105');return false;" class="tag-decoration">release-4.5.5</div><div id="tag28472" onclick="CopyToClipboard('tag28472');return false;" class="tag-decoration">release-v4</div><div id="tag30876" onclick="CopyToClipboard('tag30876');return false;" class="tag-decoration">release-v4.5</div><div id="tag15873" onclick="CopyToClipboard('tag15873');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9fe17d263a677e133380a75b7f672e943c6b7036" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180383" target="_blank">2026-01-26 10:20:52</a></td></tr>
<tr><td><div id="tag14414" onclick="CopyToClipboard('tag14414');return false;" class="tag-decoration">testing</div><div id="tag5200" onclick="CopyToClipboard('tag5200');return false;" class="tag-decoration">testing-19cee80</div><div id="tag14173" onclick="CopyToClipboard('tag14173');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/19cee80b87c845e69aa5fb0889ebe9250fbddcb7" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180971" target="_blank">2026-01-26 10:20:54</a></td></tr>
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
