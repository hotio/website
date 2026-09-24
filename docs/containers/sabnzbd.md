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
<tr><td><div id="tag20312" onclick="CopyToClipboard('tag20312');return false;" class="tag-decoration">nightly</div><div id="tag13617" onclick="CopyToClipboard('tag13617');return false;" class="tag-decoration">nightly-8787139</div><div id="tag25547" onclick="CopyToClipboard('tag25547');return false;" class="tag-decoration">nightly-7cd04f22f28900323a825929ab0c42959b9dca87</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/87871390507d4d40dd5b3baa8dab55105530ea26" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941384230" target="_blank">2026-09-24 01:05:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11675" onclick="CopyToClipboard('tag11675');return false;" class="tag-decoration">release</div><div id="tag9413" onclick="CopyToClipboard('tag9413');return false;" class="tag-decoration">release-01bcc0e</div><div id="tag1616" onclick="CopyToClipboard('tag1616');return false;" class="tag-decoration">release-5.1.3</div><div id="tag14543" onclick="CopyToClipboard('tag14543');return false;" class="tag-decoration">release-v5</div><div id="tag29556" onclick="CopyToClipboard('tag29556');return false;" class="tag-decoration">release-v5.1</div><div id="tag22933" onclick="CopyToClipboard('tag22933');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/01bcc0ed8d7e8e7f908d8d05455f0180bbc8301b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35707998745" target="_blank">2026-09-22 09:01:10</a></td></tr>
<tr><td><div id="tag17196" onclick="CopyToClipboard('tag17196');return false;" class="tag-decoration">testing</div><div id="tag7433" onclick="CopyToClipboard('tag7433');return false;" class="tag-decoration">testing-f82157c</div><div id="tag4832" onclick="CopyToClipboard('tag4832');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f82157c1da0bca118aefb6b4e20bbfbb43400495" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35767556837" target="_blank">2026-09-22 18:29:59</a></td></tr>
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
