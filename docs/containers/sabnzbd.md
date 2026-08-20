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
<tr><td><div id="tag1443" onclick="CopyToClipboard('tag1443');return false;" class="tag-decoration">nightly</div><div id="tag335" onclick="CopyToClipboard('tag335');return false;" class="tag-decoration">nightly-cf0f819</div><div id="tag6473" onclick="CopyToClipboard('tag6473');return false;" class="tag-decoration">nightly-602464349f88fc9ffd45b7f0b4c16ec48cb855c1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf0f8195404f34fba940f5fa7a6eabc865a5965b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32392593443" target="_blank">2026-08-20 16:32:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3254" onclick="CopyToClipboard('tag3254');return false;" class="tag-decoration">release</div><div id="tag15190" onclick="CopyToClipboard('tag15190');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag19719" onclick="CopyToClipboard('tag19719');return false;" class="tag-decoration">release-5.1.1</div><div id="tag16948" onclick="CopyToClipboard('tag16948');return false;" class="tag-decoration">release-v5</div><div id="tag14148" onclick="CopyToClipboard('tag14148');return false;" class="tag-decoration">release-v5.1</div><div id="tag32746" onclick="CopyToClipboard('tag32746');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag24397" onclick="CopyToClipboard('tag24397');return false;" class="tag-decoration">testing</div><div id="tag16240" onclick="CopyToClipboard('tag16240');return false;" class="tag-decoration">testing-f806ed8</div><div id="tag14433" onclick="CopyToClipboard('tag14433');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag28415" onclick="CopyToClipboard('tag28415');return false;" class="tag-decoration">testing-v5</div><div id="tag30427" onclick="CopyToClipboard('tag30427');return false;" class="tag-decoration">testing-v5.1</div><div id="tag14205" onclick="CopyToClipboard('tag14205');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f806ed8c7c8bfadb7a20227f55fa33f0a842f3bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380901044" target="_blank">2026-08-20 14:34:00</a></td></tr>
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
