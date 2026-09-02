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
<tr><td><div id="tag18717" onclick="CopyToClipboard('tag18717');return false;" class="tag-decoration">nightly</div><div id="tag4487" onclick="CopyToClipboard('tag4487');return false;" class="tag-decoration">nightly-b42a408</div><div id="tag14273" onclick="CopyToClipboard('tag14273');return false;" class="tag-decoration">nightly-6d5901e953c0b5dc38f0d7ac8e5c5e75ec5e3a6b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b42a408c05565e2262f7144e9952134a3cb7ef74" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33690062454" target="_blank">2026-09-02 22:22:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13497" onclick="CopyToClipboard('tag13497');return false;" class="tag-decoration">release</div><div id="tag20070" onclick="CopyToClipboard('tag20070');return false;" class="tag-decoration">release-046c8b0</div><div id="tag25110" onclick="CopyToClipboard('tag25110');return false;" class="tag-decoration">release-5.1.2</div><div id="tag29762" onclick="CopyToClipboard('tag29762');return false;" class="tag-decoration">release-v5</div><div id="tag24883" onclick="CopyToClipboard('tag24883');return false;" class="tag-decoration">release-v5.1</div><div id="tag6517" onclick="CopyToClipboard('tag6517');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag4816" onclick="CopyToClipboard('tag4816');return false;" class="tag-decoration">testing</div><div id="tag31607" onclick="CopyToClipboard('tag31607');return false;" class="tag-decoration">testing-e63a5b3</div><div id="tag2024" onclick="CopyToClipboard('tag2024');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag42" onclick="CopyToClipboard('tag42');return false;" class="tag-decoration">testing-v5</div><div id="tag23413" onclick="CopyToClipboard('tag23413');return false;" class="tag-decoration">testing-v5.1</div><div id="tag11693" onclick="CopyToClipboard('tag11693');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63a5b3c1a38a713c4187abd18a1b561ce60f241" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605398475" target="_blank">2026-09-02 07:48:03</a></td></tr>
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
