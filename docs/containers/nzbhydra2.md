---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3162" onclick="CopyToClipboard('tag3162');return false;" class="tag-decoration">release</div><div id="tag30788" onclick="CopyToClipboard('tag30788');return false;" class="tag-decoration">release-0fb6956</div><div id="tag15806" onclick="CopyToClipboard('tag15806');return false;" class="tag-decoration">release-8.9.0</div><div id="tag28815" onclick="CopyToClipboard('tag28815');return false;" class="tag-decoration">release-v8</div><div id="tag11505" onclick="CopyToClipboard('tag11505');return false;" class="tag-decoration">release-v8.9</div><div id="tag9859" onclick="CopyToClipboard('tag9859');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0fb69562628d34f8004e574e38a835f75d948078" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34356757276" target="_blank">2026-09-09 13:23:20</a></td></tr>
<tr><td><div id="tag7501" onclick="CopyToClipboard('tag7501');return false;" class="tag-decoration">testing</div><div id="tag2484" onclick="CopyToClipboard('tag2484');return false;" class="tag-decoration">testing-a228e16</div><div id="tag21739" onclick="CopyToClipboard('tag21739');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag2367" onclick="CopyToClipboard('tag2367');return false;" class="tag-decoration">testing-v8</div><div id="tag19852" onclick="CopyToClipboard('tag19852');return false;" class="tag-decoration">testing-v8.9</div><div id="tag26649" onclick="CopyToClipboard('tag26649');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a228e16b96391a8f79fd3ab6dd79332cb78e8a57" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34356764463" target="_blank">2026-09-09 13:23:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
