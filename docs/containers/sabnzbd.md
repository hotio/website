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
<tr><td><div id="tag25576" onclick="CopyToClipboard('tag25576');return false;" class="tag-decoration">nightly</div><div id="tag17690" onclick="CopyToClipboard('tag17690');return false;" class="tag-decoration">nightly-2957870</div><div id="tag14682" onclick="CopyToClipboard('tag14682');return false;" class="tag-decoration">nightly-e1cd1eed83c6f877ef27586f5cebf13448c07794</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2957870dc4b4bfeb74e1117af89454aa4a3393ac" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21426213149" target="_blank">2026-01-28 05:23:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1419" onclick="CopyToClipboard('tag1419');return false;" class="tag-decoration">release</div><div id="tag18486" onclick="CopyToClipboard('tag18486');return false;" class="tag-decoration">release-9fe17d2</div><div id="tag5859" onclick="CopyToClipboard('tag5859');return false;" class="tag-decoration">release-4.5.5</div><div id="tag20925" onclick="CopyToClipboard('tag20925');return false;" class="tag-decoration">release-v4</div><div id="tag14226" onclick="CopyToClipboard('tag14226');return false;" class="tag-decoration">release-v4.5</div><div id="tag30240" onclick="CopyToClipboard('tag30240');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9fe17d263a677e133380a75b7f672e943c6b7036" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180383" target="_blank">2026-01-26 10:20:52</a></td></tr>
<tr><td><div id="tag12669" onclick="CopyToClipboard('tag12669');return false;" class="tag-decoration">testing</div><div id="tag1240" onclick="CopyToClipboard('tag1240');return false;" class="tag-decoration">testing-19cee80</div><div id="tag18403" onclick="CopyToClipboard('tag18403');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/19cee80b87c845e69aa5fb0889ebe9250fbddcb7" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180971" target="_blank">2026-01-26 10:20:54</a></td></tr>
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
