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
<tr><td><div id="tag17457" onclick="CopyToClipboard('tag17457');return false;" class="tag-decoration">nightly</div><div id="tag10804" onclick="CopyToClipboard('tag10804');return false;" class="tag-decoration">nightly-1853863</div><div id="tag7608" onclick="CopyToClipboard('tag7608');return false;" class="tag-decoration">nightly-e1cd1eed83c6f877ef27586f5cebf13448c07794</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/18538630579f91e9e224bb327eb91226216b2d98" target="_blank">Version update: a4de70496713ea705ee275b3c75df1b499b90dbb => e1cd1eed83c6f877ef27586f5cebf13448c07794</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21412383709" target="_blank">2026-01-27 20:07:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23397" onclick="CopyToClipboard('tag23397');return false;" class="tag-decoration">release</div><div id="tag23434" onclick="CopyToClipboard('tag23434');return false;" class="tag-decoration">release-9fe17d2</div><div id="tag10621" onclick="CopyToClipboard('tag10621');return false;" class="tag-decoration">release-4.5.5</div><div id="tag6827" onclick="CopyToClipboard('tag6827');return false;" class="tag-decoration">release-v4</div><div id="tag13013" onclick="CopyToClipboard('tag13013');return false;" class="tag-decoration">release-v4.5</div><div id="tag10642" onclick="CopyToClipboard('tag10642');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9fe17d263a677e133380a75b7f672e943c6b7036" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180383" target="_blank">2026-01-26 10:20:52</a></td></tr>
<tr><td><div id="tag19693" onclick="CopyToClipboard('tag19693');return false;" class="tag-decoration">testing</div><div id="tag22093" onclick="CopyToClipboard('tag22093');return false;" class="tag-decoration">testing-19cee80</div><div id="tag8970" onclick="CopyToClipboard('tag8970');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/19cee80b87c845e69aa5fb0889ebe9250fbddcb7" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180971" target="_blank">2026-01-26 10:20:54</a></td></tr>
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
