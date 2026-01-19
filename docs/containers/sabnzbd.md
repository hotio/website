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
<tr><td><div id="tag4984" onclick="CopyToClipboard('tag4984');return false;" class="tag-decoration">nightly</div><div id="tag3933" onclick="CopyToClipboard('tag3933');return false;" class="tag-decoration">nightly-956fa36</div><div id="tag18121" onclick="CopyToClipboard('tag18121');return false;" class="tag-decoration">nightly-27d222943c6988b34f047ac14acc5cdb3efedc5a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/956fa369c94552bf31d94bf36140be8213b6ff75" target="_blank">Version update: bf412371358ed3773c5f0fff65400c9d1547bdc9 => 27d222943c6988b34f047ac14acc5cdb3efedc5a</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21136260370" target="_blank">2026-01-19 11:45:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22113" onclick="CopyToClipboard('tag22113');return false;" class="tag-decoration">release</div><div id="tag7002" onclick="CopyToClipboard('tag7002');return false;" class="tag-decoration">release-9f4e3ab</div><div id="tag23495" onclick="CopyToClipboard('tag23495');return false;" class="tag-decoration">release-4.5.5</div><div id="tag32382" onclick="CopyToClipboard('tag32382');return false;" class="tag-decoration">release-v4</div><div id="tag9372" onclick="CopyToClipboard('tag9372');return false;" class="tag-decoration">release-v4.5</div><div id="tag2400" onclick="CopyToClipboard('tag2400');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9f4e3ab9e755a9785ff1a9cd300f5cbe3792ae44" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21132234643" target="_blank">2026-01-19 09:31:04</a></td></tr>
<tr><td><div id="tag29572" onclick="CopyToClipboard('tag29572');return false;" class="tag-decoration">testing</div><div id="tag28568" onclick="CopyToClipboard('tag28568');return false;" class="tag-decoration">testing-14db359</div><div id="tag32742" onclick="CopyToClipboard('tag32742');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/14db359f866b40f2db27f929eb06666932acda65" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21132235236" target="_blank">2026-01-19 09:31:05</a></td></tr>
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
