---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3852" onclick="CopyToClipboard('tag3852');return false;" class="tag-decoration">release</div><div id="tag21128" onclick="CopyToClipboard('tag21128');return false;" class="tag-decoration">release-e6fdd60</div><div id="tag2283" onclick="CopyToClipboard('tag2283');return false;" class="tag-decoration">release-0.24.1178</div><div id="tag18376" onclick="CopyToClipboard('tag18376');return false;" class="tag-decoration">release-v0</div><div id="tag12249" onclick="CopyToClipboard('tag12249');return false;" class="tag-decoration">release-v0.24</div><div id="tag6823" onclick="CopyToClipboard('tag6823');return false;" class="tag-decoration">release-v0.24.1178</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e6fdd6091cc22ba0ac1529f9285cbae3d2d8f9f8" target="_blank">Version update: 0.24.1174 => 0.24.1178</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22271550986" target="_blank">2026-02-22 05:55:08</a></td></tr>
<tr><td><div id="tag11787" onclick="CopyToClipboard('tag11787');return false;" class="tag-decoration">testing</div><div id="tag31989" onclick="CopyToClipboard('tag31989');return false;" class="tag-decoration">testing-39713a8</div><div id="tag24955" onclick="CopyToClipboard('tag24955');return false;" class="tag-decoration">testing-0.24.1178</div><div id="tag20267" onclick="CopyToClipboard('tag20267');return false;" class="tag-decoration">testing-v0</div><div id="tag10764" onclick="CopyToClipboard('tag10764');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">testing-v0.24.1178</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/39713a86fbbb566655a84d1b3d554e84e955cbcd" target="_blank">Version update: 0.24.1174 => 0.24.1178</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22271551484" target="_blank">2026-02-22 05:55:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
