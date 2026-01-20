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
<tr><td><div id="tag8305" onclick="CopyToClipboard('tag8305');return false;" class="tag-decoration">nightly</div><div id="tag23907" onclick="CopyToClipboard('tag23907');return false;" class="tag-decoration">nightly-d52d11a</div><div id="tag17921" onclick="CopyToClipboard('tag17921');return false;" class="tag-decoration">nightly-eff5f663abd1680e0d303be4cce21e0a9d1bc74d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d52d11aad84a62a34ba8fc1657fef21719871412" target="_blank">Version update: df5fad29bc05b49ffad0c3f803114935d349decd => eff5f663abd1680e0d303be4cce21e0a9d1bc74d</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21169045543" target="_blank">2026-01-20 11:01:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22428" onclick="CopyToClipboard('tag22428');return false;" class="tag-decoration">release</div><div id="tag4487" onclick="CopyToClipboard('tag4487');return false;" class="tag-decoration">release-9f4e3ab</div><div id="tag26121" onclick="CopyToClipboard('tag26121');return false;" class="tag-decoration">release-4.5.5</div><div id="tag23564" onclick="CopyToClipboard('tag23564');return false;" class="tag-decoration">release-v4</div><div id="tag18940" onclick="CopyToClipboard('tag18940');return false;" class="tag-decoration">release-v4.5</div><div id="tag10969" onclick="CopyToClipboard('tag10969');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9f4e3ab9e755a9785ff1a9cd300f5cbe3792ae44" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21132234643" target="_blank">2026-01-19 09:31:04</a></td></tr>
<tr><td><div id="tag15765" onclick="CopyToClipboard('tag15765');return false;" class="tag-decoration">testing</div><div id="tag28912" onclick="CopyToClipboard('tag28912');return false;" class="tag-decoration">testing-14db359</div><div id="tag13109" onclick="CopyToClipboard('tag13109');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/14db359f866b40f2db27f929eb06666932acda65" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21132235236" target="_blank">2026-01-19 09:31:05</a></td></tr>
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
