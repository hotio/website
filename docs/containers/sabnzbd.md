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
<tr><td><div id="tag20938" onclick="CopyToClipboard('tag20938');return false;" class="tag-decoration">nightly</div><div id="tag23715" onclick="CopyToClipboard('tag23715');return false;" class="tag-decoration">nightly-33a0135</div><div id="tag28523" onclick="CopyToClipboard('tag28523');return false;" class="tag-decoration">nightly-dbe7cb336d9f09ba4e782fb88854a7cfa8a59563</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/33a0135ac39728e4d1964d02524b6515e5f92d63" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443081566" target="_blank">2026-06-30 12:07:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3919" onclick="CopyToClipboard('tag3919');return false;" class="tag-decoration">release</div><div id="tag28192" onclick="CopyToClipboard('tag28192');return false;" class="tag-decoration">release-2dd34ce</div><div id="tag32189" onclick="CopyToClipboard('tag32189');return false;" class="tag-decoration">release-5.0.4</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">release-v5</div><div id="tag22956" onclick="CopyToClipboard('tag22956');return false;" class="tag-decoration">release-v5.0</div><div id="tag9679" onclick="CopyToClipboard('tag9679');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2dd34ceefd0fcb9d9b5ed494cfa6f23888f5d3cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443082106" target="_blank">2026-06-30 12:07:33</a></td></tr>
<tr><td><div id="tag10800" onclick="CopyToClipboard('tag10800');return false;" class="tag-decoration">testing</div><div id="tag2423" onclick="CopyToClipboard('tag2423');return false;" class="tag-decoration">testing-7eb9b92</div><div id="tag26218" onclick="CopyToClipboard('tag26218');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7eb9b928e35c5d4a37c3cdfd9802bb0cdd52b9e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443081600" target="_blank">2026-06-30 12:07:34</a></td></tr>
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
